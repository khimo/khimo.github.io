---
title: Netatmo
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Netatmo

**DISCLAIMER:** This driver has **only** been tested for the Smart Radiator Valve. Other resources may not work. All feedback is welcome at support+netatmo@khimo.com

## Connecting

To connect with the Netatmo system you should press the "Link" button in systems. This will redirect to a Netatmo page where you should enter your email address and password and accept the terms.

## Adding resources

This driver supports the Smart Thermostat, the Smart Radiator Valve, Smarther with Netatmo, Smart Modulating Thermostat, Netatmo lock and Smart Home Weather Station. 
The Home Weather Station must be added manually with the MAC address as the resource address. The other supprted devices can be discovered automatically by pressing the *Import resources* button and then *Load
resources from connected system*.


## Supported resources

The available commands are:
- Thermostat:
  - Set Setpoint: change the heat setpoint
  - Set Mode: choose mode between Heat, Cool and Off (depending on the thermostat). In Smart Radiator Valve and Smart Thermostat 'Heat' reverts to the schedule.
  - **Follow Schedule**: If the setpoint was changed, this command revokes the setpoint and goes back to following the home's schedule.
- Lock:
  - Set: set lock state to 1 (unlock) or 0 (lock)

The available states are:
- Thermostat:
  - Temperature: if available, the current temperature in the BLI's temperature unit
  - Setpoint: the current setpoint
  - Mode: the current mode
  - Online: whether the device is online.
- Lock:
  - State: the state will only show the state according to the last command the BLI sent. If changes that don't involve the BLI happen the state will NOT change.
- **Weather**:
  - Temperature: the current temperature in the BLI's temperature unit
  - CO2: the current CO2 level in ppm
  - Humidity: the current humidity level in percentage
  - Noise: the current noise level in dB
  - Pressure: the current pressure in mbar
  - Online: whether the device is online

Note for the weather station: according to Netatmo you should keep in mind that data are measured every 5 minutes by the modules and sent to the servers every 10 minutes.
This means that the state will not be updating in real time, worst case scenario it will in 10 minutes.

*Please, report any issue with this driver to: support+netatmo@khimo.com*

## Changelog
### v0.1 | 6/12/2021
- Initial version

