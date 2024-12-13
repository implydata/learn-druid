# Chicago Taxi Data - ingesting using INSERT

Below you'll find sample `INSERT` statements for the Chicago Taxi Data, starting with a basic statement, and advancing through different functionality. Each change applies one of the data modelling principles from the training course by Imply.

* [Apache Druid Ingestion and Data Modeling](https://learn.imply.io/apache-druid-ingestion-and-data-modeling)

Note that these scripts were built for basic auth to min.io - you will need to connect to your external data in the usual way.

It's also a good idea to ensure you've split up the incoming data. Then you can address the `EXTERN` to a few of the files at first to check that the ingestion works OK, and to check the effect that it has on query execution and patterns. Below, you will see that, because S3-compatible storage was being used, specific `uris` are used in the `EXTERN` rather than a prefix.

## Starting out

The dataset has two timestamps, so here we apply the [RADStack paper](http://static.druid.io/docs/radstack.pdf) principle strictly that event rows are "about when the event occured" by using the Trip End Timestamp as the __time field value. This requires a `COALESCE` on the `__time` because the `Trip End Timestamp` is not always present; we need to deal with the potential for `NULL` values.

```
REPLACE INTO "taxi_0_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"string"},{"name":"Trip Miles","type":"string"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"string"},{"name":"Tips","type":"string"},{"name":"Tolls","type":"string"},{"name":"Extras","type":"string"},{"name":"Trip Total","type":"string"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"string"},{"name":"Pickup Centroid Longitude","type":"string"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  )

SELECT
  COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) AS __time,
  "Trip ID",
  "Taxi ID",
  "Trip Start Timestamp",
  "Trip Seconds",
  "Trip Miles",
  "Pickup Census Tract",
  "Dropoff Census Tract",
  "Pickup Community Area",
  "Dropoff Community Area",
  Fare,
  Tips,
  Tolls,
  Extras,
  "Trip Total",
  "Payment Type",
  Company,
  "Pickup Centroid Latitude",
  "Pickup Centroid Longitude",
  "Pickup Centroid Location",
  "Dropoff Centroid Latitude",
  "Dropoff Centroid Longitude"
FROM ext
PARTITIONED BY ALL
```

## Principle 2 – transform early

Now we add some transformations.

* Applies AS for field names
* Calculates a fare percentage
* Calculates the dropoff coordinates and drops the other fields

```
REPLACE INTO "taxi_1_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"string"},{"name":"Trip Miles","type":"string"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"string"},{"name":"Tips","type":"string"},{"name":"Tolls","type":"string"},{"name":"Extras","type":"string"},{"name":"Trip Total","type":"string"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"string"},{"name":"Pickup Centroid Longitude","type":"string"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  )

SELECT
  COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) AS __time,
  "Trip ID" AS trip_id,
  "Taxi ID" AS taxi_id,
  "Trip Start Timestamp" AS __time_start,
  "Trip Seconds" AS trip_seconds,
  "Trip Miles" AS trip_miles,
  "Pickup Census Tract" AS trip_pickup_censusTract,
  "Dropoff Census Tract" AS trip_dropoff_censusTract,
  "Pickup Community Area" AS trip_pickup_communityArea,
  "Dropoff Community Area" AS trip_dropoff_communityArea,
  Fare AS fare,
  Tips AS fare_tips,
  (Tips / Fare) * 100 AS fare_tips_percentage,
  Tolls AS fare_tolls,
  Extras AS fare_extras,
  "Trip Total" AS fare_total,
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  "Pickup Centroid Latitude" AS "trip_pickup_lat",
  "Pickup Centroid Longitude" AS "trip_pickup_lon,
  "Pickup Centroid Location" AS trip_pickup_gps,
  "Dropoff Centroid Latitude" AS "trip_dropoff_lat",
  "Dropoff Centroid Longitude" AS "trip_dropoff_lon",
  CONCAT('POINT(',"Dropoff Centroid Longitude",' ',"Dropoff Centroid Latitude",')') AS trip_dropoff_gps
FROM ext
PARTITIONED BY ALL
```

## Principle 2 again - this time for lookups

Because the community area codes are settled, we can do the KV lookup early.

* JOINs to a lookup
* Corrects the data type on the lookup key to string

```
REPLACE INTO "taxi_2_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"string"},{"name":"Trip Miles","type":"string"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"string"},{"name":"Tips","type":"string"},{"name":"Tolls","type":"string"},{"name":"Extras","type":"string"},{"name":"Trip Total","type":"string"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"string"},{"name":"Pickup Centroid Longitude","type":"string"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  ),
areaLookup_pickup AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  ),
areaLookup_dropoff AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  )

SELECT
  COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) AS __time,
  "Trip ID" AS trip_id,
  "Taxi ID" AS taxi_id,
  "Trip Start Timestamp" AS __time_start,
  "Trip Seconds" AS trip_seconds,
  "Trip Miles" AS trip_miles,
  "Pickup Census Tract" AS trip_pickup_censusTract,
  "Dropoff Census Tract" AS trip_dropoff_censusTract,
  areaLookup_pickup.v AS "trip_pickup_area",
  areaLookup_dropoff.v AS "trip_dropoff_area",
  Fare AS fare,
  Tips AS fare_tips,
  (Tips / Fare) * 100 AS fare_tips_percentage,
  Tolls AS fare_tolls,
  Extras AS fare_extras,
  "Trip Total" AS fare_total,
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  "Pickup Centroid Latitude" AS "trip_pickup_lat",
  "Pickup Centroid Longitude" AS "trip_pickup_lon,
  "Pickup Centroid Location" AS trip_pickup_gps,
  "Dropoff Centroid Latitude" AS "trip_dropoff_lat",
  "Dropoff Centroid Longitude" AS "trip_dropoff_lon",
  CONCAT('POINT(',"Dropoff Centroid Longitude",' ',"Dropoff Centroid Latitude",')') AS trip_dropoff_gps
FROM ext
LEFT JOIN areaLookup_dropoff ON "Dropoff Community Area" = areaLookup_dropoff.k
LEFT JOIN areaLookup_pickup ON "Pickup Community Area" = areaLookup_pickup.k
PARTITIONED BY ALL
```

## Principle 3 - superfluous columns

Now there's quite a few columns we don't need either logically or through conversation with our imaginary web developer. Notice that this script also checks that the types are all good on the `EXTERN`.

* Checked incoming column types to make sure they are numeric when they need to be
* Removes superfluous columns (census tract, trip ID, start time, and the lat / long columns)
* Corrected the calculation of percentages to handle divide by zero

```
REPLACE INTO "taxi_3_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"long"},{"name":"Trip Miles","type":"long"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"long"},{"name":"Tips","type":"long"},{"name":"Tolls","type":"long"},{"name":"Extras","type":"long"},{"name":"Trip Total","type":"long"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"long"},{"name":"Pickup Centroid Longitude","type":"long"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  ),
areaLookup_pickup AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  ),
areaLookup_dropoff AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  )

SELECT
  COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) AS __time,
  "Taxi ID" AS taxi_id,
  "Trip Seconds" AS trip_seconds,
  "Trip Miles" AS trip_miles,
  areaLookup_pickup.v AS "trip_pickup_area",
  areaLookup_dropoff.v AS "trip_dropoff_area",
  Fare AS fare,
  Tips AS fare_tips,
  (CASE (Fare*Tips) WHEN 0 THEN 0 ELSE (Tips / Fare) * 100 END) AS fare_tips_percentage,
  Tolls AS fare_tolls,
  Extras AS fare_extras,
  "Trip Total" AS fare_total,
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  "Pickup Centroid Location" AS trip_pickup_gps,
  CONCAT('POINT(',"Dropoff Centroid Longitude",' ',"Dropoff Centroid Latitude",')') AS trip_dropoff_gps
FROM ext
LEFT JOIN areaLookup_dropoff ON "Dropoff Community Area" = areaLookup_dropoff.k
LEFT JOIN areaLookup_pickup ON "Pickup Community Area" = areaLookup_pickup.k
PARTITIONED BY ALL
```

## Principle 4 - superfluous rows

Turns out they want buckets of seconds taken - and that are only interested in trips over 5 minutes. So we apply some `WHERE` clauses to do that.

```
REPLACE INTO "taxi_4_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"long"},{"name":"Trip Miles","type":"long"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"long"},{"name":"Tips","type":"long"},{"name":"Tolls","type":"long"},{"name":"Extras","type":"long"},{"name":"Trip Total","type":"long"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"long"},{"name":"Pickup Centroid Longitude","type":"long"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  ),
areaLookup_pickup AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  ),
areaLookup_dropoff AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  )

SELECT
  COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) AS __time,
  "Taxi ID" AS taxi_id,
  ROUND("Trip Seconds"/1000) AS trip_length_bucket,
  "Trip Miles" AS trip_miles,
  areaLookup_pickup.v AS "trip_pickup_area",
  areaLookup_dropoff.v AS "trip_dropoff_area",
  Fare AS fare,
  Tips AS fare_tips,
  (CASE (Fare*Tips) WHEN 0 THEN 0 ELSE (Tips / Fare) * 100 END) AS fare_tips_percentage,
  Tolls AS fare_tolls,
  Extras AS fare_extras,
  "Trip Total" AS fare_total,
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  "Pickup Centroid Location" AS trip_pickup_gps,
  CONCAT('POINT(',"Dropoff Centroid Longitude",' ',"Dropoff Centroid Latitude",')') AS trip_dropoff_gps
FROM ext
LEFT JOIN areaLookup_dropoff ON "Dropoff Community Area" = areaLookup_dropoff.k
LEFT JOIN areaLookup_pickup ON "Pickup Community Area" = areaLookup_pickup.k
WHERE "Trip Seconds" > 300
PARTITIONED BY ALL
```

## Principle 5 - granularity and precision

Now we get to reduce the granularity for the intended graphical elements of the UI. We also create datasketches out of the high-cardinality columns: a) they would otherwise lower the roll-up ratio, and b) our imaginary users are fine with trend information and they're never gonna filter / sort by the Taxi Id or Trip Id.

