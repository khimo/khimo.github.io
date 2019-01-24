---
title: Velux KLF200
layout: pagetoc
---

This driver supports communication with gateway Velux KLF200, allowing to control different types of shades, dimmers, switches, locks and fire Velux Scenes.
Connecting to the system
--------------------------------
A login process is not required in order to connect BeoLink Gateway to Velux KLF200.
In Beolink Gateway System page, for the TCP channel configuration 2 parameters must be setted:
* **Host**: Hostname or IP address of Velux Gateway.
* **Port**: Connection port configured as 51200 (by default).
Available resources
--------------------------------
The available resource types are:
* **Scenario Button**: Button that executes an specific configured Scene of Velux KLF200.
* **Dimmer**: Light with adjustable intensity. [*]
* **Window/Door Lock**: Window and Door Lock. [*]
* **Switch On/Off**: On/Off Switch. [*]
* **Shade/Shutter/Awning/Blind/Curtain**: Roller Shutter, Roller Shutter with projection, Vertical Exterior Awning, Window Opener, Window Opener with rain sensor, Vertical Interior Blinds, Horizontal Awning, Curtain Track, Swinging Shutters and Swinging Shutters with independent handling of leaves. [*]
* **Interior Venetian Blind**: Interior Venetian Blind. [*]
* **Shutter/Blind with orientation slats/hangers capability**: Roller Shutter with adjustable slats, Exterior Venetian Blind and Louver Blind. [*]
* **Dual Roller Shutter**: Dual Roller Shutter. [*]
[*]: Referred to Velux KLF200 Actuator Profiles.
Resource Address
-------------------
Resource address for each resource type is shown below: 
* **Scenario Button**: Address correspond with Velux SceneID. Must be a number between [0-31]. 
* **Dimmer**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Window/Door Lock**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Switch On/Off**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Shade/Shutter/Awning/Blind/Curtain**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Interior Venetian Blind**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Shutter/Blind with orientation slats/hangers capability**: Address correspond with Velux NodeID. Must be a number between [0-199].
* **Dual Roller Shutter**: Address correspond with Velux NodeID. Must be a number between [0-199].
Commands, Events and States
-------------------------------
* **Scenario Button**: 
    + Commands:
        - **PRESS**: Fire Velux Scene. 
* **Dimmer**: 
    + Commands:
        - **SET**: Set Dimmer intensity.
    + States:
        - **LEVEL**: Dimmer intensity level.
        - **ONLINE**: Connection state of actuator.
* **Window/Door Lock**: 
    + Commands:
        - **SET**: Set Lock state (0/false means unlocked and 1/true means locked).
        - **TOGGLE**: Toggle Lock state.
    + States:
        - **STATE**: Lock state (0/false means unlocked and 1/true means locked).
        - **ONLINE**: Connection state of actuator.
* **Switch On/Off**:     
    + Commands:
        - **SET**: Set Lock state (0/false means unlocked and 1/true means locked).
        - **TOGGLE**: Toggle Lock state.
    + States:
        - **STATE**: Lock state (0/false means unlocked and 1/true means locked).
        - **ONLINE**: Connection state of actuator.
* **Window opener**: 
    + Commands:
        - **_SET**: Set level position.
        - **_OPEN**: Open window.
        - **_CLOSE**: Close window.
        - **_STOP**: Stop level transition.
        - **\_SET\_SPEED**: Set the speed of level transition.
    + States:
        - **_LEVEL**: Level position.
        - **_ONLINE**: Connection state of actuator.
* **Shade/Shutter/Awning/Blind/Curtain**: 
    + Commands:
        - **SET**: Set level position.
        - **RAISE**: Set to maximum level.
        - **LOWER**: Set to minimum level.
        - **STOP**: Stop level transition.
        - **\_SET\_SPEED**: Set the speed of level transition.
    + States:
        - **LEVEL**: Level position.
        - **ONLINE**: Connection state of actuator.
* **Interior Venetian Blind**:     
    + Commands:
        - **SET**: Set level position.
        - **RAISE**: Set to maximum level.
        - **LOWER**: Set to minimum level.
        - **STOP**: Stop level transition.
        - **\_SET\_SPEED**: Set the speed of level transition.
        - **\_SET\_ORIENTATION**: Set orientation angle of slats/hangers.
        - **\_SET\_ORIENTATION\_SPEED**: Set turning speed of slats/hangers.
    + States:
        - **LEVEL**: Level position.
        - **ONLINE**: Connection state of actuator.
* **Shutter/Blind with orientation slats/hangers capability**: 
    + Commands:
        - **SET**: Set level position.
        - **RAISE**: Set to maximum level.
        - **LOWER**: Set to minimum level.
        - **STOP**: Stop level transition.
        - **\_SET\_SPEED**: Set the speed of level transition.
        - **\_SET\_ORIENTATION**: Set orientation angle of slats/hangers.
        - **\_SET\_ORIENTATION\_SPEED**: Set turning speed of slats/hangers.
    + States:
        - **LEVEL**: Level position.
        - **ONLINE**: Connection state of actuator.
* **Dual Roller Shutter**: 
    + Commands:
        - **SET**: Set level position on both shutters.
        - **RAISE**: Set to maximum level on both shutters.
        - **LOWER**: Set to minimum level on both shutters.
        - **STOP**: Stop level transition on both shutters.
        - **\_SET\_SPEED**: Set the speed of level transition on both shutters.
        - **\_SET\_FIRST**: Set level position on upper shutter.
        - **\_SET\_SECOND**: Set level position on lower shutter.
    + States:
        - **LEVEL**: Level position of both shutters.
        - **ONLINE**: Connection state of actuator.
Import resources from Velux KLF200
-------------------------------------------------------------------------
Velux KLF200 Driver of BeoLink Gateway has the capability of import all the supported resources from the configuration in Velux gateway. 
