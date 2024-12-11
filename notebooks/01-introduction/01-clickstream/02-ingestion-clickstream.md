# Collecting clickstream data

Event hubs allow clickstream data to be collected and transported to Druid quickly.

* Learn about streaming ingestion and try the [notebook](../../02-ingestion/01-streaming-from-kafka.ipynb).
* Learn about [multi-topic Apache Kafka streaming ingestion](https://druid.apache.org/docs/latest/ingestion/kafka-ingestion#ingest-from-multiple-topics) and try the [notebook](../../02-ingestion/11-stream-from-multiple-topics.ipynb).

There could be many producers of data in one topic, and even multiple topics. When Druid’s ingestion throughput is too low, pressure builds up on the ingestion side, resulting in data not being available for query or - if ingestion doesn't keep up with the flow for too long - gaps in data.

* Monitor [ingestion lag metrics](https://druid.apache.org/docs/latest/operations/metrics/#ingestion-metrics).
* Partition the stream and balance with enough [ingestion tasks](https://druid.apache.org/docs/latest/ingestion/supervisor#io-configuration) using `ioConfig/taskCount`. Ideally, a number of event hub partitions that is a multiple of the number of task count.
* Check the balance of each incoming stream partition and, if necessary, force balance upstream.
* Understand the effect of [resetting supervisors](https://druid.apache.org/docs/latest/api-reference/supervisor-api#reset-a-supervisor).
* [Read about](https://druid.apache.org/docs/latest/ingestion/supervisor#tuning-configuration) automatic supervisor resets using `tuningConfig/resetOffsetAutomatically`.

With many thousands of producers all generating data across multiple networks comes increased likelihood that action events will arrive late or out of order.

* Read about [segment optimization](https://druid.apache.org/docs/latest/operations/segment-optimization) and use this to inform the selection of both your [primary timestamp](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#timestampspec) in `timestampSpec` and the [primary partitioning period](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#timestampspec) using `granularitySpec/segmentGranularity`.
* Learn about [compaction](https://druid.apache.org/docs/latest/data-management/compaction) and try the [notebook](../../05-operations/04-compaction-partitioning.ipynb).

Clickstream data can very often have a fluid schema - one of the objectives is to improve the experience upstream, so new attributes and measures can – and will – be added all the time to help analyse that experience.

* Plan change control for ingestion specifications.
* Plan ahead for data governance.
* Read about [schema evolution](https://druid.apache.org/docs/latest/data-management/schema-changes).
* Learn about [automatic schema detection](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimensionsspec), dimension inclusions and exclusions, and try out the [notebook](../../02-ingestion/15-native-dimensions.ipynb).

Clickstream events often include entity dimensions that need to be parsed to make it useful to end users. While this can be done at query time, the most performant work is the work you don’t do at all.

* Learn about [native ingestion-time functions](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#transformspec) available through the `transformSpec` and try out the [notebook](../../02-ingestion/13-native-transforms.ipynb) - consider whether some functions destined for query-time could be applied at ingestion-time, either to new columns or replacing existing ones.
* Consider which of the functions are valuable to downstream systems other than Druid, and could be applied upstream.

Clickstream data often contains numeric identifiers. These are often the basis of filtering and grouping queries.

* Consider transforming numeric identifiers into strings with bitmap indexes in Druid by using `type` in your list of [dimension objects](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimension-objects).
* Read about [secondary partitions](https://druid.apache.org/docs/latest/ingestion/partitioning#secondary-partitioning) and try the notebook on [applying secondary partitioning using compaction](../../05-operations/04-compaction-partitioning.ipynb).
* Read about how Druid [sorts data](https://druid.apache.org/docs/latest/ingestion/partitioning#sorting) inside segments and test whether an explicit order in your `dimensions` list improves query performance.