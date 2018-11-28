Vantage
=======

Connection to a Vantage system
------------------------------

Communication with a Vantage system is done through an *InFusion Dim
Controller*. This device has both RS232 and Ethernet interfaces.

Connection to the RS232 interface can be done directly using a fully
wired RS232 cable and it is fixed at no parity, 1 stop bit, 8 data bits.
Make sure to configure bit rate and flow control as needed.

Connection settings for Ethernet are the IP address of the InFusion Dim
Controller and its telnet port.

Resources
---------

To program the InFusion Dim Controller, the PC tool *Design Center* is
needed. It lets you define all components of your Vantage system, where
each one has an address called *vid* (Vantage Identification Number).

On BeoLiving Intelligence you can define as resources the following items:

 - a *button* on any control
 - a *task*

To define a resource, you need to know the Button or Task vid, which
must be entered in the address field.

Events and commands
---------------------------

An event corresponds to a Button press or release.

Supported commands are:

 - *Button press and release*
 - *Button press*
 - *Button release*
 - *Task activation* (press, hold, release)
