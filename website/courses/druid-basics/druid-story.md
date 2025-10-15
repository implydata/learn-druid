---
sidebar_position: 2
---
import YouTubePlayer from '@site/src/components/YouTubePlayer';

# The Druid story

Traditional business intelligence falls short in delivering the comprehensive insights that companies require. As a result, a new use case has emerged: analytics applications. These applications empower companies to leverage the potential of data, often in real time, to drive improvements in security, enhance product efficiency, and elevate the overall customer experience. But who are the industry leaders shaping this field? What technological solutions do they offer? Which companies are fearlessly tackling the challenges of data head-on? And what lies on the horizon for real-time analytics? Join us on Imply’s exciting new podcast, Tales at Scale, as we delve into these fascinating topics.

Tales at Scale uncover the insights, experiences, and innovations shared by experts as we explore the exciting realm of analytics applications, real-time data, and of course, Apache Druid.

To kick off the show, we wanted to know why Druid was invented and what makes it unique, straight from one of its creators. Our first guest was none other than Eric “Cheddar” Tschetter, co-creator of Apache Druid and field CTO at Imply.

Listen to the episode to learn:

- How Apache Druid came to be
- What use cases its creators were trying to solve for
- Why they decided to build their own database instead of using existing technology
- Why open source is important
- What’s next for Apache Druid

<!-- TBD Embed. Current video is on Wistia. Not sure if the same video player will work for audio only. -->
<YouTubePlayer videoId="h7U_CsDTNBw" />

<br />
<br />

<details>
    <summary>Read the **Transcript**</summary>


[00:00:01.050] – **Reena Leone**
Welcome to Tales at Scale, a podcast that cracks open the world of analytics projects. I’m your host, Reena from Imply, and I’m here to bring you stories from developers doing cool things with analytics way beyond your basic bi. I’m talking about analytics applications that are taking data and insights to a whole new level. On today’s episode, we’re going to be digging into the origins of a database I’ve been spending a lot of time with lately, Apache Druid. Druid is a high performance, real time analytics database, and it’s also an open source project. Things that make Druid unique are how it enables interactive conversations with data, provides high concurrency and easily ingests, and combines both real time streaming data and historical batch data. As of April 2022, over 1000 organizations are using Druid, and that includes folks like Netflix, Twitter, Reddit, Salesforce, and more. And they’re using Druid to generate insights that make data useful across a wide variety of use cases. But let’s go back to 2011. A data team at a technology company had a problem. They needed to quickly aggregate and query real time data coming from website users across the Internet to analyze digital ad auctions.

[00:01:06.460] – **Reena Leone**
They tried a few existing solutions, but none fit the bill for what they needed. So they did something crazy. They built their own database. And one of those creators is here with me today, Eric Tschetter, co creator of Apache Druid and field CTO at Imply. Cheddar, welcome to the show.

[00:01:23.630] – **Eric Tschetter**
Thanks for having me.

[00:01:25.230] – **Reena Leone**
Okay, so as the story goes, how Druid kind of came to be is because you tried and failed to achieve scale and speed with a bunch of relational databases before, so you decided to build your own because those weren’t working. Can you tell me a little bit more about that?

[00:01:42.960] – **Eric Tschetter**
Yeah, I can. It was both relational and no SQL, but I’ll get into that. It all started at this little adtech startup working, trying to provide effectively visibility on the digital advertising market. We got auction data from a bunch of different marketplaces. And to give a little bit of context on this, all of those ads you see on the Internet, every time you go to a web page, there’s an auction where a bunch of people are fighting to be able to show you that ad. And these auctions, there’s billions upon billions of these happening on a daily basis. And it’s actually even worse than that because one auction will breed ten more auctions and it just expands massively.

[00:02:29.910] – **Reena Leone**
It sounds like auction inception.

[00:02:32.220] – **Eric Tschetter**
It is. It’s auction inception. It really is. And so we were trying to bring visibility into that kind of marketplace. So we partnered with some people who run these auctions. They gave us data and we were trying to then show them kind of what’s happening in their market. We started out with a relational database through stuff, and we’re doing the normal kind of data warehousing things that you would do stuff like summary tables where you kind of pre aggregate a smaller set of dimensions, do things and show that and it kind of worked. The customer was always asking for more dimensions, more visibility. This was back when was this? This was 2010, 2011 time frame. And so back then there was this hadoop thing that was all the rage and there was this other thing called HBase that also people loved. And we were like oh, maybe we can use that hadoop and HBase thing to do this better. And so we started kind of going down that path, wrote some MapReduce jobs, put some stuff in HBase, did this whole precomputing thing where we basically pre computed the results so that we could show them super quick to the end user.

