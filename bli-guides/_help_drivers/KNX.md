---
title: KNX / EIB
layout: drivertoc
keywords: KNX, EIB, PEI, RS232, IP, Ethernet, Bus Monitor Mode, Virtual Bus Monitor, Toggle, Button, Scene, Dimmer, Shade, GPIO, Thermostat 1SP, Thermostat 2SP, Boolean, 1 byte unsigned integer, 1 byte signed integer, 2 bytes unsigned integer, 2 bytes signed integer, 3 bit controlled, String, PRESS, RELEASE, HOLD, SET, SET_NON_ZERO, RAISE, LOWER, STOP, SET SETPOINT, SET COOL SP, SET HEAT SP, HVAC Mode, HVAC Control Mode, DPT
description: KNX / EIB driver provides integration with KNX systems using PEI type 10 (over RS232) and IP tunnelling (over Ethernet) interfaces.
---

BeoLiving Intelligence can interact with KNX systems by means of shared variables (group
addresses).

Connection to a KNX system
--------------------------

BeoLiving Intelligence can connect to a KNX system by means of KNX data interfaces.

The supported interfaces are:

-   PEI type 10 (BCU2, with FT 1.2 protocol) over RS232 connection
-   IP tunnelling over Ethernet connection

PEI type 16 serial interfacing is not supported. PEI 10 bit rate is
fixed at the default 19200 bps. The IP tunnelling interface could provide or not
support for *Bus Monitor Mode*. **In case *Bus Monitor Mode* is not supported, use 
*Virtual Bus Monitor*** as a workaround checking the box *"Use Virtual Bus Monitor"* on 
*Connection Settings*.

*Note on IP tunnelling:* It is usually necessary to disconnect the ETS
software from the IP tunnelling interface before BeoLiving Intelligence can connect to the
system. Also, after disconnecting ETS, the interface can take several
minutes before it accepts a new connection from BeoLiving Intelligence. The same
considerations apply when switching back to ETS.

KNX resources
-------------

All the interaction between KNX and BeoLiving Intelligence is by means of *group
addresses*. Group addresses have an associated *datapoint type* which
identifies the type of data it holds (e.g. boolean, signed integer,
etc.).

It is therefore necessary to define group addresses for all the resources
intended for integration with BeoLiving Intelligence.

To be able to integrate KNX with BeoLiving Intelligence resources must be defined in BeoLiving Intelligence.
BeoLiving Intelligence resources refer to one or more KNX resources and the way to map between BeoLiving Intelligence
and KNX resources is the address.

A BeoLiving Intelligence resource address maps to one, two or three KNX group addresses.
Group addresses have the form *a/b/c* (3 level address) or
*a/b* (2 level). The default is the 3 level addresses, but both formats
are accepted.

For resources mapping to two or three KNX resources the address contains group addresses
spearated by a ':' character.

For resources with state BeoLiving Intelligence keeps track of whether or not any state was received since
the connection began, and sets the ONLINE state to false until some state is received from KNX.
If ONLINE state stays false, it probably means the resource address is wrong.

### Group address flags in ETS

There are several flags in the setup of KNX resources in an ETS
project which determine the behaviour of the resources and their
capabilities for integration with BeoLiving Intelligence.

The *Communication Flag* is the master switch for communication i.e.
if this flag is not set, the object cannot be integrated with BeoLiving Intelligence.

The *Read Flag* enables the object value to be read by BeoLiving Intelligence. If not
set, BeoLiving Intelligence can still notice when the value changes but cannot request
its value, thus failing to get a correct state after a power failure
or a configuration load.

When setting up a resource where the Read Flag is unset, select a
resource type without state in BeoLiving Intelligence.

The *Write Flag* enables the object to be modified from BeoLiving Intelligence. If it is
unset events can still be generated on BeoLiving Intelligence but there will be no
possible command on the object.

The *Transmit Flag* enables the group address to send information to
BeoLiving Intelligence, if unset the object will not notify events and neither can BeoLiving Intelligence
request its state so for *Read Flag* to work this also must be set.

In BeoLiving Intelligence help and documentation, the abbreviations *C*, *T*, *R* and
*W* are used for Communication, Transmit, Read and Write flags
respectively.

## Standard and non-standard resources

BeoLiving Intelligence supports two kinds of resources for KNX: standard BeoLiving Intelligence resources,
and native KNX resources.

Standard BeoLiving Intelligence resources are: Toggle, Button, Dimmer with and without
state, Shade with and without state, Thermostat 1SP, Thermostat 2SP, and GPIO.

