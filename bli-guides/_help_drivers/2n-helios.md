---
title: 2N Helios
layout: pagetoc
---

BeoLiving Intelligence can interact with 2N Helios, being capable to control switchs and I/O interfaces, fires an event when doorbell button is pressed and when motion or noise sensors detect activity.
In order to get video image on the BeoLiving Intelligence from the device, it's necessary to add the camera on Interfaces Tab and fill the respective fields.

Conecting to the system
-----------------------
  
BeoLiving Intelligence can connect and interact with 2N Helios through a rest API connection.  
The Connection Settings parameters are:

* *Host Ip*: ```<IP address>```

    *Optionals*
* *Login*: ```<Username>```
* *Password*: ```<Password>```

+ Attention: Digest authentication isn't supported yet.
  
Resources
---------
  
  + SWITCH: Allows to control switch interfaces state
  + INPUT: Allows to watch input interfaces state
  + OUTPUT: Allows to control output interfaces state
  + BUTTON: Fires an event when a button is pressed on the door
  + MOTION SENSOR: Fires an event when the camera detect motion
  + NOISE SENSOR: Fires an event when the microphone detect noise

Resource Address
----------------

  + SWITCH: ```<(1 to 4)>```
  + INPUT and OUTPUT: ```<Port identifier>```
  + BUTTON: ```<Button id>```
  + MOTION SENSOR: ```<Camera id>```
  + NOISE SENSOR: ```<Microphone id>```

Get Live Image
-----------------

In order to get live images from 2N Helios, it's necessary to add the camera in Interfaces Tab and set the next fields as below:

* **Camera access:**

  * *Base URL* : Equal to ```http://<2N Helios-ip>```
  
      *Optionals*
  * *Username* : Same username used on Connection Settings of the system in Systems Tab.
  * *Password* : Same password used on Connection Settings of the system in Systems Tab.
  * *Base RTSP URL* : Equal to ```rtsp://<2N Helios-ip>```

* **Camera resources path/Video & Images:**

  * *High/Low resolution image* : Equal to ```'/api/camera/snapshot?width=<width>&height=<height>&fps=<(1 to 15)>'``` to get snapshots.
