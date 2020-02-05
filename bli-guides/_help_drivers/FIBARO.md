---
title: FIBARO
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
Fibaro
=======================
The Fibaro driver on the BeoLiving Intelligence integrates ON/OFF devices (ie. wall plugs, switches), dimmer devices, RGBW devices and roller-shutter devices configured in the Fibaro Home Center.



Connecting to the system
-------------------------
**Communication with Fibaro products it's made through the Fibaro HomeCenter.** This implements an HTTP RESTful API. 
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

Resource Type
-------------------
- **GPIO**: Fibaro ON/OFF device
- **DIMMER**: Fibaro dimmer
- **RGBW**: Fibaro RGBW device
- **SHADE**: Fibaro Blind/Shade/Shutter

Resource Address
-------------------
**The resource address should be the devices ID number**. A unique integer number, assigned by your FIBARO system, that locates a specific device in the installation.

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

Resource states
------------------------------
- **LEVEL**: Level position of Shade/Blind or of the DIMMER device.
- **STATE**: State of the ON/OFF device.

Resource discovery
------------------
Resource discovery is available and will detect most devices but may not detect all working devices. 

**Devices that work with the same commands as any of the supported devices can be added by the user if the ID number is known.**

Discovered devices displaying "Enabled: false" in their description will probably not work, as they are devices the Fibaro HomeCenter has once worked with but which are not connected anymore.
