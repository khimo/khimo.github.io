---
title: Home Assistant
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Home Assistant, Web socket, SHADE, DIMMER, THERMOSTAT_1SP, THERMOSTAT_2SP, ALARM, SET, SET COLOR, RAISE, LOWER, STOP, SET SETPOINT, SET MODE, SET FAN AUTO, SET HEAT SP, SET COOL SP, TRIGGER ALARM
description: Home Assistant driver integrates a Home Assistant hub into the BeoLiving intelligence using Web socket protocol, allowing to manage shades, lights, thermostats and alarms.
---

# Home Assistant Driver

Integrates a Home Assistant hub into the BeoLiving intelligence, allowing to import resources, retrieve states, and send commands to Home Assistant entities.

## Connecting to the system

The BLI will connect to the home assistant hub through a web socket.

For that purpose, you need to set a token to authenticate the BLI _against_ home assistant.
The token should be a long lived token that you can create on home assistant's web panel: go to user profile and at the bottom, there is a Long-Lived Access Tokens section where you can create a token and then copy that token and paste it on the *Long live token* parameter for the system on the BLI.

Connection settings are:

  + **Host**: IP address of the hub.
  + **Long lived token**: Token required to authenticate on Home Assistant.


## Available resources (RESOURCE TYPE)

The available resource are:

  + **Shades (SHADE):** shade without state of level.
  + **Shades with level (SHADE):** shade with state of level.
  + **Shades with level and tilt (SHADE):** shade with state of level and tilt.
  + **Lights (DIMMER):** dimmer.
  + **Lights with Color (DIMMER):** dimmer with colors.
  + **Thermostat 1SP (THERMOSTAT\_1SP):** thermostat of one setpoint.
  + **Heat Thermostat (THERMOSTAT\_1SP):** thermostat of one setpoint with only heat mode.
  + **Cool Thermostat (THERMOSTAT\_1SP):** thermostat of one setpoint with only cool mode.
  + **Heat/Cool Thermostat (THERMOSTAT\_1SP):** thermostat of one setpoint with only heat and cool modes.
  + **Auto Thermostat (THERMOSTAT\_1SP):** thermostat of one setpoint with only auto mode.
  + **Thermostat 1SP with Fan (THERMOSTAT\_1SP):** thermostat of one setpoint and fan.
  + **Heat Thermostat with Fan (THERMOSTAT\_1SP):** thermostat of one setpoint with only heat mode and fan.
  + **Cool Thermostat with Fan (THERMOSTAT\_1SP):** thermostat of one setpoint with only cool mode and fan.
  + **Heat/Cool Thermostat with Fan (THERMOSTAT\_1SP):** thermostat of one setpoint with only heat and cool modes and fan.
  + **Auto Thermostat with Fan (THERMOSTAT\_1SP):** thermostat of one setpoint with only auto mode and fan.
  + **Thermostat 2SP (THERMOSTAT\_2SP):** thermostat of two setpoints.
  + **Thermostat 2SP_F (THERMOSTAT\_2SP):** thermostat of two setpoints and fan.
  + **Alarm (ALARM):** alarm.
  + **Alarm with Night (ALARM):** alarm with night mode.
  + **Alarm with Custom Bypass (ALARM):** alarm with custom bypass mode.
  + **Alarm with Night and Custom Bypass (ALARM):** alarm with night and custom bypass modes.
  + **Alarm with Trigger (ALARM):** alarm with trigger.
  + **Alarm with Trigger and Night (ALARM):** alarm with night mode and trigger.
  + **Alarm with Trigger and Custom Bypass (ALARM):** alarm with custom bypass mode and trigger.
  + **Alarm with Trigger, Night and Custom Bypass (ALARM):** alarm with night and custom bypass modes and trigger.

The following thermostats were not tested with the BeoLiving App, if you use them and have any issue contact us with the email at the end of this page:
Cool Thermostat with Fan, Heat/Cool Thermostat with Fan, Heat Thermostat with Fan, Heat/Cool Thermostat, Cool Thermostat.


## Resource Address

The resource address **must be unique among resources, and must match with a Home Assistant entity_id** to identify what device is wanted.

The entity_id is a unique identifier on the Home Assistant side that allows us to send commands and parse the state for the resources.

## Resource discovery

The system will list every available resource that can be mapped on the BLI, out of the ones you have previously configured on Home Assistant.

## Resource events

- Every resource has the following event:
  - **STATE_UPDATE**: Update on the state of a resource.

## Captured events

Press the "Capture" button, executed events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.

