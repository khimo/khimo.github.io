Velux
=====

This driver provides communication with Velux systems through Ethernet interfaces.

Connection to a Velux system
----------------------------

Communication with a Velux system is achieved via the Velux gateway,
which provides an Ethernet interface.

Connection settings for Ethernet consist of: IP address of the Velux
gateway (default: 192.168.0.2), and port number (default: 51200).

Defining resources
------------------

The only supported resource type is the "Velux Scene Button" which
allows selection of a scene defined in the Velux gateway through its
`PRESS` command.

The address of a "Velux Scene Button" is the scene identification
number of the scene that will be activated on `PRESS`.

Requesting scenes from Velux gateway
-------------------------------------
All the scenes defined in the Velux gateway can be added automatically
as BeoLiving Intelligence resources by selecting `Import resources` in the
resources page, an then `Load resources from connected system`.

Resources added automatically from the Velux gateway will be named
using the scene label already defined.
