---
title: Bosch
layout: pagetoc
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

Available resources can be loaded from the Bosch Smart Home
Controller once the connection is established.

## Changelog

### v0.1 | April 2021
 - First market version.

*Please, report any issue with this driver to: support+drivers_bosch@khimo.com.*