## Resource commands

  + Lights
    - **SET**: Set the dimmer level, in percentage.
  + Lights with Color
    - **SET**: Set the dimmer level, in percentage.
    - **SET COLOR**: Set the dimmer color, in hsv format.
  + Shades
    - **RAISE**
    - **LOWER**
    - **STOP**
  + Shades with Level
    - **RAISE**
    - **LOWER**
    - **STOP**
    - **SET**: Set the shade level, in percentage.
  + Shades with Level and Tilt
    - **RAISE**
    - **LOWER**
    - **STOP**
    - **SET**: Set the shade level, in percentage.
    - **RAISE TILT**
    - **LOWER TILT**
    - **STOP TILT**
    - **SET TILT**: Set the tilt level, in percentage.
  + Thermostat 1SP
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat, Cool and Auto
  + Heat Thermostat
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF and Heat
  + Cool Thermostat
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Cool
  + Heat/Cool Thermostat
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat and Cool
  + Auto Thermostat
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF and Auto
  + Thermostat 1SP with Fan
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat, Cool and Auto
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Heat Thermostat with Fan
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF and Heat
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Cool Thermostat with Fan
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF and Cool
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Heat/Cool Thermostat with Fan
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat and Cool
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Auto Thermostat with Fan
    - **SET SETPOINT**: Set the setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF and Auto
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Thermostat 2SP
    - **SET HEAT SP**: Set the heat setpoint on the thermostat
    - **SET COOL SP**: Set the cool setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat, Cool and Auto
  + Thermostat 2SP with Fan
    - **SET HEAT SP**: Set the heat setpoint on the thermostat
    - **SET COOL SP**: Set the cool setpoint on the thermostat
    - **SET MODE**: Select the operation mode to OFF, Heat, Cool, Auto, _Fan and _Dry
    - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
  + Alarm/Alarm with Night/Alarm with Custom Bypass/Alarm with Night and Custom Bypass
    - **ARM**: Arms the alarm in the selected mode
    - **DISARM**: Disarms the alarm
  + Alarm with Trigger/Alarm with Trigger and Night/Alarm with Trigger and Custom Bypass/Alarm with Trigger, Night and Custom Bypass
    - **ARM**: Arms the alarm in the selected mode
    - **DISARM**: Disarms the alarm
    - **TRIGGER ALARM**: Triggers the alarm

## Resource State

  + Lights
    - **LEVEL**: Dimmer level, in percentage.
  + Lights with Color
    - **LEVEL**: Dimmer level, in percentage.
    - **COLOR**: Color in hsv format.
  + Shades
  + Shades with Level
    - **LEVEL**: Shade level, in percentage.
  + Shades with Level and Tilt
    - **LEVEL**: Shade level, in percentage.
    - **TILT**: Tilt level, in percentage.
  + Thermostat 1SP/Heat Thermostat/Cool Thermostat/Heat-Cool Thermostat/Auto Thermostat
    - **SETPOINT**: Setpoint on the thermostat
    - **TEMPERATURE**: Current temperature
    - **MODE**: Selected mode on the thermostat
  + Thermostat 1SP with Fan/Heat Thermostat with Fan/Cool Thermostat with Fan/Heat-Cool Thermostat with Fan/Auto Thermostat with Fan
    - **SETPOINT**: Setpoint on the thermostat
    - **TEMPERATURE**: Current temperature
    - **MODE**: Selected mode on the thermostat
    - **FAN AUTO**: If fan is in auto mode or not
  + Thermostat 2SP
    - **HEAT SP**: Heat setpoint on the thermostat
    - **COOL SP**: Cool setpoint on the thermostat
    - **TEMPERATURE**: Current temperature
    - **MODE**: Selected mode on the thermostat
  + Thermostat 2SP with Fan
    - **HEAT SP**: Heat setpoint on the thermostat
    - **COOL SP**: Cool setpoint on the thermostat
    - **TEMPERATURE**: Current temperature
    - **MODE**: Selected mode on the thermostat
    - **FAN AUTO**: If fan is in auto mode or not
  + Alarm/Alarm with Night/Alarm with Custom Bypass/Alarm with Night and Custom Bypass/Alarm with Trigger/Alarm with Trigger and Night/Alarm with Trigger and Custom Bypass/Alarm with Trigger, Night and Custom Bypass
    - **ALARM**: If the alarm was triggered
    - **MODE**: Selected mode on the alarm
    - **READY**: If it's enabled to be armed

## Changelog
 
### v0.1 | 2020/11/17
 - Initial version
### v0.2 | 2021/09/21
 - Added shades with tilt, fixed shades with level
### v0.3 | 2021/12/10
 - Added shades with only tilt, fixed thermostats so they can be used with the app.
 ### v0.4 | 2023/1/5
 - Added new light integration according to new Home Assistant protocol
 
*Please, report any issue with this driver to: support+drivers@khimo.com*

