---
title: FIBARO
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: FIBARO, Fibaro, NICE, HC2, HC3, Yubii, Zooz, Home Center, HTTP, GPIO, DIMMER, RGBW, SHADE, THERMOSTAT_1SP, BUTTON, Fibaro Blind/Shade, Fibaro ON/OFF device, Fibaro dimmer, Fibaro RGBW light, Fibaro Thermostat, Fibaro Temperature Sensor, Fibaro Motion Sensor, Fibaro Door/Window Sensor, Fibaro Scene, SET, TOGGLE, SET COLOR, SET PROGRAM, RAISE, LOWER, STOP, SET MODE, SET SETPOINT, PRESS, BATTERY
description: Fibaro / NICE driver integrates ON/OFF devices, dimmers, RGBW lights, roller shutters, thermostats, motion sensors, door/window sensors and scenes from Fibaro Home Center 2, Home Center 3, Yubii Home and Zooz Z-Box Hub via HTTP REST API.
---

Fibaro (NICE Group)
=======================
The Fibaro driver on the BeoLiving Intelligence integrates devices configured in **Fibaro Home Center 2 (HC2)**, **Home Center 3 (HC3)**, and NICE-branded hubs (Yubii Home and Zooz Z-Box Hub).

Fibaro was acquired by NICE Group in 2018. NICE Group maintains Fibaro's Home Center platform. Yubii Home and Zooz Z-Box Hub are NICE-branded variants that run the same HC3 firmware and API.

Supported device categories: ON/OFF devices (wall plugs, switches), dimmers, RGBW lights, roller shutters/blinds, thermostats, temperature sensors, motion sensors, door/window sensors, and scenes.

Note: Virtual Devices are not supported by this driver.

Supported hubs
--------------
| Hub | Model | API |
|-----|-------|-----|
| Fibaro Home Center 2 | HC2 | v4 |
| Fibaro Home Center Lite | HCL | v4 |
| Fibaro Home Center 3 | HC3 | v5 |
| Fibaro Home Center 3 Lite | HC3L | v5 |
| Yubii Home | YH | v5 |
| Zooz Z-Box Hub | ZB | v5 |

The API version is detected automatically at startup from the hub serial number. No manual configuration is required.


Connecting to the system
-------------------------
**Communication is made through the HTTP REST API (port 80) over the local network.**

The driver automatically detects the API version based on the hub serial number:
- **HC2 / HCL** use API v4
- **HC3 / HC3 Lite / Yubii Home / Z-Box Hub** use API v5

No manual API version configuration is required.

The Home Center must be reachable on the local network and have a static IP or DHCP reservation. The default credentials are admin/admin—change the password in the Fibaro app for security.

Channel settings:
- **_HomeCenterIP_**: Local network IP or hostname of the hub
- **_User_**: Login username (default: admin)
- **_Password_**: Login password (default: admin)
- **_System Info_** (read-only): Detected hub model/product name (e.g. "Home Center 3"). Populated automatically on connection.
- **_System Fw Version_** (read-only): Detected hub firmware version (e.g. "v5.150.37"). Populated automatically on connection.


Available resources
--------------------------------
- **Fibaro Blind/Shade**: Any blind, shade, or roller shutter device.
- **Fibaro ON/OFF device (GPIO)**: Any binary on/off device (wall plug, relay switch).
- **Fibaro dimmer**: Any dimmer or multilevel switch device.
- **Fibaro RGBW light**: Any RGBW light device.
- **Fibaro Thermostat**: Any HVAC thermostat device.
- **Fibaro Temperature Sensor**: Any stand-alone temperature sensor.
- **Fibaro Motion Sensor**: Any motion sensor device.
- **Fibaro Door/Window Sensor**: Any door or window contact sensor.
- **Fibaro Scene**: Any scene configured in the Fibaro Home Center.


Resource Type
-------------------
- **GPIO**: Binary on/off devices and sensors (switches, wall plugs, motion sensors, door/window sensors)
- **DIMMER**: Dimmers and multilevel switches
- **RGBW**: Color-controllable lights (mapped as DIMMER with color capability)
- **SHADE**: Roller shutters, blinds, and window coverings
- **THERMOSTAT_1SP**: HVAC thermostats with single setpoint
- **BUTTON**: Fibaro scenes (stateless action triggers)


Resource Address
-------------------
**The resource address is the device ID number** -- a unique integer assigned by your Fibaro system.

**For thermostats**, you can define two IDs separated by a semicolon (e.g. _55;56_): the first is the thermostat ID, the second is an optional temperature sensor ID. If no sensor ID is provided, the TEMPERATURE state mirrors the SETPOINT.

