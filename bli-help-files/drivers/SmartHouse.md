Smart-House
===========

Connection to a Smart-House system
----------------------------------

Connection to a Smart-House system is made via an Ethernet connection to
a Smart-House controller.

Both the IP address and the TCP port must be configured on BeoLiving Intelligence.

*Remark:* when loading different configurations it may be necessary to reboot the
Smart-House system to reestablish connection with it.


Defining Resources
------------------

Resources can be

 - *dupline input channels*,
 - *dupline output channels* or
 - functions of type *sequence*.

Interaction between BeoLiving Intelligence and the Smart-House system is
implemented via changes in the status of *channels* and the start /
stop of *sequences*.

Dupline channel addresses are of the form `A1`: an *uppercase* letter
(A to Z) followed by a digit (1 to 8).

Functions are identified by a single number.

Events and commands
-------------------

Events can be a *dupline channel* set, a *dupline channel* reset, a
*sequence* start or a *sequence* stop.

Commands to a Smart-House system are set, reset or pulse a *dupline
channel* and start or abort a *sequence*.
