# Contributing

As a resource for developers working with Apache Druid, committers welcome contributions from across the world!

## Build a notebook

Here are some general guidelines on making a notebook.

### Use the standard template

The [contributing](https://github.com/implydata/learn-druid/tree/main/notebooks/99-contributing) folder contains a notebook template as a starting point. You'll find boilerplate elements including:

* Setting the connection to Druid, Kafka, and the data generator.
* Starter elements for ingesting from example datas sets or the data generator.
* Clean-up elements, like dropping tables, stopping streaming ingestion, and halting data generator jobs.
* Re-usable code elements that other contributors have found useful.

And don't forget that the template itself is open to contribution!

### Raise a PR

When you have a notebook and you're ready for feedback, it's a good idea to raise a draft PR first. Feel free to use the comments section to ask for initial feedback, or drop into the docs channel in the official Apache Druid Slack channel.

And when it's ready to go, finalize your PR. Add reviewers, get formal feedback, make any necessary changes, etc. in the usual way.

## Good things to know...

### Test with a specific version of Apache Druid

Use the `DRUID_VERSION` environment variable to set the specific version of Druid that you would like to build.

The version is pulled from Imply's [Docker Hub](https://hub.docker.com/r/imply/druid/tags) repository, where multi-architecture builds of Apache Druid with necessary extensions and configurations are published.

   ```shell
   DRUID_VERSION=27.0.0 docker compose --profile all-services -d
   ```

Use the same route to run a locally-built Docker image by using the appropriate tag.

### Run automated tests on notebooks

Make sure that docker compose is down and all volumes have been deleted, then start tests with: 

   ```shell
   cd tests
   ./test-notebooks.sh
   ``` 

To test single notebook:

   ```shell
   cd tests
   ./test-notebooks.sh ../notebooks/<path to test notebook>
   ```
