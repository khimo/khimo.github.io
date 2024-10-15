---
title: Lutron LEAP - Caseta, RA2 Select, RadioRA3, HomeWorks
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Lutron, LEAP, Caseta, RA2 Select, RadioRA3, HomeWorks, BUTTON, BUTTON WITH LED, DIMMER, SWITCH, MOTOR, SHADE, SHADE WITH TILT, SHADE WITH TILT WHEN CLOSED, TILT, KETRA DIMMER, OCCUPANCY, WHITE TUNE, AREA SCENE, PRESET, SINGLE SETPOINT THERMOSTAT, DUAL SETPOINT THERMOSTAT, SET, SET COLOR, SET VIBRANCY, SET COLOR TEMPERATURE, RAISE, LOWER, STOP, OPEN, CLOSE, SET SETPOINT, SET MODE, SET FAN AUTO
description: Lutron LEAP driver allows to integrate Lutron RA2 Select, RadioRA3, Caseta and HomeWorks systems managing buttons, dimmers, shades, occupancy sensors, thermostats and scenes.
---
# Lutron RA2 Extensible Application Protocol (LEAP)

LEAP is the protocol used to integrate Lutron RA2 Select, RadioRA3, Caseta and HomeWorks
systems.

LEAP development is ongoing so only those devices and features already supported
by the protocol at the time of developing this driver are supported.

**Note**: If you've been using this driver with a Lutron system and you wish to change it (eg. from HomeWorks to RA2 Select),
the driver must be deleted and re-added in order to achieve the connection. 

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

## Supported resources

There are some differences within LEAP between HomeWorks setups and Ra2 Select/Caseta setups,
this driver intends to overcome this differences but there are some resources that were available
for testing in one kind of setup and not the other.

### BUTTON
Button without feedback, good for Pico controls, but can be used for any Lutron Button.

### BUTTON WITH LED
Button with feedback LED, used for Keypads.
Only available for HomeWorks setups.

*Warning*: Buttons events received by the BLI will depend in the configuration of the button in Lutron side. If nothing is configured in lutron for a given event, you will not get the Event in the BLI. In order to get most buttons events it is recommended to setup the button in Lutron as "Conditional" and add at lease one "dummy" action (e.g.: an unnafected action in a lighting zone). 

### DIMMER
Simple dimmer with Level, used for Lutron *Dimmed* zones.

### SWITCH
Light with on/off functionality, used for Lutron *Switched* zones.

#### MOTOR
Shade with Raise/Lower/Stop functionality, used for Lutron *OpenCloseStop* zones.

### SHADE
Shade with Level, and Raise/Lower/Stop functionality, used for Lutron *Shade* zones.
*Not available in test setup, should work as it is pretty similar to ShadeWithTilt, but was not tested.*

### SHADE WITH TILT
Shade with Level and Tilt, has Raise/Lower/Stop functionality and also Raise tilt/Lower tilt/Stop tilt, used for Lutron *ShadeWithTilt* zones.

### SHADE WITH TILT WHEN CLOSED
Shade with Level and Tilt, has Raise/Lower/Stop functionality and also Raise tilt/Lower tilt/Stop tilt, used for Lutron *ShadeWithTiltWhenClosed* zones.
*Not available in test setup, should work as it is pretty similar to ShadeWithTilt, but was not tested.*

### TILT
Shade with Tilt but no Level, has Raise tilt/Lower tilt/Stop tilt functionality, used for Lutron *Tilt* zones.
*Not available in test setup, should work as it is pretty similar to ShadeWithTilt, but was not tested.*

### KETRA DIMMER
Dimmer with Level, Color, Vibrancy and Color temperature.
Has SET, SET COLOR, SET VIBRANCY and SET COLOR TEMPERATURE commands.
Used for SpectrumTune Lutron zones.
Only available for HomeWorks setups.

### OCCUPANCY
GPIO with state, but no commands, reflects the current state of a Lutron Area occupancy. 
_OCCUPANCY reflects exactly the Lutron state, while STATE is 1 if the Area is Occupied and 0 otherwise.
*This was not tested for Ra2 Select/Caseta, so it might be unstable.*

### WHITE TUNE
Dimmer with Level and Color temperature. Has SET and SET COLOR TEMPERATURE commands.
Used for WhiteTune Lutron zones.
Only available for HomeWorks setups.

### AREA SCENE
Button with state, PRESS command selects it as the active scene for the corresponding area.
State indicates whether it is active, inactive or no scene is active.

### PRESET
Button with PRESS command to activate it. 
Only Presets used on buttons or area scenes are retireved automatically, 
but knowing a preset href one could add it manually to use it.

### SINGLE SETPOINT THERMOSTAT
Thermostat with one setpoint, used for Lutron with HVAC zones. Has SET SETPOINT, 
SET MODE (Heat, Cool, Auto, Em.Heat, Off) and SET FAN AUTO (Auto, On).

**Note**: If a dual setpoint thermostat is configured to behave as single setpoint (for example, by enabling
HEAT mdoe only), then it should be added as a SINGLE SETPOINT THERMOSTAT. This thermostat will map the
enabled mode setpoint to the current setpoint. 

### DUAL SETPOINT THERMOSTAT
Thermostat with two setpoints, used for Lutron with HVAC zones. Has SET HEAT SP, SET COOL SP, 
SET MODE (Heat, Cool, Auto, Em.Heat, Off) and SET FAN AUTO (Auto, On). Heat and Cool setpoint may have a 
compulsory difference between them stated by the Lutron device, which is kept when changing setpoints.

### Changelog
#### v0.5 | 12/10/2022
 - Adds support to OpenCloseStop as MOTOR shade

<!-- TODO:

Discovery
discovery works but is unused as there is no web UI and the app has no way to
add resources.

Telnet
user & password are used for telnet (old protocol) and may be we should
add here if not compatible with old driver, also there is in the new protocol
a user/password authentication described but not developed/working/etc.

More resource types:
 | Receptacle              | A receptacle zone                                                                                                                       | GoToReceptacleLevel                                   |
 | CCO                     | A CCO zone                                                                                                                              | GoToCCOLevel                                          |
 | FanSpeed                | A fan speed zone, capable of a set of speeds                                                                                            | GoToFanSpeed                                          |

Shades
Test with more real shades, tested only shade with tilt.

Switches
Test. Tried to tes using our dimmer but:- "This request is not supported : Only switched zones can be sent to a switched level"

-->

