---
sidebar_position: 2
---
import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';

# Design a good schema

Watch the following video for an to learn about schema design:

<!--TBD UPDATE FINAL VIDEO-->
<!-- YouTubePlayer videoId="h7U_CsDTNBw" /-->

## Exercises

Putting time into identifying the correct timestamp and the value of individual dimensions (attributes and measures) will pay dividends later on. Armed with your learn-druid environment, it's time to take a look at some notebooks that cover functionality you need to be familiar with as you go iterate through different table schemas.

The time functions in Druid are particularly important to grasp and understand. Every row in a table in Druid has a time column. It is distinct from all other dimensions that a row might contain, and represents the timestamp when some event in your data occurred. It's used at ingestion time to partition your data before it is distributed, and it's used at query time to plan queries and to parallelise them.

Open JupyterLab in your learn-druid environment.
Under the ingestion section, we recommend that you run through these notebooks:
Batch ingestion (local | source) - it covers the basics of ingestion, including how to specify the columns that you choose to ingest into your table.
Data types (local | source) - this will familiarise you with how data is stored inside a table.
Then it's time to dig into the timestamp - arguably the most important column in any table in Druid. In the query section, take time to run through this notebook:
Datetime functions (local | source)
You might also want to round out your knowledge by looking at the notebooks on NULL values (local | source).

Deciding which incoming datetime column ends up being your primary timestamp in Druid is a critical part of your decision making as a data engineer working with Druid. When you're done with the notebooks, you may want to apply what you've learned about the date and time functions to some of your own data.


