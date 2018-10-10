---
title: BeoLiving Intelligence for BeoLink Gateway installers
layout: pagetoc
---

The _BeoLiving Intelligence_ uses _the core_ of the _BeoLink Gateway_ but it is designed for a _wider_ audience.
The scope of this guide is intended to show to _BeoLink Gateway_ installers what they already know and what's new regarding _BeoLiving Intelligence_.

## ESSENTIAL and PRO mode

The big and most important difference of _BeoLiving Intelligence_ is that it has two functional modes: _ESSENTIAL_ and _PRO_ modes. _BeoLiving 
Intelligence_ comes from factory in _ESSENTIAL_ mode and is aimed for the end user, being easy to install (not being necessary an installer) and 
to start using. 

This mode has the following features: 

 - Fully configurable from the [BeoLiving App](#beoliving-app)
 - Automatically discover and adds all B&O products
 - Control of B&O products
 - Allows the creation of automation scenes
 - Handles basic _Bang & Olufsen_ products configuration
 - [Voice control](#voice-control)
 - Handles [Deezer and TuneIn credentials setting](#credentials-setting) for all your B&O products
 - Allows the creation of _Bang & Olufsen_ [Products Groups](#products-groups), making possible to control multiple products as one
 - [User password less creation](#create-user) through BeoLiving App.  

On top of all that, at any point, it could be upgraded to _PRO_ mode to get a full professional home automation controller for a one-time payment.
 **Features that introduces _BeoLiving Intelligence_'s _PRO_ mode are the same capabilities than _BeoLink Gateway_ with the difference that remote
access is included apart of the already features of the _ESSENTIAL_ mode.** Refer to our specific [BeoLiving Intelligence PRO User guide](bli-pro-user-guide.md) for a deeper understanding.

## New BeoLiving App {#beoliving-app}

_BeoLiving Intelligence_ comes with the new _BeoLiving App_ (successor of the _BeoLink 2_ app) for an extensive, full and easily control of your 
building controller configuration.

In _ESSENTIAL_ mode, _BeoLiving App_ is the most important tool for configuration. _ESSENTIAL_ web interface only permits to manage Users, Network
 configuration and Project Info. Compared with _BeoLink 2_ app, _BeoLiving App_ brings these new capabilites: 

- Create 'password less' user
- Create zones
- Assign/Change B&O products to/from zones
- Edit names of B&O products
- Set content provider credentials
- Create/Edit/Delete products groups
- Alexa linking

Moreover, in _PRO_ mode, remote access could be enabled through _BeoLiving App_. Refer to _Khimo Cloud link_ section at [BeoLiving Intelligence PRO User guide - Setup](bli-pro-user-guide.md#setup) to see video explaining how to enable remote access through _BeoLiving App_.

## User creation through BeoLiving App {#create-user}

The most important flow that brings _BeoLiving Intelligence_ and _BeoLiving App_ is the user creation. As the below video shows, interaction with 
_BeoLiving Intelligence_ is required, something new compared with _BeoLink Gateway_. This flow permits to create a 'password less' owner user on 
the respective _BeoLiving App_. The process is completely user friendly.

Refer to the [Setting Up the BeoLiving Intelligence section](bli-quick-setup-guide.md#setup) of 
[BeoLiving Intelligence Quick Setup guide](bli-quick-setup-guide.md) to see an illustrative video.

## Bang & Olufsen products groups {#products-groups}

_BeoLiving Intelligence_ and _BeoLiving App_ introduce a new feature called _Products' groups_. This feature allows to statically link _Bang & Olufsen NetworkLink_'s products so them always behave as one. _E.g._: In big rooms with multiple products its wanted that all products reproduce the
same song or playlist at the same time. In a products' group, exist a master product that will be the source and volume reference of the
group and the rest of the grouped products will follow any source/volume change of master automatically and the _BeoLiving App_ will only
show the master.

Refer to [BeoLiving Intelligence Quick Setup guide](bli-quick-setup-guide.md#products-groups) to see an illustrative video.

## Credentials setting {#credentials-setting}

Previously, content providers (_Deezer_ and _TuneIn_) credentials setting was a tedious process. All devices of interest needed to be discovered i
over the LAN and manually set the desired credential.
As a solution to this issue, the user can set his content provider credentials in the _BeoLiving App_. _BeoLiving Intelligence_ will send those 
credentials to all present and new devices (discovered) without any credential setted of that specific content provider. This means that 
_BeoLiving Intelligence_ will not overwrite credentials setted on a device. In the future, content provider credentials could be erased and setted manually on each device through _BeoLiving App_.

Refer to [BeoLiving Intelligence Quick Setup guide](bli-quick-setup-guide.md#products-groups) to see an illustrative video.

## Voice control {#voice-control}

Voice control is a new important feature of _BeoLiving Intelligence_. Most of the same control degree that _BeoLiving App_ offers could be done 
through voice depending of which voice control device you prefer to use.  

Without any _user_ or _password_ to remember, link with third party cloud services is done by following some simple steps to pair your _BeoLiving 
Intelligence_ with the service provider. Refer to [BeoLiving Intelligence Link to Third Party Cloud Service Guide](bli-link-third-party-service.md
) for a detailed description of how to link your voice control device with _BeoLiving Intelligence_.

For now, only _Alexa_ is officialy supported for voice control. More voice control devices are on the way. Check [BeoLiving Intelligence Alexa's 
skill Guide](bli-alexa.md) to know all you can do with _Alexa_ and _BeoLiving Intelligence_.

## Other changes with respect to BLGW  

- _MasterLink_ devices: _BeoLiving Intelligence_ doesn't has _MasterLink_ interface. Integration with _MasterLink_ devices could be done through 
_BeoLink Converter_.
- _Beo4 and BeoRemote One_ commands: Due to the above change described.
- B&O manual sources: Now all sources are synchronized automatically with _NetworkLink_ devices.
- The default '_admin_' password: From factory, _admin_ password is unknown. Refer to our [F.A.Q.](bli-faq.md#admin-password) to know how to set 
it to a desired value.

## Migrate from BLGW to BLI {#blgw-migration}

Configuration file of _BeoLink Gateway_ is compatible with _BeoLiving Intelligence_, so migration process is quite simple. **The unique condition 
is that BeoLiving Intelligence must be in PRO mode**. To do so, follow the next instructions:

1. Download _BeoLink Gateway_'s configuration file
2. Upload the file to _BeoLiving Intelligence_ (in _PRO_ mode)
3. Take in account that _MasterLink_ resources won't be available in _BeoLiving Intelligence_, so all events and commands related to _MasterLink_ 
devices on _Macros_ will be orphans, meaning that must be deleted or migrated to a correct integration with _BeoLink Converter_.
