---
layout: slides
---

[comment]: <> (For a new horizontal slide use: \n----\n)
[comment]: <> (For a new vertical slide use: \n|||n)
[comment]: <> (To write slide notes uses \nNote:)

<!-- .slide: data-background-image="bli.jpg" data-background-opacity=.1 -->

----
## BeoLiving Intelligence

#### uses the core of BeoLink Gateway but is designed for a wider audience <!-- .element: class="fragment" data-fragment-index="2" -->

Note:
- Meaning that if you are familiar with BeoLink Gateway you will be too with BeoLiving Intelligence

----
## BeoLiving Intelligence

#### 2 modes:

- ESSENTIAL
- PRO

<br/>

#### 4 times faster than BLGW <!-- .element: class="fragment" data-fragment-index="2" -->

Note:
+ ESSENTIAL mode comes from factory

----
### ESSENTIAL (1/2)

- Designed for the end-user (*Plug & Play*)
- Fully configurable from the *BeoLiving App*
- Automatically adds B&O devices
- Password less: improves security

Note:
+ Designed for the end-user, meaning that you don't need any technical knowledge

----
### ESSENTIAL (2/2)
 
- Set content provider credentials
- Products groups
- Alexa
- Automatic firmware upgrade

Note:
- Features explained later
- Most of the configuration is done through BeoLiving App
- Web interface is completely limited. Network settings, Project info, User management, Firmware update and Service report are available. 
Configuration upload/download is not supported
- HA systems are blocked
- Some HA systems will be added in the future

----
## PRO

- The *ESSENTIAL* features
- The *BeoLink Gateway* features
- Remote access
- One-time payment for PRO mode upgarde

Note:
- This upgrade is done through BLI web interface. 
- BLI PRO mode will unlock the rest of its capabilities. 
- Its web interface and configuration is practically the same as BeoLink Gateway

----
## What will not work!

- MasterLink devices
- Beo4 and BeoRemote One commands
- Manual sources
- The default admin password

Note:
+ By default, admin password is unknown. To set it to a known password, button function 2 must be entered. This will set admin password to "admin"for the next 5 minutes. Then, you must enter to its web interface and at first you will be asked to set a new admin password.
+ This decision is based in security matters.


----
## Some features

Note:
Now, I'll show you some videos explaining how to configure and use these new features

|||
#### Feature: Login without password 

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7Sa3cIVKDeA?autoplay=0&loop=1&playlist=7Sa3cIVKDeA"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Note:


|||
#### Feature: Assign products

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kxKkUu6QZVI?autoplay=0&loop=1&playlist=kxKkUu6QZVI"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature:  Create products groups (1/2)

+ Statically link NetworkLink products
+ A product group behaves as one device
+ Same source, same volume in the group
+ Solution for big rooms/ambients

Note:
+ In a products' group, exist a master product that will be the source and volume reference of the group and the rest of the grouped products will follow any source/volume change of master automatically. BeoLiving App will only show the master.

|||
#### Feature:  Create products groups (2/2)

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/q04J8CAvP10?autoplay=0&loop=1&playlist=q04J8CAvP10"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature: Credentials content provider (1/2)

+ BLI sets automatically credentials to new devices
+ Previously credentials setting was done manually for each product

Note:
+ Doesn't override existant credentials on devices
+ Only set credentials when detects a new device without credentials setted

|||
#### Feature: Credentials content provider (2/2)

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1Tab-Vqt4ZA?autoplay=0&loop=1&playlist=1Tab-Vqt4ZA"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
#### Feature: Request remote access

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9R8mR-LxnXE?autoplay=0&loop=1&playlist=9R8mR-LxnXE"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Note:
Only in PRO mode.

----
# Alexa

|||
## Alexa (ESSENTIAL | PRO)

+ Set modes and setpoints of thermostats
+ Select source, change channel, volume control of NetworkLink products
+ Control shades and dimmers
+ Fire PRESS commands on buttons
+ Fire scenes

Note:
+ Available for ESSENTIAL and PRO
+ Compatible with BLGW
+ Google Home is on the way

|||
## Linking Alexa (1/4)

### Three ways <!-- .element: class="fragment" data-fragment-index="2" --> 

|||
## Linking Alexa (2/4)

#### BeoLiving App goes to foreground

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/W_4cyvD2Q1Q?autoplay=0&loop=1&playlist=W_4cyvD2Q1Q"  frameborder="0" width="800" height="450" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
## Linking Alexa (3/4)

### Scan QR code with BeoLiving App

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/IJ44nvO0l6Y?autoplay=0&loop=1&playlist=IJ44nvO0l6Y"  frameborder="0" width="800" height="450" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Note:
If you start the linking procedure using your laptop or any other device that hasn't installed BLApp you can scan a QR code with it

|||
## Linking Alexa (4/4)

#### Legacy User/Password login for BeoLink Gateway users

|||
### Alexa Tips

+ Alexa's device identifier name = "_Zone name_" +  "_Device name_"
+ Devices names should be chosen properly
+ Create scenes for most frequent use cases or as a workaround if Alexa doesn't understand an instruction.

Note:
+ Source selection sometimes becomes un-useful if device names or source name are complicated

----
## Thinks to remember

- password "admin" is not valid!
- ESSENTIAL from factory
- Khimo cloud from factory
- PRO is compatible with BLGW config

----
### Service troubleshooting & Recovery mode guide

- ECON usb to get service report
- Service magic USB to recovery a "DEAD" box

Note:
+ Useful when web interfaces is broken or dead and its not possible to create a service report.
+ Recovery: insert pendrive with specific .zip file and BLI will boot from that pendrive. Will erase all configuration and download the last firmware.

----
### Documentation

- Everything at github
- Help us improving it!
  - Create a github user
  - Send the user to us
  - Edit it from github
