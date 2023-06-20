---
title: B&O ControlLink
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Bang & Olufsen ControlLink

This driver adds integration with the new B&O ControlLink AV products. All the products are displayed as BeoLiving Intelligence RENDERER resources.

## System connection status

System connection status is shown on the BLI's web interface, each color represents the system connection state:

  - Green: the connection to all of your resources is working as expected.
  - Yellow: not every resource is connected, please check your network and settings.
  - Red: there is a system error.

## Resources

Resources are automatically discovered on the network and can be added to Zones either using the iOS app or in the Resources tab of the web interface by clicking on "Show discovered resources".

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

## Connecting to BeoCloud
A BeoCloud connection is needed in order to use B&O NetRadio, and requires signing into the BeoCloud account. 

A connection can be established from the BLI on the "ControlLink" system in the "Systems" tab, or directly from the BeoLiving application in _Settings->YOUR-BLI->Device Settings->BeoCloud_.

Both means will prompt the user for a **pin**, which can be retrieved from the **Bang & Olufsen application** in **_Settings->Integrations_**, where a code with the format **"XXX-XXX-XXX"** can be created. 

Once the BeoCloud account is linked with the BLI, all of the NetRadio content will be available.

## Product Group

The ControlLink system allows you to make groups of ControlLink and NetworkLink products. By defining one product as the Main product, the rest of the group will follow the behavior of this product in terms of volume, source selection, and standby mode.

The Product Group’s configuration is shown under Systems. When you select the ControlLink system, the configured product groups will be listed below, with options for editing the existing groups or adding new ones. ControlLink products can only form part of one group, so you won’t be able to add a product to a group if it’s already in another.

For a new group to be created you need to select a Main product for the group and at least one Follower, if not, the group won’t be created.

A group can also be created from the BeoLiving application in _Settings->YOUR-BLI->Device Settings->Group products_ where you should first choose a master and then the followers.

## Changelog
### v0.3 | 2022/10/31
 - Documentation updates.
### v0.2 | 2021/04/28
 - Initial version.
 
*Please, report any issue with this driver to: support+drivers@khimo.com*

