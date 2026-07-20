---
title: QMotion QzHub
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: QMotion QzHub, QMotion QzHub App, SHADE, SET LEVEL, RAISE, LOWER, STOP, Group
description: QMotion QzHub driver integrates QMotion QzHub shades with the BeoLink Gateway.
---
QMotion QzHub
================================================================================
The QMotion QzHub driver on the Beolink Gateway integrates all the Shade Groups configured in the QzHub gateway. 
The standard SHADE commands SET LEVEL, RAISE, LOWER and STOP are available. 
The standard SHADE LEVEL status is not available on this first version. 

Connecting to the system
--------------------------------------------------------------------------------
On the QMotion QzHub App open the navigation menu, tap on Settings and select the hub. 
Under actions there is an "Integrate" option that will provide the integration code needed
to connect, copy it into the corresponding channel argument and hit apply.

* Channel settings are:
  - **\_Gateway Id**: Is behind the gateway with the following prefix "SGW-".
  - **_Integration Code**: Integration code from the QMotion QzHub App.

Available resources
--------------------------------
* **Group**: Any Group of Blinds/Shades in the installation.

Resource Address
-------------------
* **Group**: Every Group of shades is uniquely identified by an id provided by the gateway.

Commands, Events and States
-------------------------------
* Commands:
  - **SET**: Set level position of Group/Shade.
  - **RAISE**: Set to maximum level of Group/Shade.
  - **LOWER**: Set to minimum level of Group/Shade.
  - **STOP**: Stop level transition of Group/Shade.

Resource discovery
------------------
QMotion QzHub Driver of BeoLink Gateway has the capability of import all Groups of Shades/Blinds in QzHub gateway configuration. 

Changelog
---------
   - V0.1 | 2020-12-03
      - Initial version.


