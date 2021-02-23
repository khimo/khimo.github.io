---
title: FC3500 thermostat
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# FC3500 thermostat

## Conectivity

In order to connect a FC3500 system to the BLI/BLGW you need to put both into a stable network over ethernet.
The only arguments the driver needs is the IP address of the device and the port (502 by default), specified
in system tab.

## Connecting more than one devices

To connect multiple devices to the BLGW it's needed to add them in the system tab with its respective ip
address and port (502 by default).

## Events

Event STATE_UPDATE will be executed if any state changes.
The driver has the following states:

   + SETPOINT
   + MODE
   + TEMPERATURE
   + FAN SPEED

Where TEMPERATURE is the room temperature.

## Commands

Accepted commands are:

   + SET SETPOINT
   + SET MODE
   + SET FAN SPEED
   + SET FAN ONLY
