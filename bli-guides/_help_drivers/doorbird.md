---
title: DoorBird
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# DoorBird 

BeoLink Gateway can interact with DoorBird and BirdGuard units, being capable of opening door lock, turning unit light and fire an event when motion sensor detect activity or doorbell button is pressed on the camera.
In order to get video image on the BeoLink Gateway from the DoorBird unit, it's necessary to add the camera on Interfaces Tab and fill the respective fields.

*Note*: SIP communication with DoorBird units are not yet supported.

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
* BirdGuard B10x 
    * Hardware version 1.00 and above 
    * Firmware Version 000099 and above

## Connection to DoorBird Unit

BeoLink Gateway can connect and interact with a DoorBird/BirdGuard unit through the DoorBird LAN-2-LAN API connection.  

The Connection Settings parameters are:

* *Host Ip*: IP address of DoorBird unit.
* *Login*: Username of DoorBird unit.
* *Password*: Password corresponded with the username used of DoorBird unit.

## Available Resources

The available resources are:

* *OPEN\_DOOR*: Resource for open door locks/relays. On BeoLink Gateway, this resource is mapped as *BUTTON* resource type. Has a *PRESS* command for open door lock.
* *LIGHT\_ON*: Resource for turn the light on of DoorBird unit. 
* *MOTION\_SENSOR*: Resource that fire event when motion sensor on DoorBird unit detects activity. 
* *DOORBELL*: Resource that fire event when door bell button is pressed on DoorBird unit.

*MONTION_SENSOR* and *DOORBELL* are mapped as *GPIO* resource type on BeoLink Gateway. They have two state values {0,1}. Default state value is 0 (no motion detected or door bell pressed). When activity is notified in one of these resources, state changes to 1 and the to 0 (as a pulse). On these resources there is no command execution.

*OPEN\_DOOR* and *LIGHT\_ON* are mapped as *BUTTON* resource type on BeoLink Gateway. The unique command available is the *PRESS* command, which executes the corresponded action depending on the resource (opens the door or turn the light on).

**Resource address doesn't apply** to any resource type except by *OPEN\_DOOR*. Address of *OPEN\_DOOR* refers to an specific relay of your 
DoorBird unit. **DoorBird I/O DOOR CONTROLLER** is supported. If an *OPEN\_DOOR* resource address is empty, will refer to relay *1*. For the rest of resource types **leave resource address empty**.

## Get Live Image

In order to get live images from DoorBird unit, it's necessary to add the camera in Interfaces Tab and set the next fields as below:

* **Camera access:**

  * *Base URL* : Equal to ```http://<doorbird-ip>```.
  * *Username* : Same username used on Connection Settings of DoorBird system in Systems Tab.
  * *Password* : Same password used on Connection Settings of DoorBird system in Systems Tab.

* **Camera resources path/Video & Images:**

  * *Low resolution mjpeg* : Equal to ```/bha-api/video.cgi``` to get mpjpeg stream from DoorBird unit.
  * *Low resolution image* : Equal to ```/bha-api/image.cgi``` to get snapshots from DoorBird unit.

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

