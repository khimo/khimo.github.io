---
title: Somfy UNIVERSAL RTS Interface
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
Somfy - UNIVERSAL RTS INTERFACE II
===================================

The addressable Universal RTS Interface II (URTSI II) can be used to communicate
between home automation or other third party systems and SOMFY’s RTS Motors and
controls. It is capable of individual or group control, and can be operated via infrared
remote, RS232 and RS485 serial communication. Once an input is activated, an RTS
radio command is sent to the automated window treatment.

It has a maximum limit of 16 individual motors, each one idintified by its index number
from 1 to 16.

Driver Setup
------------

For RS232 connection:
  - Set Baud Rate to 9600.

For R232 over TCP connection:
  - Set Host and Port values.

Resource Address
----------------

The resource address is formed by two digits idintifying the index of the motor, so it
must be one of:
01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16

Changelog
---------

  - v0.2 - Corrects address verification
  - v0.3 - Improves handling of incomming messages

