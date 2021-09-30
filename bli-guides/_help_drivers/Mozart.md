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

## Changelog
### v0.2 | 2021/04/28
 - Initial version
*Please, report any issue with this driver to: support+drivers@khimo.com*