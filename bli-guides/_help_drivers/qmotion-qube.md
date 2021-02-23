---
title: QMotion Qube
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# QMotion Zigbee Shades

The QMotion Zigbee Shades driver on the Beolink Gateway integrates all individual QMotion Shades and Shade Groups configured in the Qube gateway. 
The standard SHADE commands SET LEVEL, RAISE, LOWER and STOP are available for all resource types. 
The standard SHADE LEVEL status is only available for individual shade resources. 

## Connecting to the system

Communication with QMotion Zigbee Shades is made through the Qube gateway that implements an HTTP RESTful API. 
Follows a list of configurations fields that the installer should define in order to establish the connection.

Channel settings are:
* _Poll Interval_ : Polling interval for status request (default to 30 seconds).
* _Qube Host_ : IP or hostname of the Qube gateway.
* _Qube Port_ : Listening port of the HTTP RESTful API server.

## Available resources

The available resource type is:
* **Qmotion Blind/Shade**: Any Blind/Shade device in the installation.
* **QMotion Group of Blinds/Shades**: Any Group of Blinds/Shades in the installation.

## Resource Address

* **Qmotion Blind/Shade**: Every Shade is uniquely identified by a Zigbee device identifier of 8 bytes in hexadecimal format.
* **QMotion Group of Blinds/Shades**: Every Group of shades is uniquely identified by an integer.

## Commands, Events and States

Commands are the same for both resource types:
* Commands:
  - **SET**: Set level position of Group/Shade.
  - **RAISE**: Set to maximum level of Group/Shade.
  - **LOWER**: Set to minimum level of Group/Shade.
  - **STOP**: Stop level transition of Group/Shade.

Only *QMotion Blind/Shade* contains **LEVEL** state:
* States:
  - **LEVEL**: Level position of Shade/Blind.

## Resource discovery

QMotion Zigbee Shades Driver of BeoLink Gateway has the capability of import all Shades/Blind and Groups of Shades/Blinds in Qube gateway configuration. 

Changelog
---------
   - V0.3 | 2019-05-29
      - Minor bugfix in shade group command post execution.
   - V0.4 | 2020-10-07
      - Improves in-line setup help
