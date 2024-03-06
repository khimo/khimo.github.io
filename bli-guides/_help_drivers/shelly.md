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
- **SHDM-2  (DIMMER)**: A Shelly 2 dimmer.
- **SHSW-25.roller (SHADE)**: A Shelly 2.5 device setup as a **roller** for a shade without positioning control.
- **SHSW-25.roller-w-level (SHADE)**: A Shelly 2.5 device setup as a **roller** with positioning control, roller should be calibrated before using this resource [*].
- **SHSW-25.relay (GPIO)**: A Shelly 2.5 device as **relay** and represended by a GPIO resource.
- **SHSW-25.dimmer (DIMMER)**: A Shelly 2.5 device as **relay** and represented by an ON/OFF DIMMER resource.
- **SHSW-1 (DIMMER)**: A shelly 1 device represented by an ON/OFF DIMMER resource.
- **SHSW-1.relay (GPIO)**: A shelly 1 device represented by a GPIO resource.
- **SHPLG-S.relay (GPIO)**: A shelly plug device represented by a GPIO resource.
- **SHPLG-S (DIMMER)**: A shelly plug device represented by an ON/OFF DIMMER resource.
- **SHSW-L.relay (GPIO)**: A Shelly 1L device represented by a GPIO resource.
- **SHSW-L.dimmer (DIMMER)**: A Shelly 1L device represented by an ON/OFF DIMMER resource.
- **SHIX3-1.relay (GPIO)**: A Shelly Ix3 device represented by a GPIO resource. "Momentary" or "Toggle Switch" can be chosen as button type on the Shelly's web interface.
This resource has no commands, input events of "Momentary" buttons (eg SHORTPUSH, LONGPUSH etc.) appear as events. This only works with a really small polling time (couple of seconds), and even then, some events may be lost if they happen too close to each other.
- **RGBW2.color (DIMMER)**: A shelly RGBW2 device in color mode. [**]
- **RGBW2.white (DIMMER)**: A shelly RGBW2 in white mode. One resource added for each white channel. [**]
- **SHDW-1**: A door and window sensor that provides basic open/close notifications as a GPIO. Be aware that this sensor is not very responsive.
- **SHMOS-01** & **SHMOS-02**: Motion sensors that provide basic notifications of motion and vibrations modeled as GPIO. Be aware that these sensors have latency and may not be very accurate.  This device has **NOT been tested** by Khimo, so if you are able to test it please let us know by email.

[*] *SHSW-25.roller with level* will only work if the shelly device has "positioning control" enabled in Shelly's configuration. This feature doesn't work in all roller motors, check in the Shelly documentation before trying this resource.
[**] If you want to change the **SHRGBW2** mode you will have to reload the resources accordingly. 
      This device has not been tested in our lab. If you find any issues please contact us by email.

### Action URL
On supported systems, the BLI can register itself on the action URL of the Shelly device, which can greatly improve the responsiveness of status and events. However, doing so will **overwrite** any manual action URL that you have defined in your Shelly device. To use this functionality, please enable the "Use Action Webhooks" option in the channel settings.

## Resource Address

The resource address is the shelly output channel, usually "0". Use the Import resources to automatically detect the available control points in the device.

## Resource discovery

Resource discovery is available and will detect the corresponding resources that the device supports in the current configuration.

*Please, report any issue with this driver to: support+drivers@khimo.com*

## Changelog
### v0.1  20/08/2020
- Initial version

### v0.2 | 22/09/2020
- Bug fix: cannot fire commands after reloading configuration. Also removed unsupported SHADE's SET command

### v0.3 | 07/10/2020
- Improves in-line setup help

### V0.4 | 22/02/2021
- Adds support for SHSW-1
- Adds support for relay mode of SHSW-25
- Better handles connectivity state
- Updates driver help

### V0.5 | 24/02/2021
- Minor corrections

### V0.6 | 13/04/2021
- Adds SHPLG-S support

### V0.7 | 21/05/2021
- Corrects nonDimmable definition

### V0.8 | 4/08/2021
- Adds SHSW-L support

### V0.9 | 20/08/2021
- New resource that allows to calibrate and to set level to the SHSW-25 roller

### V0.10 | 15/09/2021
- Adds SHIX3 support

### V0.11 | 15/09/2021
- Adds SHDM-2 and RGBW2 support

### V0.12 | 15/12/2022
- Adds SHDW-2
- Adds experimental support for SHMOS-01 and SHMOS-02
- Adds experimental support for actions webhooks, improving I3, SHMOS-01, SHMOS-03 and SHDW-2 responsiveness.

### V0.13 | 24/3/2023
- Fixes RGBW2 support 

### V0.14 | 24/3/2023
- Aligned driver version with latest development changes.

### V0.15 | 15/8/2023
- Corrected color set commands, which were not turning on the dimmers correctly.

### V0.16 | 28/8/2023
- Fixes shade state synchronization

