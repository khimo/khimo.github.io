---
title: Philips Hue (Legacy)
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Philips Hue, REST, DIMMER, BUTTON, Light, On Off Light, Dimmable Light, Color Temperature Light, Color Light, Extended Color Light, Group, Scene, SET LEVEL, SET TRANSITION TIME, TIMED SET
description: This driver supports communication with a Philips Hue bridge, allowing to control lights, lighting groups, and activate scenes using REST protocol.
---
Philips Hue
===============================

This driver supports communication with a Philips Hue bridge,
allowing to control lights, lighting groups, and activate scenes.

Connecting to the system
--------------------------------

Connection to the system is done via a REST connection with the
Philips Hue bridge. The following configuration is needed:

 1. *Bridge host*: The IP address or host name of the bridge.
 2. *Bridge port*: The port number where the bridge is waiting for
connections (the suggested default should be correct).
 3. *Bridge host automatic update*: If this flag is set, the system
will attempt to automatically synchronize the Bridge host when a
connection error happens.
 4. *Bridge id*: The internal identifier of the HUE bridge. This field
is automatically updated when the connection is established.
 5. *Bridge user*: This user is automatically created when the button
    *Create Philips HUE user on bridge* is pressed, as described below.
 6. *New color turns dimmers on*: If this flag is set, and a new color
is picked for a dimmer that is turned off, then the dimmer will be
turned on with the new selected color.
 7. *Poll interval*: The number of seconds to wait between status
requests.

If system connection can't be established specifying Hue Bridge Hostname
on *Bridge host*, bad configuration or absence of the DNS server on the
BeoLiving Intelligence LAN could be responsible for the issue.
Try using the IP address of the Bridge. Default Hostname of Hue Bridge
is ```Philips-hue```.

The Philips Hue driver polls every light and group on the bridge each
*Poll interval* seconds for status updates. If the system has a low
number of resources, then this parameter may be set to a small value,
although anything below 5 is not recommended.

If the *Bridge user* is not defined or is invalid, then you can create a new
one by pressing the *link* button on the bridge and then pressing the *Create
Philips HUE user on bridge* within 30 seconds. If the action is successful,
then a new user will be assigned, updating the value for *Bridge user*.

Available resources
--------------------------------

The Philips Hue driver supports commanding the lights, groups
and scenes that are available for the configured user.

The following resource types are available:

 - **Light**: supports on/off control, dimming, setting color and color
temperature.
 - **On Off Light**: supports on/off control.
 - **Dimmable Light**: supports on/off control and dimming.
 - **Color Temperature Light**: supports on/off control, dimming and setting
color temperature.
 - **Color Light**: supports on/off control, dimming and setting color in either
hue or color coordinates.
 - **Extended Color Light**: supports on/off control, dimming, setting color (hue
or color coordinates) and setting color temperature.
 - **Group**: a light groupt that supports on/off control, dimming, setting color
and color temperature.
 - **Scene**: a scene activation.

Both lights and groups are mapped to the DIMMER Standard Resource
type, and allow full control of every state variable, such as
brightness, hue or color coordinates and color temperature depending on the above
categories. 

Also, as a DIMMER, they provide the SET LEVEL command which acts
on the *brightness* and *on* state variables. As a simple example,
setting the level to 100 implies setting "on" to true and "bri" to
255 on the Philips Hue bridge. 
When using an "On Off Light" the SET LEVEL command only sets "on"
to true on the Philips Hue Bridge if LEVEL is greater than 0 (or
"off" on the contrary). 

The scene is mapped to a BUTTON Standard Resource type, and the button
PRESS recalls the scene on the Philips Hue bridge.

**Warning** have in mind that when you set a color maybe Philips hue could not map
that color for the lights, and set the nearest coordinates for that color. So in the state,
you can see a difference between the color you set in HSV format and the HSV color shown
on the resource state.

Deprecated commands
--------------------------------
As of version 1.4.19116 and on, the command _SET TRANSITION TIME
is no longer available. For setting a dimmer with fade time,
the _TIMED SET command should be used.

### Changelog

 - v2.1.2 | 11/05/2021

    Fixes groups color feedback issue.
 - v2.2.1 | 18/06/2021

    Added various resource types and SET COLOR TEMPERATURE command.

 - v2.3 | 03/03/2023

    Updates IP synchronization to latest method.
