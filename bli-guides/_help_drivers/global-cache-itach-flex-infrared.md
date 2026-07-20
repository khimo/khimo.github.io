---
title: iTach Flex Infrared
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: iTach Flex Infrared, IR, IR_COMMAND, BUTTON, _COMPLETE_IR_TX
description: iTach Flex Infrared driver controls devices by sending IR commands through all cable ports connected.
---
# Global Cache iTach FLEX INFRARED

This driver supports communication with Global Cache iTach Flex used with all IR link cables, allowing to send IR commands through all cable ports connected.

## Connecting to the system

Connection to the system is done via Ethernet interface. For
achieving this, the following parameters should be provided:

 1. *Host*: The IP address or hostname of the device.
 2. *Port*: The port number where the device is waiting for
connections (by default equal to ```4998```).

## Available resources
This driver is based on sending strings to the external system through the unique **IR\_COMMAND** resource type mapped as a *BUTTON*. 

There are 3 parameters for each resource:

-   Name of the resource.
-   Resource type.
-   A resource address, which is a string representation of the IR command.

## Resource Address

An IR command (infrared transmission), is created by sending an IR timing pattern to the iTach Flex. This pattern is a collection of `on` and `off` states modulated with a carrier frequency, which is present during the `on` state.

Resource address has the following structure:

`<module:port>,<ID>,<freq>,<repeat>,<offset>,<on1>,<off1>,<on2>,<off2>,…,<onN>,<offN>`

where:

* `<module:port>` = address of the desired IR channel. Module always must be equal `1`.
* `<ID>`   = 0|1|2|…|65535 (used for the  `\_COMPLETE\_IR\_TX` Event. See below.)
* `<freq>`  = 15000|…|500000 (in hertz)
* `<repeat>`  = 1|2|…|20 (the IR command is sent <repeat> times)
* `<offset>`  = 1|3|5|…|383 (used if <repeat> is greater than 1)
* `<on1>`   = 4|5|…|50000 (number of pulses)
* `<off1>`   = 4|5|…|50000 (absence of pulse periods of the carrier frequency)
* `N` = the count  of `<on>`,`<off>` pairs, which must be less than 260 (total of 520 numbers)

For example the corresponding resource address for send the `TV Standby` command in B&O IR format through port ```1``` looks like this:

`1:1,1,460571,1,1,96,1356,96,1356,96,7120,96,1356,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,4243,96,2796,96,1356,96,2796,96,5686,96,15023`
 
## Commands and Events

+ **PRESS** : Command for send IR command.
+ **_COMPLETE\_IR\_TX** : Event fired when iTach Flex return that a specific IR command was completely sent. The identification of the IR command successfully sent
is made by `ID` value specified on resource address.  

**Note**: The type of iTach Flex IR link cable connected must be configured by the web interface of the iTach Flex.
