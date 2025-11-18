---
sidebar_position: 4
title: Optimize segment layout and location
sidebar_label: Optimize segments
---

import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';

## Segments and infrastructure 

:::info
We're in the process of migrating this content. Check back soon.
:::

<!-- Need video -->

## Expert interview

:::info
We're in the process of migrating this content. Check back soon.
:::

<!-- Need video -->

## Layout

Segments in Druid are generated during ingestion and stored in Deep Storage. It's critical to optimize the size and number of these files with an understanding of the impact on query efficiency and on data management.

Open JupyterLab in your [learn-druid ](https://github.com/implydata/learn-druid)environment.

Work through the following notebooks:

- Batch partitioning essentials ([local](http://localhost:8889/lab/tree/02-ingestion/06-partitioning-data.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/06-partitioning-data.ipynb))
- Stream partitioning essentials ([local](http://localhost:8889/lab/tree/02-ingestion/07-partitioning-while-streaming.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/07-partitioning-while-streaming.ipynb))

With those completed, you should be able to set up your ingestion to produce different numbers and volumes of segment files, and have a sense of how those layouts impact query execution.

Learn more about tiering by following this series of notebooks. The first walks through general tiering, while the second walks through how to query data that has not been pre-fetched to Historicals.

- Historical data tiering ([local](http://localhost:8889/lab/tree/03-query/20-tiering-historicals.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/20-tiering-historicals.ipynb))
- Querying direct from deep storage ([local](http://localhost:8889/lab/tree/03-query/21-query-async-historical.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/21-query-async-historical.ipynb))

## Learn more

Before you complete this section, be sure to have looked at these docs pages to give you broader knowledge:

- [Partitioning](https://druid.apache.org/docs/latest/ingestion/partitioning)
- [Compaction](https://druid.apache.org/docs/latest/data-management/compaction)
- [Automatic Compaction](https://druid.apache.org/docs/latest/data-management/automatic-compaction)
- [Historical Data Tiering](https://druid.apache.org/docs/latest/operations/mixed-workloads#historical-tiering)
- [Segment Optimization](https://druid.apache.org/docs/latest/operations/segment-optimization)

Take a look at these videos and articles to deepen your understanding:

- [Optimizing Druid](https://youtu.be/hcJ2HKJHZHE) from Pinterest
- [Storing Data in Druid for Performance](https://youtu.be/zqcW5kP7fmI) from Imply
- [Powering Observability](https://youtu.be/WDv7nwJEKp0) from Confluent

## Tiering in action

:::info
We're in the process of migrating this content. Check back soon.
:::
<!--Need video -->