# Jupyter Notebook tutorials for Druid

<!-- This README and the tutorial-jupyter-index.md file in docs/tutorials share a lot of the same content.
If you make a change in one place, update the other too. -->

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

You can try out the Druid APIs using the Jupyter Notebook-based tutorials. These
tutorials provide snippets of Python code that you can use to run calls against
the Druid API to complete the tutorial.

## Prerequisites

Before starting the Jupyter-based tutorials, make sure you meet the requirements listed in this section.
The simplest way to get started is to use Docker. In this case, you only need to set up Docker Desktop.
For more information, see [Docker for Jupyter Notebook tutorials](https://druid.apache.org/docs/latest/tutorials/tutorial-jupyter-docker.html).

Otherwise, you need the following:
- An available Druid instance. You can use the local quickstart configuration
  described in [Quickstart](https://druid.apache.org/docs/latest/tutorials/index.html).
  The tutorials assume that you are using the quickstart, so no authentication or authorization
  is expected unless explicitly mentioned.
- Python 3.7 or later
- JupyterLab (recommended) or Jupyter Notebook running on a non-default port. By default, Druid
  and Jupyter both try to use port `8888`, so start Jupyter on a different port.
- The `requests` Python package
- The `druidapi` Python package

For setup instructions, see [Tutorial setup without using Docker](https://druid.apache.org/docs/latest/tutorials/tutorial-jupyter-docker.html#tutorial-setup-without-using-docker).
Individual tutorials may require additional Python packages, such as for visualization or streaming ingestion.

## Simple Druid API

The `druidapi` Python package is a REST API for Druid.
One of the notebooks shows how to use the Druid REST API. The others focus on other
topics and use a simple set of Python wrappers around the underlying REST API. The
wrappers reside in the `druidapi` package within this directory. While the package
can be used in any Python program, the key purpose, at present, is to support these
notebooks. See the [Introduction to the Druid Python API](01-druidapi-package-intro.ipynb)
for an overview of the Python API.

## Tutorials

If you run the [Docker for Jupyter Notebook tutorials](https://druid.apache.org/docs/latest/tutorials/tutorial-jupyter-docker.html), all the notebooks are included.

Otherwise, you can find the notebooks in the [apache/druid repo](
https://github.com/apache/druid/tree/master/examples/quickstart/jupyter-notebooks/).
You can either clone the repo or download the notebooks you want individually.

The links that follow are the raw GitHub URLs, so you can use them to download the
notebook directly, such as with `wget`, or manually through your web browser. Note
that if you save the file from your web browser, make sure to remove the `.txt` extension.

- [Introduction to the Druid REST API](../04-api/00-getting-started.ipynb) walks you through some of the
  basics related to the Druid REST API and several endpoints.
- [Introduction to the Druid Python API](01-druidapi-package-intro.ipynb) walks you through some of the
  basics related to the Druid API using the Python wrapper API.
- [Learn the basics of Druid SQL](../03-query/00-using-sql-with-druidapi.ipynb) introduces you to the unique aspects of Druid SQL with the primary focus on the SELECT statement.
- [Learn to use the Data Generator](./02-datagen-intro.ipynb) gets you started with streaming and batch file data generation for testing of any data schema.
- [Ingest and query data from Apache Kafka](../02-ingestion/01-streaming-from-kafka.ipynb) walks you through ingesting an event stream from Kafka.

## Contributing

If you build a Jupyter tutorial, you need to do a few things to add it to the docs
in addition to saving the notebook in this directory. The process requires two PRs to the repo.

For the first PR, do the following:

1. Depending on the goal of the notebook, you may want to clear the outputs from your notebook
   before you make the PR. You can use the following command:

   ```bash
   jupyter nbconvert --ClearOutputPreprocessor.enabled=True --inplace ./path/to/notebook/notebookName.ipynb
   ```
   
   This can also be done in Jupyter Notebook itself: `Kernel` &rarr; `Restart & Clear Output`

2. Update the list of [Tutorials](#tutorials) on this page adding the new notebook.
3. Create the PR as you normally would. 
