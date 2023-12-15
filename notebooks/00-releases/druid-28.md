# Apache Druid 28.0.0

Released in November 2023, Druid 28 includes a number standards compatibiility improvements in the [SQL dialect](https://druid.apache.org/docs/latest/querying/sql), to [Apache Kafka ingestion](https://druid.apache.org/docs/latest/development/extensions-core/kafka-ingestion), and opens the door to using data direct from [Deep Storage](https://druid.apache.org/docs/latest/design/deep-storage) through the MSQ engine.

Check out these notebooks, which were introduced or improved following the Druid 28 release.

* [SQL-compatible NULL](../02-ingestion/09-generating-and-working-with-nulls.ipynb)
* [Multi-topic Kafka ingestion](../02-ingestion/11-stream-from-multiple-topics.ipynb)
* [ARRAYS and UNNEST](../02-ingestion/08-table-datatypes-arrays)
* [Query from Deep Storage](../03-query/14-full-timeline-queries.ipynb)

These notebooks were added in support of features that are experimental. Remember to drop [into the community](https://druid.apache.org/community) to give your thoughts, findings, and feedback.

* [Window Functions (Experimental)](../03-query/13-query-functions-window.ipynb)