[00:03:48.810] – **Eric Tschetter**
And that worked better than the relational database. But we still had this problem with adding dimensions. The kicker for me was at 1.1 of the customers had nine dimensions they wanted to be able to view the data on and they asked for a few more. And we kind of as a cultural thing, we didn’t want to say no to that. We were like you should be able to have as many dimensions as you want. So yes. And we added them. And now the pre computation job jumped from like 4 hours on I think it was 15 machines to 9 hours on 25 machines. And it was like oh, that math isn’t very good. The amount of input data didn’t actually change. The only thing that changed was we were looking at more things. So then from there we were like well, what can we do to allow for any dimensions to be added that the customer wants but still give them the experience that they want? That’s pretty much where it started and.

[00:04:50.430] – **Reena Leone**
Like at one point during that where you’re like we need to build a whole new thing because building a database is not an easy thing and there are already so many outstanding.

[00:05:00.650] – **Reena Leone**
Even at that point, there were probably quite a few.

[00:05:04.290] – **Eric Tschetter**
Yes. And really it started with a lot of conversations with people. There were a number of different projects where it’s like, oh, maybe we could use this, maybe we could use that. Well, so I’m going to answer the base question, then go back and kind of talk a little bit more meta. But at one point I was speaking with an ex coworker of mine from LinkedIn named John Wang, and something stuck with me from when I was working with him there, where he was working on the search infrastructure. And one of the big things for LinkedIn search at that point in time was, well, if we can fit all of the data in memory, we can do things faster. And I was like, oh, okay, maybe that works for this too. Maybe we need to have all the things in memory. And I talked with him about the ability they had just open sourced the search thing as a project. I don’t know that it’s still around, but I think it was called Sensei. I don’t know, maybe not. I don’t remember.

[00:06:10.060] – **Reena Leone**
Anyway, I know there are so many projects that come out of LinkedIn because LinkedIn is like this crazy incubator, which you wouldn’t think of LinkedIn as being. But in my time in this space, and like, how many things have come out of LinkedIn?

[00:06:21.210] – **Eric Tschetter**
Yes.

[00:06:24.970] – **Reena Leone**
We can get into that later.

[00:06:26.400] – **Eric Tschetter**
Yeah, we could go into that too. But talking with him, he was like, yeah, what we have isn’t really going to work for aggregations, which is primarily what we needed to do. And then at one point I was just like, well, okay, let’s say I have a million numbers in an array in Java. If I just do a for loop and add that million numbers, how long does that take? And I did that and it was so fast, it was like sub millisecond. I was like, oh, okay, so hadoop takes minutes to add this 1 million numbers, but if I have it as an array in Java, it’s like sub millisecond. Great, there’s lots of room for optimization there. And so let’s do it.

[00:07:07.580] – **Reena Leone**
In marketing, we call that your AHA moment.

[00:07:10.170] – **Eric Tschetter**
Yes, that was kind of the AHA moment. And so from there now, even from the beginning, I always had this doubt about, oh, we’re creating another database. We’re creating a database. Like, you’re not supposed to do that, but I don’t know, the way I fended that off for myself at least, was actually when we were initially building it, we weren’t creating a generic database. We’re creating infrastructure that supported the transparency and visibility needs of our product. And so it’s like we’re not building a database. It happens to look like a database, it happens to share a lot of concepts from a database. But no, it was infrastructure supporting a very specific product. But the other thing that I’ve always kind of gone back to is the most common thing that people say when they say, don’t make a database is like, don’t reinvent the wheel. Then I’m sitting there like, there’s this company called Goodyear, and there’s this company called Bridgestone, and somehow they seem to be reinventing the wheel on a yearly or multi year basis, and they still make money. I don’t know. Apparently there’s Internet conspiracies about how there was this magical material, and the tire lobby went and destroyed any ability to make that.

[00:08:27.330] – **Eric Tschetter**
I don’t know how true that is, but I don’t know there’s companies that reinvent the wheel on a yearly basis, so maybe it’s not always that bad.

