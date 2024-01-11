<!--
  ~ Licensed to the Apache Software Foundation (ASF) under one
  ~ or more contributor license agreements.  See the NOTICE file
  ~ distributed with this work for additional information
  ~ regarding copyright ownership.  The ASF licenses this file
  ~ to you under the Apache License, Version 2.0 (the
  ~ "License"); you may not use this file except in compliance
  ~ with the License.  You may obtain a copy of the License at
  ~
  ~   http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing,
  ~ software distributed under the License is distributed on an
  ~ "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  ~ KIND, either express or implied.  See the License for the
  ~ specific language governing permissions and limitations
  ~ under the License.
  -->

# Learn Druid

The "Learn Druid" repository contains many resources to help you learn and apply Apache Druid.

It contains:

* Jupyter Notebooks that guide you through query, ingestion, and data management with Apache Druid.
* A Docker Compose file to get you up and running with a learning lab.

## Pre-requisites

To use the "Learn Druid" Docker Compose, you need:

* Git or [Github Desktop](https://desktop.github.com/)
* [Docker Desktop](https://docs.docker.com/get-docker/) with Docker Compose
* A machine with at least 6 GiB of RAM.

     > Of course, more power is better.
     > The notebooks have been tested with the following resources available to docker: 6 CPUs, 8GB of RAM, and 1 GB swap.

## Quickstart

To get started quickly:

1. Clone this repository locally, if you have not already done so:
    
   ```bash
   git clone https://github.com/implydata/learn-druid
   ```

2. Navigate to the directory:

   ```bash
    cd learn-druid
   ```

> To refresh your local copy with the latest notebooks:
>
>   ```bash
>   git restore .
>   git pull
>   ```

3. Launch the "Learn Druid" Docker environment:

   ```bash
   docker compose --profile druid-jupyter up -d
   ```

   > The first time you lanch the environment, it can take a while to start all the services.

4. Navigate to Jupyter Lab in your browser:

     http://localhost:8889/lab

From there you can read the introduction or use Jupyter Lab to navigate the notebooks folder.

<!-- ToDo: when notebook gets an update, add a screen shot -->

## Components

The Learn Druid environment Docker Compose file includes the following services:

[**Jupyter Lab**](https://jupyter.org/): An interactive environment to run Jupyter Notebooks. The image for Jupyter used in the environment contains Python along with all the supporting libraries you need to run the notebooks.

* Jupyter Labs is exposed at:

  http://localhost:8889/

[**Apache Kafka**](https://kafka.apache.org/): Streaming service as a data source for Druid.

[**Imply Data Generator**](https://github.com/implydata/druid-datagenerator): A tool to generate sample data for Druid. It can produce either batch or streaming data.

[**Apache Druid**](https://druid.apache.org/): The currently released version of Apache Druid by default.

You can use the web console to monitor ingestion tasks, compare query results, and more. To learn about the Druid web console, see [Web console](https://druid.apache.org/docs/latest/operations/web-console).

*  The Druid web console is exposed at:

   http://localhost:8888

## Profiles

You can use the following Docker Compose profiles to start various combinations of the components based upon your specific needs.

Individual notebooks may prescribe a specific profile that you need to use.

### Jupyter only

Use this profile when you want to run the notebooks against an existing Apache Druid database. Use the `DRUID_HOST` parameter to set the Apache Druid host address.

To start Jupyter only:

   ```bash
  DRUID_HOST=[host address] docker compose --profile jupyter up -d
   ```

For example, if Druid is running on the local machine:

   ```bash
  DRUID_HOST=host.docker.internal docker compose --profile jupyter up -d
   ```

To stop Jupyter:

   ```bash
  docker compose --profile jupyter down
   ```

### Jupyter and Druid

Use this profile when you need to query data and do batch ingestion only.

To start Jupyter and Druid:

   ```bash
   docker compose --profile druid-jupyter up -d
   ```

To stop Jupyter and Druid:

   ```bash
   docker compose --profile druid-jupyter down
   ```

### All services

To start all services:

   ```bash
   docker compose --profile all-services up -d
   ```

To stop all services:

   ```bash
   docker compose --profile all-services down
   ```

## Feedback and help

For feedback and help, start a discussion in the [Discussions board](https://github.com/implydata/learn-druid/discussions) or make contact in the [docs and training channel](https://apachedruidworkspace.slack.com/archives/docs-and-training) in [Apache Druid Slack](https://druid.apache.org/community/).
