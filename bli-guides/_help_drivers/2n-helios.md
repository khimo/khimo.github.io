---
title: 2N Helios
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# 2N HELIOS DRIVER

This driver can interact with 2N Helios, control switches and I/O interfaces, fire an event when a doorbell button is pressed and when motion or noise sensors detect activity.
In order to get video image from the device, it is necessary to add the camera on the Interfaces tab and fill in the corresponding fields.

## Conecting to the system

Communication to 2N Helios is done through a REST API.

The Connection Settings parameters are:

* *Host*: Hostname or IP address. By default, http protocol is used, if you want to use https you should add https:// as prefix. 
    *Optionals*
* *Login*: ```<Username>```
* *Password*: ```<Password>```

## Resources

  + SWITCH: Allows to control switch interfaces state
  + INPUT: Allows to watch input interfaces state
  + OUTPUT: Allows to control output interfaces state
  + BUTTON: Fires an event when a button is pressed on the door
  + MOTION SENSOR: Fires an event when the camera detect motion
  + NOISE SENSOR: Fires an event when the microphone detect noise

## Resource Address

  + SWITCH: ```<(1 to 4)>```
  + INPUT and OUTPUT: ```<Port identifier>```
  + BUTTON: ```<Button id>```
  + MOTION SENSOR: ```<Camera id>```
  + NOISE SENSOR: ```<Microphone id>```

## Get Live Image

In order to get live images from 2N Helios, it's necessary to add the camera in Interfaces Tab and set the next fields as below:

* **Camera access:**

  * *Base URL* : Equal to ```http://<2N Helios-ip>``` *Cameras won't work with https*.
  
      *Optionals*
  * *Username* : Same username used on Connection Settings of the system in Systems Tab.
  * *Password* : Same password used on Connection Settings of the system in Systems Tab.
  * *Base RTSP URL* : Equal to ```rtsp://<2N Helios-ip>```

* **Camera resources path/Video & Images:**

  * *High/Low resolution image* : Equal to ```'/api/camera/snapshot?width=<width>&height=<height>&fps=<(1 to 15)>'``` to get snapshots.

# Changelog
## v0.6 | <2020-09-22>
 - Fixed several bugs.
 - Increased version number.
 - Added Changelog.
 - Refactored help: fixed titles format, added help regarding https use.
## v0.7 | <2020-10-07>
 - Improves in-line setup help
