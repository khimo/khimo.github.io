---
title: ecobee
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---

# ecobee

This driver supports communication with ecobee API server, allowing to control multiple thermostats registered on an specific account. Also it's possible to read measured values from remote sensors as the current temperature and occupancy. 

## Connecting to the system

In order to connect BeoLink Gateway to ecobee, a login process using a PIN code
is required.

On `Systems > Connection Settings` page is displayed the login PIN and a link URL to login into ecobee web portal. The next steps are necessary to complete the login process:

1. Press on the link URL showed on `Connection Settings` and login into ecobee web portal.
2. Go to `My Apps` widget.
3. Press on `Add Application` and insert the login PIN code.
4. Give authorization to the `BeoLink Gateway` application and add the application.

After give authorization to the `BeoLink Gateway` applicaction, it may take up to 30 seconds for the driver to set into `Online`.

## Available resources

The available resource types are:

* **ecobee Thermostat** : ecobee Thermostat.
* **Remote Sensor** : Remote Sensor associated to an ecobee Thermostat. Reports temparature and occupancy readings. 

## Resource Address

Resource address for each resource type is shown below: 

* **ecobee Thermostat** : Equal to the Serial Number of the Thermostat (unique number). Eg: `123456789103`.
* **Remote Sensor** : Equal to the unique 4-digit alphanumeric code number found on the back of the physical sensor. Eg: `ATZS`  

## Commands, Events and States

+ **ecobee Thermostat** :
   - **SET HEAT SP** : sets heating set point of a thermostat or captures event on a given level.
   - **SET COOL SP** : sets cooling set point of a thermostat or captures event on a given level.
   - **SET MODE** : sets system mode to home/away or captures event on a given state.
   - **SET CLIMATE** : Sets Climate `Home`, `Away` o `Sleep`. A climate is a thermostat settings template.
   - **SET FAN** : Sets fan into `Auto` or `On` mode.
   - **RESUME PROGRAM** : Resume the current holds present on thermostat and continue with the thermostat program. If `RESUME ALL` is `true` the event stack is emptied and resume the thermostat program. If `RESUME ALL` is `false` the thermostat resumed to next event.
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + HEAT SP and COOL SP: The current heat and cool setpoints respectively.
     + MODE: The current mode: Heat, Cool, Auto or Off.
     + \_ONLINE: Indicates if the thermostat is connected with the ecobee server.
     + \_FAN: Indicates the fan mode.
     + \_CLIMATE: Indicates the climate mode.
     + \_HUMIDITY: Indicates the humidity in porcentage measured by the thermostat.
     + \_OCCUPANCY: Indicates if any motion was detected in the past 30 minutes by the motion sensor of the thermostat.
    

+ **Remote Sensor** :
    - **State variables**:
      + TEMPERATURE: The current temperature measured by the remote sensor.
      + OCCUPANCY: Indicates if any motion was detected in the past 30 minutes by the motion sensor of the remote sensor.
  

## Important note regarding status update latency and end user expirience

Resource state require a constant polling to get the specific state of each resource. Due to ecobee limitations, after setting the thermostat physically is expected that the changes made, present certain delays (3 minutes max.) to see the changes on the BeoLink Gateway and BeoLink App.
