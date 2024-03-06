---
title: DigitalSTROM
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# DigitalSTROM

This driver supports communication with DigitalSTROM system, allowing to control Lights, Light Groups, Shades, Shade Groups and fire global independent scenes.

## Connecting to the system

Connection to the system is done via Ethernet interface. For
achieving this, the following parameters should be provided:

 1. *Host ip*: The IP address or hostname of the DigitalSTROM Server.
 2. *Host port*: The port number where the device is waiting for
connections (by default equal to ```8080```).
 3. *Login*: Username on DigitalSTROM Server.
 4. *Password*: Username password.

**Important Note** : DigitalSTROM uses a self-signed certificate, so in order to establish the connection with DigitalSTROM Server
the box "*Check Server certificate*" on *Connection Settings* must be unchecked.

## Available resources

The available resource types are:

* **Dimmer with State** : Dimmer/Switch with state of GroupID 1 of DigitalSTROM devices.
* **Dimmer with No State** : Dimmer/Switch without state of GroupID 1 of DigitalSTROM devices.
* **Dimmer Group** : Dimmer/Switch Group without state.
* **Shade with State** : Blinds/Shades outside of GroupID 2 or Blinds/Curtains inside of GroupID 12 with state of DigitalSTROM devices.
* **Shade with No State** : Blind/Shade outside of GroupID 2 or Blind/Curtain inside of GroupID 12 without state of DigitalSTROM devices.
* **Shade Group** : Blinds/Shades outside group or Blinds/Curtains inside group without state of DigitalSTROM devices.
* **Apartment Global Scenes** : Fire Global Independent Scenes.

## Resource Address

Resource address for each resource type is shown below:

* **Dimmer with (No) State | Shade with (No) State** : Equal to *dsID* (Internal DigitalSTROM identification number for each device). Eg: `3504175fe0000000000182f6`.
* **Dimmer Group** : Equal to `1,<ZoneID>`, where `ZoneID` refers to the internal DigitalSTROM identification number for each zone. `ZoneID = 0` (address = `1,0`) refers to whole zones defined on the DigitalSTROM system.
* **Shade Group** : Equal to `[2 | 12],<ZoneID>`, where `GroupID = 2` refers to Blinds/Shades outside and `GroupID = 12` refers to Blinds/Curtains inside. `ZoneID` refers to the internal DigitalSTROM identification number for each zone. `ZoneID = 0` (address = `2,0` or `12,0`) refers to whole zones defined on the DigitalSTROM system.
* **Apartment Global Scenes** : Not apply. Leave address empty.

## Commands, Events and States

+ **Dimmer with (No) State | Dimmer Group** :
    - **SET** : Sets brightness of light in porcentage value.
    - **\_SET\_BRIGHTNESS** : Sets Brightness of light.
    - **\_FIRE\_SCENE** : Fire DigitalSTROM scene on device
        - *INC* : Increase output value.
        - *DEC* : Decrease output value.
        - *MAX* : Set maximum output value.
        - *MIN* : Set minimum output value.
        - *STOP* : Stop output value transition.
        - *AUTO_OFF* : Fade off.
        - *PRESET\_0* : Sets output value to `0`.
        - *PRESET\_1* : Sets output value to `100`.
        - *PRESET\_2* : Sets output value to `75`.
        - *PRESET\_3* : Sets output value to `50`.
        - *PRESET\_4* : Sets output value to `25`.

+ **Shade with (No) State | Shade Group** :
    - **SET** : Sets height of shade in porcentage value.
    - **\_SET\_HEIGHT** : Sets height of shade. (*Not available for Shade Group*)
    - **\_SET\_BLADES\_ANGLE** : Sets blades angle of shade (only for jalousie type). (*Not available for Shade Group*)
    - **RAISE** : Shade starts raising. Executes DigitalSTROM MAX scene.
    - **LOWER** : Shade starts lowering. Executes DigitalSTROM MIN scene.
    - **STOP** : Stops shade transition. Executes DigitalSTROM STOP scene.
    - **PRESET** : Set Digital Strom PRESET number between [0-4]
        - *NUM = `0`* : Sets output value to `0`.
        - *NUM = `1`* : Sets output value to `65535`.
        - *NUM = `2`* : Sets output value to `65535`.
        - *NUM = `3`* : Sets output value to `32768`.
        - *NUM = `4`* : Sets output value to `16384`.
    - **\_FIRE\_SCENE** : Fire DigitalSTROM scene on device
        - *INC* : Increase output value.
        - *DEC* : Decrease output value.

+ **Apartment Global Scenes** :
    - **\_FIRE\_SCENE** : Fire DigitalSTROM Global Independent Scene of Structure
        - *ABSENT* : Sets structure in Absent mode.
        - *PRESENT* : Sets structure in Present mode.
        - *SLEEPING* : Sets structure to night operation.
        - *WAKEUP* :  Sets structure to daytime operation.
        - *DOOR_BELL* : Fire DoorBell structure.
        - *PANIC* : Sets structure in Emergency state.
        - *FIRE* : Sets structure in Fire Alarm state.
        - *ALARM_1* : Fire user defined Alarm 1.
        - *ALARM_2* : Fire user defined Alarm 2.
        - *ALARM_3* : Fire user defined Alarm 3.
        - *ALARM_4* : Fire user defined Alarm 4.

    - **\_UNDO\_SCENE** : Undo Global Independent Scene of Structure
        - *PANIC*
        - *FIRE*
        - *ALARM_1*
        - *ALARM_2*
        - *ALARM_3*
        - *ALARM_4*

## Important notes regarding status update latency and end user expirience

Resources with state require a constant polling to get the resource state. Due to DigitalSTROM limitations, it's only possible to ask for one device output every 60 seconds per circuit (referred to the electrical installation of one fuse box). Because of this, the latency on the status update could be big and will increase with the number of defined resources with status on the *BeoLink Gateway*. So, it's recommended to use as less as possible resources with state. Regarding end user experience, it's recommended to use predefined DigitalSTROM scenes to change output values on devices (instead command *SET*) and use device groups when is necessary to change states of more than one device.

## Change log

 -v0.3:
      - Improves the application token managment, requesting it only once for each driver instance.
      - Adds more logs
      - Adds description for discovered resources
      - Requests session tokens if its needed before performing an request to de dss server

- v0.4 | 2020-10-07: 
     - Improves in-line setup help

