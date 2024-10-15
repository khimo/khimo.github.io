---
title: TP-Link Smart Plug
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: TP-Link Smart Plug, HS100/110, HS105, SET, TOGGLE
description: TP-Link Smart Plug driver allows to control the relay state of TP-Link Smart Plug's HS100/110.
---
# TP-Link Smart Plug

This driver supports communication with TP-Link Smart Plug's HS100/110, allowing to control different the relay state of the switch. Integration with models HS105 is not ensured.

## Connecting to the system

No login process required. 
Channel settings are:
* _Host_ : IP of TP-Link Smart Plug.
* _Port_ : Must be equal to 9999.
## Available resources

The available resource type is:
* **HS100/110 SmartPlug**: Representation of TP-Link Smart Plug.
## Resource Address

**Should be left empty**. 
## Commands, Events and States

* Commands:
  - **SET**: Set Plug state (0/false means Off and 1/true means On). 
  - **TOGGLE**: Toggle Plug state. 
* States:
  - **STATE**: Plug state (0/false means Off and 1/true means On).
