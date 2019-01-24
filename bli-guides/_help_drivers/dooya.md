---
title: Dooya System
layout: pagetoc
---

BeoLink Gateway and Dooya System are capable of fire up to 50 presets scenarios between each system.  

Connection with Dooya System
-----------------------------

Connection between BeoLink Gateway and Dooya System is accomplished through TCP protocol.  

The Connection Settings parameters are:

* *Host ID* : ID number of Dooya System host. The field format must be hexadecimal numbers without "0x" as prefix and each hexadecimal number separated with a semi-colon (Eg.: ```20:01:00:14:97:13:b6:36```).
* *Host* : IP address of Dooya System host.
* *Port* : Port address of Dooya System host. By default the port used is ```6900```.

Available Resources
-------------------

The available resource types are:
* *OUTPUT\_SCENE* : Resource that represents an outgoing scenario from BeoLink Gateway to Dooya System. On BeoLink Gateway, this resource is mapped as *BUTTON* resource type. 
* *\_INPUT\_SCENE* : Resource that represents an incoming scenario to BeoLink Gateway from Dooya System. On BeoLink Gateway, this resource is mapped as a custom resource type. 

### Resource Address

* *OUTPUT\_SCENE* : Address format must be an hexadecimal number including the prefix ```0x``` between the next interval ```[0x01-0x32]``` (corresponded with the decimal interval ```[1-50]```).
* *\_INPUT\_SCENE* : Address format must be an hexadecimal number including the prefix ```0x``` between the next interval ```[0x33-0x64]```(corresponded with the decimal interval ```[51-100]```).

### Events/Commands 

* *OUTPUT\_SCENE* : Has a unique *PRESS* command for fire the respective scene on Dooya System side. This resource has state since is represented as a *BUTTON* resource type on BeoLink Gateway.
* *\_INPUT\_SCENE* : Has a unique event *\_INPUT\_EVENT* that is fired when the respective scene is fired on Dooya System side. No commands available on this resource type. 
