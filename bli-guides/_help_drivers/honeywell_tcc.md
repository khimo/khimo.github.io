---
title: Honeywell TCC Thermostat International (experimental)
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Honeywell Total Connect Comfort, EvoHome, Single Zone Thermostat, Connected Round, SET SETPOINT, SET MODE, Follow Schedule
description: Honeywell Total Connect Comfort driver integrates EvoHome, Single Zone Thermostat and Connected Round devices through the international portal.
---
# Honeywell Total Connect Comfort Thermostat driver

This driver is for international accounts. It will only work for accounts that are able to log in in the [international](https://international.mytotalconnectcomfort.com/Account/Login) portal.
Supported Honeywell products: EvoHome, Single Zone Thermostat/Connected Round

## Connecting
To connect to the Honeywell account press the "Link" button in systems. This will redirect to a Honeywell page where email address and password should be entered, after accepting the EULA terms
the location of the desired thermostats should be chosen. 

You should also choose a Temporary override duration. This will be the hours a temporary change in the setpoint will last, if the value is 0 then the changes will be permanent (until a follow schedule command is sent).

## Adding resources
Adding a resource can be done by pressing the *Import resources* button and then *Load
resources from connected system*. A list of the available thermostats should appear.

## Supported resources

Only thermostats are supported. The available commands are:
- Set Setpoint: change the heat setpoint
- Set Mode: choose mode between Off, Auto, Eco, Away, Day Off, Auto With Reset, Custom, Off, Heat and Emercengy Heat. The availability of each mode depends on the system, not all of them may be supported.
- Follow Schedule: Reverts setpoint overrides and makes thermostats follow schedule.

The available states are:
- Temperature: if available, the current temperature
- Setpoint: the current setpoint
- Mode: the current mode
- Online: whether the device is online.
- Setpoint mode: whether the setpoint is following schedule, is in permanent override or temporary override.

## Changelog
### v0.1 | 11/09/2021
- Initial version

