# Querying clickstream data

Clickstream UX often include [calendars](https://datavizcatalogue.com/methods/calendar.html), [timetables](https://datavizcatalogue.com/methods/timetable.html), and [line graphs](https://datavizcatalogue.com/methods/line_graph.html).

This requires GROUP BY on a time field, often scanning many millions of rows to create the resulting datasets.

* Use Druid's `__time` functions to intelligently return fewer rows than can fit onto a person's screen. Read about [SQL time functions](https://druid.apache.org/docs/latest/querying/sql-scalar#date-and-time-functions) and try the [notebook](../../03-query/07-functions-datetime.ipynb).
* Always use a time filter, giving careful consideration to the number of segments that will be scanned (influenced by `segmentGranularity`) and thus the number of threads required to complete the computation.
* Optimize your storage and processing speeds by establishing a minimum required time granularity for your UX. Read about ingestion-time [rollup](https://druid.apache.org/docs/latest/ingestion/rollup/) and, if you're using a streaming source, try the [notebook](../../02-ingestion/16-native-groupby-rollup.ipynb) on rollup with streaming.

Clickstream data often requires calculation of COUNT DISTINCT, for example on visitor identifiers.

* Learn about how Druid uses Apache Datasketches for automatic approximation by reading the [documentation](https://druid.apache.org/docs/latest/querying/sql-translation#approximations), trying the notebooks on [ranking](../../03-query/02-approx-ranking.ipynb), [count distinct](../../03-query/03-approx-count-distinct.ipynb), and [distribution](../../03-query/04-approx-distribution.ipynb), and watching this [video on approximation](https://youtu.be/fSWwJs1gCvQ?list=PLDZysOZKycN7MZvNxQk_6RbwSJqjSrsNR) in Druid.
* Consider using rollup to create datasketches from dimensions that you will use for approximation at ingestion time. Try the [notebook](02-ingestion/03-generating-sketches.ipynb) on generating sketches.

Set analysis is very common in Clickstream, sometimes using data that is high cardinality.

* Learn about the limitations of the interactive API's execution model on handling multiple subqueries for resolving sets in [this video](https://youtu.be/chnZmngXMsQ?list=PLDZysOZKycN7MZvNxQk_6RbwSJqjSrsNR). Play to the strengths of this API by using Thetasketches to perform approximate set analysis.
* Use and adequately resource the MSQ API for asynchronous queries for complex set operations that do not need to be interactive.

Druid is a database tuned for immutable, point-in-time event data where all dimension values are considered true at the point given in the primary timestamp. Sessions, on the other hand, are long lasting, often vaguely defined entities where not all values are known until the session ends - for example, the session length.

While it is possible to craft SQL to calculate a "session entity" with a database query, they tend to become complex, with multiple sub-queries. This demands that the correct processing engine be used, whether it is Apache Druid or not.

* Avoid queries with multiple JOIN and sub-query elements when using the interactive API.
   * Consider the standard practice of using a stream processor (e.g. Apache Flink) to emit a "sessions" event stream containing event-compliant, finished sessions. Apache Druid can consume from this quickly, and users can perform analysis of without wastefully engaging the database repeatedly.
   * If real-time session data is desired, test applying event architecture practices by emitting deltas to a "session_deltas" topic. Apache Druid can then consume from this topic, reconstituing the very latest session state over a period of time through a GROUP BY operation.
* Use the asynchronous MSQ API to calculate data offline, retrieving it directly or using it to populate another table.

Session journeys are often broken down into stages, beginning with when a visitor arrives and ending when they have achieved a goal. These stages are represented as funnels.

To solve for this problem, a database must count the number of visitors who passed through each stage in the funnel - and the SQL behind this can grow to be extremely gnarly and computationally expensive.

Sometimes it's imperitive that the UX receives sub-second query results - perhaps visitor demographic filters will be applied to the funnel interactively by end users, or an interactive time comparison is required. In this case, the interactive API needs to be used respectfully, meaning that JOIN and sub-query operations must be avoided.

When funnel stage membership is _implicitly_ in _time order_, here are some approaches to investigate:

* Use standard set analytics through [Thetasketches](https://druid.apache.org/docs/latest/querying/sql-scalar#theta-sketch-functions), replacing intersection, difference, and union subqueries with approximate operations. Try out the associated [notebook](03-query/03-approx-count-distinct.ipynb).
* Add dimensions, one for each funnel stage, containing a 1 or a 0 to indicate that a funnel stage / goal was achieved - e.g. "impression", "click", and "conversion". To calculate the funnel, execute a SUM. Consider, though, the impact that changing the funnel stages might have.
* Emit the final funnel stage achieved in your session data. A COUNT can then be taken, GROUP BY the last funnel stage, to give the data required to create the funnel. This is easier to adapt than fixed dimensions.
