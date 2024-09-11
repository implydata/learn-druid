# Notebook index

This index provides a list of notebooks for [ingesting](#ingestion), [querying](#query), and [operating](#operations) Apache Druid.

Visit the index of [notebooks by release](./00-releases/) for quick access to new and updated notebooks following different releases of Apache Druid.

* [Ingestion](#ingestion)
* [Query](#query)
* [Operations](#operations)

There are also [dedicated notebooks](#contributing) that dive more into the components used to create this learning environment.

## Ingestion

Visit the `02-ingestion` folder for notebooks focused on using streaming and batch ingestion.

### General

|Title|Description|Docker Profile|
|---|---|---|
|[Druid data types](./02-ingestion/04-table-datatypes.ipynb)|Work through several examples of table schemas with different underlying data types, as well as methods for converting between them.|`druid-jupyter`|
|[Arrays](./02-ingestion/08-table-datatypes-arrays.ipynb)|Ingesting, creating, and manipulating ARRAYs and the UNNEST operator.|`druid-jupyter`|
|[Spatial](./02-ingestion/12-spatial-dimensions.ipynb)|Ingest spatial dimensions and use rectangular, circular, and polygon filters to query.|`druid-jupyter`|
|[Nested objects](./02-ingestion/05-working-with-nested-columns.ipynb)|Work through ingesting, querying, and transforming nested columns.|`druid-jupyter`|
|[NULL](./02-ingestion/09-generating-and-working-with-nulls.ipynb)|Examples of how to treat incoming data to generate NULL values, and work with them using scalar functions, aggregations, and arrays.|`druid-jupyter`|
|[UPDATE, DELETE and UPSERT](./02-ingestion/10-updating-data.ipynb)|Examples of how to apply changes to data in Druid, including updates, deletes and upsert logic.|`druid-jupyter`|

### Streaming

|Title|Description|Docker Profile|
|---|---|---|
|[Introduction to streaming ingestion](./02-ingestion/01-streaming-from-kafka.ipynb)|An introduction to streaming ingestion using Apache Kafka.|`all-services`|
|[Defining data schemas](./02-ingestion/15-native-dimensions.ipynb)|Manual and automatic schema detection for incoming data streams.|`all-services`|
|[Transforming incoming rows](./02-ingestion/13-native-transforms.ipynb)|Examples of transforming data in real-time as it arrives.|`all-services`|
|[Filtering incoming rows](./02-ingestion/14-native-filters.ipynb)|Work through examples of using filters on incoming data streams.|`all-services`|
|[Rollup](./02-ingestion/16-native-groupby-rollup.ipynb)|Applying a GROUP BY at ingestion time and emit SUM, MAX, MIN, and other aggregates, including Apache Datasketches.|`all-services`|
|[Streaming segment generation and care](./02-ingestion/07-partitioning-while-streaming.ipynb)|Scale up a streaming ingestion, see the impact on segments, and try out a compaction job.|`all-services`|
|[Multi-topic Kafka ingestion](./02-ingestion/11-stream-from-multiple-topics.ipynb)|A walk through of automatic topic detection for streaming ingestion.|`all-services`|

### Batch

|Title|Description|Docker Profile|
|---|---|---|
|[Introduction to batch ingestion](./02-ingestion/02-batch-ingestion.ipynb)|Work through of SQL based batch ingestion.|`druid-jupyter`|
|[Primary and secondary partitioning in batch ingestion](./02-ingestion/06-partitioning-data.ipynb)|Use PARTITIONED BY and CLUSTERED BY to optimize query performance.|`druid-jupyter`|
|[Generating Apache Datasketches at ingestion time](./02-ingestion/03-generating-sketches.ipynb)|Generate sketch objects to support approximate distinct count operations as part of ingestion.|`druid-jupyter`|

## Query

For tutorials focused on effective use of all manner of `SELECT` statements in Apache Druid, see the notebooks in `03-query`.

|Title|Description|Docker Profile|
|---|---|---|
|[Learn the basics of Druid SQL](./03-query/00-using-sql-with-druidapi.ipynb)|An introduction to the unique aspects of Druid SQL.|`druid-jupyter`|
|[GROUP BY](./03-query/01-groupby.ipynb)|Use GROUP BY in various forms to aggregate your data.|`druid-jupyter`|
|[COUNT DISTINCT](./03-query/03-approx-count-distinct.ipynb)|Work through approximate and accurate ways of counting unique occurences of data.|`druid-jupyter`|
|[SQL API](./03-query/12-query-api.ipynb)|See examples of getting results from the Druid SQL API directly.|`druid-jupyter`|
|[TopN approximation](./03-query/02-approx-ranking.ipynb)|Understand the approximation used for GROUP BY queries with ORDER BY and LIMIT.|`druid-jupyter`|
|[Analyzing data distributions](./03-query/04-approx-distribution.ipynb)|Use approximation to estimate quantiles, ranks, and histograms.|`druid-jupyter`|
|[UNION ALL](./03-query/05-union-operations.ipynb)|Work through using the two types of UNION ALL operation available in Druid.|`druid-jupyter`|
|[TABLE(APPEND)](./03-query/17-table-append-operations.ipynb)|Work through using the TABLE(APPEND) operation available in Druid to combine multiple tables for queries.|`druid-jupyter`|
|[Lookup tables](./03-query/06-lookup-tables.ipynb)|See how LOOKUP tables can be used to enrich and update data|`druid-jupyter`|
|[Lookup tables - Kafka](./03-query/18-lookup-tables-kafka.ipynb)|Walk through how to set up a LOOKUP reading from an Apache Kafka topic.|`druid-jupyter`|
|[Time functions](./03-query/07-functions-datetime.ipynb)|Using scalar functions against time data to transform, filter, and aggregate at ingestion and query time.|`druid-jupyter`|
|[String functions](./03-query/08-functions-strings.ipynb)|See how different string functions can be used at ingestion and query time.|`druid-jupyter`|
|[IPv4 functions](./03-query/10-functions-ip.ipynb)|A short notebook on IPv4 functions in Druid SQL.|`druid-jupyter`|
|[CASE](./03-query/09-functions-case.ipynb)|Examples of using the two forms of CASE function available in Druid SQL.|`druid-jupyter`|
|[Window functions (Experimental)](./03-query/13-query-functions-window.ipynb)|An introduction to Window functions which are a new experimental feature in Druid SQL.|`druid-jupyter`|
|[JOIN](./03-query/11-joins.ipynb)|A full review of all join strategies available in Druid with examples and performance comparisons.|`druid-jupyter`|
|[PIVOT and UNPIVOT](./03-query/15-pivot-unpivot.ipynb)|Use PIVOT to convert row values into columns. Use UNPIVOT to convert column values into rows.|`druid-jupyter`|
|[Query from Deep Storage](./03-query/14-sync-async-queries.ipynb)|Use asynchronous queries to access data directly from deep storage.|`all-services`|
|[Exporting data (experimental)](./03-query/16-export-msq-query.ipynb)|Walk through using INSERT INTO EXTERN to export query results.|`druid-jupyter`|
|[Retention load rules](./03-query/20-tiering-historicals.ipynb)|Using load rules to prescribe up how much data is cached on historicals, including when used with multiple tiers.|`druid-jupyter-tiered-hist`|

## Operations

The `05-operations` folder contains notebooks related to on-going administration and operation of the Apache Druid database.

|Title|Description|Docker Profile|
|---|---|---|
|[Apache Druid logging](./05-operations/01-logs-configuration.ipynb)|Walk through configuration options for log files.|`jupyter`|
|[Streaming and SQL-based ingestion logs](./05-operations/02-logs-asynch.ipynb)|A notebook focused on task logs.|`jupyter`|
|[Apache Druid metrics](./05-operations/03-metrics-configuration.ipynb)|An overview of metrics available from Apache Druid.|`jupyter`|
|[Compaction - partitioning](./05-operations/04-compaction-partitioning.ipynb)|A walkthrough of compaction tasks being used to change the PARTITIONED BY and CLUSTERED BY of an existing table, especially important for streaming use cases.|`druid-jupyter`|
|[Compaction - data and schema](./05-operations/05-compaction-data.ipynb)|Examples of compaction jobs being used to remove dimensions, filter out data, and apply a new level of aggregation.|`druid-jupyter`|

## Contributing

The `99-contributing` folder contains notebooks that explain a little more about the learning environment and its components.

|Title|Description|Docker Profile|
|---|---|---|
|[Druid Python API](./99-contributing/01-druidapi-package-intro.ipynb)|Learn more about the Python wrapper used by the notebooks.|None|
|[Data generator - files](./99-contributing/11-datagen-batch.ipynb)|Use the data generator to create batch-ingestable files.|`all-services`|
|[Data generator - streams](./99-contributing/12-datagen-streaming.ipynb)|Send data to Kafka directly from the data generator.|`all-services`|
|[Data generator profiles](./99-contributing/13-datagen-configurations.ipynb)|Learn how to use different data generator simulation profiles.|`all-services`|
|[Boilerplate data generator ingestions](./99-contributing/14-datagen-boilerplate-ingest.ipynb)|Example SQL and native ingestion specifications for grabbing data generator sample data.|`all-services`|
