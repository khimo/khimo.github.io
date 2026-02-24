---
title: Bosch
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Bosch Smart Home, HTTP, Twinguard, Climate Control, Radiator Thermostat, Smart Plug, Light Control, Shade Control
description: This driver integrates Bosch Smart Home Controller, allowing to control Twinguard, Climate Control, Radiator Thermostat, Smart Plug, Light Control and Shade Control.
---
# Bosch Smart Home

This driver supports communication with a Bosch Smart Home Controller,
allowing to control different resources, such as Climate Control and
Twinguard.

## Connecting to the system

Connection to the system is done via an HTTP REST connection with the
Bosch Smart Home Controller. The following configuration is needed:

 1. *Smart Home Controller host*: The IP address or host name of the
Smart Home Controller.
 2. *Smart Home Controller password*: The system password of your
Bosch Smart Home Controller, which was created upon initial setup.

The first step for establishing the connection is to pair the BLI
with the Bosch Smart Home Controller. This should be done **only
one time**, throught the following steps:

 1. Press the Bosch Smart Home Controller's front-side button,
until the LEDs begin flashing.
 2. Press the "Register Client" button on the system configuration.

If the LEDs on the Bosch Smart Home Controller stop flashing, then
the pairing was succesful.

## Available resources

Bosch Smart Home supports the following resource types:

 1. *Twinguard*, which acts as a smoke detector and allows to
monitor air temperature, humidity and purity. 
 2. *Climate Control*, which acts as a single setpoint thermostat.
 3. *Radiator Thermostat*, which acts as a single setpoint thermostat.
 4. *Smart Plug*, which acts as a general purpose IO device (GPIO) [1].
 5. *Light Control*, which acts as a non-dimmable dimmer [1].
 6. *Shutter Control*, which acts as a general purpose shutter [2].
 7. *Shade Control*, which acts as a shade with level [2].
 8. *Smoke Detector*
 9. *Switch Module*
 10. *Contact Sensor*
 11. *Alarm*
 12. *Scenario*
 13. *User State*

Notes:
 1. Smart Plugs and Light Control resources are discovered with the same addresses.
 2. Shutter Control and Shade Control are discovered with the same addresses.

Available resources can be loaded from the Bosch Smart Home
Controller once the connection is established.

## Changelog

### v0.1 | April 2021
 - First market version.
### v1.0 | April 2022
 - Implements smart plug and light control resources.
### v2.0 | June 2023
 - Corrects several bugs.
 - Implements shutter control.
### v2.1 | Oct 2024 - Many thanks to Brad Smith
 - Adds alarm state to Twinguard.
 - Adds smoke detector device.
 - Adds switch control and light switch control support for relay and shutter with child lock.
 - Shutter control and shade control support child lock and events state.
 - Added Contact Sensor II and Contact Sensor II Plus with eventing contact closure, vibration detection (when supported) and eventing of bypass state.
 - Implements an alarm for intruder detection system.
 - Adds Smoke detection system as a resource.
 - Adds scenarios as a BUTTON resource.
 - Adds user states as a resource.
 - Several error corrections and functionality improvements.

*Please, report any issue with this driver to: support+drivers_bosch@khimo.com.*
