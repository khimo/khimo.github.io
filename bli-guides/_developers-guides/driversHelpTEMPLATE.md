---
title: Driver Help Template
layout: pagetoc
---

# Introduction
This document defines the categories that should be present in any BeoLiving Intelligence driver help document, while giving some examples.

Take into account that titles and sub titles should be defines as:

```markdown
# Title
## Subtitle
### Subsubtitle
#### etc
```

and not as:

```markdown
Title
=================
Subtitle
-----------------
```

**the main title should also not include the word "driver" (also, please don't include "driver" in the *driver_label='Name of the product'* field of the driver).**

# Template:

```markdown 
## Product Name

> A short description of the product that the driver controls.
> E.g.:

The Fibaro driver on the BeoLiving Intelligence integrates ON/OFF devices (ie. wall plugs, switches), dimmer devices, RGBW devices and roller-shutter devices configured in the Fibaro Home Center.


### Connecting to the system

> Explain how the connection is made and how to connect.
> E.g.:

**Communication with Fibaro products it's made through the Fibaro HomeCenter.** This implements an HTTP RESTful API. 
The following is a list of configurations fields that the installer should define in order to establish the connection.

*Include connection setting fields and how they should be completed.*
Connection settings are:
 - **HomeCenterIP**: Fibaro Home center IP address.
 - **User**: Fibaro username.
 - **Password**: Fibaro password.

### Available resources (RESOURCE TYPE)

> List and short description of each.
> E.g.:

The available resource are:
 - **Fibaro Blind/Shade (SHADE)**: Any Blind/Shade device in the installation.
 - **Fibaro ON/OFF device (GPIO)**: Any ON/OFF device in the installation.
 - **Fibaro dimmer (DIMMER)**: Any dimmer or multilevel device in the installation.

### Resource Address

> What should go in the address box.
> E.g.:

**The resource address should be the devices ID number**. A unique integer number, assigned by your FIBARO system, that locates a specific device in the installation.

### Resource discovery

> Is resource discovery available, how does it work, etc.
> E.g.:

Resource discovery is available and will detect most devices but may not detect all working devices. 
Discovered devices displaying "Enabled: false" in their description will probably not work, as they are devices the Fibaro HomeCenter has once worked with but which are not connected anymore.

### Resource Events

> List and short description of each.

### Captured events

> If event capturing is possible, how to perform it, and if force discovery is available.
> E.g.:

Press the "Capture" button, excecuted events sent by the systems in your installation (that you can normally find in _Tools-->Monitor_) will appear so that you can select them and use them to trigger functions.


### Resource Commands

> List and short description of each.
> E.g.:

- Switch commands:
  - **SET**: Set the switch level to 0 (OFF) or 1 (ON).
  - **TOGGLE**: Change the switch state to the opposite of the present one.
- Dimmer commands:
  - **SET**: Set the dimmer level between 0 and 100

### Resource States

> *List and short description of each.*
> E.g.:

  - **LEVEL**: Level position of Shade/Blind or of the DIMMER device.
  - **STATE**: State of the ON/OFF device.


### Changelog

> Versions and dates with description of changes.
> E.g.:


#### v0.2 | 24/07/2020
 - Adds protections to errors while parsing initial state

#### v0.3 | 2/08/2020
 - Adds protections to RGBW resources incomplete status feedback
```
