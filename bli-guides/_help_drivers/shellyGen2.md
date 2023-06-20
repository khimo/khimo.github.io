---
title: Shelly 2nd generation
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Shelly 2nd generation

This driver implements communication with the second generation of Shelly devices (Shelly-NG) using the JSON-RPC 2.0 protocol over websockt. It also implements device discovery using multicast DNS and HTTP protocol to query the device capabilities.

The driver integrates the following Shelly components, allowing them to be used as BeoLiving Intelligence resources:

- Cover: SHADE, either with or without level control
- Input: As BUTTON or GPIO
- Switch: As BUTTON with status, as DIMMER, or as GPIO

Resource addresses are composed of either the MAC address or the IP of the Shelly device together with the ID of the component, e.g.: 441793ac3804/0

The discovered resources will use by default the device name and the component address as reported by shelly, so it is a good practice to name all your Shelly devices before assigning them into the BeoLiving Intelligence. Shelly didn't notify when their internal name is synchronized, the BLI will sync the name every time they come online, so it may be a good idea to reboot the shelly device after changing the name, to force an update in the BeoLiving Intelligence.

Any Shelly device with the listed components should be compatible, currently tested with:

- Pro4PM
- Pro1
- Plus2PM

## Changelog:
### 2023/05/08 v1 
  - Initial release supporting Cover, Input, and Switch components.

