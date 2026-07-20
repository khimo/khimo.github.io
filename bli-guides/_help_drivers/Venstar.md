---
title: Venstar Thermostat
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Venstar Thermostat, Venstar Thermostat Heat, Venstar Thermostat Cool, Venstar Thermostat 2sp Heat or Cool, Venstar Thermostat 2sp, SET HEAT SP, SET COOL SP, SET MODE, SET FAN AUTO
description: Venstar Thermostat driver allows to connect and control multiple Venstar thermostats.
---
# Venstar Thermostats
This driver supports communication with Venstar thermostats.
All the communication use the API described at the following URL: https://developer.venstar.com/restcalls.html (API version 4, Firmware version 3.12 or above)
## Connecting to the system
The system only requires that the thermostats were connected to a network reachable from the BeoLiving Intelligence network. It does not require any special configuration.
## Available resources
The available resources types are:
* **Venstar Thermostat Heat** : Venstar Thermostat with one setpoint and only heat mode available
* **Venstar Thermostat Cool** : Venstar Thermostat with one setpoint and only cool mode available
* **Venstar Thermostat 2sp Heat or Cool** : Venstar Thermostats with two setpoints without automatic mode available.
* **Venstar Thermostat 2sp** : Venstar Thermostats with two setpoints.
## Resource Address
The address of the resource is the IP address of the device (e.g: `192.168.42.83`).
## Commands, Events and States
+ **Venstar Thermostat 2sp** :
   - **SET HEAT SP** : sets heating setpoint of a thermostat. Verify that the thermostat mode is Heat or Auto, otherwise, the heat setpoint will not change.
   - **SET COOL SP** : sets cooling setpoint of a thermostat. Verify that the thermostat mode is Cool or Auto, otherwise, the cool setpoint will not change.
   - **SET MODE** : sets system mode to Heat, Cool, Auto or Off.
   - **SET FAN AUTO** : Sets fan into `Auto` or `On` mode.
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + HEAT SP and COOL SP: The current heat and cool setpoints respectively.
     + MODE: The current mode: Heat, Cool, Auto or Off.
     + ONLINE: Indicates if the thermostat is connected with the BeoLiving Intelligence.
     + FAN AUTO: Indicates if the fan is in auto mode or not.
+ **Venstar Thermostat 2sp Heat or Cool** :
   - **SET HEAT SP** : sets heating setpoint of a thermostat. Verify that the thermostat mode is Heat, otherwise, the heat setpoint will not change.
   - **SET COOL SP** : sets cooling setpoint of a thermostat. Verify that the thermostat mode is Cool, otherwise, the cool setpoint will not change.
   - **SET MODE** : sets system mode to Heat, Cool or Off.
   - **SET FAN AUTO** : Sets fan into `Auto` or `On` mode.
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + HEAT SP and COOL SP: The current heat and cool setpoints respectively.
     + MODE: The current mode: Heat, Cool or Off.
     + ONLINE: Indicates if the thermostat is connected with the BeoLiving Intelligence.
     + FAN AUTO: Indicates if the fan is in auto mode or not.
+ *Venstar Thermostat Cool** :
   - **SET SETPOINT** : sets the set point of a thermostat.
   - **SET MODE** : sets system mode to Cool or Off.
   - **SET FAN AUTO** : Sets fan into `Auto` or `On` mode.
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + SETPOINT: The current setpoint temperature.
     + MODE: The current mode: Cool or Off.
     + ONLINE: Indicates if the thermostat is connected with the BeoLiving Intelligence.
     + FAN AUTO: Indicates if the fan is in auto mode or not.
+ *Venstar Thermostat 1 Heat setpoint** :
   - **SET SETPOINT** : sets the set point of a thermostat.
   - **SET MODE** : sets system mode to Heat or Off.
   - **SET FAN AUTO** : Sets fan into `Auto` or `On` mode.
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + SETPOINT: The current setpoint temperature.
     + MODE: The current mode: Heat or Off.
     + ONLINE: Indicates if the thermostat is connected with the BeoLiving Intelligence.
     + FAN AUTO: Indicates if the fan is in auto mode or not.

