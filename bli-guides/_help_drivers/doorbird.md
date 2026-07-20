---
title: DoorBird
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: DoorBird, BirdGuard, DoorBird LAN-2-LAN API, BUTTON, GPIO, OPEN_DOOR, LIGHT_ON, MOTION_SENSOR, DOORBELL
description: DoorBird driver interacts with DoorBird and BirdGuard units for controlling door locks, light and motion sensors.
---
# DoorBird 

BeoLink Gateway can interact with DoorBird and BirdGuard units to open door locks, turn on the station light, and report motion or doorbell activity.
To display DoorBird video on BeoLink Gateway, add the camera on the Interfaces tab and complete the fields described below.

*Note*: SIP communication with DoorBird units is not supported by this driver.

## Supported DoorBird Devices

* DoorBird Video Door Station D10x 
    * Hardware version 1.00 and above 
    * Firmware Version 000099 and above 
* DoorBird Video Door Station D20x 
    * Hardware version 1.00 and above 
    * Firmware Version 000099 and above 
* DoorBird Video Door Station D21x 
    * Hardware version 1.00 and above 
    * Firmware Version 000108 and above
* DoorBird Video Door Station D11x
    * Hardware version 1.00 and above
    * Firmware Version 000130 and above
* BirdGuard B10x 
    * Hardware version 1.00 and above 
    * Firmware Version 000099 and above

## Connection to DoorBird Unit

BeoLink Gateway can connect and interact with a DoorBird/BirdGuard unit through the DoorBird LAN-2-LAN API connection.  

The Connection Settings parameters are:

* *Host IP*: IP address of the DoorBird unit. Configure a DHCP reservation or static IP so this address does not change.
* *Login*: Username of the DoorBird unit.
* *Password*: Password associated with the configured username.
* *Use Digest Authentication*: Authenticate through the HTTP challenge instead of sending credentials as query parameters. This is recommended when supported by the installed firmware.

## Available Resources

The available resources are:

* *OPEN\_DOOR*: Opens a door lock or relay. This is a *BUTTON* resource with a *PRESS* command.
* *LIGHT\_ON*: Turns on the DoorBird station light. This is a *BUTTON* resource with a *PRESS* command.
* *MOTION\_SENSOR*: Reports activity detected by the DoorBird motion sensor.
* *DOORBELL*: Reports presses of the DoorBird doorbell button.

*MOTION_SENSOR* and *DOORBELL* are mapped as *GPIO* resources on BeoLink Gateway. They have two state values: 0 and 1. The default state is 0 (no motion detected or doorbell pressed). When activity is reported, the state changes to 1 and then back to 0 as a pulse. These resources do not provide commands.

*OPEN\_DOOR* and *LIGHT\_ON* are mapped as *BUTTON* resources on BeoLink Gateway. Their *PRESS* command performs the corresponding action: opening the door or turning on the light.

**Resource addresses apply only to *OPEN\_DOOR*.** Its address selects a specific DoorBird relay, including a relay on a DoorBird I/O Door Controller. An empty *OPEN\_DOOR* address selects physical relay *1*. Leave the address empty for all other resource types.

## Get Live Image

To display live images from the DoorBird unit, add the camera on the Interfaces tab and configure these fields:

* **Camera access:**

  * *Base URL* : Equal to ```http://<doorbird-ip>```.
  * *Username* : Same username used on Connection Settings of DoorBird system in Systems Tab.
  * *Password* : Same password used on Connection Settings of DoorBird system in Systems Tab.

* **Camera resources path/Video & Images:**

  * *Low resolution MJPEG*: Set to ```/bha-api/video.cgi``` for the DoorBird MJPEG stream.
  * *Low resolution image*: Set to ```/bha-api/image.cgi``` for DoorBird snapshots.

## Changelog

**v0.5**
  
  * Improves connection error handling

**v0.6**
  
  * Makes driver compatible with DoorBird D2101v.
  * Now address of *OPEN\_DOOR* refers to an specific relay of the unit.
  * Adds discovery of all *OPEN\_DOOR* relays.

**v0.7**
   
  * Corrects parsing of "Load resources from connected system"

**v0.8**
   
  * Improves in-line setup help

**v0.9**

  * Adds support for DoorBird D11x devices.
  * Adds optional Digest authentication.
  * Handles temporary authentication lockouts (HTTP status 423).
  * Improves monitor parsing, stream recovery, and relay discovery.

