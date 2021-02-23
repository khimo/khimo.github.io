---
title: QMotion QIS Shades
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# QMotion QIS Shades

The QMotion QIS Shades driver on the Beolink Gateway integrates all individual QMotion Shades and Shade Groups configured in QMotion QIS. 
The standard SHADE commands SET LEVEL, RAISE, LOWER and STOP are available for all resource types. 
The standard SHADE LEVEL status is only available for individual shade resources. 

## Connecting to the system

Communication with QMotion QIS Shades it's made through serial communication via an RS485 interface. Since Beolink Gateway supports only RS232 serial communication using a USB adapter, an RS232-RS485 converter will be needed for establishing the communication.

## Available resources

The available resource type is:
* **Qmotion Blind/Shade**: Any Blind/Shade device in the installation.
* **QMotion Group of Blinds/Shades**: Any Group of Blinds/Shades in the installation.

## Resource Address

* **Qmotion Blind/Shade**: Every single Shade is uniquely identified by a number of 8 bytes in hexadecimal format. 
* **QMotion Group of Blinds/Shades**: Every Shade Group is uniquely identified by a number of 2 bytes in hexadecimal format.

## Commands, Events and States

Commands are the same for both resource types:
* Commands:
  - **SET**: Set level position of Group/Shade.
  - **RAISE**: Set to maximum level of Group/Shade.
  - **LOWER**: Set to minimum level of Group/Shade.
  - **STOP**: Stop level transition of Group/Shade.

Only *QMotion Blind/Shade* contains **LEVEL** state:
* States:
  - **LEVEL**: Level position of Shade/Blind.

## Changelog:

  - v0.6 2019-06-27 
    - Adds support to "Load resources"
    - Improves handling of resource state
    - Improves handling of connection status

  - v0.7 2020-10-07 
    - Improves in-line setup help
