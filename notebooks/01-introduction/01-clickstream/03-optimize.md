# Optimizing clickstream data

Clickstream data can very often have a fluid schema. One of the objectives is to improve the experience upstream, so new attributes and measures can – and will – be added all the time to help analyse that experience.

* Plan change control for ingestion specifications.
* Plan ahead for data governance.
* Read about [schema evolution](https://druid.apache.org/docs/latest/data-management/schema-changes).
* Learn about [automatic schema detection](https://druid.apache.org/docs/latest/ingestion/ingestion-spec#dimensionsspec), dimension inclusions and exclusions, and try out the [notebook](../../02-ingestion/15-native-dimensions.ipynb).

Applying a secondary partitioning scheme can speed up queries by providing an additional layer of pruning before queries execute. Clickstream deployments can be multitenant, serving queries about multiple websites from a single table, for example, meaning that a partition on a website identifier can be beneficial. Or 90% of queries might concern some visitor attribute.

* Read about [secondary partitions](https://druid.apache.org/docs/latest/ingestion/partitioning#secondary-partitioning) and try the notebook on [applying secondary partitioning using compaction](../../05-operations/04-compaction-partitioning.ipynb).
* Read about how Druid [sorts data](https://druid.apache.org/docs/latest/ingestion/partitioning#sorting) inside segments and test whether an explicit order in your `dimensions` list improves query performance.

---

[back](02-transform.md) [index](README.md) [next](04-query.md) 

---