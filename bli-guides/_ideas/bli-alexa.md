---
title: Control Your BeoLiving Intelligence with Alexa
description: This comprehensive guide explains how to control your BeoLiving Intelligence system using Amazon Alexa. Learn about enabling the skill, discovering devices, available voice commands for lights, shades, thermostats, Bang & Olufsen NetworkLink devices, and scenes. Includes information on device name references and troubleshooting tips.
keywords: BeoLiving Intelligence, Alexa, voice control, smart home, integration, commands, lights, shades, thermostats, NetworkLink, scenes, troubleshooting, device names
layout: pagetoc
---

## Introduction

This guide includes a description of the available voice commands and devices you can control using _Alexa_ and _BeoLiving Intelligence_. To enable this feature, _Alexa_'s skill "_BeoLiving Intelligence skill by Khimo_" must be enabled through the _Alexa App_ (refer to [BeoLiving Intelligence Link to Third Party Cloud Service Guide](../bli-link-third-party-service)).

**This feature does not depend on the mode of the _BeoLiving Intelligence_ (ESSENTIAL or PRO)**.

## Terminology

+ _BLI_: Alias for BeoLiving Intelligence.
+ _BLApp_: BeoLiving App.

## Discovery

The first step you should take after linking _Alexa_ with your _BLI_ is to discover all devices in your configuration. Automatic discovery of all supported devices is performed by saying "_Alexa, discover my smart home devices_" to your _Alexa_-enabled device. _Alexa_ will then communicate with your _BLI_ and get all supported devices.

## Device name reference

In the discovery process, _Alexa_ creates a name reference for each device as "_(BLI device zone name)_ \+ _(BLI device name)_".
For example, if you have a light named "Light" included in a zone named "Kitchen", you can say "_Alexa, turn on kitchen light_" to turn it on.

## Commands

The following sections show the available commands for each device. Note that some commands may not be available on all devices: for example, a monochromatic dimmer will not support the set color command.

### Lights/Dimmers

+ Turn on/off:
  + "_Alexa, turn on/off (LIGHT-NAME)_"
  + _Description_: Turns on/off the light.

+ Set brightness:
  + "_Alexa, dim (LIGHT-NAME) (BRIGHTNESS)%_"
  + _Description_: Sets the brightness level.

+ Relative brightness adjustment:
  + "_Alexa, increase/decrease (LIGHT-NAME) by (BRIGHTNESS)%_"
  + _Description_: Increases or decreases the brightness level.

+ Set color:
  + "_Alexa, set the (LIGHT-NAME) to (COLOR)_"
  + _Description_: Sets the light's color.

### Shades

+ Raise/lower:
  + "_Alexa, raise/lower (SHADES-NAME)_"
  + _Description_: Raises or lowers the shades.

+ Set level:
  + "_Alexa, (SHADES-NAME) to (LEVEL)%_"
  + _Description_: Sets the shades's level.


### Thermostats

+ Turn off:
  + "_Alexa, turn off (THERMOSTAT-NAME)_"
  + _Description_: Sets thermostat to Off mode.

+ Set thermostat setpoint:
  + "_Alexa, set (THERMOSTAT-NAME) to (TEMPERATURE)_"
  + _Description_: Sets the thermostat's setpoint to a specific temperature.
  + _Rules_:
    + In case the thermostat has two setpoints (THERMOSTAT\_2SP _BLI_ resource type) and it's in "_Auto_" mode, upper setpoint (Cool setpoint) will be set at +2 degrees of (TEMPERATURE) and lower setpoint (Heat setpoint) will be set at - 2 of (TEMPERATURE).
    + In _Eco_ mode, thermostat setpoints cannot be set.

+ Relative temperature setpoint adjust:
  + "_Alexa, increase/decrease temperature of (THERMOSTAT-NAME)_"
  + _Description_: Increase/decrease the thermostat's setpoints by a constant value.
  + _Rules_:
    + Same rules as "Set thermostat setpoint" apply.

