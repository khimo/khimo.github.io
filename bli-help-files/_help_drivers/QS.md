Lutron Grafik QS
================

Connecting to a Grafik QS system
--------------------------------

Connection to a Grafik QS system is done via a QSE-CI-NWK-E interface,
which allows for Ethernet and RS232 connectivity.

For RS232 communications, set the same bit rate on the QSE-CI-NWK-E
interface and on BeoLiving Intelligence connection settings.

Connection settings for Ethernet are the IP address of the interface and
the password. The default password is 'nwk'.

Defining Grafik QS resources
----------------------------

The resources you need to define are control units and accessory
controls (e.g. keypads) with which you need to interact. Each is
defined by a serial number which can be found on a label on each
product, or from the control units bus status information, or by
inspecting BeoLiving Intelligence monitoring information.

Grafik QS events and commands
-----------------------------

Events from a Grafik QS system can be lighting scene changes on control
units, or key presses.

Possible commands are scene changes on control units.
