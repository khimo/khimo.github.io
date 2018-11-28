Conson XP
=========

Connection to a Conson system is done via an XP130 gateway module.
This module provides an RS485 interface, so either a RS232 to RS485
converter, or a compatible RS485 USB adapter are needed for connecting
to BeoLiving Intelligence.

Conson resources
----------------

A resource on a Conson system is an input on a module. A module is identified by a *module type* plus a *link number*.

Therefore, the complete addressing for a resource is of the form `module,link,input`.

Events and commands
-------------------

Changes on a module's input generate an event on the Conson bus. This
is signaled as a circuit *make* or *break* event on BeoLiving Intelligence.

Similarly, BeoLiving Intelligence can send circuit make, break, or pulse (make followed by
break) to any input of a module.