Native KNX resource types are: Boolean, 1 byte unsigned integer, 1 byte signed integer,
2 Bytes unsigned integer, 2 Bytes signed integer and 3 bit controlled, String.

Standard resource types allow for better integration, offering more generic programming
capabilities on BeoLiving Intelligence (generic programming), and better display on
BeoLiving Intelligence user interfaces (web panel and mobile applications).

As a general rule try to avoid assigning the native resource types,
unless you need macros with precise control over these group addresses.


## System connection state
The KNX system connection state can be Offline, Connected, Connecting or Online.
Offline means the KNX is not reachable.
Connecting means the KNX system initialized the connection.
Online means an interaction with the KNX system succeeded for at least one command/event/state request.

## Resource types

### Standard resource types

| Resource type       | Std. type    | Comment                                                      |
|---------------------|--------------|--------------------------------------------------------------|
| Toggle              | BUTTON       | Switch or any boolean toggle, and keeps track of its current value. |
| Button              | BUTTON       | Button with press, hold and release functionality.            |
| Scene               | BUTTON        | Execute a scene.                                      |
| Dimmer without state| DIMMER       | Dimmer with set level functionality, but no feedback.         |
| Dimmer              | DIMMER       | Dimmer with feedback of its current level.                    |
| Shade without state | SHADE        | Shade with raise, lower and stop functionality, but no feedback. |
| Shade               | SHADE        | Shade with raise, lower, stop, set level and feedback of its current level. |
| GPIO                | GPIO         | Switch, or any boolean value that can be set to true/false. Keeps track of its current value. |
| Thermostat 1SP      | THERMOSTAT_1SP | Thermostat with a temperature and a setpoint states, and a set setpoint command. |
| Thermostat 2SP      | THERMOSTAT_2SP | Thermostat with a temperature, a cool setpoint and a heat setpoint states and commands to set both setpoints. |

### Address

The following table summarizes the supported resource types, the KNX
Datapoint Type code, the needed flags and group addresses.

| Resource type       | DPT          | Address      | Group Address | Needed Flags | Comment                                                      |
|---------------------|--------------|--------------|---------------|--------------|--------------------------------------------------------------|
| Toggle              | DPT 1.001    | a/b/c or a/b/c:d/e/f | a/b/c and d/e/f | CRTW         | Some Toggle resources have value and status object in the same GA (a/b/c) or in a different GA (a/b/c and d/e/f). So in the last case, it's possible to specify the resource address as a/b/c:d/e/f [ 1 ] |
| Button              | DPT 1.001    | a/b/c        | a/b/c         | CTW          |                                                              |
| Scene                | DPT 18.001       | a/b/c:n or a/b/c:n:d/e/f| a/b/c                   | CTW                   | The number 'n' corresponds to a scene identifier [1..64]. The d/e/f is only required if you want to have feedback when a scene has been executed outside the BLI. In this case, d/e/f is the address of the DPT 26.001 (Datapoint Type DPT_SceneInfo) |
| Dimmer without state| DPT 5.001    | a/b/c        | a/b/c         | CTW          | Dimmer value object GA.                                      |
| Dimmer              | DPT 5.001    | a/b/c:d/e/f  | a/b/c and d/e/f | CTW (a/b/c) and CRT (d/e/f) | Dimmer value object GA (a/b/c) and value status object (d/e/f). [ 1 ] |
| Shade without state | DPT 1.007 and 1.008 | a/b/c:d/e/f | a/b/c and d/e/f | CTW (both a/b/c and d/e/f) | Shade 'StopStep UpDown' object GA (a/b/c) and 'Move UpDown' object GA (d/e/f). |
| Shade               | DPT 1.007, 1.008 and 5.001 | a/b/c:d/e/f:g/h/i or a/b/c:d/e/f:g/h/i:j/k/l | a/b/c, d/e/f, g/h/i and j/k/l | CTW (a/b/c), CTW (d/e/f) and CTRW (g/h/i) (or CTR (g/h/i) and CTW (j/k/l)) | Shade 'StopStep UpDown' object GA (a/b/c), 'Move UpDown' object GA (d/e/f) and status object GA (g/h/i). 'Set level' GA (j/k/l) if present, otherwise (g/h/i) is used for 'Set level'. [ 1 ] |
| GPIO                | DPT 1.001    | a/b/c or a/b/c:d/e/f | a/b/c and d/e/f | CRTW         | Some GPIO resources have value and status object in the same GA (a/b/c) or in a different GA (a/b/c and d/e/f). So in the last case, it's possible to specify the resource address as a/b/c:d/e/f [ 1 ] |
| Thermostat 1SP      | DPT 9.001    | a/b/c:d/e/f  | a/b/c and d/e/f | CRT (a/b/c), CTRW (d/e/f) | a/b/c is the temperature GA and d/e/f the setpoint temperature GA. |
| Thermostat 2SP      | DPT 9.001    | a/b/c:d/e/f:g/h/i | a/b/c, d/e/f and g/h/i | CRT (a/b/c), CTRW (d/e/f) and CTRW (g/h/i) | a/b/c is the temperature GA, d/e/f the heat setpoint temperature GA and g/h/i the cool setpoint temperature GA. |
| Boolean             | DPT 1.xxx    | a/b/c        | a/b/c         | CTW          |                                                              |
| 1 byte unsigned integer | DPT 5.xxx | a/b/c        | a/b/c         | CTW          |                                                              |
| 1 byte signed integer | DPT 6.xxx   | a/b/c        | a/b/c         | CTW          |                                                              |
| 2 bytes unsigned integer | DPT 7.xxx | a/b/c        | a/b/c         | CTW          |                                                              |
| 2 bytes signed integer | DPT 8.XXX   | a/b/c        | a/b/c         | CTW          |                                                              |
| 3 bit controlled    | 3.007 / 3.008 | a/b/c        | a/b/c         | CTW          |                                                              |
| String              | DPT 16.000 / 16.001 | a/b/c | a/b/c | CTW | String data type for text values. |

