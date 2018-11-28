Lutron Grafik Eye
=================

Connecting to a Grafik Eye system
---------------------------------

All Grafik Eye interfaces are supported: GRX-RS232, GRX-CI-RS232, and
GRX-CI-NWK-E. Connection to the RS232 interfaces can be done directly
using a 3-wire RS232 cable, or via an Ethernet to RS232 interface.

If using an Ethernet to RS232 interface, set it up for 9600 bps, no
parity, no flow control, 1 stop bit.

Connection parameters are TCP port and IP address in case of using a
network interface.

The password is only needed if using a direct network connection to
GRX-CI-NWK-E. The default password for this interface is 'nwk'.

*Important note*: Make sure that you enable scene status feedback and
raw feedback on the Lutron interfaces. This is done by setting the DIP
switches 6 and 7 to ON on the interface itself.

Resources
-----------------------------

Resource types supported:

 + Dimmer, addressed as `unit:zone` (unit 1 to 8, zone 1 to 8)
 + Shade, addressed as `unit:zone`
 + Scene button, addressed as `unit:scene` (unit 1 to 8, scene 0 to 9 and A to G with G corresponding to OFF)
