---
title: BeoLiving Intelligence Alexa's skill Guide
layout: pagetoc
---

## Introduction

The scope of this guide comprise a full description of all available voice commands and devices you can control between _Alexa_ and _BeoLiving 
Intelligence_. To enable this feature, _Alexa_'s skill "_BeoLiving Intelligence skill by Khimo_" must be enabled through _Alexa App_ (refer to [BeoLiving Intelligence Link to Third Party Cloud Service Guide](bli-link-third-party-service.md)). 

**This feature does not depend in BeoLiving Intelligence's mode (ESSENTIAL or PRO)**.
 
## Terminology

+ _BLI_: Alias for BeoLiving Intelligence.
+ _BLApp_: BeoLiving App.

## Discovery

First step after linking _Alexa_ with your _BLI_ is to discover all devices in your configuration. Automatic discovery of all supported devices is
 done after say "_Alexa, discover my smart home devices_". _Alexa_ will get your _BLI_ configuration and save a reference to all supported devices. 

## Device name reference

In the discovery process, _Alexa_ creates a name reference to each device between its zone and name as "_(BLI device zone name)_ \+ 
_(BLI device name)_". For example, to turn on the kitchen light (defined in the zone "Kitchen" and named as "Light" in your _BLI_ configuration) 
you must say "_Alexa, turn on kitchen light_".

## Commands

Supported commands for each device depends in its capabilities. For example, a monochromatic dimmer will not support a set color command.

### Lights/Dimmers

+ Turn on/off: 
  + "_Alexa, turn on/off (LIGHT-NAME)_"
  + _Description_:Turns on/off light

+ Set brightness: 
  + "_Alexa, dim (LIGHT-NAME) (BRIGHTNESS)%_"
  + _Description_: Sets brightness level

+ Relative brightness adjust: 
  + "_Alexa, increase/decrease (LIGHT-NAME) by (BRIGHTNESS)%_"
  + _Description_: Increases/decreases relatively shade level 

+ Set color: 
  + "_Alexa, set the (LIGHT-NAME) to (COLOR)_"
  + _Description_: Sets light color

### Shades

+ Turn on/off: 
  + "_Alexa, turn on/off (SHADE-NAME)_"
  + _Description_: Raises/Lowers shade.

+ Set level: 
  + "_Alexa, dim (SHADE-NAME) (LEVEL)%_"
  + _Description_: Sets shade level

+ Relative level adjust: 
  + "_Alexa, increase/decrease (SHADE-NAME) by (LEVEL)%_"
  + _Description_: Increases/decreases relatively shade level 

### Scenes/Macros

+ Activate/Deactivate scene:
  + "_Alexa, activate/deactivate (SCENE-NAME)_"
  + _Description_: Fires or stops macro

### Themostats

+ Turn off: 
  + "_Alexa, turn off (THERMOSTAT-NAME)_"
  + _Description_: Sets thermostat into Off mode

+ Set thermostat setpoint:
  + "_Alexa, set (THERMOSTAT-NAME) to (TEMPERATURE)_"
  + _Description_: Sets thermostat setpoint to an specific temperature. 
  + _Rules_:
    + In case the thermostat has two setpoints (THERMOSTAT\_2SP _BLI_ resource type) and being in "_Auto_" mode, upper setpoint (Cool setpoint) 
    and lower setpoint (Heat setpoint) will be setted +/- 2 degrees of (TEMPERATURE).     
    + In _Eco_ mode, thermostat setpoints can not be setted.

+ Relative temperature setpoint adjust:
  + "_Alexa, increase/decrease temperature of (THERMOSTAT-NAME)_"
  + _Description_: Increase/decrease thermostat setpoints by a constant value.
  + _Rules_:
    + Same rules than "Set thermostat setpoint" 

+ Set thermostat mode:
  + "_Alexa, set (THERMOSTAT-NAME) to (MODE)_"
  + _Description_: Changes thermostat mode
  + _Rules_: MODE could be any of: "Heat", "Cool", "Off", "Eco" and "Auto"

### Bang & Olfusen NetworkLink devices 

+ Turn on/off: 
  + "_Alexa, turn on/off (DEVICE-NAME)_"
  + _Description_: Turns on device into an specific source or sets into Standby
  + _Rules_: When turning on, selected source can not be predicted. Will be the same for each device.

+ Change channel by number:
  + "_Alexa, change channel to (CHANNEL-NUMBER) on (DEVICE-NAME)_"
  + _Description_: Changes channel by number in current source

+ Change channel by name:
  + "_Alexa, change channel to (CHANNEL-NAME) on (DEVICE-NAME)_"
  + _Description_: Changes channel by name in current source
  + _Rules_: Search for (CHANNEL-NAME) into all favourite lists assigned to device sources. Current source will have priority for a match.

+ Skip channels:
  + "_Alexa, channel up/down on (DEVICE-NAME)_"
  + _Description_: Changes to next or previous channel in current source
  
+ Set volume:
  + "_Alexa, set the volume of (DEVICE-NAME) to (VOLUME)_"
  + _Description_: Sets volume level to (VOLUME)
  + _Rules_: Desired volume must be between 0 and 90

+ Relative volume adjust:
  + "_Alexa, turn the volume up/down on (DEVICE-NAME) by (VOLUME-DELTA)_"
  + _Description_: Increase or decrease device volume by (VOLUME-DELTA)

+ Mute/Unmute:
  + "_Alexa, mute/unmute (DEVICE-NAME)_"
  + _Description_: Mute/Unmute device

+ Select source(input):
  + "_Alexa, change the input to (SOURCE-NAME) on (DEVICE-NAME)_"
  + _Description_: Selects source on device. In _Alexa's_ language, "sources" are equivalent to "inputs". Possible sources are all enabled sources
  on devices in _BLI_ _Interfaces_ page (only in _PRO_ mode).

## How to change discovered device name

Sometimes, Alexa's identifier device name could not be a suitable name to be used. Depending if it's an uncommon or rare name, Alexa will 
not understand and complete the instruction, being necessary to edit Alexa's device name.

The ways to edit the Alexa's identifier device name are:
  + change the resource name at _BLI_ configuration (through _BLApp_ or web interface, being in _PRO_ mode) and re-discover all devices.
  + edition through _Alexa App_ for all devices that are not _AV renderer_ _BLI's_ resource type. This is a known limitation of _Alexa App_.  
  
## Workarounds when select input fails

Source (input) names for each device could not be shared to or saved by _Alexa_. The skill will try to match the source (input) that _Alexa_ 
understood with device sources. She understands possible popular sources like "_YouTube_" or "_Android TV_" most of the time, but using custom and
 rare names will cause to confuse her or to not find any match with the desired source to select, provoking to not accomplish the desired control 
instruction.

When its impossible for _Alexa_ to select an specific source, try:

+ Change source name through _Interfaces_ page at _BLI_ web interface (only in _PRO_ mode). Then re-discover devices.
+ Create a macro in _BLI_ that selects the source in the device and call "_Alexa, activate (SCENE-NAME)_". To start using the macro with _Alexa_, 
call for a device discovery.