+ Set thermostat mode:
  + "_Alexa, set (THERMOSTAT-NAME) to (MODE)_"
  + _Description_: Changes thermostat mode.
  + _Rules_:
    + MODE could be any of: "Heat", "Cool", "Off", "Eco" and "Auto".

### Bang & Olufsen NetworkLink devices

+ Turn off:
  + "_Alexa, turn off (DEVICE-NAME)_"
  + _Description_: Sets the device into Standby mode.

+ Change channel by number:
  + "_Alexa, change channel to (CHANNEL-NUMBER) on (DEVICE-NAME)_"
  + _Description_: Changes channel to (CHANNEL-NUMBER) number in the current source.

+ Change channel by name:
  + "_Alexa, change channel to (CHANNEL-NAME) on (DEVICE-NAME)_"
  + _Description_: Changes the channel by name in current source.
  + _Rules_:
    + Searchs for (CHANNEL-NAME) in all [Favourite Lists](../bli-pro-user-guide/#fav-list) assigned to device sources. Current source will have priority for a match.

+ Skip channels:
  + "_Alexa, channel up/down on (DEVICE-NAME)_"
  + _Description_: Changes to the next or previous channel in the current source.

+ Set volume:
  + "_Alexa, set the volume of (DEVICE-NAME) to (VOLUME)_"
  + _Description_: Sets the volume level to (VOLUME).
  + _Rules_:
    + Desired volume must be between 0 and 90.

+ Relative volume adjust:
  + "_Alexa, turn the volume up/down on (DEVICE-NAME) by (VOLUME-DELTA)_"
  + _Description_: Increases or decreases the device's volume by (VOLUME-DELTA).

+ Mute/Unmute:
  + "_Alexa, mute/unmute (DEVICE-NAME)_"
  + _Description_: Mutes or unmutes the device.

+ Render control commands:
  + "_Alexa, (CONTROL-COMMAND) on (DEVICE-NAME)_"
  + _Description_: Sends a renderer control command.
  + _Rules_: (CONTROL-COMMAND) could be any of:
    + _FastForward_
    + _Next_
    + _Pause_
    + _Play_
    + _Previous_
    + _Rewind_
    + _Stop_

+ Select source(input):
  + "_Alexa, change the input to (SOURCE-NAME) on (DEVICE-NAME)_"
  + _Description_: Selects a source on the device. In _Alexa's_ language, "sources" are equivalent to "inputs". Possible sources are all enabled sources on the _BLI_ _Interfaces_ page (_PRO_ mode only).
  + **_Notice_**: This stanza is too long and sometimes alexa does not understand it well, it is usually better to define a Macro (Scene) that turns on the Network Link product at the correct source and activates it using the "_Alexa , turn on MACRO "stanza.

### Scenes/Macros

+ Activate/Deactivate scene:
  + "_Alexa, activate/deactivate (SCENE-NAME)_" or "_Alexa, turn on/turn off (SCENE-NAME)_"
  + _Description_: Fires or stops the macro.

## How to change a discovered device name

Sometimes, Alexa's identifier device name may not be suitable for use. Depending if it's an uncommon or rare name, Alexa may not understand and complete the instructions, thus being necessary to edit Alexa's device name.

The ways to edit the Alexa's identifier device name are:
  + Change the resource name at _BLI_ configuration (through _BLApp_ or web interface, being in _PRO_ mode) and re-discover all devices.
  + Edit the device using the _Alexa App_, for all devices that are not _AV renderer_ _BLI's_ resource type. This is a known limitation of _Alexa App_.

## Workarounds when input selection fails

Alexa understands popular source names like "_YouTube_" or "_Android TV_" most of the time, but using uncommon names may prevent _Alexa_ to find the desired match in the source list.

When this happens, you can try one of the following approaches:

+ Change the source name using the _Interfaces_ page at _BLI_ web interface (only in _PRO_ mode), and re-discover the devices.
+ Create a macro in _BLI_ that selects the source in the device, and call "_Alexa, activate (SCENE-NAME)_". To start using the macro with _Alexa_,
call for a device discovery.
