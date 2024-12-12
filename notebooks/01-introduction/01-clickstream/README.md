# Clickstream guide

The Apache Druid database can be used to gain real-time insight into activity taking place on a web application or website.

* [Introduction to clickstream](#introduction)
* [Connecting to clickstream](01-connect.md)
* [Transforming clickstream](02-transform.md)
* [Optimize for clickstream](03-optimize.md)
* [Querying clickstream](04-query.md)
* [Managing clickstream data](05-manage.md)

## Introduction

As website visitors, we are all being coaxed toward achieving a particular goal that the owning organization has in mind for us, whether that's placing an order for a product, signing up for a service, or passing on contact information for sales leads.

Clickstream analytics concerns questions like:

* What types of people visit our site most?
* Which visitors achieve high value goals?
* What brought someone to our website?
* What things take our visitors longest to achieve?

These are important questions for a number of organizations, including auction websites, news publishers, and video streaming services.

> "Clickstream analytics puts us closer to our users, and if you know what your users want, you are better able to serve them."

For news publishers, the front page remains the most important real-estate on a website. Clickstream analytics helps advertising campaign managers understand whether the right demographic is reaching this front page as a campaign runs - and whether the campaign has resulted in longer sessions on the site overall.

* What kind of people are landing on our product page?
* Where are most of our visitors from?
* What are people's usage habits?
* Do we have return visitors?
* How long does it take for someone to buy our services?
* What questions are people asking about our products when they arrive?

### Challenges

Collecting and analyzing clickstream data is difficult because:

* It's hard to collect the data.
   * Data can come in from multiple sources, so a database needs to be able to draw from multiple real-time and batch streams - both at ingestion and query time.
   * Data volume can be very large, so a database must not only be able to scale with the ingestion velocity, but index and compress the data efficiently both for long term storage and speedy computation.
* It's hard to query the data.
   * The websites, mobile apps, and other channels change over time. A database needs to be adaptable to changing integrations and schemas.
   * Filtering and statistical needs of uses are often unpredictable, or lead to a large number of reports that have to be maintained. A database needs to be able to cope with a range of query profiles that can be executed in a number of different ways depending on needs.
   * A broad number of clickstream queries concern distinct counts, especially of visitors. Databases need to have ways to calculate distinct counts quickly.
   * Statistics very often concern intersections, unions, and differences. For example, visitors who used a channel today but not in the last 30 days. A database needs to be able to carry out set operations quickly enough for the answers to be relevant.

The index for this guide directs you to functionality in Apache Druid that many adoptees are using to solve for these challenges.

### Entities and events

Clickstream describes a person's journey through a website. As a person goes through the site, each interaction causes an event to be emitted. Events can concern a number of different entities:

| Entity | Definition | Value |
| --- | --- | --- |
| Visitor | The user themselves. | Driving loyalty. Informing advertising and promotion strategies. Testing churn-reducing tactics. |
| Page | A place in a channel where a visitor can perform actions. | Changing the products or services shown depending on their journey so far. |
| Action | Things that the visitor did on a page, also known as a click or a hit. | Building up a picture of common journeys. Measuring system responsiveness. |
| Session | The user's journey. It might include data about what happened before the journey started (like the referring site), and summarise information about the number of pages visited. | Personalizing "grazing and hunting" experiences. Improving navigation. Attempting to build "first visit, first buy" to prevent attrition. |

During a visit, a _conversion_ might occur. This is when a visitor took some action that amounts to them achieving a goal on the site. Each conversion is assigned a _conversion value_ depending on how important achieving that goal is to the site owners.

Clickstream analytics concerns the entire customer lifecycle: how the attention of the _visitor_ was grabbed, what _user actions_ took place to achieve _conversion_ through a _session_ - no matter the channel - and how that _visitor_ was made loyal.

### Pipeline

Website-hosting technologies like [Apache HTTP Server](https://httpd.apache.org/) and [Microsoft Internet Information Services](https://www.iis.net) emit server logs, like [W3C Extended Log Files](https://en.wikipedia.org/wiki/Extended_Log_Format) and [NCSA Common Format Log Files](https://en.wikipedia.org/wiki/Common_Log_Format). Logs are often the starting point for clickstream analytics and contain information like:

* The date and time of a web request.
* The IP address of the server itself.
* What service was being requested (`POST`, `GET`...)
* The address of the content.
* The IP address of the requesting client.
* What the client is (the "user agent").
* The number of bytes returned.

Network logs might also be used, whether passively or proactively using packet sniffing.

Log data like this is very often used to meet OLAs and SLAs, and to prevent and investigate security incidents.

Additional clickstream data comes from code embedded on the client (visitor) side. Client-side event generation is richer, extending analytics into the business arena.

* Javascript code.
* Pixels.
* Embedded components.

Events are typically added to, and read from, an event hub such as Apache Kafka, Amazon Kinesis, or Azure Event Hub. Druid can ingest this data directly, making it queryable on arrival.

In an omnichannel business, data might also come from telephone interactions, mobile app stats, social media interactions, and even physical store transactions.

Clickstream event data often need additional processing to enrich or even create the entities entirely.

* Clickstream data is stateless, it's often very easy to know when a _session_ started, but not so easy to know when a session ended.
* Clickstream data is often anonymous, so _visitor_ data needs to be enriched by joining to an internal database and / or to online enrichment services.

Druid ingestion-time transformations allow for row-wise functions to be applied to data as it arrives. More complex enrichment and processing is possible in batch using MSQ. Examples are given in the main portion of the guide. More often than not, Druid's transformations are combined with another technology, like Apache Flink, for more complex operations.

* For _session_ analysis, enough time must elapse for the session to end before certain analysis can be done, such as calculating average session length by a particular _visitor_ demographic.
* For _action_ data, the data must be made available quickly enough for decisions to be taken in a timely manner. For example, A/B testing of a new navigation structure, or determining the effectiveness of a campaign for a flash sale.

The results of this processing may be posted into data lake technologies, or posted directly into stream event hubs for immediate analysis.