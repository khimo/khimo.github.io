---
title: Dynalite | Dynet-1
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Dynalite driver | Dynet-1

Dynalite is a lighting and automation control system that offers power dimmer controllers, signal dimmer controllers, and more.

## Connecting to the system

Connection to Dynalite systems can be done via the RS232 interfaces, either using the BeoLiving Intelligence's USB/RS232 port or via an Ethernet to RS232 interface.

Native Dynalite Ethernet interfaces are not supported in the current software. However, you may be able to set up a Dynet-1 connection port on some gateways. If you test this and it works, please write to us at support+drivers-dynalite@khimo.com with the instructions on how you configured the third-party interface to accept Dynet-1 and the version of the gateway that you used.


Connection settings are:
 - **Connection type**: Direct RS232 or over ethernet.
 - **RS232 over ethernet**
   - **Host**: Hostname or IP address of the Controller ethernet interface.
   - **Port**: Port number on which the controller listens for connections.
 - **RS232**
   - **USB serial adapter**: Select one of the available.
   - **Baud rate**
   - **Fc mode

## Available resources

The available resource are:
 - **Dynalite Dimmer (DIMMER)**: A dimmer is identified by the area and the channel number, both expressed as decimal numbers and separated by comma.
 - **Dynalite Preset (BUTTON)**: A preset is identified by an area number plus a preset number separated by a comma.
 - **Dynalite Shade Preset 1, 2 & 3 (SHADE)**: A "shade preset 1,2 and 3" is identified by an area number, it is a special resource that is represented as SHADE in the BeoLiving Intelligence and will send a preset selection to an area, as follows:
  - When RAISE command is sent it will set preset 1
  - When STOP command is sent it will set preset 2
  - When LOWER command is sent it will set preset 3

 > In this way you can control a shade using area presets.

## Resource Address

 - **Dynalite Dimmer (DIMMER)**: Area and logical channel separated by comma (E.g: '01,23').
 - **Dynalite Preset (BUTTON)**: Area, preset number values separated with comma (E.g: area 1 preset 19 address: '01,19').
 - **Dynalite Shade Preset 1, 2 & 3 (SHADE)**: Area as decimal number (e.g.: area 1).

## Resource Events

A preset selection can be detected by BeoLiving Intelligence as an event. 

To set up a Dynalite control to only affect the BeoLiving Intelligence, this control must be assigned an area number that is not in use by any dimmer or actuator.

## Resource Commands

- Preset commands:
  - **PRESS**
- Dimmer commands:
  - **SET**: Set the dimmer level between 0 and 100
  - *_FADE**: Fade the dimmer to a level between 0 and 100
- Shade commands:
  - **LOWER**
  - **RAISE**
  - **STOP**

## Resource States

 - **LEVEL**: Level position of the DIMMER device.
 - **_TARGET**: Target level position of the DIMMER device.
 - **STATE**: State of the PRESET device.

## Changelog

### v2.0 | 23/12/2020
 - New version of Dynalite driver


*Please, report any issue with this driver to: support+drivers@khimo.com*

