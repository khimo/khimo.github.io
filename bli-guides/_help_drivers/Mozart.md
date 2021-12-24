---
title: ControlLink
layout: pagetoc
---

# Bang & Olufsen ControlLink

This system is included by default in BeoLiving Intelligence, and cannot be
removed.

This driver adds integration with the new B&O ControlLink AV products. All the products are displayed as BeoLiving Intelligence AV RENDERER resources.

They are automatically discovered on the network and can be added to Zones either using the iOS app or in the Resource tab of the web interface by clicking on "Show discovered resources".

Available inputs vary depending on the ControlLink product, they can be found in the "Interface" tab, under "AV Products" where they can be hidden in the app. Every ControlLink product offers the input B&O NetRadio, where radios all over the world can be found.

The supported commands are all the standard AV RENDERER commands including:
- PLAY/PAUSE/STOP
- NEXT/PREV
- SET VOLUME/MUTE
- SELECT INPUT
- SET CONTENT ID
- TURN ON/STANDBY

The state includes the selected input, the playing state (play, pause etc.), volume information, the selected source, and information about what is currently playing such as name, artist, album and album artwork. 

## Connecting to BeoCloud
BeoCloud is necessary in order to use B&O NetRadio, it requires signing into the BeoCloud account. The BLI can be connected to it from the "ControlLink" system in the "Systems" Tab or from the BLIApp in Settings->YOUR-BLI->Device Settings->BeoCloud. 
Both will prompt the user for a pin, the pin can be retrieved from the Bang & Olufsen App in Settings->Integrations, where a code with the format "XXX-XXX-XXX" can be created. 

Once the BeoCloud account is linked with the BLI, all of the NetRadio content will be available.

## Product Group

The ControlLink system allows you to make groups of ControlLink and NetworkLink products. By defining one as the Main product, the rest of the group will follow the behavior of this Main product in terms of volume, source selection, and standby mode.

The Product Group’s configuration is shown under Systems. When you select the ControlLink system, the configured product groups will appear listed below, with options for editing the existing groups or adding new ones. ControlLink products can only form part of one group, so you won’t be able to add a product to a group if it’s already in another.

For a new group to be created you need to select a Main product for the group and at least one Follower, if not, the group won’t be created.

A group can also be created from the BeoLiving App in YOUR-BLI->Device Settings->Group products where you should first choose a master and then the followers.

## Changelog
### v0.2 | 2021/04/28
 - Initial version
 
*Please, report any issue with this driver to: support+drivers@khimo.com*