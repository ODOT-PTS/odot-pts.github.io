---
layout: default
---
GTFS-ride is an open standard for storing and sharing fixed-route transit ridership data. Transit ridership data can answer questions such as:

* How many people rode the bus/train/ferry last week?
* Which routes have the most riders?
* What time of day is the busiest?
* What are the busiest stops in the system?

<figure>
  <img src="/assets/images/ridership-data.png" width="100%" style="max-width: 600px;" />
  <figcaption>GTFS-ride data visualized by time of day</figcaption>
</figure>

GTFS-ride provides transit agencies a standardized way to collect, store, share, report, and analyze their ridership data. It can be used by transit agencies to share their ridership data with other agencies and organizations interesting in collecting and analyzing ridership data. 

## Why GTFS-ride?

Transit ridership data is needed to set policy, develop plans, and prioritize investments but is not easily available and/or not in a useful standard format. Transit agencies vary widely in their ability to provide sufficient quantities of high-quality ridership data, and the data that does exist is often of little use due to a high level of aggregation, broad scope, sparsity, errors, and lack of standardization.

These inconsistencies in the availability, format, and quality of ridership data make it very difficult (if not impossible) entities with an interest in multi-agency transit networks to make effective and informed decisions. Regional governments, researchers, policymakers and transit agencies themselves don't have an easy way to collect, store, share, report, and analyze their ridership data. 

GTFS-ride was developed to provide a comprehensive (yet flexible) public transit ridership data standard. It was designed to improve the processes of ridership data collection, management, reporting, and analysis. Web-based software tools have been developed to support the core functionality of GTFS-ride.

Read the [full GTFS-ride project report](https://www.oregon.gov/ODOT/Programs/ResearchDocuments/SPR_803_Final%20Strategic%20Public%20Transit%20Investment.pdf) (SPR 803).

## GTFS-ride Files

This standard builds on top of [GTFS](http://gtfs.org) and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:

| File Name | Required | Description |
| --------- | -------- | ----------- |
| [`board_alight.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#board_alighttxt) | optional | Tracks boardings/alightings along with associated information at stop-level. |
| [`trip_capacity.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#trip_capacitytxt) | optional | Provides the capability to identify the capacities of vehicles used to provide service. |
| [`rider_trip.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#rider_triptxt) | optional | Includes anonymized data about specific riders' trip. |
| [`ridership.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ridershiptxt) | optional | Provides the capability to supply ridership counts at various levels of aggregation. |
| [`ride_feed_info.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ride_feed_infotxt) | required | Information specific to the source and attributes of the additional ridership files. |

<img src="/assets/images/gtfs-ride-file-relationships.png" width="100%" style="max-width: 600px;" />

## Getting Started

1. Review the [GTFS-ride specification](http://spec.gtfs-ride.org) to see the full list of files and fields.
2. Take a look at [GTFS-ride example files](https://github.com/ODOT-PTS/GTFS-ride/tree/master/spec/en/examples) to see what GTFS with GTFS-ride data looks like.
3. Determine which [GTFS-ride files](/files) your are needed for agency's ridership data.
4. Optionally, use the [node-gtfs-ride](https://github.com/ODOT-PTS/node-gtfs-ride) tool to convert Automated Passenger Counter (APC) data into GTFS-ride board-alight data.
5. Create your GTFS-ride feed.
6. Use the [GTFS-ride Feed Validator](http://validation.gtfs-ride.org) to test your feed.
7. Publish your validated GTFS-ride feed and use the [Ridership App](https://github.com/ODOT-PTS/ridership-app) to visualize your agency's ridership data.

## GTFS-ride Tools

Below is a list of tools for creating, validating and analyzing GTFS-ride data.

*	[node-gtfs-ride](https://github.com/ODOT-PTS/node-gtfs-ride) - A command-line utility for processing transit ridership data. It will import a GTFS file and Automated Passenger Counter (APC) data and then export ridership data in GTFS-ride format.
*	[Ridership App](https://github.com/ODOT-PTS/ridership-app) - A tool for visualizing, analyzing and exporting transit ridership data in GTFS-ride format.
*	[Feed Validator](http://validation.gtfs-ride.org) - Validates complete GTFS-ride feeds.

## Questions, Comments and Feedback?

Any questions, comments and feedback can be emailed to [david.porter@oregonstate.edu](mailto:david.porter@oregonstate.edu).

To facilitate GTFS-ride's continued improvement and broad applicability, the involvement and feedback of the public transit community is highly encouraged. An open discussion forum for any proposed changes is available via the [GTFS-ride Google Group](http://forum.gtfs-ride.org). Any specific issues or desired changes to the GTFS-ride standard can be addressed through the [change process](https://github.com/ODOT-PTS/GTFS-ride/blob/master/CHANGES.md).

## GTFS-ride Consortium Group
The GTFS-ride Consortium Group is a select national group of transit, research, and federal agency representatives focusing on the GTFS-ride Ridership Data Standard ecosystem development. [View GTFS-ride Consortium Group past meetings](consortium/meetings).

## Credits

GTFS-ride was developed through a partnership between the [Oregon Department of Transportation](https://www.oregon.gov/odot) and [Oregon State University](https://oregonstate.edu). 