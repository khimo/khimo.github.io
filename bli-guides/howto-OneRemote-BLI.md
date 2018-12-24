---
title: How to control Your BLI with the BeoRemote One
layout: pagetoc
---

# Introduction

Using your BeoRemote One, you may gain access to a BeoLiving Intelligence (BLI) through a Bang & Olufsen Smart TV.

> The connection process between a BLI and a B&O TV is detailed in [this tutorial](./bli-connect-to-TV.md). 

You will be able to access the BLI's webpanel to control all your home's equipment (i.e. lights, shades, cameras, etc.) as well as trigger any macros you may have previously set up.

*You will also be able to configure shortcuts to trigger events and Macros by pressing only a couple of buttons.*

Adding your TV as a resource enables the possibility of controlling it through the BeoLiving App by selecting & controlling sources. By setting up through the TV, access to the HOME CONTROL panel is enabled along with the posibility to trigger macros through shortcuts on your control.

# Configure and trigger shortcuts
> As with the HOME CONTROL option on your OneRemote's LIST, you can find other options on the list: LIGHT and CONTROL.

To access any of these options menus, you have to enter the option (e.g. LIGHT) by pressing the right arrow so that the command functions are displayed.

By pressing any of these options (called _Functions_ by the BLI), you are now able to fire events to the BLI that you can use to trigger Macros.

One may also fire events through LIGHT by simply highlighting LIGHT on the OneRemote's LIST and pressing numbers on the keypad which have been previously assigned to trigger macros.

> By going to the _Monitor_ tool on the web setup page, it is possible to view exactly the name of the events triggered with the functions.

# Example
_Select Light->Home function to turn on all lights on_
1. In the setup web page go to: Tools --> Monitor
1. On the OneRemote, press LIST, go to LIGHT, enter the menu by pressing the right arrow and select the HOME function. 
1. The monitor will show a message like: _yy-mm-dd hh:mm:ss Event fired Test/local/AV renderer/BeoPlay-V1/Light?Action=Press&Command=FUNCTION_11_ you now know that the HOME function is recieved by the BLI as FUNCTION_11.
1. Go to Macros and create a Macro whos commands turn off all lights
1. Add and event to trigger the macro
1. Select the TV as the resource for the command, Light as the Event, Action press

_Press Light->0 to turn off all lights_
1. _yy-mm-dd hh:mm:ss Event fired Bticino/local/AV renderer/BeoPlay-V1/Light?Action=Press&Command=CIFFER_0_Digit_0_
1.
1.
1.


