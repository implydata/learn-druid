---
sidebar_position: 5
sidebar_label: Parallelism in Druid
---
import YouTubePlayer from '@site/src/components/YouTubePlayer';

# Parallelism in Druid

Watch the following video to learn about parallelism in Apache Druid.

<!--TBD UPDATE FINAL VIDEO-->
<!--YouTubePlayer videoId="h7U_CsDTNBw" /-->

## Demo code sample

Here is the query that is featured in the demo video.
It uses FILTER (WHERE...) to limit the COUNT of records to one per day.
Note that, to use this query as is, you should ingest the flights data into a table called "example-flights".

```sql
SELECT
  COUNT(*) FILTER (WHERE TIME_IN_INTERVAL("__time", '2005-11-01/P1D')) AS "day-1",
  COUNT(*) FILTER (WHERE TIME_IN_INTERVAL("__time", '2005-11-02/P1D')) AS "day-2",
  COUNT(*) FILTER (WHERE TIME_IN_INTERVAL("__time", '2005-11-03/P1D')) AS "day-3"
FROM "example-flights"
WHERE "Reporting_Airline" = 'DL'
```

## Exercise

Try to adapt the flight records query to use a table that you've ingested yourself.
There are many more examples of Druid SQL in the [learn-druid repository](https://github.com/implydata/learn-druid).
If you'd like to see more, it's the  place to see what Druid can do.

## Learn more

Refer to the following resources to to learn more about the SQL dialect of Apache Druid, as well as detail on how interactive queries execute.

- [Druid SQL reference](https://druid.apache.org/docs/latest/querying/sql)
- [Query execution](https://druid.apache.org/docs/latest/querying/query-execution.html)

The [learn-druid repository](https://github.com/implydata/learn-druid) contains many examples of Druid SQL in action.
See [Using the Druid SQL API](https://github.com/implydata/learn-druid/blob/main/notebooks/03-query/12-query-api.ipynb) to get started with Druid SQL.

<!-- TBD this should be updated to point to the HTML notebooks when they're ready-->
