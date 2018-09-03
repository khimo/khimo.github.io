Dynalite
========

Connection to Dynalite systems can be made via the RS232 interfaces,
either using BeoLiving Intelligence RS232 port or via an Ethernet to RS232
interface.

Native Dynalite Ethernet interfaces *are not supported* in the current
software.

Dynalite resources
------------------

Resources may be *area presets* and *dimmers*.

A preset is identified by an area number plus a preset number in the
range 1 to 24, separated by a comma.

Events and commands
-------------------

A preset selection can be detected by BeoLiving Intelligence as an event. The parameters
for the event are the *preset number* and the *bank number*.

For setting up a Dynalite control to affect only BeoLiving Intelligence, this control must
be assigned an area number not used by any dimmer or actuator.

The available commands are: *Preset selection*, *Switch area off*, and
*Area fade UP / DOWN / STOP*.

The parameters for preset selection are area number and preset number.

For area off and area fading, the only parameter is the area number.
