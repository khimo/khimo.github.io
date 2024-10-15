---
title: Niko Home Control
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Niko Home Control, Dimmable Light, Non Dimmable Light, Switch, Thermostat, Shade, Lock, Garage Door, SET, SET SETPOINT, SET MODE, RAISE, LOWER, STOP, OPEN, CLOSE
description: Niko Home Control driver allows to manage dimmers, switches, thermostats, shades, locks and garage doors.
---

# Niko Home Control

## Connecting

To connect to the Niko bridge, simply write the corresponding IP address in the Systems tab.

## Resources

To add resources, simply click on Import Resources -> Load resource from connected system. As of the current version, the driver supports the following resource types and commands:

- Dimmable Light: Dimmers with the command SET to set the dim level and the state LEVEL.
- Non Dimmable Light: Non Dimmable light, with the command SET (only 0 and 100) and the state LEVEL.
- Switch: Switch which includes sockets, light switches, switched fan, etc. This will also be discovered as Non Dimmable Light. Only one of these should be added. Commands are SET to set the state (1,0) and the state STATE.
- Thermostat: Single setpoint thermostats with the commands SET SETPOINT and SET MODE (off, cool, heat). States are SETPOINT, TEMPERATURE for the current ambient temperature, and MODE.
- Shade: Simple shade with the commands RAISE, LOWER, STOP, and SET to set the shade level and the state LEVEL.
- Lock: Door lock with the command SET. Setting TRUE means opening and FALSE means closing. The state is STATE where the values are 1 for open and 0 for closed.
- Garage Door: Garage door control, available commands are OPEN and CLOSE. The state is STATE where 1 is open and 0 is closed.

**KNOWN BUG**: The driver does not go offline after the Niko bridge has been disconnected. 

Please let us know your experience and any issues with this driver at: [support+drivers@khimo.com](mailto:support+drivers@khimo.com)

## Changelog
**v0.1**
  * First public version