[ 1 ]: Device configuration in ETS may be required for this object to be shown as available.

### Events

| Event               | Argument     | Resource type | Description                                                  |
|---------------------|--------------|---------------|--------------------------------------------------------------|
| PRESS               |              | Button        | Button press                                                 |
| RELEASE             |              | Button        | Button release                                               |
| HOLD                |              | Button        | Button hold, depends on setup. Typically means holding a button for 200 ms or more. |
| SET                 | Number       | All non standard | Generated when the value is set.                             |
| SET_NON_ZERO        |              | All non standard | Generated when the value is set to a non zero one.            |

The value ranges for the native KNX resources are as follows:

| Resource type       | Range        |
|---------------------|--------------|
| Boolean             | 0 .. 1       |
| 1 Byte unsigned integer | 0 .. 255 |
| 1 Byte signed integer | -128 .. 127 |
| 2 Bytes unsigned integer | 0 .. 65535 |
| 2 Bytes signed integer | -32768 .. 32767 |
| 3 Bit Controlled    | 0 .. 15 (0 to 7 setp size, add 8 for increase instead of decrease) |
| String              | Text         |

### Commands

| Command             | Argument     | Resource type | Description                                                  |
|---------------------|--------------|---------------|--------------------------------------------------------------|
| PRESS               |              | Toggle        | Swaps the resource value                                     |
| PRESS               |              | Button        | Button press                                                 |
| RELEASE             |              | Button        | Button release                                               |
| PRESS        |               | Scene                   | Activates the scene        |
| SET                 | 1..100       | Dimmer, Dimmer without state | Sets the level of the dimmer to a percentage |
| SET                 | 1..100       | Shade | Sets the level of the shade to a percentage |
| RAISE               |              | Shade, Shade without state | Starts raising the shade                                     |
| LOWER               |              | Shade, Shade without state | Starts lowering the shade                                    |
| STOP                |              | Shade, Shade without state | Stops shade motion                                           |
| SET                 | Boolean      | GPIO          | Sets the level of the GPIO                                   |
| SET                 | Resource range | All non standard | Sets the value of the resource.                              |
| SET SETPOINT        | [ 2 ]        | Thermostat 1SP | Sets the setpoint to the given temperature                   |
| SET COOL SP         | [ 2 ]        | Thermostat 2SP | Sets the cool setpoint to the given temperature              |
| SET HEAT SP         | [ 2 ]        | Thermostat 2SP | Sets the heat setpoint to the given temperature              |

[ 2 ]: Temperature as a string in the form NU where N is the numeric value of the temperature and U a letter indicating the units, either C for Celsius or F for Fahrenheit. 

### Resource State

