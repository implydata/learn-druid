---
sidebar_position: 2
---
import Link from '@docusaurus/Link';
import styles from '../../../website/src/pages';
import YouTubePlayer from '@site/src/components/YouTubePlayer';

# Design a good schema

Watch the following expert interview for an to learn about schema design:

<!--TBD UPDATE FINAL VIDEO-->
<!-- YouTubePlayer videoId="h7U_CsDTNBw" /-->

## Exercises

Putting time into identifying the correct timestamp and the value of individual dimensions (attributes and measures) will pay dividends later on. Armed with your learn-druid environment, it's time to take a look at some notebooks that cover functionality you need to be familiar with as you go iterate through different table schemas.

### Time functions

The time functions in Druid are particularly important to grasp and understand:
- Every row in a table in Druid has a time column.
- The time column is distinct from all other dimensions that a row might contain
- It represents the timestamp when an event in your data occurred.
- It's used at ingestion time to partition your data before it is distributed, and it's used at query time to plan queries and to parallelise them.

1. Open JupyterLab in your learn-druid environment.
2. Under the ingestion section, we recommend that you run through these notebooks:
    <!--TBD LINK NOTEBOOKS-->
    - Batch ingestion (local | source) - it covers the basics of ingestion, including how to specify the columns that you choose to ingest into your table.
    - Data types (local | source) - this will familiarise you with how data is stored inside a table.
    - Datetime functions (local | source) to learn how to work with the time column, arguably the most important column in any table in Druid. In the query section, take time to run through this notebook:
    - NULL values (local | source) toround out your knowledge.

Deciding which incoming datetime column to be your timestamp in Druid is a critical part of your role as a data engineer working with Druid.
When you've finished the notebooks, you may want to apply what you've learned about the date and time functions to some of your own data.






