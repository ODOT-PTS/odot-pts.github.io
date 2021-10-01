---
layout: default
---
GTFS-ride is an open standard for storing and sharing fixed-route transit ridership data. This can answer questions like:

* How many people rode the bus/train/ferry last week?
* Which routes have the most riders?
* What time of day is the busiest?

It provides transit agencies a standardized way to collect, store, share, report, and analyze their ridership data. GTFS-Ride can be used by transit agencies to share their ridership data with other agencies and organizations interesting in collecting and analyzing ridership data. 

## GTFS-Ride Files

This standard uses the [_required_ elements of GTFS](http://gtfs.org) and [adds files](http://spec.gtfs-ride.org) necessary for ridership data standardization and reporting. The files that GTFS-Ride adds are:

* [`board_alight.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#board_alighttxt) - Tracks boardings/alightings along with associated information at stop-level.
* [`trip_capacity.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#trip_capacitytxt) - Provides the capability to identify the capacities of vehicles used to provide service.
* [`rider_trip.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#rider_triptxt) - Includes anonymized data about specific riders' trip.
* [`ridership.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ridershiptxt) - Provides the capability to supply ridership counts at various levels of aggregation.
* [`ride_feed_info.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ride_feed_infotxt) - Information specific to the source and attributes of the additional ridership files.

## Information
*	[GitHub Repository](http://github.gtfs-ride.org) - GTFS-ride specification and documentation
*	[Specification](http://spec.gtfs-ride.org) - Details elements of standard
*	[Wiki](http://wiki.gtfs-ride.org) - Usage guide and resources
* [SPR 803 Final Report](https://www.oregon.gov/ODOT/Programs/ResearchDocuments/SPR_803_Final%20Strategic%20Public%20Transit%20Investment.pdf) - Completed work from phase 1

## Tools
*	[node-gtfs-ride](https://github.com/ODOT-PTS/node-gtfs-ride) - A command-line utility for processing transit ridership data. It will import a GTFS file and Automated Passenger Counter (APC) data and then export ridership data in GTFS-Ride format.
*	[Ridership App](https://github.com/ODOT-PTS/ridership-app) - A tool for visualizing, analyzing and exporting transit ridership data in GTFS-Ride format.
*	[Feed Validator](http://validation.gtfs-ride.org) - Validates complete GTFS-ride feeds.

## Engagement
*	[Discussion Forum](http://forum.gtfs-ride.org) - General discussion including sought or proposed changes
* [GTFS-ride Consortium Group](consortium/meetings)

## Credits

GTFS-Ride was developed through a partnership between the [Oregon Department of Transportation](https://www.oregon.gov/odot) and [Oregon State University](https://oregonstate.edu). 