* Added GROUP BY and converted a lot of measures into aggregated metrics of various types
* Added HLL for Taxi Id for approximate distinct count, and Trip Id back in with Theta for set operations.

```
REPLACE INTO "taxi_5_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"long"},{"name":"Trip Miles","type":"long"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"long"},{"name":"Tips","type":"long"},{"name":"Tolls","type":"long"},{"name":"Extras","type":"long"},{"name":"Trip Total","type":"long"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"long"},{"name":"Pickup Centroid Longitude","type":"long"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  ),
areaLookup_pickup AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  ),
areaLookup_dropoff AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  )

SELECT
  FLOOR(COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) TO HOUR) AS __time,
  ROUND("Trip Seconds"/1000) AS trip_length_bucket,
  areaLookup_pickup.v AS "trip_pickup_area",
  areaLookup_dropoff.v AS "trip_dropoff_area",
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  DS_HLL("Taxi ID") AS taxi_id_HLL,
  DS_HLL("Trip ID") AS trip_id_HLL,
  DS_THETA("Taxi ID") AS taxi_id_theta,
  SUM("Trip Miles") AS trip_miles_total,
  SUM(Fare) AS fare_total,
  MAX(Fare) AS fare_max,
  MIN(Fare) AS fare_min,
  SUM(Tips) AS fare_tips_total,
  SUM(Tolls) AS fare_tolls_total,
  SUM(Extras) AS fare_extras_total,
  SUM("Trip Total") AS fare_total_total
FROM ext
LEFT JOIN areaLookup_dropoff ON "Dropoff Community Area" = areaLookup_dropoff.k
LEFT JOIN areaLookup_pickup ON "Pickup Community Area" = areaLookup_pickup.k
WHERE "Trip Seconds" > 300
GROUP BY 1, 2, 3, 4, 5, 6
PARTITIONED BY ALL
```

