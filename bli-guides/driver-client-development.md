---
title: Developers guides
layout: pagetoc
---
INTEGRATION UNSUPPORTED THIRD PARTY DEVICES

Developers wishing to integrate a new system or device with the BeoLiving intelligence have two options to choose from, depending of the type of control they wish to have.
If you wish to control your system with the BLI (send commands, request system states, etc.) the _Driver Development Guide_ includes communication protocol, available functions 

This section includes all available information and manuals for people wishing to develop drivers or clients to communicate or control the BeoLiving Intelligence.
Assitance is available through our support email: support@khimo.com

## Driver development

Driver development for a system will enable communication between the system and the BLI, this makes it possible to trigger events on the BLI and to send commands to your external system.

+ [Driver development guide](/bli-guides/developers-guides/driverDevelopmentGuide)

## Client development

Client creation would enable the user to gain control of everything the BLI controls through the system (this includes B&O products and much more. E.g: DoorBird, Dynalite, Lutron, Nest thermostat, Philips Hue, Vantage, Velux, etc.).

+ [BLGW communication protocol](/bli-guides/developers-guides/BLGW_Home_Integration_Protocol)

### Example

To try out communication with a BLI, you may use a Telnet protocol and the following instructions to request a status update of all the systems resources, activate live status updates and send an instruction.

**E.g.:**

```
~$ telnet 182.169.43.136 9100
q */*/*/*
f */*/*/*
c Area/Zone/BUTTON/Name/PRESS
```


### Lua commands
There isn't a list of commands available at the moment, but with a Pro BeoLiving Intelligence it is possible to find all commands on the Macro configuration panel by configuring the commands for a certain resource and then converting to Lua code.

Examples of the commands for a Beoplay M5 speaker are:

```lua
global/unassigned resources/AV renderer/Beoplay M5/Volume level?Level=0
global/unassigned resources/AV renderer/Beoplay M5/Send command?Command=PLAY&Continue type=short_press
global/unassigned resources/AV renderer/Beoplay M5/Send command?Command=PAUSE&Continue type=short_press
global/unassigned resources/AV renderer/Beoplay M5/Select source?Connector=&Origin=local&Source Type=DEEZER
```