[00:08:37.430] – **Reena Leone**
No. And I mean, you started out with this one visibility challenge, but there were several other challenges that Druid ended up helping solve as you continued to add new features and build onto it. So what are some of the other challenges that you found that Druid could help you solve or that you were building for?

[00:08:55.530] – **Eric Tschetter**
We really just went where the product took us. It started with this visibility of just like, how much money is being generated from auctions, how many impressions are there, how many ads were shown, stuff like that. And then one of the things that people want to do is reach. It’s called reach in the ad space, but it’s like, how many people were seen. So one person might see the same ad ten times, 50 times, two times, one time. You only reached one person with that ad, not 50 people. And so they want to understand that. Now, this, in database terms, is something called uniques. Uniques are kind of this really simple problem, but yet difficult to do at scale because they require resources that they basically require memory and computation that scales with the number of uniques. And so the larger that number is, the more compute power you need. And so it tends to kind of slow things down as you scale out. And as I mentioned with Digital.

[00:10:00.250] – **Reena Leone**
Advertising. There’s billions of auctions happening every day. And then with the fan out, with the inception going on, it just gets massively scaled. But anyway, dealing with these uniques led us to this idea of sketches and bring out sketches, which are these data structures that till we kind of started pushing on exposing them, actually, as results. They were were primarily used internally in databases or in network infrastructure, and they were used to try to make good enough approximations of results so that they could make decisions on it. And we were like, well, maybe we can use these and actually show the numbers to end users, because there’s like, well defined error bounds. And we started using sketches and exposing those to end users. And since then, a lot of sketches have become a kind of generically adopted concept across databases, where almost any new database, and even some of the old ones, have figured out how to add sketches and actually expose them to end users. And that’s something that we just kind of going along with what product wanted ended up doing. And I’d say everything has always been that sort of iteration, open sourcing, kind.

[00:11:15.930] – **Eric Tschetter**
Of similarly like, you read my mind, by the way, because I was going to be like, okay, so you have this amazing new product and you decided to open source. Let’s talk about open source a little bit as this continues to grow. Thank you for pulling a psychic connection with me. Go on.

[00:11:30.830] – **Reena Leone**
Yes, well, you’re welcome.

[00:11:33.360] – **Eric Tschetter**
I’m usually the psychic one, but yeah.

[00:11:35.390] – **Reena Leone**
Open source was one of the things this is another thing that stuck with me from something someone else said. I wish I could claim it myself, but my ex boss at LinkedIn when I was there, something he said about open source and what it does is he kind of motivated open source, especially in large organizations like LinkedIn, where the product is not actually infrastructure, the product is something else. He described one of the major motivations of open source as kind of avoiding myopia in the local engineering team and getting access to more requirements from other places. And so for us, what that meant is opening up, going open source meant other people came, they tried the infrastructure, they tried it in their use case, inevitably ran into some problem somewhere. They come talk with us, we end up talking about the problem they’re running into. It’s like, oh, okay, I understand what you’re trying to do. Now, if we make this little change here, it’ll work for what you’re doing. And kind of through enough of those conversations, you start realizing, oh, this thing we have, it kind of works for a lot of different things, and it’s kind of cool, and you just kind of eventually get there just from all of the different inputs.

[00:12:52.510] – **Eric Tschetter**
Well, that actually makes sense where it’s called Druid, and from my knowledge of Druid comes from a little bit from DND, and also because I’m a little bit mystical and Druids are shapeshifters. They can be what you need them to be, right? And I heard that you’re responsible for that. I heard that was your idea with the naming.

[00:13:11.930] – **Reena Leone**
The name was Me. Yes. And it does come from the gaming background, and it’s exactly what you’re talking about. It’s the shape shifting element. One of the connections is also kind of it’s technically rooted in that it is a distributed system. It follows something that at the time was called service oriented architecture. Now, people have put the word micro in front of service, and they relabeled the entirety of service oriented architectures to micro services, but whatever. But it follows a service oriented architecture where each service kind of does one thing good. And for anyone who’s a gamer, when you’re doing games, if you’re doing MOBAs or MMOs or anything, generally speaking, you get together with other people and form a team. And in that team, there’s some people who, like, take damage. There’s some people who heal damage, there’s some people who deal damage. And by coming together in that group, you can take on these really big monsters that no one person could take on on their own. And that was the idea of kind of the service orientation of Druid. And the name of it was the Druid character can shapeshift between any of those roles.

