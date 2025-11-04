---
sidebar_position: 2
sidebar_label: Druid logs
title: Apache® Druid logs
---
import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';

## Druid logs - expert interview

<!--NEED VIDEO-->

## Exercises

Take time to look at the log files in Druid, familiarizing yourself with their location and contents, and the configuration that applies to them.

Run through these notebooks from the `learn-druid` repository.:

- The [notebook on Apache Druid logs](https://github.com/implydata/learn-druid/blob/main/notebooks/05-operations/01-logs-configuration.ipynb), where you'll see examples of how Druid uses Log4j and the contents of those logs.
- The [notebook on streaming and SQL-based ingestion logs](https://github.com/implydata/learn-druid/blob/main/notebooks/05-operations/02-logs-asynch.ipynb), which focuses on task logs.

Remember to take a look at the reference material at the end of each notebook. Some questions in the exam require you to have read the related pages, or at least to know where to get to them.

## Learn more

Equipped with what you have learned, you may consider it a good idea to:

- Look at and record the Log4j configuration in your running environment.
- Follow one of your own ingestion tasks through the logs to understand, in detail, what Druid is doing.
- Decide whether you will implement a solution to centralize logs for storage and analysis.
- Work out a meaningful retention policy for all your logs.
- Use a test environment to try out different configuration options.
- Determine a configuration management strategy that will allow you to centrally manage the log configurations of your Druid instances.

For extra depth and context, take a look at these resources:

- Read about [setting the query Id](https://druid.apache.org/docs/latest/querying/sql-query-context) in the query context parameters.
- Find out about [masking things like passwords](https://druid.apache.org/docs/latest/configuration/index.html#startup-logging) in log files.
- Watch the presentation [“Tales from Support”](https://youtu.be/8P_mLFY6EXA?t=1589) by Ben Krug and Bala Thiyagarajan of Imply.
- Check out [Druid Optimizations for Scaling Customer Facing Analytics](https://youtu.be/zkHXr-3GFJw?t=746) by Conviva.
