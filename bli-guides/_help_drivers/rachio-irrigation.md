---
title: Rachio Irrigation
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
## Rachio / Irrigation

This driver supports communication with the Rachio Irrigation controllers through the cloud. 

Communications:
---------------

To establish communication an Access Token is needed, it is found by logging into the Rachio web interface and selecting the API Access Token, 
then on BLI admin web go to Systems and select (or add) Rachio Irrigation, and paste the Access Token in the corresponding field on Connection Settings.

Resources:
---------------

Available resource types are Device and Zone, both identified by their Rachio identifier, it is recommended to add the devices through the Import resources feature.

Device states:
   - STATE indicates whether the device is on or of with 1 and 0 respectively.
   - ONLINE indicates whether the device is on or off.
   - _PAUSED indicates whether the device is paused or not.
Device commands:
   - _STOP WATER: Stop all watering on device
   - _RAIN DELAY: Set rain delay device, must set the _DURATION argument in seconds (Range is 0 - 604800 (7 days))
   - SET: Turn ON/OFF all features of the device (schedules, weather intelligence, water budget, etc.), must set the VALUE to true or false to turn ON or OFF respectively.
   - _PAUSE ZONE RUN: Pause a zone run for device, must set the _DURATION argument in seconds (Range is 0 - 3600 (1 hour) )
   - _RESUME ZONE RUN: Resume a zone run for device.
Zone states:
   - STATE: Zone enabled status, 1 for enabled 0 disabled.
   - ONLINE: Device Online status: when a device goes offline all its zones go offline, and vice versa.
Zone commands:
   - _START: Start a zone, must set the _DURATION argument in seconds (Range is 0 - 10800 (3 Hours) )