[00:14:24.090] – **Reena Leone**
Each process kind of fits a role, forms a team, go and take out the big bad monster. But yes, that is exactly where it comes from.

[00:14:33.910] – **Eric Tschetter**
You’re speaking my language when we start talking about nerd stuff. Okay, so now we have this really cool database. We’re getting lots of input from other users that’s helping it evolve, adding new features, creating new use cases. But all of this is a lot. So one thing I’m wondering, if you knew then what you know now about what it takes to create something like Apache Druid, what would you have done differently?

[00:14:59.000] – **Reena Leone**
What would I have done differently if I knew then what I knew now, the biggest thing I would do differently? Well, when we were building the infrastructure to run our product, operate things, all of that, we were basically confronted with it has to scale. It has to scale out of the box we’re running on AWS. So, like, nodes have to be able to die, and we have to be able to deal with that. It has to self heal. I don’t want to wake up at 03:00 a.m. In the morning. We were dealing with all of these operational concerns that you really care about when you’re operating a product. What I have learned is that, one, not everybody actually deals with scale. Most use cases are actually not massive scale. They’re kind of minimal scale. There was a quote at one point, someone jokingly said that big data is any data that doesn’t fit in Excel. And that’s actually kind of true when you look at the broad set of use cases.

[00:15:57.030] – **Eric Tschetter**
Wait, hold on. Are you saying I chose the wrong name for this podcast? Maybe I should have come to you first to do way better with naming.

[00:16:08.390] – **Reena Leone**
No, but I mean, scale is like it’s a thing and when you deal with it, it’s tough to deal with. But not everyone deals with it. The thing that everyone deals with is understanding the value of something quickly. And so the initial kind of intentions of building the infrastructure was entirely to make something that worked well for us in a massively scaled product. And that meant that it was a distributed system. It was a distributed system from the beginning. There were actual design choices made that said, no, the thing that’s deployed should just work and be production ready no matter what. It should just work and be production ready. And so we front loaded a lot of kind of adoption friction in making people set up something that would be production ready in order to even just kick the tires. Where an open source project doesn’t gain adoption through making someone like, think about what it means to be production ready on the project before they even know what it does. An open source project is adopted through very quick kicking of the tires. Just download a thing, wake up. It’s like someone wakes up on the weekend, they got 30 minutes, they want to download something, try something out, just see if it works for them.

[00:17:27.100] – **Reena Leone**
And so if I could do one thing differently know, knowing that we were going open source with the project, I would have made those decisions differently and organized designed things a little bit more for a quick out of box, kicking the tires value proposition rather than basically putting a distributed system in front of people from the very beginning and requiring them to basically make something that will scale up infinitely from the very early stages.

[00:18:02.730] – **Eric Tschetter**
I’m going to do a time jump here. Okay, so Druid has been around for about ten years now. It’s been a decade of Druid and that’s the name of this episode because sometimes I’m okay at naming things. We just had Druid 24 that was released a few months ago. What is next for Druid? What are we looking forward to in the future? If I was to catch up with you in like two years, five years, what would you want to be talking about in terms of Druid’s infrastructure, new features or where it’s heading?

[00:18:31.960] – **Reena Leone**
I think there’s a couple of things that I find especially exciting and one of the things that I think has been great for the project overall is the adoption of SQL. Druid started in the NoSQL kind of world and the primary query language was these big JSON objects and all of that stuff. But I think it turns out no, SQL really wasn’t, it was less about actually not wanting to use SQL as a way to query things and more about kind of some of the other things that were bundled with SQL. And so kind of adopting, embracing SQL and driving after that has been great. And I’m excited that we’ve redone our ingestion system to basically work with SQL. You write SQL to get data in, get it out. That’s exciting. And there’s more and more coming along that path around just embracing SQL and embracing what it means in the processing. And so that’s something that I think is exciting, that it’ll be great for the generic adoption of the project and just usability on top of that. The thing that I find the most interesting is, like I mentioned earlier, functions, features, all of that is kind of developed as an evolution from conversations.

