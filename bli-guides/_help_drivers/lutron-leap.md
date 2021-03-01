---
title: Lutron LEAP
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Lutron RA2 Extensible Application Protocol (LEAP)

LEAP is the protocol used to integrate Lutron RA2 Select, Caseta and HomeWorks
systems.

LEAP development is ongoing so only those devices and features already supported
by the protocol at the time of developing this driver are supported.

*Buttons are not supported.*
Dimmers, Shades and Switches are supported.

## Connecting

To connect to a Lutron device add the system and set the IP address at the
connection settings, after a couple of seconds press the device button to
authorize BLI to connect. You can check the logs hitting the system connection
status and there should appear a message asking you to press the mentioned
button, but giving it a couple of seconds should be enough.
After another couple of seconds the connection status should become green.

## Adding resources

To add resources it is recommended to use the import resources functionality.
Under the *Resources* menu, press the *Import resources* button and then *Load
resources from connected system*, all supported devices connected to your Lutron
bridge should show up to be added.

<!-- TODO:

Discovery
discovery works but is unused as there is no web UI and the app has no way to
add resources.

Telnet
user & password are used for telnet (old protocol) and may be we should
add here if not compatible with old driver, also there is in the new protocol
a user/password authentication described but not developed/working/etc.

More resource types:
 | SpectrumTune            | A zone capable of going to a color, vibrancy, and brightness. This control type is commonly used to describe control of Ketra products. | GoToSpectrumTuningLevel, Raise , Lower , Stop         |
 | HVAC                    | An HVAC zone for controlling temperature                                                                                                | not supported                                         |
 | Receptacle              | A receptacle zone                                                                                                                       | GoToReceptacleLevel                                   |
 | CCO                     | A CCO zone                                                                                                                              | GoToCCOLevel                                          |
 | FanSpeed                | A fan speed zone, capable of a set of speeds                                                                                            | GoToFanSpeed                                          |

Shades
Test with more real shades, tested only shade with tilt.

Switches
Test. Tried to tes using our dimmer but:- "This request is not supported : Only switched zones can be sent to a switched level"

-->
