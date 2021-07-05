---
title: Shelly
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Shelly

This driver integrates with the Shelly's local HTTP API.

**Each BeoLiving Intelligence system communicates with a Shelly device**. If you have many devices in your installation you should add as many systems to your BLI.

Connection settings are:

- **IP Address**: The individual device's IP address or local host domain name.
- **User**: Shelly device local user *(optional)*.
- **Password**: Shelly device local password *(optional)*.
- **Polling time**: The resource's state will be retrieved every _X_ seconds.

## Compatible devices and resource types

The available resource are:

- **SHDM-1  (DIMMER)**: A Shelly 1 dimmer.
- **SHSW-25.roller (SHADE)**: A Shelly 2.5 device setup as a **roller** for a shade.
- **SHSW-25.relay (GPIO)**: A Shelly 2.5 device as **relay** and represended by a GPIO resource.
- **SHSW-25.dimmer (DIMMER)**: A Shelly 2.5 device as **relay** and represended by a ON/OFF DIMMER reource.
- **SHSW-1 (DIMMER)**: A shelly 1 device represented by an ON/OFF DIMMER resource.
- **SHSW-1.relay (GPIO)**: A shelly 1 device represented by an GPIO resource.
- **SHPLG-S.relay (GPIO)**: A shelly plug device represented by an GPIO resource.
- **SHPLG-S (DIMMER)**: A shelly plug device represented by an ON/OFF DIMMER resource.

## Resource Address

The resource address is the shelly output channel, usually "0". Use the Import resources to automatically detect the available control points in the device.

## Resource discovery

Resource discovery is available and will detect the corresponding resources that the device supports in the current configuration.


## Changelog
### v0.1 | 20/08/2020
- Initial version

### v0.2 | 22/09/2020
- Bug fix: cannot fire commands after reloading configuration. Also removed unsupported SHADE's SET command

### v0.3 | 07/10/2020
- Improves in-line setup help

### V0.4 | 22/02/2021
- Adds support for SHSW-1
- Adds support for relay mode of SHSW-25
- Better handles connecteivity state
- Updates driver help

### V0.5 | 24/02/2021
- Minor corrections

### V0.6 | 13/04/2021
- Adds SHPLG-S support

### V0.7 | 21/05/2021
- Corrects nonDimmable definition

*Please, report any issue with this driver to: support+drivers@khimo.com*
