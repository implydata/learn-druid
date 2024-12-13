# Chicago Taxi Data

* [What is it?](#what-is-it)
* [Ingest](01-ingestion-taxidata.md) the data

## What is it?

Contains a volume of taxi data from the City of Chicago's transportation department.

See [https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew](https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew) for the metadata.

Download the data set from:

* [https://data.cityofchicago.org/api/views/wrvz-psew/rows.csv?accessType=DOWNLOAD](https://data.cityofchicago.org/api/views/wrvz-psew/rows.csv?accessType=DOWNLOAD)

## Treatment

Note that you may need to split the CSV files up using a command like this, which will create files of `-l` size out of the `splitme.csv` file.

```bash
#!/bin/bash
echo Splitting splitme.csv
echo Generating header...
head -n 1 splitme.csv > header.csv
echo Removing old splits...
rm part-*.csv
rm part-*
echo Splitting files...
split -a 4 -l 500000 splitme.csv part-
echo Creating new CSV files...
for i in part-*
do
  echo Working on $i...
  cp header.csv working.csv
  cat "$i" >> working.csv
  mv working.csv "$i.csv"
  rm "$i"
done
echo Done.
```

> __NB__ The script above creates a double-header in the first CSV. Remove it in the usual way to prevent ingestion errors.

## TABLE Datasources

### Timestamps

The data contains two timestamps that you can use for `__time`:

 * `Trip Start Timestamp`
 * `Trip End Timestamp`

Both are in the format `MM/dd/yyyy HH:mm:ss aa`.

### Dimensions

Attributes describe the taxi:

* Taxi Id
* Company

And the journey:

* Payment Type
* Dropoff Census Tract
* Pickup Census Tract
* Dropoff Community Area
* Pickup Community Area

### Measures

Some measures for each trip are financial:

* Fare
* Extras
* Tips
* Tolls
* Trip Total

And others are about the trip itself:

* Trip Miles
* Trip Seconds

Ingest all the measures as `float` - all the rest can be kept as `string`.

## LOOKUP Datasources

Here is a `lookup` map for the community area codes.

```json
{
  "type": "map",
  "map": {
    "1": "ROGERS PARK",
    "2": "WEST RIDGE",
    "3": "UPTOWN",
    "4": "LINCOLN SQUARE",
    "5": "NORTH CENTER",
    "6": "LAKE VIEW",
    "7": "LINCOLN PARK",
    "8": "NEAR NORTH SIDE",
    "9": "EDISON PARK",
    "10": "NORWOOD PARK",
    "11": "JEFFERSON PARK",
    "12": "FOREST GLEN",
    "13": "NORTH PARK",
    "14": "ALBANY PARK",
    "15": "PORTAGE PARK",
    "16": "IRVING PARK",
    "17": "DUNNING",
    "18": "MONTCLARE",
    "19": "BELMONT CRAGIN",
    "20": "HERMOSA",
    "21": "AVONDALE",
    "22": "LOGAN SQUARE",
    "23": "HUMBOLDT PARK",
    "24": "WEST TOWN",
    "25": "AUSTIN",
    "26": "WEST GARFIELD PARK",
    "27": "EAST GARFIELD PARK",
    "28": "NEAR WEST SIDE",
    "29": "NORTH LAWNDALE",
    "30": "SOUTH LAWNDALE",
    "31": "LOWER WEST SIDE",
    "32": "LOOP",
    "33": "NEAR SOUTH SIDE",
    "34": "ARMOUR SQUARE",
    "35": "DOUGLAS",
    "36": "OAKLAND",
    "37": "FULLER PARK",
    "38": "GRAND BOULEVARD",
    "39": "KENWOOD",
    "40": "WASHINGTON PARK",
    "41": "HYDE PARK",
    "42": "WOODLAWN",
    "43": "SOUTH SHORE",
    "44": "CHATHAM",
    "45": "AVALON PARK",
    "46": "SOUTH CHICAGO",
    "47": "BURNSIDE",
    "48": "CALUMET HEIGHTS",
    "49": "ROSELAND",
    "50": "PULLMAN",
    "51": "SOUTH DEERING",
    "52": "EAST SIDE",
    "53": "WEST PULLMAN",
    "54": "RIVERDALE",
    "55": "HEGEWISCH",
    "56": "GARFIELD RIDGE",
    "57": "ARCHER HEIGHTS",
    "58": "BRIGHTON PARK",
    "59": "MCKINLEY PARK",
    "60": "BRIDGEPORT",
    "61": "NEW CITY",
    "62": "WEST ELSDON",
    "63": "GAGE PARK",
    "64": "CLEARING",
    "65": "WEST LAWN",
    "66": "CHICAGO LAWN",
    "67": "WEST ENGLEWOOD",
    "68": "ENGLEWOOD",
    "69": "GREATER GRAND CROSSING",
    "70": "ASHBURN",
    "71": "AUBURN GRESHAM",
    "72": "BEVERLY",
    "73": "WASHINGTON HEIGHTS",
    "74": "MOUNT GREENWOOD",
    "75": "MORGAN PARK",
    "76": "OHARE",
    "77": "EDGEWATER"
  }
}
```