## Principle 6 - Segment organization

Final principle, applying segment organisation.

In conversation with imaginary web developers, and looking at segment sizes and so on, the data is now `PARTITIONED BY MONTH`. And as payment type and the taxi company appear to be the most common filters during the prototype testing, these are what's used in `CLUSTERED BY`.

* Partitioned by MONTH to allow for month-over-month comparisons in parallel
* Clustered by commonly filtered dimensions

> In testing, the following version completed in _one quarter_ of
> the time that the original "starting out" version took to complete.

```
REPLACE INTO "taxi_6_sample" OVERWRITE ALL

WITH
ext AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3",
        "uris":[
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaaa.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaab.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaac.csv",
          "s3://sample-data/taxitrips/rowsplit-5k/part-aaad.csv"
          ],
        "properties":{"secretAccessKey":{"type":"default","password":"yourpass"},
        "accessKeyId":{"type":"default","password":"yourusername"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"Trip ID","type":"string"},{"name":"Taxi ID","type":"string"},{"name":"Trip Start Timestamp","type":"string"},{"name":"Trip End Timestamp","type":"string"},{"name":"Trip Seconds","type":"long"},{"name":"Trip Miles","type":"long"},{"name":"Pickup Census Tract","type":"string"},{"name":"Dropoff Census Tract","type":"string"},{"name":"Pickup Community Area","type":"string"},{"name":"Dropoff Community Area","type":"string"},{"name":"Fare","type":"long"},{"name":"Tips","type":"long"},{"name":"Tolls","type":"long"},{"name":"Extras","type":"long"},{"name":"Trip Total","type":"long"},{"name":"Payment Type","type":"string"},{"name":"Company","type":"string"},{"name":"Pickup Centroid Latitude","type":"long"},{"name":"Pickup Centroid Longitude","type":"long"},{"name":"Pickup Centroid Location","type":"string"},{"name":"Dropoff Centroid Latitude","type":"string"},{"name":"Dropoff Centroid Longitude","type":"string"},{"name":"Dropoff Centroid  Location","type":"string"}]'
      )
    )
  ),
areaLookup_pickup AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  ),
areaLookup_dropoff AS (
  SELECT *
  FROM TABLE(
    EXTERN(
      '{"type":"s3","uris":["s3://sample-data/taxitrips/taxiTrips-communityAreas.csv"],"properties":{"accessKeyId":{"type":"default","password":"yourusername"},"secretAccessKey":{"type":"default","password":"yourpass"}}}',
      '{"type":"csv","findColumnsFromHeader":true}',
      '[{"name":"k","type":"string"},{"name":"v","type":"string"}]'
      )
    )
  )

SELECT
  FLOOR(COALESCE(TIME_PARSE("Trip End Timestamp", 'MM/dd/yyyy hh:mm:ss a'), TIME_PARSE("Trip Start Timestamp", 'MM/dd/yyyy hh:mm:ss a')) TO HOUR) AS __time,
  ROUND("Trip Seconds"/1000) AS trip_length_bucket,
  areaLookup_pickup.v AS "trip_pickup_area",
  areaLookup_dropoff.v AS "trip_dropoff_area",
  "Payment Type" AS fare_paymentType,
  Company AS taxi_company,
  DS_HLL("Taxi ID") AS taxi_id_HLL,
  DS_HLL("Trip ID") AS trip_id_HLL,
  DS_THETA("Taxi ID") AS taxi_id_theta,
  SUM("Trip Miles") AS trip_miles_total,
  SUM(Fare) AS fare_total,
  MAX(Fare) AS fare_max,
  MIN(Fare) AS fare_min,
  SUM(Tips) AS fare_tips_total,
  SUM(Tolls) AS fare_tolls_total,
  SUM(Extras) AS fare_extras_total,
  SUM("Trip Total") AS fare_total_total
FROM ext
LEFT JOIN areaLookup_dropoff ON "Dropoff Community Area" = areaLookup_dropoff.k
LEFT JOIN areaLookup_pickup ON "Pickup Community Area" = areaLookup_pickup.k
WHERE "Trip Seconds" > 300
GROUP BY 1, 2, 3, 4, 5, 6
PARTITIONED BY MONTH
CLUSTERED BY fare_paymentType, taxi_company
```
