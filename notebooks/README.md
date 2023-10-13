# Notebook index

> When viewing this file inside JupyterLab, right-click anywhere on the page and select "Show Markdown Preview".

### Introduction

The `01-introduction` folder contains notebooks that explain a little more about the learning environment and its components.

|Title|Description|Docker Profile|
|---|---|---|
|[Druid Python API](./01-introduction/01-druidapi-package-intro.ipynb)|Learn more about the Python wrapper used by the notebooks.|None|
|[Data Generator Server](./01-introduction/02-datagen-intro.ipynb)|Learn more about the included Data Generator.|`all-services`|

### Ingesting data

Visit the `02-ingestion` folder for notebooks focused on using JSON- and SQL-based (`INSERT` / `REPLACE`) ingestion.

|Title|Description|Docker Profile|
|---|---|---|
|[Ingest and query data from Apache Kafka](./02-ingestion/01-streaming-from-kafka.ipynb)|An introduction to streaming ingestion using Apache Kafka.|`all-services`|
|[Working with nested columns](./02-ingestion/02-working-with-nested-columns.ipynb)|Work through ingesting, querying, and transforming nested columns.|`druid-jupyter`|
|[Generating Apache Datasketches at ingestion time](./02-ingestion/03-sketchIngestion.ipynb)|Generate sketch objects to support approximate distinct count operations as part of ingestion.|`druid-jupyter`|

### Querying data

For tutorials focused on effective use of all manner of `SELECT` statements in Apache Druid, see the notebooks in `03-query`.

|Title|Description|Docker Profile|
|---|---|---|
|[Learn the basics of Druid SQL](./03-query/00-using-sql-with-druidapi.ipynb)|An introduction to the unique aspects of Druid SQL.|`druid-jupyter`|
|[Aggregating results by using GROUP BY](./03-query/01-groupby.ipynb)|Use GROUP BY in various forms to aggregate your data.|`druid-jupyter`|
|[Using TopN approximation in Druid queries](./03-query/02-approx-ranking.ipynb)|Understand Druid's default GROUP BY approximation, TopN.|`druid-jupyter`|
|[Counting distinct values](./03-query/03-approxCountDistinct.ipynb)|Work through approximate and accurate ways of counting unique occurences of data.|`druid-jupyter`|
|[Analyzing data distributions](./03-query/04-approxdataDistribution.ipynb)|Use approximation to estimate quantiles, ranks, and histograms.|`druid-jupyter`|
|[Using UNION ALL to address multiple tables in the same query](./03-query/05-UnionOperations.ipynb)|Work through using the two types of UNION ALL operation available in Druid.|`druid-jupyter`|
|[Enriching and updating data using lookup tables](./03-query/06-lookup-tables)|See how lookup tables can be used to enrich and update data in Druid tables|`druid-jupyter`|
|[Applying time functions](./03-query/07-functions-datetime.ipynb)|Using scalar functions against time data to transform, filter, and aggregate at ingestion and query time.|`druid-jupyter`|
|[Applying string functions](./03-query/08-functions-strings.ipynb)|See how different string functions can be used at ingestion and query time.|`druid-jupyter`|
