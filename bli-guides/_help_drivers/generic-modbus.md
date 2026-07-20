---
title: Generic Modbus
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Generic Modbus, Modbus, _MODBUS_REGISTER, WRITE, WRITTEN
description: Generic Modbus driver allows to interact with systems using Modbus protocol with a _MODBUS_REGISTER resource.
---
# Generic Modbus driver

This driver is intended to interact with any system that uses Modbus protocol.

Modbus is designed to write and read registers. A register is a value of 16 bits.

Each Modbus register has got assigned an address, so, to refer a register you must specify its address.

## Resources

The only resource that exists is _Modbus register_ (_\_MODBUS\_REGISTER_ type). Its address is a whole
number between 0 and 65536, and represents the actual register address.

The driver polls in order to update register values, so it will fire _STATE\_UPDATE_ event each time
a register is updated indicating its value.

## States
 
Each _Modbus register_ has two values:

   + the register _VALUE_ and
   + the _ACTUAL\_VALUE_.

The _ACTUAL\_VALUE_ is optional, it is used or not depending on the _Modbus server_.

## Commands

The only command you can run with a _Modbus register_ is to write a new value to it. This action can
be done using the command _WRITE_.

The _WRITE_ command requires as an argument the new value.

Note that _ACTUAL\_VALUE_ is read-only and can not be written, so _WRITE_ will just update _VALUE_.

## Events

As quick as the register updates its value after the _WRITTEN_ command runs, the _WRITTEN_ event will be
fired.
