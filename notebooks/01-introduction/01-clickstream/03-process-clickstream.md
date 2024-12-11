## Enriching clickstream data

In all that you do, focus on the specific end user experience that you are trying to build. Create tables in the right way that balance the goal of high-speed, interactive querying from Druid, and the timeliness and flexibility of calculations.

Clickstream events often contain data that technical users and machines understand but business users do not.

* Read about [key-value lookup tables](https://druid.apache.org/docs/latest/querying/datasource#lookup).
* Learn about the [query-time](https://druid.apache.org/docs/latest/querying/math-expr#string-functions) `LOOKUP` SQL-function.
* Read about real-time [Apache Kafka key-value lookup tables](https://druid.apache.org/docs/latest/querying/kafka-extraction-namespace) and try the notebook.
* Consider front-loading lookups using the native `lookup` [string function](https://druid.apache.org/docs/latest/querying/math-expr#string-functions) at ingestion time.

Avoid including low-value rows from the source system. When a number of sites are all running on the same server, for example, you may only need actions on a specific host. Or perhaps you are building a UI for security operations who only need 500 errors.  Carefully consider whether a table needs to contain _all_ action events, or whether only specific actions are needed, such as conversions.

* Use filters in the `transformSpec` to front-load `WHERE` operations, reducing storage cost and increasing query performance.
* Consider applying filters upstream, reducing Druid ingestion infrastructure requirements, especially when filters begin to throw away more than 25% of rows.
