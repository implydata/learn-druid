# Managing clickstream data

With many thousands of producers all generating data across multiple networks comes increased likelihood that action events will arrive late or out of order.

* Read about [segment optimization](https://druid.apache.org/docs/latest/operations/segment-optimization) and use this to inform the selection of both your [primary timestamp](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#timestampspec) in `timestampSpec` and the [primary partitioning period](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#timestampspec) using `granularitySpec/segmentGranularity`.
* Learn about [compaction](https://druid.apache.org/docs/latest/data-management/compaction) and try the [notebook](../../05-operations/04-compaction-partitioning.ipynb).

---

[back](04-query.md) [index](README.md)

---