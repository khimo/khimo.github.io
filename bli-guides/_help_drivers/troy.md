---
title: TRO.Y
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
    
TRO.Y
===============================

This driver supports communication with a TRO.Y system,
allowing to control shades with and without status.

Connecting to the system
--------------------------------

Connection to the system is done via a telnet connection with the
TRO.Y system. The following configuration is needed:

 1. *Host*: The IP address or host name of the TRO.Y device.
 2. *Port*: The port number where the bridge is waiting for
connections (the suggested default should be correct).
 3. *User*: The username for the connection. Leave empty when not
set on the TRO.Y device.
 4. *Password*: The connection password. If the user is empty,
this field is not used.

Telnet connection *must* be enabled on the TRO.Y device, on the
_Integration Settings_ page.

**Warning** The TRO.Y system only allows for *one* telnet connection
at a time, so be aware of any other client attempting to connect
or currently connected.

Available resources
--------------------------------

The TRO.Y driver supports commanding shades with and without status,
and provides a means for loading all the resources into the BLI 
directly from the TRO.Y system.

**Warning** Importing the resources *require* that the TRO.Y http
server has *no password set*.

**Note** status update for shades is performed via polling every
10 seconds, so there could be a delay between a status update and
the corresponding interface update.

*Please, report any issue with this driver to: support+drivers@khimo.com*

### Changelog

 - v0.1
  - First version. 
