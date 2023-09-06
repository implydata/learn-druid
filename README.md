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

The Learn Druid project contains a set of Jupyter Notebooks to help you learn Apache Druid. Also included is a Docker Compose file that launches Jupyter Lab, Druid, Kafka, and other services to help you get started quickly.

## Pre-requisites

To use the Docker Compose environment, you need:

* Git
* Docker Desktop with Docker Compose
* A machine with at least 6 GiB of RAM.
     > Of course, more power is better.
     > The notebooks have been tested with the following resources available to docker: 6 of 8 cpus,  8.5 GB of RAM, and 1 GB swap.

## Quickstart

To get started quickly:

1. Clone this git repo:
    
   ```bash
   git clone https://github.com/implydata/learn-druid
   ```

2. Navigate to the repo directory:

   ```bash
    cd learn-druid
   ```

3. Launch the "Learn Druid" environoment:

   ```bash
   docker compose --profile all-services up -d
   ```

   > The first time you lanch the environment, it can take a while to start all the services.

4. Navigate to Jupyter Lab in your browser:
     http://localhost:8889/lab/tree/0-START-HERE.ipynb

From there you can read the introduction or use Jupyter Lab to navigate the notebooks folder.

<!-- ToDo: when notebook gets an update, add a screen shot -->

## Components

The Learn Druid environment includes the following services defined within the Docker Compose file:

**Jupyter Lab**: An interactive environment to run Jupyter Notebooks. The image for Jupyter used in the environment contains Python along with all the supporting libraries you need to run the notebooks.

**Apache Kafka**: Streaming service as a data source for Druid.

**Imply Data Generator**: A tool to generate sample data for Druid. It can produce either batch or streaming data.

**Apache Druid**: The currently released version of Apache Druid by default.

## Profiles

You can use the following Docker Compose profiles to start various combinations of the services based upon your specific needs.

### All services

This is an easy default option if you're not sure what services you'll need. It is required for notebooks that use Kafka.

To start all services:

   ```bash
   docker compose --profile all-services up -d
   ```

To stop all services:

   ```bash
   docker compose --profile all-services down
   ```

### Jupyter and Druid

If you're not using streaming ingestion, this is a good option.

To start Jupyter and Druid:

   ```bash
   docker compose --profile druid-jupyter up -d
   ```


To stop all services:

   ```bash
   docker compose --profile druid-jupyter down
   ```

### Start Jupyter only

If you want to run the notebooks against a Druid instance not in the Learn Druid environment, you can run Jupyter by itself. In this case, pass the Druid host ad an environment variable. For example, if Druid is running on the local machine:

To start Jupyter only:

   ```bash
  DRUID_HOST=host.docker.internal docker compose --profile jupyter up -d
   ```

To stop Jupyter:

   ```bash
  docker compose --profile jupyter down
   ```

## Druid web console

The Docker Compose environment exposes the Druid web console at:
http://localhost:8888.

You can use the web console to monitor ingestion tasks, compare query results, and more. To learn about the Druid web console, see [Web console](https://druid.apache.org/docs/latest/operations/web-console).

## Feedback and help

For feedback and help, start a discussion in the [docs and training channel](https://apachedruidworkspace.slack.com/archives/docs-and-training) in Apache Druid Slack.