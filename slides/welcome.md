---
layout: slides
---

[comment]: <> (For a new horizontal slide use: \n----\n)
[comment]: <> (For a new vertical slide use: \n|||n)
[comment]: <> (To write slide notes uses \nNote:)



<!-- .slide: data-background-image="bli.jpg" data-background-opacity=.1 -->

----
## BeoLiving Intelligence

#### 2 flavours:

- BASIC
- PRO

<br/>

#### 4 times faster than the BLGW <!-- .element: class="fragment" data-fragment-index="2" -->

Note:
  - BASIC An entry home controller (From factory) 
  - PRO: BeoLink Gateway  + free remote access + new goodies (must buy an upgrade) 

----
### BASIC (1/2)

- Designed for the end-user (Plug & Play)
- Fully configurable from the *BeoLiving App*
- Improves security: password less
- Automatic adds B&O resources

Note:
BLI its designed for the end user. Out of the box, could be setted up by some non-technical easy steps.


----
### BASIC (2/2)
 
 
- Content providers credentials
- Product groups
- Alexa & IFTTT
- Automatic firmware upgrade

Note:
- Some HA systems will be added in the future
- Web interface is completely limited. Network settings, Project info, User management, Firmware upate and Service report are available. Configuration upload/download is not supported.
- Most of the configuration is done through BeoLiving App.


----

## PRO

- The BASIC features
- The BeoLink Gateway features
- Remote access configured from factory
- One-time PRO upgarde

Note:
- Paying for a  one-time PRO license upgrade, BLI will unlock the rest of its  capabilities. The way to pay for this license could be done through BLI  BASIC's web interface. In the future is planned to add a way to upgrade  to PRO through BeoLiving App.
- Besides "global" zone, now there is one more default zone called "unassigned-resources" where all NetworkLink devices are added.



----

## What will not work!

- MasterLink devices
- Beo4 and BeoRemote One commands
- Manual sources
- The admin password


----
## Some features

|||
### Feature: Login without password 

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3vyf8GKIrww?autoplay=0&loop=1&playlist=3vyf8GKIrww&start=24"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature: Assign products

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9edtGSMGeNg?autoplay=0&loop=1&playlist=9edtGSMGeNg"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature:  Create product groups

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VSwNKgSssI8?autoplay=0&loop=1&playlist=VSwNKgSssI8"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature:  Create scenes

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpFUk5OeHDg?autoplay=0&loop=1&playlist=zpFUk5OeHDg"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Feature: Request remote access

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9R8mR-LxnXE?autoplay=0&loop=0&playlist=9R8mR-LxnXE"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>


----
# Alexa


|||
### Alexa (BASIC | PRO)

Alexa skill is available for BASIC and PRO.
Examples:
  + Set modes or setpoints of thermostats
  + Select source, change channel, volume control of NetworkLink products
  + Control shades and dimmers
  + Fire scenes

|||
### Linking Alexa and IFTTT (1/2)

<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/w7Ck3V6DtEw?autoplay=0&loop=1&playlist=9R8mR-LxnXE"  frameborder="0" width="1013" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>

|||
### Linking Alexa and IFTTT (2/2)

Two ways:
+ Scan a QR code with BeoLiving App
+ If you started this linking process using an iOS device, BeoLiving App shows up to Authorize permissions after button press (?)

Note:
Khimo User/Password linking process (as it was for IFTTT) is also available as a legacy for BLGW users.

|||
### Alexa Tips

+ Devices names should be chosen properly
+ Create scenes for most frequent use cases or as a workaround if Alexa doesn't understand an instruction.

Note:
+ Source selection sometimes becomes un-useful if device names or source name are complicated
+ Alexa's device name = ¨Zone name¨ + ¨Device name¨

----
## IFTTT

Compatible with same BLGW applets

----
## Products Groups & Credentials content provider

|||
### Products groups

+ Statically link NetworkLink products
+ A product group behaves as one device
+ Same source, same volume in the group
+ Solution for big rooms/installations

Note:
In a products' group, exist a master product that will be the source and volume reference of the group and the rest of the grouped products will follow any source/volume change of master automatically. BeoLiving App will only show the master.

|||
### Content provider credentials

+ Possible to set default credentials
+ BLI sets automatically credentials to new devices
+ Previously credentials setting was done manually for each product

Note:
+ Doesn't override existant credentials on devices or sets on devices that previously had
+ Only set credentials when detects a new device without credentials setted

----
## Thinks to remember

- password "admin" is not valid!
- BASIC from factory
- Khimo cloud from factory
- PRO is compatible with BLGW config


Note:
+ By default, admin user has an unknown password. Inserting button function 2, will set admin password to "admin" for the next 5 minutes. This decision is based in security matters.

----

### Service troubleshooting & Recovery mode guide

- ECON usb to get service report
- Service magic USB to recovery a "DEAD" box

----
### Documentation

- Everything at github
- Help us improving it!
  - Create a github user
  - Send the user to us
  - Edit it from github
