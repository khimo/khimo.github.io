---
title: BOSS by RielAmericano
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# BOSS by RielAmericano

This driver implements the Riel Americano BOSS serial ASCII protocol. It was tested with DualWay shades and DualWay shades with position control.

## Connecting

The BOSS Hub should be connected to the BLI using an RS232 connection and a RS485 adapter. The configuration settings should be:

- Baud Rate: 9600
- 8 data bits
- No parity bit
- 1 stop bit

The "BOSS address" parameter defines the default BOSS central address that will be queried for resources and used to route commands to a resource that does not define its own central address.

The BOSS Hub can also be connected using TCP with a TCP to RS485 adapter.

## Adding resources

Resources from the default "BOSS central address" should automatically load when pressing "Import Resources" and "Load resource from connected system". DualWay shades will be discovered as "DualWay" or as "DualWay with position control" and "DualWay with position control and Tilt". Choose the one that matches your shade.

Resources with position control may not be identified if the BOSS network has too many devices. If this is the case, simply copy the address and manually create the resource.

## Supported resources

Supported resources include:

- DualWay Shade: Supports OPEN, CLOSE, STOP commands and ONLINE state
- DualWay Shade with position control: Supports OPEN, CLOSE, STOP, SET commands and ONLINE, LEVEL states
- DualWay Shade with position control and Tilt: Supports OPEN, CLOSE, STOP, SET, OPEN TILT, CLOSE TILT, STOP TILT, SET TILT commands and ONLINE, LEVEL, TILT states
- Deluxe Shade: Supports OPEN, CLOSE, STOP commands and ONLINE state

## References

At the time of writing this document, the BOSS serial protocol can be found at the following URL: [http://rielamericano.com/guia-vinculacion-serial.pdf](http://rielamericano.com/guia-vinculacion-serial.pdf)

## Changelog

**v0.1**
- First version

**v0.2**
- Extends the resource address to optionally support defining one Boss central per resource (e.g: 001:001)

*Please report any issues with this driver to: support+drivers@khimo.com*
