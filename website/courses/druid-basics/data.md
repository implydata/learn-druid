---
sidebar_position: 4
sidebar_label: Data in Druid
---
import WistiaVideo from '@site/src/components/WistiaVideo';

# Data in Druid

Watch the following video to learn about data in Apache Druid.

<!--TBD UPDATE FINAL VIDEO-->

<WistiaVideo videoId="yz0vrf2ilb" />

## Dog Cat Yellow

## Demo code samples

You can use the following code samples to replicate the demo in the video.

### Sample 1
After using the wizard to ingest the wikipedia data into the "wikipedia" table, you can run this simple GROUP BY query:

```sql
SELECT
  TIME_FLOOR("__time", 'PT10M') AS "bucket",
  MAX("commentLength") AS "comment-longest",
  AVG("commentLength") AS "comment-average",
  APPROX_COUNT_DISTINCT("user") AS "users-approx",
  COUNT(DISTINCT "channel") AS "channels"
FROM "wikipedia"
WHERE TIME_IN_INTERVAL("__time",'2016-06-27/PT1H')
AND "isRobot" = FALSE
GROUP BY 1  
```

### Sample 2

Here is the SQL for the query used on the second wikipedia ingestion:

```sql
SELECT
  TIME_FLOOR("__time", 'PT10M') AS "bucket",
  "regionIsoCode",
  MAX("commentLength") AS "comment-longest",
  AVG("commentLength") AS "comment-average",
  APPROX_COUNT_DISTINCT("user") AS "users-approx",
  COUNT(DISTINCT "channel") AS "channels"
FROM "wikipedia"
WHERE TIME_IN_INTERVAL("__time",'2016-06-27/PT2H')
AND "isRobot" = FALSE
GROUP BY 1, 2
```

This time we changed the time partitioning and clustering.
Notice that the  data includes the `regionIsoCode` dimension.
We added it to the clustering at ingestion time!
Notice, too, that the time filter now covers two hours: `PT2H`.
The partitioning change means that hour of data comes from one segment, and another hour comes from another segment.

### Sample 3


### Sample 4

## Learn more

Refer to the following topics to learn more about clustered Druid environments:

- [Clustered deployment](https://druid.apache.org/docs/latest/tutorials/cluster) for information on setting up a simple cluster.
- [High availability](https://druid.apache.org/docs/latest/operations/high-availability) for setup recommendations for high availability environments.