[00:19:45.450] – **Reena Leone**
And in my role at Implied, I get to talk with customers a lot about what it is they’re trying to do, what’s not working, what’s working, what they wish could be tweaked a little bit. And those conversations really they get me excited for the degree of specialization that you can do inside of a domain. And so while we’re embracing kind of the generic capabilities of SQL, there’s also some things that I think are uniquely capable inside of Druid to enable us to really specialize and work towards certain domains and certain problem domains and kind of solve things in that regard. And I think that I hope that in two, three, five years, we’re having this conversation, looking back on this, these kind of abstract words about solving solutions and all that, I’ll be able to point to specific things where like, yeah, that thing that we did there inside of that domain, it’s massive and it’s new. It’s something that someone you haven’t seen before, but now you see it and now it’s kind of common and coming out in the industry. I don’t know if that makes sense.

[00:20:56.740] – **Eric Tschetter**
No, it does. I’m like, oh, tell me more about some of the stuff that you’re hearing from customers or what people are building. I want to know about the use cases because I think it’s one thing to kind of talk about the technology and the abstract, but how are people using Druid? We talk about analytics applications, but what are they really doing? Because that’s kind of a very broad statement, right?

[00:21:18.880] – **Reena Leone**
Yeah, I think there’s kind of two general areas that I think I can talk about a little bit now and not be totally hand wavy, but one of them is actually in the kind of networking telecommunications space. I’ve had a number of communications with these people who are they’ve kind of Led, and they’re driving the adoption of this new data format called Yang in the kind of telecommunications space. It’s an interesting format because it’s a data format that works both for control messages, meaning you can send messages to devices to ask them to change something about their configuration or take some action or do stuff like that, but also a format for kind of telemetry about what’s going on in the devices. And the conversations with these people has made me realize that for them, control and telemetry, it’s kind of the same thing. There’s an event that causes an action to happen. That action that happened causes some other events to then happen, and you want some sort of tight control loop between them where there’s back and forth communication. But with this sort of control loop, you always need some way to observe what’s going on.

[00:22:33.650] – **Reena Leone**
You need some visibility into what’s happening. At some point in time, a decision is going to be made and someone is going to be like, why did that happen? What happened here? And you’re going to need that visibility to look into things. Or also you need the ability to kind of step in and be like, no, we need to take this action now and this action and seeing that convergence in that space of the control with the telemetry and working. With the team to try to figure out what can we do to better visualize that what can we do to better pull that together, to make it just clear and readily apparent to the operators what’s going on and what the next actions are. Is one of these things that is new and coming that I’m pretty excited about. Another one is the idea of kind of click streams. Druid ends up getting used a lot for click streams. Click streams are like people clicking on a website. Each click they make is an event saying, hey, I clicked on this thing, then I clicked on that thing, then I clicked on this thing. I added something to a shopping cart.

[00:23:43.980] – **Reena Leone**
I checked out. I just browsed this page and then this page or I did a search or whatever all of those types of things are. Each action as one event will collect them. And then people want to understand what’s going on in their infrastructure, what’s happening, how are people making decisions. And that actually goes beyond just websites and ecommerce and stuff like that. Mobile apps, every interaction on a mobile app, people want to know which interactions happened where, how did you get to where you were getting.

[00:24:15.410] – **Eric Tschetter**
Now you’re speaking my language because my background is in real time decisioning and it’s all about understanding that. So, yeah, no, I get you. I’m following.

[00:24:22.590] – **Reena Leone**
And in that world, there’s this gap that has become apparent where the data that comes in is events, the things they happen. At one point in time, you want to see them. But the questions that are being asked are not like, how often did someone add something to their shopping cart? Sure, people ask that. People ask, how often did a shopping cart get checked out? How much money did we make? Those are questions people ask. But after those questions, there’s always like for this one person, what was the journey like for them to add something? Did they then remove it and then add it, and then remove it and then add something else and then it.

[00:25:04.150] – **Eric Tschetter**
Sounds like you’re talking about my Amazon cart right now. Did they hit save later? Did they move it? Did they move it back? No, they saved it again, not this time.

[00:25:12.660] – **Reena Leone**
Yes, exactly.

[00:25:13.810] – **Eric Tschetter**
It’s me, I’m the problem.

