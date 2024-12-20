# Apache Druid 29

Released in February 2024, Druid 29 brings improvements to performance including [EARLIEST/LATEST aggregators](https://docs.imply.io/polaris/earliest-latest-by/), expanded ecosystem integration especially for [MSQ which now supports ingestion from GCP and Azure](https://imply.io/blog/introducing-apache-druid-29-0/#:~:text=MSQ%20%E2%80%93%C2%A0%20Azure%20and%20GCP%20support), and [added support for PIVOT/UNPIVOT](https://blog.hellmar-becker.de/2024/01/15/druid-29-preview-transposing-data-with-PIVOT-and-UNPIVOT/) and unequal joins SQL among a number of other changes to support  better SQL standard compliance.

Check out these notebooks, which were introduced or improved following the Druid 29 release.

* [Ingestion using System Fields](../02-ingestion/02-batch-ingestion.ipynb#system_fields)
* [IPV6 Support for filtering subnets](../03-query/10-functions-ip.ipynb#ipv6_match)
* Control rows per page when retrieving [async results](../03-query/21-query-async-historical.ipynb)
* [INNER JOIN with inequalities](../03-query/11-joins.ipynb#join_with_inequality)
* [Expressions for path parameter in JSON functions](../02-ingestion/05-working-with-nested-columns.ipynb#expression_for_path)
* [PIVOT and UNPIVOT functions](../03-query/15-pivot-unpivot.ipynb)
* [UNNESTing arrays of objects](../02-ingestion/08-table-datatypes-arrays.ipynb#json_array_of_objects)
* [Ingest primitive arrays from input source](../02-ingestion/08-table-datatypes-arrays.ipynb#ingest_array)
* [LATEST/EARLIEST rollup in MSQ](../03-query/19-groupby-earliest.ipynb)
