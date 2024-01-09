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

||Title|Description|Docker Profile|
|---|---|---|---|
||[Ingest and query data from Apache Kafka](./02-ingestion/01-streaming-from-kafka.ipynb)|An introduction to streaming ingestion using Apache Kafka.|`all-services`|
||[Batch data ingestion](./02-ingestion/02-batch-ingestion.ipynb)|Work through of SQL based batch ingestion.|`druid-jupyter`|
||[Generating Apache Datasketches at ingestion time](./02-ingestion/03-generating-sketches.ipynb)|Generate sketch objects to support approximate distinct count operations as part of ingestion.|`druid-jupyter`|
||[Druid data types](./02-ingestion/04-table-datatypes.ipynb)|Work through several examples of table schemas with different underlying data types, as well as methods for converting between them.|`druid-jupyter`|
||[Druid data types - arrays](./02-ingestion/08-table-datatypes-arrays)|Ingesting, manipulating, and generating arrays.|`druid-jupyter`|
||[Working with nested columns](./02-ingestion/05-working-with-nested-columns.ipynb)|Work through ingesting, querying, and transforming nested columns.|`druid-jupyter`|
||[Primary and secondary partitioning in batch ingestion](./02-ingestion/06-partitioning-data.ipynb)|Use PARTITIONED BY and CLUSTERED BY to optimize query performance.|`druid-jupyter`|
||[Stream Ingestion and Compaction for Performance](./02-ingestion/07-partitioning-while-streaming.ipynb)|Understand how ingestion optimizes streaming throughput, the fragmentation it causes, and the compaction that solves it.|`all-services`|
|NEW|[Generating and working with NULL values](./02-ingestion/09-generating-and-working-with-nulls.ipynb)|Apache Druid now implements standard SQL NULL handling. This notebook walks through working with NULLs during ingestion and query.|
|NEW|[Multi-topic Kafka ingestion](./02-ingestion/11-stream-from-multiple-topics.ipynb)|A walk through of automatic topic detection for streaming ingestion.|`all-services`|
|NEW|[ARRAYS and UNNEST](./02-ingestion/08-table-datatypes-arrays)|ARRAYs graduate with both ingestion and query features and the UNNEST operator.|`druid-jupyter`|

### Querying data

For tutorials focused on effective use of all manner of `SELECT` statements in Apache Druid, see the notebooks in `03-query`.

||Title|Description|Docker Profile|
|---|---|---|---|
||[Learn the basics of Druid SQL](./03-query/00-using-sql-with-druidapi.ipynb)|An introduction to the unique aspects of Druid SQL.|`druid-jupyter`|
||[Learn the basics of the SQL API](./03-query/12-query-api.ipynb)|See examples of getting results from the Druid SQL API directly.|`druid-jupyter`|
||[Aggregating results by using GROUP BY](./03-query/01-groupby.ipynb)|Use GROUP BY in various forms to aggregate your data.|`druid-jupyter`|
||[Using TopN approximation in Druid queries](./03-query/02-approx-ranking.ipynb)|Understand Druid's default GROUP BY approximation, TopN.|`druid-jupyter`|
||[Counting distinct values](./03-query/03-approx-count-distinct.ipynb)|Work through approximate and accurate ways of counting unique occurences of data.|`druid-jupyter`|
||[Analyzing data distributions](./03-query/04-approx-distribution.ipynb)|Use approximation to estimate quantiles, ranks, and histograms.|`druid-jupyter`|
||[Using UNION ALL to address multiple tables in the same query](./03-query/05-union-operations.ipynb)|Work through using the two types of UNION ALL operation available in Druid.|`druid-jupyter`|
||[Enriching and updating data using lookup tables](./03-query/06-lookup-tables.ipynb)|See how lookup tables can be used to enrich and update data in Druid tables|`druid-jupyter`|
||[Applying time functions](./03-query/07-functions-datetime.ipynb)|Using scalar functions against time data to transform, filter, and aggregate at ingestion and query time.|`druid-jupyter`|
||[Applying string functions](./03-query/08-functions-strings.ipynb)|See how different string functions can be used at ingestion and query time.|`druid-jupyter`|
||[Using the CASE function](./03-query/09-functions-case.ipynb)|Examples of using the two forms of CASE function available in Druid SQL.|`druid-jupyter`|
||[Using IPv4 functions](./03-query/10-functions-ip.ipynb)|A short notebook on IPv4 functions in Druid SQL.|`druid-jupyter`|
|NEW|[Using joins effectively in Druid](./03-query/11-joins.ipynb)|A full review of all join strategies available in Druid with examples and performance comparisons.|`druid-jupyter`|
|NEW|[Window functions (Experimental)](./03-query/13-window-functions.ipynb)|An introduction to Window functions which are a new experimental feature in Druid SQL.|`druid-jupyter`|
|NEW|[Async query from Deep Storage includes real-time data](./03-query/14-async-queries-deep-storage.ipynb)|Query from Deep Storage has been enhanced to also view real-time segments making it capable of spanning the whole timeline.|`all-services`| 
