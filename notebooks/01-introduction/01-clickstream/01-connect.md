# Connect to clickstream data

Event hubs allow clickstream data to be collected and transported to Druid quickly, and is a very common implementation pattern.

* Learn about streaming ingestion and try the [notebook](../../02-ingestion/01-streaming-from-kafka.ipynb).
* Learn about [multi-topic Apache Kafka streaming ingestion](https://druid.apache.org/docs/latest/ingestion/kafka-ingestion#ingest-from-multiple-topics) and try the [notebook](../../02-ingestion/11-stream-from-multiple-topics.ipynb).

Very busy websites create very large volumes of data. When Druid’s ingestion throughput is too low, pressure builds up on the ingestion side, resulting in visitor actions not being available for query quickly enough.

* Monitor [ingestion lag metrics](https://druid.apache.org/docs/latest/operations/metrics/#ingestion-metrics).
* Partition the stream and balance with enough [ingestion tasks](https://druid.apache.org/docs/latest/ingestion/supervisor#io-configuration) using `ioConfig/taskCount`. Ideally, a number of event hub partitions that is a multiple of the number of task count.
* Check the balance of each incoming stream partition and, if necessary, force balance upstream.
* Understand the effect of [resetting supervisors](https://druid.apache.org/docs/latest/api-reference/supervisor-api#reset-a-supervisor).
* [Read about](https://druid.apache.org/docs/latest/ingestion/supervisor#tuning-configuration) automatic supervisor resets using `tuningConfig/resetOffsetAutomatically`.

---

[index](README.md) [next](02-transform.md) 

---