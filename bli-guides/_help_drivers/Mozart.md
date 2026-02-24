---
title: B&O ControlLink
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: B&O ControlLink, ControlLink, RENDERER, MOZART, MULTIROOM
description: B&O ControlLink driver adds integration with the new B&O ControlLink AV products (Mozart platform).
---
# Bang & Olufsen ControlLink

This driver adds integration with the new B&O ControlLink AV products. All the products are displayed as BeoLiving Intelligence RENDERER resources.

## System connection status

System connection status is shown on the BLI's web interface, each color represents the system connection state:

  - Green: the connection to all of your resources is working as expected.
  - Yellow: not every resource is connected, please check your network and settings.
  - Red: there is a system error.

## Resources

Resources are automatically discovered on the network and can be added to Zones either using the iOS app or in the Resources tab of the web interface by clicking on "Show discovered resources". In a standard local network setup, using discovery and addressing the products by serial number is the recommended way. If you are having troubles, check the *Network considerations* section below.


Available inputs vary depending on the ControlLink product, they can be found in the "Interfaces" tab under "AV Products", where they can be hidden in the app.
Every ControlLink product offers the B&O NetRadio input, where radios all over the world can be found.

The supported commands include all the standard RENDERER ones, for example:

  - PLAY/PAUSE/STOP
  - NEXT/PREV
  - SET VOLUME/MUTE
  - SELECT INPUT
  - SET CONTENT ID
  - TURN ON/STANDBY

The resource states include the selected input, the playing state (play, pause etc.), volume information, and information about what is currently playing such as name, artist, album and artwork.

TV resources can be configured to show the BLI Home Control panel. This configuration is done automatically by the BLI once a TV is added to any zone, and only if the TV's Home Control configuration is not yet set.
For overwriting this configuration, you can go to the "Interfaces" tab, select the device under "AV Products" and check/uncheck the Home control owner flag.

### Setting TV content

The SET_TV_CONTENT command can be used in a macro to start showing curated content on the desired TV.
For configuring a command, make sure that the TV resource is correctly configured as IXP Owner and proceed as follows:

  - Add the command SET_TV_CONTENT for the TV.
  - All the available content on the content server should be listed for the ID parameter, select the one you are interested in setting.
  - The SECONDS parameter will be the starting second for the video.

## Connecting to BeoCloud
A BeoCloud connection is needed in order to use B&O NetRadio, and requires signing into the BeoCloud account.

A connection can be established from the BLI on the "ControlLink" system in the "Systems" tab, or directly from the {{mobileAppName}} in _Settings->YOUR-BLI->Device Settings->BeoCloud_.

Both means will prompt the user for a **pin**, which can be retrieved from the **Bang & Olufsen application** in **_Settings->Integrations_**, where a code with the format **"XXX-XXX-XXX"** can be created.

Once the BeoCloud account is linked with the BLI, all of the NetRadio content will be available.

## Network Considerations

All communication between the BLI and the AV products is based on Multicast discovery (Bonjour). This method allows the products to be discovered on the network and addressed by their serial numbers. It is essential that all products are accessible on the same subnet as the BLI and that the network supports multicast discovery.

In cases where the AV products are on different subnets (VLAN) or multicast communication is disturbed by the network, a *FIXED IP* can be used as the **address** in the Resource tab. It is crucial to verify your network configuration to ensure that the IP assigned to each of the AV products is fixed and exclusively assigned to that product. The most reliable method to achieve this is by using *DHCP reservation* on the DHCP server within the network setup. If you are experiencing instabilities while using the product IP as a resource address, please check that the IP is not being used by another device at the same time.


## Product Group

The ControlLink system allows you to make groups of ControlLink and NetworkLink products. By defining one product as the Main product, the rest of the group will follow the behavior of this product in terms of volume, source selection, and standby mode.

The Product Group’s configuration is shown under Systems. When you select the ControlLink system, the configured product groups will appear listed below, with options for editing the existing groups or adding new ones.

For a new group to be created you need to select a Main product for the group and at least one Follower, if not, the group won’t be created.

A group can also be created from the {{mobileAppName}} in _Settings->YOUR-BLI->Device Settings->Group products_ where you should first choose a master and then the followers.

## Changelog

### v1 | 2025/11/11
 - Adds SET_TV_CONTENT command.

### v0.4 | 2024/04/18
 - Adds support to fixed ip address.

### v0.3 | 2022/10/31
 - Documentation updates.

### v0.2 | 2021/04/28
 - Initial version.

*Please, report any issue with this driver to: support+drivers@khimo.com*
