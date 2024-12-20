# Transforming clickstream data

Clickstream data often contains numeric identifiers. These are often the basis of filtering and grouping queries.

* Consider transforming numeric identifiers into strings with bitmap indexes in Druid by using `type` in your list of [dimension objects](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimension-objects).

Clickstream events often contain data that technical users and machines understand but business users do not.

* Read about [key-value lookup tables](https://druid.apache.org/docs/latest/querying/datasource#lookup).
* Learn about the [query-time](https://druid.apache.org/docs/latest/querying/math-expr#string-functions) `LOOKUP` SQL-function.
* Read about real-time [Apache Kafka key-value lookup tables](https://druid.apache.org/docs/latest/querying/kafka-extraction-namespace) and try the notebook.
* Consider front-loading lookups using the native `lookup` [string function](https://druid.apache.org/docs/latest/querying/math-expr#string-functions) at ingestion time.

Avoid including low-value rows from the source system. When a number of sites are all running on the same server, for example, you may only need actions on a specific host. Or perhaps you are building a UI for security operations who only need 500 errors.  Carefully consider whether a table needs to contain _all_ action events, or whether only specific actions are needed, such as conversions.

* Use filters in the `transformSpec` to front-load `WHERE` operations, reducing storage cost and increasing query performance.
* Consider applying filters upstream, reducing Druid ingestion infrastructure requirements, especially when filters begin to throw away more than 25% of rows.

Clickstream events often include entity dimensions that need to be parsed to make it useful to end users. While this can be done at query time, the most performant work is the work you don’t do at all.

* Learn about [native ingestion-time functions](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#transformspec) available through the `transformSpec` and try out the [notebook](../../02-ingestion/13-native-transforms.ipynb) - consider whether some functions destined for query-time could be applied at ingestion-time, either to new columns or replacing existing ones.
* Consider which of the functions are valuable to downstream systems other than Druid, and could be applied upstream.

Clickstream data can be particularly granular and noisy. Optimize your storage and processing speeds by establishing a minimum required time granularity for your UX, and consider emitting aggregated versions of dimension values rather than raw. You might do this for your main table, or as an additional table.

* Read about ingestion-time [rollup](https://druid.apache.org/docs/latest/ingestion/rollup/) and, if you're using a streaming source, try the [notebook](../../02-ingestion/16-native-groupby-rollup.ipynb) on rollup with streaming.

COUNT DISTINCT operations are very common in clickstream. Provide a speed boost to Druid's approximate query results by utilizing Druid's support for embedded Apache Datasketches created during rollup.

* Try the [notebook](02-ingestion/03-generating-sketches.ipynb) on generating sketches.

---

[back](01-connect.md) [index](README.md) [next](03-optimize.md) 

---