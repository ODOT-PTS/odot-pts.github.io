---
sidebar_position: 3
---

# GTFS-ride Files

This standard builds on top of [GTFS](http://gtfs.org) and adds files necessary for ridership data standardization and reporting. The files that GTFS-ride adds are:

| File Name | Required | Description |
| --------- | -------- | ----------- |
| [`board_alight.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#board_alighttxt) | optional | Tracks boardings/alightings along with associated information at stop-level. |
| [`trip_capacity.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#trip_capacitytxt) | optional | Provides the capability to identify the capacities of vehicles used to provide service. |
| [`rider_trip.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#rider_triptxt) | optional | Includes anonymized data about specific riders' trip. |
| [`ridership.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ridershiptxt) | optional | Provides the capability to supply ridership counts at various levels of aggregation. |
| [`ride_feed_info.txt`](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ride_feed_infotxt) | required | Information specific to the source and attributes of the additional ridership files. |

### GTFS-ride File Relationships
[![GTFS-ride File Relationships](/img/gtfs-ride-file-relationships.png "GTFS-Ride File Relationships")](/img/gtfs-ride-file-relationships.png)