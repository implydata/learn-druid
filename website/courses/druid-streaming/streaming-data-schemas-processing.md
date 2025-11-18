---
sidebar_position: 2
title: Streaming data sources and schemas
---
import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';

## Streaming data sources 

### Expert interview

:::info
We're in the process of migrating this content. Check back soon.
:::

### Learn more

Take a look at these resources to learn more:

- Check the latest [available streaming types](https://druid.apache.org/docs/latest/ingestion/#streaming).
- Dig into the [supervisor spec](https://druid.apache.org/docs/latest/ingestion/supervisor), particularly the `ioConfig` section.
  - [Apache® Kafka supervisor spec specifics](https://druid.apache.org/docs/latest/ingestion/kafka-ingestion) - including how to ingest from [multiple topics](https://druid.apache.org/docs/latest/ingestion/kafka-ingestion/#ingest-from-multiple-topics).
  - [Amazon Kinesis supervisor spec specifics](https://druid.apache.org/docs/latest/ingestion/kinesis-ingestion).
- Review the [data server configuration](https://druid.apache.org/docs/latest/configuration/#data-server) options - notice druid.worker.capacity for each running Middle Manager.
- Read more about the [Apache Druid autoscaler](https://druid.apache.org/docs/latest/ingestion/supervisor#task-autoscaler).

### Exercises

The ingestion specification contains the `dataSchema`, `ioConfig`, and `tuningConfig` components. These components determine how Druid connects to, interprets, and writes data into a table.

Now it's time to turn to the [learn-druid](https://github.com/implydata/learn-druid) repository of notebooks. These notebooks contain useful reference material, so even if you don't run them in the provided Docker image, it's worth looking at them in the source repository.

To start a streaming ingestion job using a supervisor, check out the following notebook:

Quickstart for streaming with Druid [[local](http://localhost:8889/lab/tree/02-ingestion/01-streaming-from-kafka.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/01-streaming-from-kafka.ipynb)]

Druid can ingest data from multiple streams into the same table simultaneously. To see this in action, try the following notebook with sample data:

Multi-topic Kafka ingestion in Druid [[local](http://localhost:8889/lab/tree/02-ingestion/11-stream-from-multiple-topics.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/11-stream-from-multiple-topics.ipynb)]

Equipped with what you have learned, why not spin up a [Quickstart](https://druid.apache.org/docs/latest/tutorials/tutorial-kafka) of your own. Try to connect to your own Amazon Kinesis or Apache Kafka-compatible source and run some simple queries on the data as it arrives.

## Streaming data schema

### Expert interview

:::info
We're in the process of migrating this content. Check back soon.
:::
<!--need video -->

### Learn more

To learn more, take a look at these resources:

- [Druid table schemas](https://druid.apache.org/docs/latest/ingestion/schema-model), noting how the primary timestamp is used.
- Understand strategies for adding [secondary timestamps](https://druid.apache.org/docs/latest/ingestion/schema-design#secondary-timestamps).
- Read about [segments](https://druid.apache.org/docs/latest/design/segments), including the optimizations that Druid applies automatically.
- Consult the documentation on [dimension specs](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimensionsspec).
Read about strategies for [schema changes](https://druid.apache.org/docs/latest/data-management/schema-changes).

### Exercises

The `dataSchema` component of an ingestion specification defines how Druid parses data and configures the resulting schema.

Define the schema of the data to add to the table manually or turn on automatic schema detection. To see automatic and manual schema definition in a JSON ingestion specification, check out the "Defining table schemas in native Ingestion" notebook in the [learn-druid repository](https://github.com/implydata/learn-druid) [[local](http://localhost:8889/lab/tree/02-ingestion/15-native-dimensions.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/15-native-dimensions.ipynb)].

You may want to use your new knowledge to:

- Read from your own stream, experimenting with both manual and automatic schema detection.
- Sample your own data to identify different timestamps and run experiments to see how Druid partitions the data.