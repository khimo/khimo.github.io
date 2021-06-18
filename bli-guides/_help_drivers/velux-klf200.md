---
title: Velux KLF200
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Velux KLF200 - firmware v0.2.0.0.0.0 and greater

This driver was developed to interact ONLY with the firmware v0.2.0.0.71.0 and above. If your velux system is outdated please update it before setting up this driver, otherwise it won't be able to connect and control your system.

## Connecting to the system

Connection settings are:
 - **Host**: IP address or hostname of your Velux system
 - **Password**: If you haven't yet changed the password the default one is at the back of the product, it is recommended for you to change it for security reasons.

1. Go to the Systems tab and add a new Velux system.
2. Fill Host and Password with the information you already have. Then hit the Apply button. In a few seconds, the Velux banner at "System connection status" (in the bottom of the page) should turn itself to green indicating it was successfully connected.
3. Move to the resources tab, then select Velux in the list of systems at the left.
4. To automatically find all connected resources, go and click the "Import resources" button, then "Load resources from connected system". A list of all resources will start to appear in a matter of seconds.
5. You have to specify the Area/Zone you want each, then click "Add" near the resources you want.

## Available resources (RESOURCE TYPE)
The resources you will be able to control are:

 - Lights (DIMMER - code 0x0180 and 0x01BA): Even if the light is an ON/OFF light, it will appear as a DIMMER. Any LEVEL different from 0 is ON.
 - On/Off switches (GPIO - code 0x03C0)
 - Window openers with integrated rain sensor (SHADE - code 0x0100 and 0x0101)
 - Scene (any previously created scene on the system)

## Resource Address

Resources for this system should be added using the discovery feature.

## Resource discovery

To automatically find all connected resources, go and click the "Import resources" button, then "Load resources from connected system". A list of all resources will start to appear in a matter of seconds.

 - You have to specify the Area/Zone you want each, then click "Add" near the resources you want.

**If you have scene resources with the same name on the Velux system, one of them will have to be renamed on the BLI as it does not support resources with the same name.**

**Scene resource names must be less than 63 characters long.**

## Resource Events

All resources are capable of sending STATE_UPDATE events, with varying information.
Dimmer/Shade: send LEVEL.
ON/OFF Switch: send STATE.

## Captured events

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource Commands

- Switch commands:
  - **SET** Set the switch level to 0 (OFF) or 1 (ON)
- Dimmer commands:
  - **SET** Set the dimmer level between 0 and 100
- Blind commands:
  - **LOWER** Closes the window
  - **RAISE** Opens the window
  - **STOP** Let's you set an intermediate value of the window by stopping it while moving
- Scene commands:
  - **PRESS** Fires the scene. There is a velocity argumment which actuators will take

## Changelog
### v0.1 | 10/09/2020
 - Initial version
### v0.2 | 20/09/2020
 - Adds scene resource
### v0.3 | 07/10/2020
 - Improves in-line setup help
### v0.4 | 06/01/2021
 - Fixes wrong scene name & address on resources discovery

*Please, report any issue with this driver to: support+drivers@khimo.com*
