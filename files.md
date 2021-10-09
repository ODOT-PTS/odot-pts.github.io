---
layout: default
---

# GTFS-ride Files

## `board_alight.txt`

This optional file is used by larger and/or technologically capable agencies. This file facilitates detailed analysis.

[View board_alight.txt fields](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#board_alighttxt)

There are two distinct uses of *board_alight.txt* as indicated by the **record_use** data field: 

1) Recording ridership counts (**0** entered in **record_use** field)

   If an agency collects disaggregate, stop-level ridership data, `board_alight.txt` may be used to record ridership
   counts and additional supplementary data. If only more aggregate ridership data is collected, the agency
   should use [`ridership.txt`](#ridershiptxt) to record ridership counts. It is anticipated that agencies with highly
   detailed ridership data will utilize this optional file. All agencies with the capability to provide this level of
   detail are encouraged to use *board_alight.txt* as it could be of the greatest use for analysis and reporting. If an
   entry in *board_alight.txt* contains **0** in the **record_use** field, indicating the entry is recording ridership
   counts, then either the **boardings** or the **alightings** fields should not be empty. An agency may choose to list 
   ridership counts in **boardings**, **alightings**, or both **boardings** and **alightings** depending on the 
   availability of this information. Supplementary information on ramp/lift/rack deployments and wheelchair and bike 
   counts may also be included in their respective data fields if this data is collected at the stop-level.
   
   By including an optional time and date information in the **service_date**, **service_arrival_time**, and 
   **service_departure_time** fields, an agency can disaggregate ridership counts to specifics instances of stop arrivals. 
   This additional time information also enables the inclusion of a calculated vehicle load in the **current_load** 
   field. It should be noted that unique combinations of **stop_id**, **trip_id**, and **stop_sequence** will not uniquely 
   define a specific instance in time of an arrival at a stop. Boardings and other counts will be aggregated 
   across the active dates in a trip’s **service_id** unless time and date information are provided.

2) Recording service cancellation (**1** entered in **record_use** field)

   An agency may use an entry in `board_alight.txt` as a placeholder to record services (e.g., trips and stop times) that 
   are defined and scheduled through the associated GTFS feed, but that were canceled or not operated. This is indicated 
   by a **1** in the **record_use** field and the appropriate selection in the **schedule_relationship** field. For 
   example, if an agency wanted to record the cancellation of a whole trip, only the first five fields of 
   *board_alight.txt* will be used (with the option to additionally include **service_date** information for 
   specificity). The **trip_id** would be the ID of the trip that was canceled, the **stop_id** and **stop_sequence** 
   would correspond to the first stop of that trip, **record_use** would be **1**, and **schedule_relationship** would be 
   **1** (**1** = Whole scheduled trip was canceled). The following illustrates this example:
   ```
   trip_id,stop_id,stop_sequence,record_use,schedule_relationship
   T1,S_A,1,1,1
   ```

### Examples of `board_alight.txt`:  
   [board_alight_all.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/board_alight_all.txt)  
   [board_alight_simple.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/board_alight_simple.txt)


## `trip_capacity.txt`

This optional file stores information on vehicle capacities. It allows utilization analyses when paired with ridership data.

