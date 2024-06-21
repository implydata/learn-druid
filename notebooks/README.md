# Notebook index

This index provides a list of notebooks for [ingesting](#ingestion), [querying](#query), and [operating](#operations) Apache Druid.

Visit the index of [notebooks by release](./00-releases/) for quick access to new and updated notebooks following different releases of Apache Druid.

There are also [dedicated notebooks](#contributing) that dive more into the components used to create this learning environment.

## Ingestion

Visit the `02-ingestion` folder for notebooks focused on using JSON- and SQL-based (`INSERT` / `REPLACE`) ingestion.

|Title|Description|Docker Profile|
|---|---|---|
|[Ingest and query data from Apache Kafka](./02-ingestion/01-streaming-from-kafka.ipynb)|An introduction to streaming ingestion using Apache Kafka.|`all-services`|
|[Batch data ingestion](./02-ingestion/02-batch-ingestion.ipynb)|Work through of SQL based batch ingestion.|`druid-jupyter`|
|[Generating Apache Datasketches at ingestion time](./02-ingestion/03-generating-sketches.ipynb)|Generate sketch objects to support approximate distinct count operations as part of ingestion.|`druid-jupyter`|
|[Druid data types](./02-ingestion/04-table-datatypes.ipynb)|Work through several examples of table schemas with different underlying data types, as well as methods for converting between them.|`druid-jupyter`|
|[Druid data types - arrays](./02-ingestion/08-table-datatypes-arrays.ipynb)|Ingesting, manipulating, and generating arrays.|`druid-jupyter`|
|[Working with nested columns](./02-ingestion/05-working-with-nested-columns.ipynb)|Work through ingesting, querying, and transforming nested columns.|`druid-jupyter`|
|[Primary and secondary partitioning in batch ingestion](./02-ingestion/06-partitioning-data.ipynb)|Use PARTITIONED BY and CLUSTERED BY to optimize query performance.|`druid-jupyter`|
|[Stream Ingestion and Compaction for Performance](./02-ingestion/07-partitioning-while-streaming.ipynb)|Understand how ingestion optimizes streaming throughput, the fragmentation it causes, and the compaction that solves it.|`all-services`|
|[Generating and working with NULL values](./02-ingestion/09-generating-and-working-with-nulls.ipynb)|Examples of how to treat incoming data to generate NULL values, and work with them using scalar functions, aggregations, and arrays.|`druid-jupyter`|
|[Updates, Deletes and Upserts in Druid](./02-ingestion/10-updating-data.ipynb)|Examples of how to apply changes to data in Druid, including updates, deletes and upsert logic.|`druid-jupyter`|
|[Multi-topic Kafka ingestion](./02-ingestion/11-stream-from-multiple-topics.ipynb)|A walk through of automatic topic detection for streaming ingestion.|`all-services`|
|[SQL-compatible NULL](./02-ingestion/09-generating-and-working-with-nulls.ipynb)|Apache Druid now implements standard SQL NULL handling. This notebook walks through working with NULLs during ingestion and query.|`druid-jupyter`|
|[ARRAYS and UNNEST](./02-ingestion/08-table-datatypes-arrays.ipynb)|Ingesting, creating, and manipulating ARRAYs and the UNNEST operator.|`druid-jupyter`|
|[Ingest and query spatial dimensions](./02-ingestion/12-spatial-dimensions.ipynb)|Ingest spatial dimensions and use rectangular, circular, and polygon filters to query.|`druid-jupyter`|

## Query

For tutorials focused on effective use of all manner of `SELECT` statements in Apache Druid, see the notebooks in `03-query`.

|Title|Description|Docker Profile|
|---|---|---|
|[Learn the basics of Druid SQL](./03-query/00-using-sql-with-druidapi.ipynb)|An introduction to the unique aspects of Druid SQL.|`druid-jupyter`|
|[Learn the basics of the SQL API](./03-query/12-query-api.ipynb)|See examples of getting results from the Druid SQL API directly.|`druid-jupyter`|
|[Aggregating results by using GROUP BY](./03-query/01-groupby.ipynb)|Use GROUP BY in various forms to aggregate your data.|`druid-jupyter`|
|[Using TopN approximation in Druid queries](./03-query/02-approx-ranking.ipynb)|Understand Druid's default GROUP BY approximation, TopN.|`druid-jupyter`|
|[Counting distinct values](./03-query/03-approx-count-distinct.ipynb)|Work through approximate and accurate ways of counting unique occurences of data.|`druid-jupyter`|
|[Analyzing data distributions](./03-query/04-approx-distribution.ipynb)|Use approximation to estimate quantiles, ranks, and histograms.|`druid-jupyter`|
|[Using UNION ALL to address multiple tables in the same query](./03-query/05-union-operations.ipynb)|Work through using the two types of UNION ALL operation available in Druid.|`druid-jupyter`|
|[Enriching and updating data using lookup tables](./03-query/06-lookup-tables.ipynb)|See how lookup tables can be used to enrich and update data in Druid tables|`druid-jupyter`|
|[Applying time functions](./03-query/07-functions-datetime.ipynb)|Using scalar functions against time data to transform, filter, and aggregate at ingestion and query time.|`druid-jupyter`|
|[Applying string functions](./03-query/08-functions-strings.ipynb)|See how different string functions can be used at ingestion and query time.|`druid-jupyter`|
|[Using the CASE function](./03-query/09-functions-case.ipynb)|Examples of using the two forms of CASE function available in Druid SQL.|`druid-jupyter`|
|[Using IPv4 functions](./03-query/10-functions-ip.ipynb)|A short notebook on IPv4 functions in Druid SQL.|`druid-jupyter`|
|[Using joins effectively in Druid](./03-query/11-joins.ipynb)|A full review of all join strategies available in Druid with examples and performance comparisons.|`druid-jupyter`|
|[Window functions (Experimental)](./03-query/13-query-functions-window.ipynb)|An introduction to Window functions which are a new experimental feature in Druid SQL.|`druid-jupyter`|
|[Query from Deep Storage](./03-query/14-full-timeline-queries.ipynb)|Query from Deep Storage has been enhanced to also view real-time segments making it capable of spanning the whole timeline.|`all-services`| 
|[PIVOT and UNPIVOT functions](./03-query/15-pivot-unpivot.ipynb)|Use PIVOT to convert row values into columns. Use UNPIVOT to convert column values into rows.|`druid-jupyter`| 

## Operations

The `05-operations` folder contains notebooks related to on-going administration and operation of the Apache Druid database.

|Title|Description|Docker Profile|
|---|---|---|
|[Apache Druid logging](./05-operations/01-logs-configuration.ipynb)|Walk through configuration options for log files.|`jupyter`|
|[Streaming and SQL-based ingestion logs](./05-operations/02-logs-asynch.ipynb)|A notebook focused on task logs.|`jupyter`|
|[Apache Druid metrics](./05-operations/03-metrics-configuration.ipynb)|An overview of metrics available from Apache Druid.|`jupyter`|

## Contributing

The `99-contributing` folder contains notebooks that explain a little more about the learning environment and its components.

|Title|Description|Docker Profile|
|---|---|---|
|[Druid Python API](./99-contributing/01-druidapi-package-intro.ipynb)|Learn more about the Python wrapper used by the notebooks.|None|
|[Data Generator Server](./99-contributing/02-datagen-intro.ipynb)|Learn more about the included Data Generator.|`all-services`|