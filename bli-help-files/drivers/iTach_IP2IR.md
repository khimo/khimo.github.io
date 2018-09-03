Global Cache iTach IP2IR
===============================

This driver supports communication with a Global Cache iTach IP2IR system, allowing to control IR controlled devices.

Connecting to the system
--------------------------------
Connection to the system is done via Ethernet. The following parameters should be provided:

 1. *Host*: The IP address or host name of the device.
 2. *Port*: The port number where the device is waiting for connections (the suggested default will probably be correct).

Available resources
--------------------------------
This driver is based on sending strings to the external system. Therefore a resource is a generic string.

There are 3 parameters to each resource:

-   Name of the resource.
-   Resource type.
-   A resource address, which is a string representation of the IR command.

IR Commands
-------------------
Control of IR devices is accomplished through use of the *sendir* command, which could be captured by using Global Cache IR capturing software *iLearn*, or by getting it from Global Cache's Control Tower, a cloud-based IR database.

An IR command (infrared transmission), is created by sending an IR timing pattern to the iTach. This pattern is a collection of on and off states modulated with a carrier frequency, which is present during the on state. 

Sendir has the following structure:

`sendir,connectoraddress,ID,frequency,repeat,offset,on1,off1,on2,off2….,onN,offN`

where N is less than 260 number pairs.

For example `TV Standby` command in B&O IR format looks like this:

`sendir,1:1,1,460571,1,1,96,1356,96,1356,96,7120,96,1356,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,2796,96,4243,96,2796,96,1356,96,2796,96,5686,96,15023`