| Resource type       | State        | Type     | Description                                                  |
|---------------------|--------------|----------|--------------------------------------------------------------|
| Toggle, GPIO        | STATE        | 0..1     | Current value                                                |
| Dimmer              | LEVEL        | 0..100   | Current level in percentage                                  |
| Shade               | LEVEL        | 0..100   | Current level in percentage                                  |
| Thermostat 1SP, Thermostat 2SP | TEMPERATURE | [ 2 ] | Current ambient temperature.                                 |
| Thermostat 1SP      | SETPOINT     | [ 2 ]    | Setpoint current value.                                      |
| Thermostat 2SP      | HEAT SP      | [ 2 ]    | Heat setpoint current value.                                 |
| Thermostat 2SP      | COOL SP      | [ 2 ]    | Cool setpoint current value.                                 |
| Toggle, GPIO, Dimmer, Shade, Thermostat 1SP, Thermostat 2SP, raw group addresses (1 Byte, 2 Byte, 3 bit, String) | ONLINE | true, false | Indicates whether or not the other resource states reflect the state on KNX for the given address. |
| Raw group addresses (1 Byte, 2 Byte, 3 bit, String) | VALUE | resource type | The current value of the group address on KNX side |


Thermostats with modes
-------------------------------------

There are two types of thermostats with modes: **HVAC Mode** and **HVAC Control Mode**. Both types support 1SP and 2SP.

### Thermostat with HVAC Mode

DPTs used for this thermostat:

-   Temperature and Setpoints (DPT 9.001).
-   HVACMode (DPT 20.102).
-   HeatCool (DPT 1.100).
-   Switch (DPT 1.001): Optional.

##### Switch DPT
Specifying a GA for the Switch is optional. When setting the thermostat to Off, if the Switch variable is present, it's set to 0. Otherwise, HVACMode is set to `Building Protection` or `Standby`, depending on the configuration in the Interfaces tab.

##### SET MODE command

The following tables illustrate how SET MODE command and UI-based mode changes affect KNX DPTs:

##### With Switch:

| Thermostat state | KNX DPTs |
|---------------------|----------|
| Auto  | Switch = 1 <br> HvacMode = 0 (Auto) |
| Heat  | Switch = 1 <br>HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  | Switch = 1 <br> HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | Switch = 1 <br> HvacMode = 3 (Eco)  |
| Off  | Switch = 0  | 

##### Without Switch:

| Thermostat state | KNX DPTs |
|---------------------|----------|
| Auto  |  HvacMode = 0 (Auto) |
| Heat  | HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  |  HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | HvacMode = 3 (Eco)  |
| Off  | HvacMode = 2 (StandBy) or 4 (BldProt)  | 


##### Mapping between BLI Thermostat state and KNX DPTs

The following table shows the corresponding BLI thermostat state depending on the values of KNX DPTs.

##### With Switch:

| HvacMode thermostat | KNX DPTs |
|---------------------|----------|
| Auto  | Switch = 1 <br> HvacMode = 0 (Auto) <br> HeatCool = any |
| Heat  | Switch = 1 <br>HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  | Switch = 1 <br> HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | Switch = 1 <br> HvacMode = 3 (Eco) <br> HeatCool = any |
| Off  | Switch = 0 <br> HvacMode = any <br>  HeatCool = any | 

##### Without Switch:

| HvacMode thermostat | KNX DPTs |
|---------------------|----------|
| Auto  | HvacMode = 0 (Auto) <br> HeatCool = any |
| Heat  | HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  | HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | HvacMode = 3 (Eco)  <br> HeatCool = any |
| Off  | HvacMode = 4 (BldProt) or 2 (StandBy) <br> HeatCool = any |



### Thermostat with HVAC Control Mode

DPTs used for this thermostat:

-   Temperature and setpoints (DPT 9.001).
-   HVAC Control Mode (DPT 20.105).
-   Switch (DPT 1.001): Optional.

##### Switch DPT
Specifying a GA for the Switch is optional. When setting the thermostat to Off, if the Switch variable is present, it's set to 0. Otherwise, HVACContrMode is set to `Off`.

##### SET MODE command

The following tables illustrate how SET MODE command and UI-based mode changes affect KNX DPTs:

##### With Switch:

| Thermostat state | KNX DPTs |
|---------------------|----------|
| Auto  | Switch = 1 <br> HvacContrMode = 0 (Auto) |
| Heat  | Switch = 1 <br>HvacContrMode = 1 (Heat)  |
| Cool  | Switch = 1 <br> HvacContrMode = 3 (Cool)  |
| Eco  | Switch = 1 <br> HvacContrMode = 13 (Eco)  |
| Off  | Switch = 0  | 

##### Without Switch:

| Thermostat state | KNX DPTs |
|---------------------|----------|
| Auto  | HvacContrMode = 0 (Auto) |
| Heat  | HvacContrMode = 1 (Heat)  |
| Cool  | HvacContrMode = 3 (Cool)  |
| Eco  | HvacContrMode = 13 (Eco)  |
| Off  | HvacContrMode = 6 (Off)  | 