[View trip_capacity.txt fields](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#trip_capacitytxt)

The `trip_capacity.txt` file can be used to report the capacity of vehicles operating transit services to support crowding analysis in conjunction with [`board_alight.txt`](#board_alighttxt). If an agency collects disaggregate, stop-level data, the various fields (e.g., **boardings**, **alightings**, **current_load**, **bike_boardings**, etc.) in [*board_alight.txt*](#board_alighttxt) can be cross-referenced through the **trip_id** with the capacity fields (e.g., **seated_capacity**, **bike_capacity**, etc.) in `trip_capacity.txt` to support several types of analysis. 

### Examples of `trip_capacity.txt`:  
[trip_capacity_all.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/trip_capacity_all.txt)


## `rider_trip.txt`

This optional file contains data for a specific rider and trip instance. It is meant to be used by agencies with automated fare collection `rider_trip.txt` can be used to link origin/destination pairs and can allow demographic and fare analyses.

[View rider_trip.txt fields](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#rider_triptxt)

If an agency can associate supplementary ridership data with a specific rider, `rider_trip.txt` may be used to record the rider-generated details. Care should be exercised in the creation of the **rider_id** field to anonymize a rider's identity sufficiently. The `rider_trip.txt` file may be useful for origin/destination, rider demographic, fare structure, network configuration, transit equity, demand forecasting, and performance review studies. 

### Examples of `rider_trip.txt`:  
[rider_trip_all.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/rider_trip_all.txt)  
[rider_trip_simple.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/rider_trip_simple.txt)  


## `ridership.txt`

This optional file is the predominate file for ridership data. It can accommodate many aggregation levels and temporal ranges. `ridership.txt` can be used by agencies of all sizes and capabilities.

[View ridership.txt fields](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ridershiptxt)

An agency may use the `ridership.txt` file to record aggregate level ridership counts depending on agency capabilities and requirements.  If stop-level ridership counts are available, they should be recorded in [`board_alight.txt`](#board_alighttxt), but an agency may choose to also record the aggregated counts in `ridership.txt` to aid in meeting specific reporting requirements or in generating user-defined reports. 

Many levels of specificity of aggregation are available through the many possible combinations of ID, time, and date fields. For example, an agency which collects only daily, route-level ridership data can input the counts in the **total_boardings** and **total_alightings** fields and specify the associated **route_id** (note: total boardings should equal total alightings for all levels of riderships higher than stop-level).  

Alternatively, an agency which collects stop-level data for each instance of a vehicle arrival may input ridership data at this lowest level or aggregate the data into any higher level desired. For example, an agency in this scenario may input ridership counts for "all Saturdays between 8 and 10 a.m. in the month of June" for any particular stop, trip, route & direction, route, or agency by indicating this aggregation level using the appropriate data fields. For more straightforward aggregation, an agency may simply indicate a **service_id** contained in [`calendar.txt`](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#calendartxt) over which the supplied counts are combined. 

Also, the ridership standard has been designed to support multi-agency GTFS feeds. Therefore, ridership counts in `ridership.txt` without any associated GTFS identifiers would indicate aggregated counts over all services specified in the associated GFTS feed files over the date range indicated in `ridership.txt`.

### Examples of `ridership.txt`:  
[ridership_all.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/ridership_all.txt)  
[ridership_simple.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/ridership_simple.txt)  


## `ride_feed_info.txt`

This file is a corollary to standard GTFS `feed_info.txt` file. Its use is for versioning, setting active date ranges and indicating which other GTFS-ride files are included. This is the only explicity required file in GTFS-ride.

[View ride_feed_info.txt fields](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/reference.md#ride_feed_infotxt)

The main purpose of `ride_feed_info.txt` is to provide additional information about the files that make up a GTFS-ride feed. The required data field **ride_files** serves to indicate which GFTS-ride specific files are employed in the feed to contain valid ridership data. Note that `trip_capacity.txt` alone is not among the options for **ride_files** as it alone would not constitute a valid GTFS-ride feed since it does not contain any ridership data. The selection for **ride_files** should correspond to included files in the GTFS-ride feed. For example, if valid ridership data is placed only in [`board_alight.txt`](#board_alighttxt) and [`ridership.txt`](#ridershiptxt), then **4** should be selected for the **ride_files** field, and the [`rider_trip.txt`](#ridertriptxt) file should not be included in the GTFS-ride feed. 

The other primary functions of `ride_feed_info.txt` are to indicate the active dates and current version number of the GTFS-ride feed and to relate the GTFS-ride feed with its corresponding GTFS feed. The **gtfs_feed_date** field will indicate the date on which the active GTFS feed files were obtained to become files in the GTFS-ride feed, thereby tying the ridership data in GTFS-ride to the state of the transit network on which it occurred. 

### Examples of `ride_feed_info.txt`:  
[ride_feed_info_all.txt](https://github.com/ODOT-PTS/GTFS-ride/blob/master/spec/en/examples/ride-specific/ride_feed_info_all.txt)  