[00:25:15.650] – **Reena Leone**
In the end, you found a product at the bottom with like, people who bought this, or people who viewed this also viewed these other things, and you’re like, oh, that’s the thing I actually want. And you add that and buy it, and they want like, Amazon in that case, they want to attribute that sale to the people who viewed this thing, also viewed these other things. They want to do that attribution. But when you have lots and lots and lots of events, it gets difficult to actually do that attribution. There’s companies actually that have their own infrastructure around doing this attribution. But really being able to do it at scale in an ad hoc fashion is one of those things that I think it’s a little bit nascent. It’s one of those things that people are toying with, but I don’t think there’s a de facto kind of answer to how to do it. And that’s another thing that I’m hoping in a couple of years down the line there will be a de facto answer to how to do it. And I’m hoping that we will have had a part in making that happen.

[00:26:17.100] – **Eric Tschetter**
Well, you mentioned we’ve been talking a lot about events, right? And I think that I’ve been looking into transactions versus events, and we’re talking about events in the future and what that looks like, but I don’t think most people are thinking in terms of events right now. There’s still a lot of people thinking more in terms of transactions. So what would you say to people who are not really focused so much on events? Like, how would they wrap their brain around that? Because I think that’s the way things are going.

[00:26:45.650] – **Reena Leone**
It’s tough to have a generic message to help someone wrap their head around something because everyone’s in a different starting point. And you got to get that, I think the best generic analogy for what it means to think of events, it actually aligns also with what it means to think of a stream. And so there’s been a lot of stuff going on in the industry around streaming, streaming analytics, streaming systems. It started with Kafka. On top of that, there’s now like, there’s Flink, you’ve got companies in the space like Decodable, kafka has K SQL, or Complaint has K SQL. There’s all sorts of different options for how to process data in the stream. And the thing about a stream is that when data is kind of flowing or data in motion as the stream, vendors like to talk about when data is moving, each data point, each daytime doesn’t change. It is what it is and it doesn’t change. The thing that changes is over time, you can get different datums, that kind of talk about the same phenomenon, talk about the same order, talk about the same session on a website, talk about that.

[00:28:07.610] – **Reena Leone**
And as each of those things kind of comes in, it can update your understanding of the current state of that order. And so going back to ecommerce, because it’s the easiest one to talk about, I think when you order that thing on the website, there’s an event that kind of streams through of, oh, this order was placed. Then at some point it gets fulfilled, it gets shipped out of the warehouse. And so now an event can flow through that. Okay, for this order, number one, two, three, it got shipped. And so that updates our understanding of what’s going on with that order. But in reality, in the real world, you said, I want to order this thing. The warehouse got the things, put it in and shipped it out. FedEx ups USPS, whoever grabbed the thing delivered it to you. Each of those our world is actually a bunch of events. The thing that happened a second ago is never going to change. It is what it is. It’s never going to change. But the thing that happened a second ago might change my state. I might have cleaned up my house, and now my house is in a cleaner state.

[00:29:14.610] – **Reena Leone**
But those actions I took to clean it up are the actions that I took. And that’s kind of the difference with events. But once you get data flowing through a stream, you by definition have events. And then the question is, what do you do with that? How do you get that into something that’s usable? And that’s really the thing that I think people end up grappling with these days.

[00:29:36.040] – **Eric Tschetter**
Well, yeah, because you imagine all the data again, we’ll use e commerce, right? There could be so much data flowing through. That could be a huge stream of data. So many events happening depending on how big your site is and how many people you have and how many users. And that’s always been like, how do you deal with that and how do you deal with Peaks? Because again, talking about e commerce, there’s seasonality and there’s a bunch of other things.

[00:29:59.730] – **Reena Leone**
Christmas is coming up.

[00:30:00.980] – **Eric Tschetter**
Yeah, right. So then how do you deal with that influx of all of that data? And then that’s kind of one of the things about Amazon is not related to Drew. But Drew is kind of built for that. I mean, I know you said not everybody thinks about scale and using it for scale, but it has that ability, right?

[00:30:21.610] – **Reena Leone**
Yeah, absolutely. And that’s the thing, is we’ve been built from the beginning for the highest levels of scale we’re built dealing with that and it’s always at the top of our mind when we’re at that scale, we don’t want to wake up at 03:00 A.m., we want it to just work. If something happens with the infrastructure, we want it to just work. We want it to self heal and deal with that. And so we’re kind of always building for that level of scale and working in those scenarios. And so then the thought process around how to deal with these use cases, how to deal with this sort of stuff, always comes from that. I don’t want to wake up at 03:00 A.m. Mentality. And once you set that as a requirement on your infrastructure, it kind of changes some of the ways in which you do things and kind of really sets things up. And that’s kind of what I was getting at earlier with the de facto standard for how to deal with this type of thing. Generally, the things that people will reach for today, they’ll have known bottlenecks, they’ll have known hot spots that will cause you to wake up at 03:00 A.m. At some point in time on a.