##### Mapping between BLI Thermostat state and KNX DPTs

The following table shows the corresponding BLI thermostat state depending on the values of KNX DPTs.

##### With Switch:

| HvacMode thermostat | KNX DPTs |
|---------------------|----------|
| Auto  | Switch = 1 <br> HvacMode = 0 (Auto) <br> HeatCool = any |
| Heat  | Switch = 1 <br>HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  | Switch = 1 <br> HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | Switch = 1 <br> HvacMode = 3 (Eco) <br> HeatCool = any |
| Off  | Switch = 0 <br> HvacMode = any <br>  HeatCool = any | 

##### Without Switch:

| HvacMode thermostat | KNX DPTs |
|---------------------|----------|
| Auto  | HvacMode = 0 (Auto) <br> HeatCool = any |
| Heat  | HvacMode = 1 (Comfort) <br> HeatCool = 1 (Heat) |
| Cool  | HvacMode = 1 (Comfort) <br> HeatCool = 0 (Cool) |
| Eco  | HvacMode = 3 (Eco)  <br> HeatCool = any |
| Off  | HvacMode = 4 (BldProt) or 2 (StandBy) <br> HeatCool = any |





### Resource Address

Except for Temperature, which is a read-only variable and has only one associated group address, other variables may have: 
1. **One address for both read and write operations**
2. **Two separate addresses**:
   - First address: Read operation (e.g., retrieving the current value).
   - Second address: Write operation (e.g., changing a setting).

When two different addresses are used for read/write, they have to be separated by a comma (`,`). Here's an example:

> 1/2/3,1/2/4 // (read: 1/2/3, write: 1/2/4)

**Switch Address:** The Switch address is optional.

**Group addresses order**:
- 1SP HVAC Mode
> Temperature:Setpoint:HvacMode:HeatCool:[Switch]

- 2SP HVAC Mode:
>Temperature:HeatSP:CoolSP:HvacMode:HeatCool:[Switch]

- 1SP HVAC Control Mode: 
> Temperature:Setpoint:HvacControlMode:[Switch]

- 2SP HVAC Control Mode: 
> Temperature:HeatSP:CoolSP:HvacControlMode:[Switch]

### Address examples

- 1SP HVAC Mode
> 0/0/1:0/0/2:0/0/3:0/0/4:0/0/5
  - Temperature: "0/0/1" (read)
  - Setpoint: "0/0/2" (read/write)
  - HvacMode: "0/0/3" (read/write)
  - HeatCool: "0/0/4" (read/write)
  - Switch: "0/0/5" (read/write)


- 1SP HVAC Control Mode
> 0/2/0:0/2/1,0/2/2:0/2/3
  - Temperature: "0/2/0" (read)
  - Setpoint: "0/2/1,0/2/2" (0/2/1 read, 0/2/2 write)
  - HvacControlMode: "0/2/3" (read/write)
  - Switch: (not set)


- 2SP HVAC Mode
> 0/4/0:0/4/1:0/4/2:0/4/3,0/4/4:0/4/5,0/4/6:0/4/7
  - Temperature: "0/4/0" (read)
  - Heat SP: "0/4/1" (read/write)
  - Cool SP: "0/4/2" (read/write)
  - HvacMode: "0/4/3,0/4/4" (0/4/3 read, 0/4/4 write)
  - HeatCool: "0/4/5,0/4/6" (0/4/5 read, 0/4/6 write)
  - Switch: "0/4/7" (read/write)





Importing and exporting KNX resources
-------------------------------------

KNX resources can be loaded from an ETS project using: 1) Group Address CSV export; and 2) OPC export (ESF).

 1. Group Address CSV export.
 On the Group Addresses view, right click over Group Addresses (root of the group addresses tree) and select the "Export Group
 Addresses" option to open the Export Group Address popup. Once in the popup select CSV as output format, "1/1 - Name/Address"
 as CSV format and comma as CSV separator.

 2. OPC export (ESF).
 On the main menu bar under "Extras" select "Export OPC" and leave the type unchanged (EIB session files (esf)).

 3. knxproj export.
 On "Local Projects" view, each project has an "Export" button that exports to .knxproj format.
 If Functions Blocks are used, resources can be loaded with the exact address and resource type.
 Group addresses will be listed showing its name, type and help description.
 *This is the preferred way, as it provides more information thus a better import in BeoLink Gateway.*

On BeoLiving Intelligence's resources screen, use the `Import Resources` button for adding resources from the ETS export file.

