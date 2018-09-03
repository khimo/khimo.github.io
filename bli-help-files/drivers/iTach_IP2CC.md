Global Cache iTach IP2CC
===============================

This driver supports communication with a Global Cache iTach IP2CC,
allowing to control relay closures.

Connecting to the system
--------------------------------

Connection to the system is done via Ethernet interface. For
achieving this, the following parameters should be provided:

 1. *Host*: The IP address or host name of the device.
 2. *Port*: The port number where the device is waiting for
connections.

The Global Cache iTach IP2CC driver polls each relay every second
for status updates.

Available resources
--------------------------------

The Global Cache iTach IP2CC driver supports commanding the relays
that are added as resources.

Relays are mapped to the BUTTON Standard Resource type, and allow
full control of it.

After power loss relay closures will be in open state.