[00:31:27.480] – **Eric Tschetter**
Tuesday, 03:00 A.m. On a Tuesday, whatever. Yeah, but yeah, that should be the exception and not the norm.

[00:31:33.900] – **Reena Leone**
Exactly.

[00:31:34.770] – **Eric Tschetter**
One thing I did want to pick your brain about too, is when you were building Druid, there was kind of nothing that was serving the use cases you needed for. But now fast forward to today, I feel like there are more players kind of in this more niche space and some coming out of LinkedIn. What do you think about this market kind of getting a little bit smaller now where you have, for instance, Apache, Pino and other companies kind of sort of building databases that might not be exactly the same, but kind of have similar attributes.

[00:32:12.880] – **Reena Leone**
I mean, one way you can see it is just as a confirmation that what you’re building, maybe you’re not insane, maybe there is a need for it. But also, I guess if no one else tried to go after the same thing, that means that no one else sees the same problem, which in the grand scheme of things probably means the problem doesn’t actually exist. The fact that other people are also seeing the same problem and trying to chase after it means that it’s a legitimate thing. It kind of legitimizes things to a certain degree. And so I think it’s great from that aspect also. Just more people trying to go after the same thing. It results in a better outcome for everybody. And I don’t want to go all like Silicon Valley and we’re solving world peace through Uber for cats or something.

[00:33:07.320] – **Eric Tschetter**
But that’s a future use case, like ten years down the road.

[00:33:13.070] – **Reena Leone**
But I don’t know. Humanity is good at identifying something to make better and then make it better and then see where humanity has ended up at again and then just kind of keep going and at the end, we’re trying to make things better for everybody, even with some small part. And so if you think about it in that macro sense, more people kind of going after the same general space, there’s a higher likelihood that we’re going to do good overall because something is going to come out of it that’s meaningful.

[00:33:49.010] – **Eric Tschetter**
It’ll be exciting to see, too. Yeah, but hopefully we’re building, like, cool stuff.

[00:33:53.400] – **Reena Leone**
Of course we’re building cool stuff. I mean, I’m drinking my own Kool.

[00:33:56.510] – **Eric Tschetter**
Aid, but we can drink a little bit of our own Kool Aid. This was the inaugural the first episode. We can drink our own Koolaid a.

[00:34:02.700] – **Reena Leone**
Little bit, but it’s wonderful to see it at the same time. Of course, I think we’re the best. And like I was mentioning earlier, some of the things that are kind of unique to us and what we can do in how we can kind of build in stuff that drives towards these use cases and drives towards kind of optimizations in specific uses. I think it’s really exciting to me. And looking back on it, the other thing that I personally want to make sure we never lose is just the focus on what are people actually doing? Because it’s really easy to go off and build something just generically. But when you’re focusing on what people are actually doing, you get to something that has a real nugget of value at its core. And when we do that, I think it just produces good going back to the generic stuff. And I’m really excited about us doing that and kind of driving the industry forward.

[00:35:10.370] – **Eric Tschetter**
I’m excited to see, too. I’m excited to see what is next and what comes out of it. All right, well, that is going to do it for us for this episode. Cheddar, thank you so much for joining me and telling me everything about Druid’s origin story and what comes next. It was great to have you on the show.

[00:35:27.320] – **Reena Leone**
Thanks for having me. I’m excited to be here. Hopefully this was useful for everybody that’s listening.

[00:35:33.310] – **Eric Tschetter**
Well, it was useful for me. I love it.

[00:35:35.770] – **Reena Leone**
I guess that’s really what matters, right? This is all about we got one viewer at least, and they’re happy.

[00:35:44.280] – **Eric Tschetter**
And my mom probably, but she’ll have no idea what we’re talking about. All right, folks, if you want to know more about Apache Druid, visit Druid. Apache.org. And if you want to know about what we’re doing with Druid at Imply, visit us at imply IO. That’s going to do it for me. Stay tuned for more.

</details>







