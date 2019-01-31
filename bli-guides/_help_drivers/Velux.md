---
title: Velux
layout: pagetoc
---

**ATTENTION: THIS DRIVER IS OUTDATED AND DOES NOT WORK. FOR VELUX SYSTEMS PLEASE USE THE VELUX KLF200 DRIVER.**

_This driver provides communication with Velux systems through Ethernet interfaces.

_Connection to a Velux system
----------------------------

_Communication with a Velux system is achieved via the Velux gateway,
which provides an Ethernet interface.

_Connection settings for Ethernet consist of: IP address of the Velux
gateway (default: 192.168.0.2), and port number (default: 51200).

_Defining resources
------------------

_The only supported resource type is the "Velux Scene Button" which
allows selection of a scene defined in the Velux gateway through its
`PRESS` command.

_The address of a "Velux Scene Button" is the scene identification
number of the scene that will be activated on `PRESS`.

_Requesting scenes from Velux gateway
-------------------------------------
_All the scenes defined in the Velux gateway can be added automatically
as BeoLiving Intelligence resources by selecting `Import resources` in the
resources page, an then `Load resources from connected system`.

_Resources added automatically from the Velux gateway will be named
using the scene label already defined.
