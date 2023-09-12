# Notebook index

Welcome to the Learn Druid notebooks.

This page contains an index of notebooks available, as well as an index by topic.

> Right-click anywhere on the page and select "Show Markdown Preview" to view this page when inside JupyterLab.

### Introduction

The `01-introduction` folder contains notebooks that explain a little more about the learning environment and its components.

|Title|Description|Docker Profile|
|---|---|---|
|[Learn the Druid Python API](./01-introduction/01-druidapi-package-intro.ipynb)|Learn more about the Python wrapper used by the notebooks.|None|
|[Data Generator Server](./01-introduction/02-datagen-intro.ipynb)|Learn more about the included Data Generator.|`all-services`|

### Ingesting data

Visit the `02-ingestion` folder for notebooks focused on using JSON- and SQL-based (`INSERT` / `REPLACE`) ingestion.

|Title|Description|Docker Profile|
|---|---|---|
|[Ingest and query data from Apache Kafka](./02-ingestion/01-streaming-from-kafka.ipynb)|An introduction to streaming ingestion using Apache Kafka.|`all-services`|
|[Working with nested columns](./02-ingestion/02-working-with-nested-columns.ipynb)|Work through ingesting, querying, and transforming nested columns.|`druid-jupyter`|

### Querying data

For tutorials focused on effective use of all manner of `SELECT` statements in Apache Druid, see the notebooks in `03-query`.

|Title|Description|Docker Profile|
|---|---|---|
|[Learn the basics of Druid SQL](./03-query/00-using-sql-with-druidapi.ipynb)|An introduction to the unique aspects of Druid SQL.|`druid-jupyter`|
|[Using TopN approximation in Druid queries](./03-query/02-approx-ranking.ipynb)|Understand Druid's default GROUP BY approximation, TopN.|`druid-jupyter`|
