---
sidebar_position: 5
title: Summarise and sketch
---

## Expert interview

<!--Need video -->

## Exercises: summarized tables

Apache Druid is a speedy GROUP BY engine thanks to the way that it stores data and how it parallelizes query operations.

First off, run through the GROUP BY notebook on learn-druid to delve deeper into the not-so-obvious permutations of the GROUP BY statement in Apache Druid.

Open JupyterLab in your [learn-druid](https://github.com/implydata/learn-druid) environment.

Work through the GROUP BY ([local](http://localhost:8889/lab/tree/03-query/01-groupby.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/01-groupby.ipynb)) notebook in the query section.

But GROUP BY is not just useful at query time! You can also use GROUP BY at ingestion time to summarise your incoming data.

If you're working with streaming data, you may want to check out the notebook on rollup at ingestion time ([local](http://localhost:8889/lab/workspaces/auto-w/tree/02-ingestion/16-native-groupby-rollup.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/16-native-groupby-rollup.ipynb)).

Before you move on, take what you have learned in the notebook above and apply it to some of your own data. Use GROUP BY to summarise your data, applying a date and time function to truncate the primary timestamp, and adding aggregation functions to output metrics like COUNT and MAX.

Finally, be sure that you understand the relationship to "queryGranularity", "rollup", and "metricsSpec" in JSON-based ingestion as you've seen when using SQL-based ingestion.

## Approximation

<!--Need video-->

### Exercises

Apache Druid includes numerous query execution engines and functions that help you eke out the maximum performance for your queries. When you're ingesting or querying large amounts of data, it's especially important to know about these techniques.

There are several notebooks that you now need to complete to experience what these techniques are, and how they can be applied both at query time and as part of your ingestion.

Open JupyterLab in your [learn-druid](https://github.com/implydata/learn-druid)environment.

Work through the following notebooks in the query section:

- TopN approximation ([local](http://localhost:8889/lab/tree/03-query/02-approx-ranking.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/02-approx-ranking.ipynb))
- Approximate COUNT DISTINCT ([local](http://localhost:8889/lab/tree/03-query/03-approx-count-distinct.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/03-approx-count-distinct.ipynb)) with HyperLogLog and Theta sketches
- Approximate data distribution functions ([local](http://localhost:8889/lab/tree/03-query/04-approx-distribution.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/04-approx-distribution.ipynb)) with Quantiles sketches

Work through the sketch generation ([local](http://localhost:8889/lab/tree/02-ingestion/03-generating-sketches.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/02-ingestion/03-generating-sketches.ipynb)) notebook from the ingestion section to learn how to create sketches at ingestion time as part of a summarized table.

When you are done, you will know how to leverage Apache Datasketches inside Apache Druid, and will know how to switch between approximate and non-approximate modes of query execution. You will also see how to pre-load your tables with Apache Datasketches for greater efficiency.

## Tables

<!--Need video-->

## UNION ALL

Apache Druid enables you to UNION the results of queries in specific ways. This can help you to bring together different result sets into a single result set.

Open JupyterLab in your [learn-druid ](https://github.com/implydata/learn-druid)environment.

Work through the UNION notebook ([local](http://localhost:8889/lab/tree/03-query/05-union-operations.ipynb) | [source](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/05-union-operations.ipynb)) in the query section.

This notebook is important as it walks you through the types of UNION ALL operations that are possible in Druid, and helps you to understand where they can be applied.

## Learn more

To get you ready for the exam, take time to delve into the documentation. Especially remember to look at:

- The [Apache Datasketches](https://druid.apache.org/docs/latest/development/extensions-core/datasketches-extension) extension and the [functions](https://druid.apache.org/docs/latest/querying/sql-aggregations#sketch-functions) that are available for each.
- [TopN](https://druid.apache.org/docs/latest/querying/topnquery) queries.
- The [UNION ALL](https://druid.apache.org/docs/latest/querying/sql#union-all) operator.
- How to [roll up (summarize) data](https://druid.apache.org/docs/latest/ingestion/rollup) in native JSON-based ingestion (used in streaming), especially how to truncate the timestamp and where to specify the aggregates (metrics) that you want to produce.
- Both the [SQL](https://druid.apache.org/docs/latest/querying/sql-aggregations) and [native](https://druid.apache.org/docs/latest/querying/aggregations) aggregate functions that are available to you.