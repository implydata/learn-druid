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

The "Learn Druid" repository contains all manner of resources to help you learn and apply [Apache Druid](https://druid.apache.org/)®.

It contains:

* [Jupyter Notebooks](notebooks) that guide you through query, ingestion, and data management with Apache Druid.
* A Docker Compose file to get you up and running with a learning lab.

Suggestions or comments? Call into the [discussions](https://github.com/implydata/learn-druid/discussions). Found a problem or want to request a notebook? Raise an [issue](https://github.com/implydata/learn-druid/issues). Want to contribute? Raise a [PR](https://github.com/implydata/learn-druid/pulls).

[Contributions](contributing.md) to this community resource are welcome! Contribute your own notebook on a topic that's not listed here, and check out the [issue](https://github.com/implydata/learn-druid/issues) list, where you'll find bugs and enhancement requests.

## Learn more

Come meet the friendly Apache Druid [community](https://druid.apache.org/community) if you have any questions about the functionality you see here.

Imply's courses on Apache Druid at [https://learn.imply.io](https://learn.imply.io) have additional commentary for these notebooks, and you can earn a certificate of completion.

If your team is just getting to know Druid, Imply also offer bookable [team tech talks](https://calendly.com/druidcommunity) on the basics of Apache Druid. And if you want to check whether Apache Druid is the right fit, or would like to get hints on the functionality you should look at, book one of Imply's [getting started with Druid](https://calendly.com/druidcommunity) meetings.

## Pre-requisites

To use the "Learn Druid" Docker Compose, you need:

* Git or [Github Desktop](https://desktop.github.com/)
* [Docker Desktop](https://docs.docker.com/get-docker/) with Docker Compose
* A machine with at least 6 GiB of RAM.

     > Of course, more power is better.
     > The notebooks have been tested with the following resources available to docker: 6 CPUs, 8GB of RAM, and 1 GB swap.

## Quickstart

To get started quickly:

1. Clone the repository:

   ```bash
   git clone https://github.com/implydata/learn-druid
   ```

2. Navigate to the directory:

   ```bash
    cd learn-druid
   ```

3. Launch the environment:

   ```bash
   docker compose --profile druid-jupyter up -d
   ```

   > The first time you launch the environment, it can take a while to start all the services.

4. Navigate to Jupyter Lab in your browser at `http://localhost:8889/lab`. <br/> From there you can read the introduction or use Jupyter Lab to navigate the notebooks folder.

5. When you're finished, stop all services:

```bash
docker compose --profile druid-jupyter down
```

Once you have cloned the repository, get the latest version as follows:

```bash
git restore .
git pull
```

While using the notebooks, monitor ingestion tasks, compare query results, and more in the [web console](https://druid.apache.org/docs/latest/operations/web-console) directly at `http://localhost:8888`.

## Profiles

Individual notebooks may state a specific compose profile that you need to use.

Specify the profile after the `--profile` parameter to the `docker compose` command. For example, to start with the `all-services` profile, use this command:

```bash
docker compose --profile all-services up -d
```

To stop all services:

```bash
docker compose --profile all-services down
```

To stop all services without keeping any data:

```bash
docker compose --profile all-services down -v
```

Run the notebooks against an existing Apache Druid database using the `DRUID_HOST` parameter and the `jupyter` profile.

```bash
DRUID_HOST=[host address] docker compose --profile jupyter up -d
```

When you have Druid running on the local machine, use `host.docker.internal` as the _host address_.

```bash
DRUID_HOST=host.docker.internal docker compose --profile jupyter up -d
```

## Components

The Learn Druid environment includes the following services:

[**Jupyter Lab**](https://jupyter.org/): An interactive environment to run Jupyter Notebooks. The image for Jupyter used in the environment contains Python along with all the supporting libraries you need to run the notebooks.

[**Apache Kafka**](https://kafka.apache.org/): Streaming service as a data source for Druid.

[**Imply Data Generator**](https://github.com/implydata/druid-datagenerator): A tool to generate sample data for Druid. It can produce either batch or streaming data.

[**Apache Druid**](https://druid.apache.org/): The currently released version of Apache Druid by default.

---

**This repository is not affiliated with, endorsed by, or otherwise associated with the Apache Software Foundation (ASF) or any of its projects.  Apache, Apache Druid, Druid, and the Druid logo are either registered trademarks or trademarks of ASF in the USA and other countries.**