**For scenes**, the address is the scene ID number shown in the Fibaro interface.


Commands, Events and States
-------------------------------
- Switch commands:
  - **SET**: Set the switch to 0 (OFF) or 1 (ON).
  - **TOGGLE**: Toggle the switch state.
- Dimmer commands:
  - **SET**: Set the dimmer level (0-100).
- RGBW commands:
  - **SET**: Set the dimmer level (0-100).
  - **SET COLOR**: Set the light color in HSV format (Hue 0-360 degrees, Saturation 0-100%, Value 0-100%).
  - **SET PROGRAM**: Activate a Fibaro preset lighting program (0-20, configured in Fibaro Home Center).
- Shade commands:
  - **SET**: Set the shade level (0-100).
  - **RAISE**: Fully raise the shade.
  - **LOWER**: Fully lower the shade.
  - **STOP**: Stop any shade movement.
- Thermostat commands:
  - **SET MODE**: Set mode to Heat (active heating), Eco (energy-saving mode), Away (away mode), or Off (disabled).
  - **SET SETPOINT**: Set the thermostat setpoint for the current mode.
- Scene commands:
  - **PRESS**: Start the Fibaro scene.


Resource states
------------------------------
- **LEVEL**: Level of a DIMMER or SHADE device (0-100).
- **STATE**: Binary state of a GPIO device (0=off/closed, 1=on/open).
- **COLOR**: HSV color of an RGBW device.
- **MODE**: Current thermostat mode (Off=disabled, Heat=active heating, Eco=energy-saving, Away=away mode).
- **SETPOINT**: Thermostat setpoint in the current mode (shown in your BLI temperature unit).
- **TEMPERATURE**: Temperature reading from the associated sensor. Mirrors SETPOINT if no sensor is configured.
- **BATTERY**: Battery level (0-100%) for motion sensors and door/window sensors.


Sensor configuration
--------------------
Door/Window Sensors have a configurable **class** field (selectable per resource):
- **door**: for door contact sensors
- **window**: for window contact sensors

Both classes report the same binary STATE (0=closed, 1=open) and BATTERY level. The class only affects the icon shown in the BLI interface. Motion sensors are fixed to class **movement**.


Resource discovery
------------------
Resource discovery is available and automatically detects most supported devices. Discovered resources are automatically assigned to zones based on the room they belong to in the Fibaro Home Center.

**Devices marked "Enabled: false"** in discovery results are devices the Home Center has seen but which are no longer connected. These will not work and should be removed from your setup.

**Devices with "dead" status** are marked as offline by the Fibaro system. The driver logs these as errors on startup and will not be able to control them.

**Devices not discovered** that are supported by the driver can be added manually if you know the device ID number from the Fibaro interface.

# Changelog
## v1.2 | 26/03/2026
 - Fixes SHADE RAISE/LOWER commands: use open/close (not turnOn/turnOff) — confirmed correct for both HC2 and HC3
 - Fixes DIMMER and SHADE initial state loading: apply 99→100 conversion consistently with event updates

## v1.1 | 11/03/2026
 - Adds _systemInfo and _systemFwVersion read-only channel attributes (hub model and firmware version, auto-detected on connection)
 - Adds sensor class configuration: MOTION_SENSOR fixed to 'movement', DOOR_SENSOR selectable 'door'/'window'
 - Fixes discovery zone assignment: room names now populate zoneName (was areaName)

## v1.0 | 09/03/2026
 - Adds HC3 / API v5 support (auto-detected at startup)
 - Adds Door/Window sensor resource type with BATTERY state
 - Adds BATTERY state to motion sensors
 - Adds Fibaro Scene resource type with PRESS command (BUTTON SRT)
 - Adds room-based zone assignment in resource discovery
 - Adds dead device detection and logging on startup
 - Processes events array from refreshStates (HC3 central scene events)
 - Fixes RGBW lastColorSet key bug in state updates
 - Improves driver documentation

## v0.9 | 07/04/2021
 - Fixes dimmer resource type
## v0.8 | 22/03/2021
 - Added thermostats and temp sensors support
 - Added motion sensor support
 - Other minor changes
## v0.7 | 07/10/2020
 - Improves in-line setup help
## v0.6 | 5/08/2020
 - Adds logs to the refreshState query
## v0.5 | 4/08/2020
 - Corrects handling of shades and dimmers value limit (99)
## v0.3 | 2/08/2020
 - Adds protections to RGBW resources incomplete status feedback
## v0.2 | 24/07/2020
 - Adds protections to errors while parsing initial state
