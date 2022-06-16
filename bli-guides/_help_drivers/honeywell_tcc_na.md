---
title: Honeywell TCC Thermostat North America
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Honeywell Total Connect Comfort Thermostat driver

This driver is for north american accounts. It will only work for accounts that are able to log in in the [north american](https://mytotalconnectcomfort.com/portal/) portal.
Supported Honeywell products: TCC North America: Wifi 9000, Vision Pro, Focus Pro, RedLink Prestige IAQ

## Connecting
To connect to the Honeywell account press the "Link" button in systems. This will redirect to a Honeywell page where email address and password should be entered, after accepting the EULA terms
the location of the desired thermostats should be chosen. 

You should also choose a Temporary override duration. This will be the hours a temporary change in the setpoint will last, if the value is 0 then the changes will hold (until a follow schedule command is sent).

## Adding resources
Adding a resource can be done by pressing the *Import resources* button and then *Load
resources from connected system*. A list of the available thermostats should appear.

## Supported resources

The following types of thermostats are supported: 1 Setpoint Heat, 1 Setpoint Cool, 2 Setpoints Heat, Cool and 2 Setpoints (Heat and Cool) with Auto.
The available commands are:
- Set Setpoint: change the heat setpoint
- Set Mode: choose mode between Off, Auto, Heat, Cool and Em. Heat. The availability of each mode depends on the thermostat type, not all of them may be supported
- Follow Schedule: Reverts setpoint overrides and makes thermostats follow schedule
- Set Fan Auto: Sets the fan in auto mode

The available states are:
- Temperature: if available, the current temperature
- Setpoints: the current setpoint
- Mode: the current mode
- Online: whether the device is online
- Setpoint mode: whether the setpoint is following schedule, is holding or temporary
- Fan Auto: whether the fan is in auto mode or not


## Changelog
### v0.1 | 22/11/2021
- Initial version

