---
title: Shelly
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Shelly

This driver integrates with the Shelly 1 device for Dimmer control, and with the Shelly 2.5 device for Shade control.

## Connecting to the system
**Each system communicates with one device**, each device has an independent IP addres, user and password and should be added separately. If you have many devices in your installation you should add as many systems to your BLI.

You will first need an account, which you can create at [Shelly Cloud page](http://my.shelly.cloud). IMPORTANT: Do not show this authkey and/or server location to anyone, if someone else has it they will be able to control your devices! If you change your account password, the authkey will be changed too.

Connection settings are:
 - **IP address**: The individual device's IP address.
 - **User**: Shelly cloud user.
 - **Password**: Shelly cloud personal password.
 - **Polling time**: The resource's state will be retrieved every _X_ seconds.

## Available resources (RESOURCE TYPE)

The available resource are:
 - **SHSW-25.roller (SHADE)**: A Shelly 2.5 device setup as a **roller** shade. If setup as a **motor** shade it wont work.
 - **SHDM-1 (DIMMER)**: A Shelly 1 device setup as a dimmer.

## Resource Address

**The resource address should not be manually configured**. Use the Import resources to automatically detect the relay.

## Resource discovery

Resource discovery is available and will detect the corresponding device (only one). If your relay is in "motor" mode, or other not-supported modes it will not be discovered.

## Resource Events

All resources are capable of sending STATE_UPDATE events, with varying information.
SHADE: STATE_UPDATE with either "open", "close", or "stop".
DIMMER: STATE_UPDATE with LEVEL value.

## Captured events

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource Commands

- SHADE commands:
  - **SET**: To a specific LEVEL.
  - **STOP**: If currently moving.
  - **RAISE**
  - **LOWER**
- DIMMER commands:
  - **SET**: Set the dimmer level between 0 and 100.

## Resource States

 - DIMMER states:
    - **LEVEL**: Level position of the DIMMER device.
 - SHADE states:
    - **_state**: State of the shade.

## Changelog
### v0.1 | 20/08/2020
 - Initial version

### v0.2 | 22/09/2020
 - Bug fix: cannot fire commands after reloading configuration. Also removed unsupported SHADE's SET command
 
### v0.3 | 07/10/2020
 - Improves in-line setup help


*Please, report any issue with this driver to: support+drivers@khimo.com*
