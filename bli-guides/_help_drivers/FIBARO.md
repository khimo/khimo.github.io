---
title: FIBARO
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: FIBARO, Fibaro HomeCenter, HTTP, GPIO, DIMMER, RGBW, SHADE, THERMOSTAT_1SP, Fibaro Blind/Shade, Fibaro ON/OFF device, Fibaro dimmer, Fibaro RGBW light, Fibaro Thermostat, Fibaro Temperature Sensor, Fibaro Motion Sensor, SET, TOGGLE, SET COLOR, SET PROGRAM, RAISE, LOWER, STOP, SET MODE, SET SETPOINT
description: Fibaro driver integrates ON/OFF devices, dimmer devices, RGBW devices, thermostats and roller-shutter devices configured in the Fibaro Home Center using an HTTP RESTful API.
---
Fibaro
=======================
The Fibaro driver on the BeoLiving Intelligence integrates ON/OFF devices (ie. wall plugs, switches, motion sensors), dimmer devices, RGBW devices, thermostats and roller-shutter devices configured in the Fibaro Home Center.



Connecting to the system
-------------------------
**Communication with Fibaro products is made through the Fibaro HomeCenter.** This implements an HTTP RESTful API. 
The following is a list of configurations fields that the installer should define in order to establish the connection.

Channel settings are:
- _HomeCenterIP_ : Fibaro Home center IP address.
- _User_ : Fibaro username.
- _Password_ : Fibaro password.

Available resources
--------------------------------
The available resource are:
- **Fibaro Blind/Shade**: Any Blind/Shade device in the installation.
- **Fibaro ON/OFF device (GPIO)**: Any ON/OFF device in the installation.
- **Fibaro dimmer**: Any dimmer or multilevel device in the installation.
- **Fibaro RGBW light**: Any RBGW light in the installation.
- **Fibaro Thermostat**: Any individual thermostats in the installation.
- **Fibaro Temperature Sensor**: Any individual temperature sensor in the installation.
- **Fibaro Motion Sensor**: Any Motion sensors in the installation.

Resource Type
-------------------
- **GPIO**: Fibaro ON/OFF device
- **DIMMER**: Fibaro dimmer
- **RGBW**: Fibaro RGBW device
- **SHADE**: Fibaro Blind/Shade/Shutter
- **THERMOSTAT_1SP**: Fibaro thermostat

Resource Address
-------------------
**The resource address should be the devices ID number**. A unique integer number, assigned by your FIBARO system, that locates a specific device in the installation.

**In the case of thermostats, you can define two IDs (Eg: _55;56_), the first corresponding to a thermostat, and the second to a temperature sensor (ideally one located in the same room).**
If only one ID is provided for a thermostat resource, you will not have a reading of the room temperature (the TEMPERATURE value will copy the SETPOINT value). 

Commands, Events and States
-------------------------------
- Switch commands:
  - **SET**: Set the switch level to 0 (OFF) or 1 (ON).
  - **TOGGLE**: Change the switch state to the opposite of the present one.
- Dimmer commands:
  - **SET**: Set the dimmer level between 0 and 100
- RGBW commands:
  - **SET**: Set the dimmer level between 0 and 100
  - **SET COLOR**: Set the light color in Hue, Saturation and Value format.
  - **SET PROGRAM**: Set the light to a FIBARO preset program of lights.
- Shade commands:
  - **SET**: Set level position of Shade.
  - **RAISE**: Set to maximum level of Shade.
  - **LOWER**: Set to minimum level of Shade.
  - **STOP**: Stop level transition of Shade.
- Thermostat commands:
  - **SET MODE**: Set the thermostat mode to Heat, Eco (equivalent to "Energy Save Heating" in Fibaro), Away, and Off. The four modes will be available in the BLI even if the thermostat only supports some of these modes.
  - **SET SETPOINT**: Set the thermostat's setpoint in the current mode.


Resource states
------------------------------
- **LEVEL**: Level position of Shade/Blind or of the DIMMER device.
- **STATE**: State of the ON/OFF device.
- **MODE**: Thermostat's current mode.
- **SETPOINT**: Thermostat's setpoint in its current mode. The value is displayed in whatever unit you have configured for your BLI.
- **TEMPERATURE**: Temperature reading provided by a temperature sensor, you can associate one sensor to one thermostat, if you dont associate any sensor, the TEMPERATURE value will copy the SETPOINT value.


Resource discovery
------------------
Resource discovery is available and will detect most devices but may not detect all working devices. 

**Devices that work with the same commands as any of the supported devices can be added by the user if the ID number is known.**

Discovered devices displaying "Enabled: false" in their description will probably not work, as they are devices the Fibaro HomeCenter has once worked with but which are not connected anymore.

# Changelog
## v0.2 | 24/07/2020
 - Adds protections to errors while parsing initial state
## v0.3 | 2/08/2020
 - Adds protections to RGBW resources incomplete status feedback
## v0.5 | 4/08/2020
 - Corrects handling of shades and dimmers value limit (99)
## v0.6 | 5/08/2020
 - Adds logs to the refreshState query
## v0.7 | 07/10/2020
 - Improves in-line setup help
## v0.8 | 22/03/2021
 - Added thermostats and temp sensors support
 - Added motion sensor support
 - Other minor changes
## v0.9 | 07/04/2021
 - Fixes dimmer resource type

