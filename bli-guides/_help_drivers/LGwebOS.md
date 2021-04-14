---
title: LG webOS TV
layout: pagetoc
---

Integration with LG webOS Smart TVs.

## Connecting to the system

Connection to a particular TV is always defined by resource and not system. This is, the system is of **all** LG TVs in your installation, and each TV is an individual resource inside the system.

It is always recommended to use ethernet connection, in case of using WiFi you should turn on the "Mobile application" option in LG Connectivity settings. Take into account that WAKEUP function may fail or not be reliable while connected through WiFi.

## Available resources (RESOURCE TYPE)

Each TV is represented as a resource and follows the standard AV Resource definition.

- The available resource are:

  - **LG webOS TV (RENDERER)**: Any LG smart TV in the installation.

  - **LG webOS TV Relative Volume (RENDERER)**: Any LG smart TV in the installation. This resource makes sense in cases when the tv doesn't handle the setting of an absolute value for the volume output properly, this was seen in some TVs with a soundbar plugged in.

## Resource Address

The address of each resource is the LG smart TV IP address or host, and an optional MAC address to wake up the TV.

The driver will do the best to find the MAC address automatically, if you have a special network setup and you need to use a special MAC address, just write the MAC after the IP.

E.g:
 - 192.168.1.120
 - 192.168.0.33;AA:BB:CC:DD:EE:11 
 - uuid:1a6b23c4-d567-e4h8-94f0-f1gbfcb7df55 *(Discovered resource address)*

## Resource discovery

TV's installed in the same network as the BLI should appear by pressing the "Show Discovered Resources" button. The address of a resource added using the discovery feature is of a particular format, starting with "uuid:" followed by and alpha-numerical string.

## Resource Events

- LG webOS TV events:
  - **STATE_UPDATE**: Update that can (not obligatory) include information about the INPUT, ONLINE status, SELECTED_SOURCE and SELECTED_SOURCE_INPUT.

## Captured events

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource Commands

 - LG webOS TV commands: All the traditional RENDERER commands are available (BeoRemote One's commands), including: CHANNEL UP/DOWN, PLAY, PAUSE, REWIND, STANDBY, VOLUME UP/DOWN, the colours and arrows, among many others.

## Resource States


- **Both resources have the following states**:
  - **INPUT**: Service that is acting as input to the TV. The exact names may change depending on the installation. E.g. "com.webos.app.livetv", "airplay", "youtube.leanback.v4", "deezer".
  - **ONLINE**: _=true_ if the TV is online.
  - **SELECTED_SOURCE**: The TV (Resource) that is playing. E.g. "area_name/zone_name/RENDERER/LG webOS TV".
  - **SELECTED_SOURCE_INPUT**: May overlap with INPUT or provide additional information. E.g. "com.webos.app.livetv", "youtube.leanback.v4", "deezer".
  - **CURRENT_CHANNEL**: Displayed if available.
  - **MUTE**: _=true_ if the TV is muted.
  - **NOW_PLAYING**: May be more informative about the current content. E.g. "TV", "Youtube", "Deezer"
- **For the LG webOS TV the next state is added**:
    - **VOLUME**: Current volume of the resource (0-99).



## Changelog

### v0.1 | 2020
 - First market version fully supporting the integration of the TV with the BLI.

### v0.2 | 2020
 - Addition of a resource type that handles relative volume only.

*Please, report any issue with this driver to: support+drivers_lgwebos@khimo.com.*