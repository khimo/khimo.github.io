---
title: ABB-free@home
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# ABB-free@home Driver

Free@home is a collection of devices interconnected together into a single ecosystem that can be configured to have specific behaviors. This driver communicates with your free@home system to integrate its devices into the BLI family.

## Prerequisites for using the free@home cloud API
- A system access point with at least version 2.2.4 must be available.
- The end-user must have an ABB myBUILDINGS/myBUSCH-JAEGER account.

## Connecting to the system
### Configuration on the Busch-Jaeger web:
- Connect the system access point to the myBUSCH/myBUSCH-JAEGER cloud with that account.
- To do this, go to Settings -> myBuildings/myBUSCH-JAEGER -> Connection on the system access point with a browser.
- Enable the free@home API support setting under Settings -> myBUILDINGS/myBUSCH-JAEGER -> Connection on the system access point.
- After the first connection attempt using the free@home cloud API, the end-user must grant access to the system access point. (Logging into the system access point with a browser will display a message box asking for that permission.)

### Connection settings and configuration on the BeoLiving Intelligence
- Login with your ABB account by clicking "Link" beside the "Linked As" field. You will be asked for your credentials, and after successful entry, you are ready to go!

## Available resources (RESOURCE TYPE)
You currently have four supported types:
- Thermostat (AC THERMOSTAT): Any thermostat or temperature device in the installation.
- Shade (SHADE): Any blind/shade device in the installation.
- Dimmer (DIMMER): Multilevel lights in your installation.
- Lamp (DIMMER): Lamp resources are simple ON/OFF switches. When controlling, 0 means OFF, and any other positive number means ON.

## Resource Address
Resources for this system should be added using the discovery feature and not with a manual address.

## Resource discovery
To add the resources:
1. Click the 'Import resources' button, then 'Load resource from connected system'. It might take a few minutes.
2. All discovered resources on your installation will appear. Choose a zone and click 'Add' to finish the setup.

## Resource Events
All resources are capable of sending STATE_UPDATE events with varying information.
- Dimmer/Lamp/Shade: Send LEVEL.
- Thermostats: Send Eco Mode, Fan Auto, Mode, Setpoint, and Temperature values.

## Captured events
Press the "Capture" button, and executed events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource Commands
- AC Thermostat commands:
  - **SET ECO MODE**: Set to True or False.
  - **SET FAN AUTO**: Set to True or False.
  - **SET MODE**: Set to Auto, Heat, Cool, and OFF.
  - **SET SETPOINT**: Desired Value.
- Dimmer/Lamp commands:
  - **SET**: Set the dimmer level between 0 and 100.
- Shade commands:
  - **LOWER**
  - **RAISE**
  - **STOP**

## Changelog
### v0.1 | 10/09/2020
- Initial version.
### v0.2 | 07/10/2020
- Improvements in-line setup help.
### v0.3 | 28/02/2023
- Improvements in handling of shade status.
### v0.4 | 07/3/2023
- Improves handling of non existant resources

*Please report any issues with this driver to: support+drivers@khimo.com*

