---
title: MasterLink Gateway Protocol
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: MasterLink Gateway Protocol, MLGWP, MasterLink, MLN, RENDERER, _custom, STATE_UPDATE, LIGHT_AND_CONTROL, MENU, EXIT, BACK, CINEMA_ON, CINEMA_OFF, INPUT, ONLINE, SELECTED_SOURCE, SELECTED_SOURCE_INPUT, COMMAND
description: MasterLink Gateway Protocol integrates MasterLink products using a BeoLink Gateway or MasterLink Gateway as a MasterLink interface.
---
# MasterLink Gateway Protocol DRIVER

Integrate MasterLink products using a BeoLink Gateway or MasterLink Gateway as a MasterLink interface.


## Connecting to the system

The Gateway should have MasterLink Gateway Protocol (MLGWP) enabled and all the MasterLink products should have an assigned MLN (Node number) in the Gateway. The MLN is configured on the web _Setup_ page of the gateway under *Interfaces-->B&O Products* for each MasterLink product.

It is not necessary to define any other configuration in MLGW or BLGW, the configuration of the sources must be done in the BLI itself.

After defining all the resources in this system, please synchronize and define all the inputs in the Interfaces tab.
Connection settings are:
 - **Navigation button**: Check the box if your product uses a joystick to navigate through menus.
 - **Username**: Username for the system (default is "admin").
 - **Password**: Password for the system (default is "admin").
 - **Host**: Hostname or IP address of the controller's ethernet interface.
 - **Port**: Port number on which the controller listens for connections.

## Available resources (RESOURCE TYPE)

The available resource are:
 - **MasterLink video product (RENDERER):** resources will send all their commands to MasterLink destination VIDEO.
 - **MasterLink audio product (RENDERER):** will send all their commands to the AUDIO destination. 

> This is the only difference between these resources, all the available commands and sources will be the same for each of them.

 - **MasterLink room (_custom):** resources are used to track the IR Light and Command inputs in a room. Use this resource to track IR events and fire macros to react to them.


## Resource Address

The resource address **must be the MasterLink Node (MLN) number** to identify what device is wanted.

An MLN number identifies each node (product) attached to a MasterLink network. It ranges from 1 to 16 and is assigned during the setup of the MasterLink or BeoLink Gateway.

## Resource discovery

Resource discovery is not available.

## Resource events

- Masterlink audio/video events:
  - **STATE_UPDATE**: Update that can (not obligatory) include information about the INPUT, ONLINE status, SELECTED_SOURCE and SELECTED_SOURCE_INPUT.
- Masterlink room events:
  - **LIGHT_AND_CONTROL**: A light **or** control event that includes the detected COMMAND.

## Captured events

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource commands

 - Masterlink audio/video commands: All the traditional RENDERER commands are available (BeoRemote One's commands), including: CHANNEL UP/DOWN, PLAY, PAUSE, REWIND, STANDBY, VOLUME UP/DOWN, the colours and arrows, among many others.
 - Custom commands: Supported custom commands are MENU, EXIT, BACK, CINEMA_ON, and CINEMA_OFF. More may be added upon request.

## Resource states

- Masterlink audio/video states:
  - **INPUT**: Service that is acting as input to the TV. The exact names may change depending on the installation. E.g. "airplay", "youtube", "deezer".
  - **ONLINE**: _=true_ if the TV is online.
  - **SELECTED_SOURCE**: Name of the source that is providing feedback.
  - **SELECTED_SOURCE_INPUT**: May overlap with INPUT or provide additional information. E.g. "com.webos.app.livetv", "youtube.leanback.v4", "deezer".


## Changelog
 
### v0.1 | 2019/09/01
 - Initial version

### v0.2 | 2019/12/27 
 - Adds support to custom commands and Light & Control events

### v0.3 | 2020/02/28 
 - Corrects WIND and STOP commands, improves inline help.

### v0.4 | 2020/02/28 
 - Minor fix.

### v0.6 | 2020/07/29
 - Added configuration parameters to resources


*Please, report any issue with this driver to: support+drivers@khimo.com*
