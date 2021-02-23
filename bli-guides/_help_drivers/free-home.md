---
title: ABB-free@home
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# ABB-free@home Driver

Free@home is a set of devices interconnected together into a single ecosystem which you can configure to have specific behaviours.
This driver will communicate with your free@home system in order to integrate its devices to the BLI family.

## Prequisites for using the free@home cloud api

  - A system access point with at least version 2.2.4 must be available.
  - The end user must have a ABB myBUILDINGS/myBUSCH-JAEGER account.
 

## Connecting to the system

**Configuration on the Busch-Jaeger web:**
  - The system access point must be connected to the myBUSCH/myBUSCH-JAEGER cloud with that account.
  - This can be done by visiting Settings -> myBuildings/myBUSCH-JAEGER -> Connection on the system access point with a browser.
  - The system access point must enable the free@home API support setting under Settings -> myBUILDINGS/myBUSCH-JAEGER -> Connection.
  - Once the first connection attempt using the free@home cloud API is made, the end user must grant access to the system access point (logging into the system access point with a browser will display a message box asking for that permission).


**Connection settings and configuration on the BeoLiving Intelligence**
  - Login with your ABB account by clicking "Link" besides the "Linked As" field. You will be asked for your credentials, after success you are ready to go!
 
 
## Available resources (RESOURCE TYPE)
 
You currently have four supported types:

 - Thermostat (AC THERMOSTAT): Any Thermostat or temperature device in the installation.
 - Shade (SHADE): Any Blind/Shade device in the installation.
 - Dimmer (DIMMER): MultiLevel lights in your installation.
 - Lamp (DIMMER): Lamp resources are simple ON/OFF switches. When controlling, 0 means OFF and any other positive number means ON.
 

## Resource Address

Resources for this system should be added using the discovery feature and not with a manual address.

## Resource discovery

To add the resources:
 1. click the 'Import resources' button, then 'Load resource from connected system'. It might take a few minutes.
 2. There will appear all discovered resources on your installation, choose a zone and click 'Add' to finish setup.

## Resource Events

All resources are capable of sending STATE_UPDATE events, with varying information.
Dimmer/Lamp/Shade: send LEVEL.
Thermostats: Send Eco Mode, Fan Auto, Mode, Setpoint and Temperature values.

## Captured events

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.


## Resource Commands

- AC Thermostat commands:
  - **SET ECO MODE**: Set to True or False.
  - **SET FAN AUTO**: Set to True or False.
  - **SET MODE**: Set to Auto, Heat, Cool and OFF.
  - **SET SETPOINT**: Desired Value.
- Dimmer/Lamp commands:
  - **SET**: Set the dimmer level between 0 and 100
- Shade commands:
  - **LOWER**
  - **RAISE**
  - **STOP**


## Changelog
### v0.1 | 10/09/2020
 - Initial version
### v0.2 | 07/10/2020
 - Improves in-line setup help

*Please, report any issue with this driver to: support+drivers@khimo.com*

