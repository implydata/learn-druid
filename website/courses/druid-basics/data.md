---
sidebar_position: 4
sidebar_label: Data in Druid
---
import YouTubePlayer from '@site/src/components/YouTubePlayer';

# Data in Druid

Watch the following video to learn about data in Apache Druid.

<!--TBD UPDATE FINAL VIDEO-->
<!--YouTubePlayer videoId="h7U_CsDTNBw" /-->

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

And here is the ingestion SQL for the third table.
You can paste this into the SQL query view on the console to create a new table named "wikipedia-2".


```sql
SELECT
 REPLACE INTO "wikipedia-2" OVERWRITE ALL
WITH "ext" AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}',
      '{"type":"json"}'
    )
  ) EXTEND ("isRobot" VARCHAR, "channel" VARCHAR, "timestamp" VARCHAR, "flags" VARCHAR, "isUnpatrolled" VARCHAR, "page" VARCHAR, "diffUrl" VARCHAR, "added" BIGINT, "comment" VARCHAR, "commentLength" BIGINT, "isNew" VARCHAR, "isMinor" VARCHAR, "delta" BIGINT, "isAnonymous" VARCHAR, "user" VARCHAR, "deltaBucket" BIGINT, "deleted" BIGINT, "namespace" VARCHAR, "cityName" VARCHAR, "countryName" VARCHAR, "regionIsoCode" VARCHAR, "metroCode" BIGINT, "countryIsoCode" VARCHAR, "regionName" VARCHAR)
)
SELECT
  TIME_FLOOR(TIME_PARSE("timestamp"),'PT10M') AS "__time",
  "isRobot",
  "isAnonymous",
  "channel",
  "regionIsoCode",
  "countryIsoCode",
  SUM("added") AS "added-keys",
  SUM("deleted") AS "deleted-keys",
  DS_HLL("user") AS "user-hll",
  MAX("commentLength") AS "comment-longest",
  COUNT(*) AS "count"
FROM "ext"
GROUP BY 1, 2, 3, 4, 5, 6
PARTITIONED BY HOUR
CLUSTERED BY "channel"
```

### Sample 4

This is the final query that you see in the demo.
It runs against the "wikipedia-2" table you just created.
Notice how the distinct count of the number of users is calculated using the APPROX_COUNT_DISTINCT_HLL function.

```sql
SELECT
  "__time",
  "regionIsoCode",
  APPROX_COUNT_DISTINCT_DS_HLL("user-hll") AS "users-approx",
  COUNT(DISTINCT "channel") AS "channels"
FROM "wikipedia-2"
WHERE TIME_IN_INTERVAL("__time",'2016-06-27/PT1H')
AND "isRobot" = FALSE
GROUP BY 1, 2
```

## Exercises

If you have run the Druid quickstart, why not use the data loader in the console to play with all the available example datasets.

- Try all of the datasets.
- See if you can work out how to apply a function to the data.
- Can you figure out how to apply a filter?
- Dig around to find the segments view. Can you see how these relate to the tables you're creating?

## Learn more

Refer to the following topics to learn more about Druid data concepts

- [Segments](https://druid.apache.org/docs/latest/design/segments.html)
- [Ingestion](https://druid.apache.org/docs/latest/ingestion/index.html)
- [Partitioning](https://druid.apache.org/docs/latest/ingestion/partitioning.html)
- [Rollup](https://druid.apache.org/docs/latest/ingestion/rollup.html)