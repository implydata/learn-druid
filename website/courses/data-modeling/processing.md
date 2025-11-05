---
sidebar_position: 3
title: Put processing in the right place
---
import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';


Watch the following expert interview for an to learn about schema design:

:::info
We're in the process of migrating this content. Check back soon.
:::

<!--TBD UPDATE FINAL VIDEO-->
<!-- YouTubePlayer videoId="h7U_CsDTNBw" /-->

## Exercises

Putting time into identifying the correct timestamp and the value of individual dimensions (attributes and measures) will pay dividends later on. Armed with your learn-druid environment, it's time to take a look at some notebooks that cover functionality you need to be familiar with as you go iterate through different table schemas.

The time functions in Druid are particularly important to grasp and understand. Every row in a table in Druid has a time column. It is distinct from all other dimensions that a row might contain, and represents the timestamp when some event in your data occurred. It's used at ingestion time to partition your data before it is distributed, and it's used at query time to plan queries and to parallelise them.

Open JupyterLab in your [learn-druid](https://github.com/implydata/learn-druid) environment.

Under the ingestion section, we recommend that you run through these notebooks:

- Batch ingestion ([local](http://localhost:8889/lab/tree/02-ingestion) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/02-batch-ingestion.ipynb)) - it covers the basics of ingestion, including how to specify the columns that you choose to ingest into your table.
- Data types ([local](http://localhost:8889/lab/workspaces/auto-s/tree/02-ingestion/04-table-datatypes.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/04-table-datatypes.ipynb)) - this will familiarise you with how data is stored inside a table.

Then it's time to dig into the timestamp - arguably the most important column in any table in Druid. In the query section, take time to run through this notebook:

- Datetime functions ([local](http://localhost:8889/lab/tree/03-query/07-functions-datetime.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/07-functions-datetime.ipynb))

You might also want to round out your knowledge by looking at the notebooks on NULL values ([local](http://localhost:8889/lab/tree/02-ingestion/09-generating-and-working-with-nulls.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/09-generating-and-working-with-nulls.ipynb)).

Deciding which incoming datetime column ends up being your primary timestamp in Druid is a critical part of your decision making as a data engineer working with Druid. When you're done with the notebooks, you may want to apply what you've learned about the date and time functions to some of your own data.

### Functions

As well as the usual suite of functions you can apply to your data at query time, Apache Druid allows you to transform your data at ingestion time. It's an important technique to remember as it can help you to speed up the response time for queries, front-loading common calculations to ingestion time.

Open JupyterLab in your [learn-druid](https://github.com/implydata/learn-druid) environment.

Work through the following notebooks in the query section:
- String functions ([local](http://localhost:8889/lab/tree/03-query/08-functions-strings.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/08-functions-strings.ipynb))
- The CASE function notebook ([local](http://localhost:8889/lab/tree/03-query/09-functions-case.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/09-functions-case.ipynb))
- IP address functions ([local](http://localhost:8889/lab/tree/03-query/10-functions-ip.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/10-functions-ip.ipynb))
- Window functions ([local](http://localhost:8889/lab/tree/03-query/13-functions-window.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/13-functions-window.ipynb))

And in the ingestion section:

- The notebook on nested columns ([local](http://localhost:8889/lab/tree/02-ingestion/05-working-with-nested-columns.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/05-working-with-nested-columns.ipynb))
- Arrays and UNNEST ([local](http://localhost:8889/lab/tree/02-ingestion/08-table-datatypes-arrays.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/08-table-datatypes-arrays.ipynb))

Once you've completed these notebooks, you should grasp not just what you can do with Druid functions, but your own options for front-loading calculations. And, with an eye on that timestamp column, the critical role that the time dimension plays in each and every query that you run against your Druid tables, and in each and every ingestion that you do into Druid.

### JOINs

No matter what database you use, JOIN operations are one of the most computationally expensive. Take time to walk through the following notebooks on JOIN operations in Druid, and to understand the special table type you'll find in Druid: a lookup table.

Open JupyterLab in your [learn-druid](https://github.com/implydata/learn-druid) environment.

Work through the following notebooks in the query section:

- JOIN operations ([local](http://localhost:8889/lab/tree/03-query/11-joins.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/11-joins.ipynb))
- Lookup tables ([local](http://localhost:8889/lab/tree/03-query/06-lookup-tables.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/06-lookup-tables.ipynb))
- Real-time lookup tables ([local](http://localhost:8889/lab/tree/03-query/18-lookup-tables-kafka.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/18-lookup-tables-kafka.ipynb))

When you've finished, make sure that you have an understanding of the difference between a standard, event-type table in Druid, and a key-value pair lookup table, and how you can use them at query time and ingestion time. You also need to be familiar with different JOIN operations that are available to you, again at ingestion time and at query time.

## Learn more: JSON-based ingestion

Remember that while batch, SQL-based ingestion is the focus of many of the notebooks you've used in this course, JSON-based ingestion is used for some sources, including Apache Kafka and Amazon Kinesis.

Make sure you familiarize yourself with the JSON-based equivalents of all the functions you covered in the notebooks.

- Setting the primary timestamp using [`timestampSpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#timestampspec) and truncating it using [`queryGranularity`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#granularityspec).
- Selecting dimensions to ingest (or to ignore) as part of the [`dimensionsSpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimensionsspec).
- Where to apply scalar functions and filters (WHERE) in the [`transformSpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#transformspec).
- When doing a [rollup](https://druid.apache.org/docs/latest/ingestion/rollup)-style ingestion (ie a GROUP BY), how to:
  - enable it in the [`granularitySpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#granularityspec) and
  - set the aggregates to emit in the [`metricsSpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#metricsspec).
- How to apply PARTITIONED BY and the various CLUSTERED BY options available in the [`partitionSpec`](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#granularityspec).

You do not need to carry out a JSON-based ingestion to pass this course, but you do need to know where to find them and to understand what they do.

You can see a native JSON-based ingestion in action in this notebook:

- Streaming ingestion with Kafka ([local](http://localhost:8889/lab/tree/02-ingestion/01-streaming-from-kafka.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/01-streaming-from-kafka.ipynb))