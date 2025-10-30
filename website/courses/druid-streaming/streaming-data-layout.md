---
sidebar_position: 3
title: Stream data layout and summarization
---

## Stream data layout

### Expert interview

<!-- Need video-->

### Learn more

To learn more, take a look at these resources:

Learn about segment [partitioning](https://druid.apache.org/docs/latest/ingestion/partitioning).
Find out more about the importance of [optimizing segment sizes](https://druid.apache.org/docs/latest/operations/segment-optimization).
Optimize segment sizes with [compaction](https://druid.apache.org/docs/latest/data-management/compaction).
Learn about overwriting existing data with [re-indexing](https://druid.apache.org/docs/latest/data-management/update#reindex).
Complete the [Apache® Druid Data Modelling](https://learn.imply.io/apache-druid-data-modeling) course.

### Exercises

As you may already know, data layout is critical for any database. Now, it’s time to see how streaming data is organized during ingestion and review the strategies available to improve and manage the layout over time.

Run through these notebooks from the [learn-druid](https://github.com/implydata/learn-druid) repository:

- Partitioning data at ingestion time [[local](http://localhost:8889/lab/tree/02-ingestion/07-partitioning-while-streaming.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/07-partitioning-while-streaming.ipynb)]
- Defragmenting and clustering data with compaction [[local](http://localhost:8889/lab/tree/05-operations/04-compaction-partitioning.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/05-operations/04-compaction-partitioning.ipynb)]

You may want to use your new knowledge to:

- Ingest data from one of your own streams and set up a suitable compaction routine.
- Analyze your source data. How many events occur per day? Per hour? Per minute? Try out different `segmentGranularity` settings to see what effect this has on your segment numbers and sizes.
- Review your queries. Which fields appear most often? Apply a sub-partition to the data and see what happens to the segment sizes and to your query performance.

## Stream summarisation and sketching

### Expert interview

<!-- Need video -->

### Learn more

Here are some additional resources for you to check out:

- Documentation on [Historicals](https://druid.apache.org/docs/latest/design/historical), and their role in query execution.
- Documentation on [rollup](https://druid.apache.org/docs/latest/ingestion/rollup).
- Documentation on [Apache DataSketches](https://druid.apache.org/docs/latest/development/extensions-core/datasketches-extension).

### Exercises

When your data arrives at speed, query needs to happen at speed!

As you've heard, sketching and aggregating your data, especially in high-volume, high-speed architectures with event hubs, are critical tools at your disposal.

Run through the "Using roll-up to GROUP BY your incoming data in real time, and to generate sketches" [[local](http://localhost:8889/lab/tree/02-ingestion/16-native-groupby-rollup.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/05-operations/04-compaction-partitioning.ipynb)] notebook from the [learn-druid](https://github.com/implydata/learn-druid) repository.

Here are some more things you might want to try:

- Try out different `queryGranularity` settings on one of your own streams. As you do, keep an eye on the segment size and numbers.
- Review your schemas and queries for opportunities to generate DataSketches to support COUNT DISTINCT operations. Create a second table to compare performance and flexibility for users.