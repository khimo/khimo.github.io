---
title: PowerView - Hunter Douglas - Gen2
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---

# PowerView - Hunter Douglas - Gen2

This driver works with the PowerView Hub, allowing to control Hunter Douglas shades with PowerView Motorization.

## Connecting
To connect to the PowerView Hub, simply set the IP of the hub, the driver should automatucally connect when apply is pressed.
Choose the Polling time and the Refreh polling time. The first one corresponds to the time between state updates from the hub, the second one is the time between asking the hub to refresh the state.
If hub is not refreshed, the position of the shades will not be updated quickly when changed without the hub (eg. manual, remote control). A small number will keep the resources correctly updated on the BLI but it may drain battery faster and cause a constant blinking of leds in shades and repeaters.
Please choose a value greater or equal than the polling time, if you don't want to refresh insert -1.

## Adding resources
Adding a resource can be done by introducing the shade Id as address or, **preferably** by pressing the *Import resources* button and then *Load
resources from connected system*. Shades of type Bottom Up/Top Down or DuoLite will be discovered in separate resources, For example, Bottom Up/Top Down will discover 2 separate resources, one for the top rail and one for the bottom one. 
In the case of the Duolite shades, the resources disovered wil be the shade, the blackout and the tilt if the resource is the DuoLite with Tilt. The address of these related resources will be <shade_id>:X, all of them should be added to have full control of the shade. 

## Supported resources
Supported Resources are:
	- BOTTOM UP: Buttom up shade with the commands to raise, lower, stop and set shade level.
	- BOTTOM UP WITH TILT: Buttom up shade with tilt with the commands to raise, lower, stop and set shade level, as well as raise tilt, lower tilt, stop tilt and set tilt level.
	- TOP DOWN: Top down shade with the commands to raise, lower, stop and set shade level.
	- VERTICAL: Vertical shade with the commands to raise, lower, stop and set shade level.
	- VERTICAL WITH TILT: Vertical shade with tilt with the commands to raise, lower, stop and set shade level, as well as raise tilt, lower tilt, stop tilt and set tilt level.
	- STANDARD SHADE AS TILT ONLY: Tilt only shade, controls and appearance in the BeoLiving App are the same as a regular shade. Available commands are to raise, lower, stop and set shade (tilt) level.
	- BOTTOM UP/TOP DOWN - TOP: Top (middle) rail of Bottom Up/Top Down shades with the commands to raise, lower, stop and set rail level.
	- BOTTOM UP/TOP DOWN - BOTTOM: Bottom rail of Bottom Up/Top Down shades with the commands to raise, lower, stop and set rail level.
	- DUOLITE SHADE: Shade of Duolite or Duolite with tilt shades with the commands to raise, lower, stop and set shade level.
	- DUOLITE BLACKOUT: Blackout of Duolite or Duolite with tilt shades with the commands to raise, lower, stop and set blackout level.
	- DUOLITE TILT: Tilt of Duolite with tilt shades, controls and appearance in the BeoLiving App are the same as a regular shade. Available commands are to raise, lower, stop and set shade (tilt) level.
	- SCENE: Defined scene with command PRESS to activate it.

**DISCLAIMER**: Only Bottom Up and Bottom Up/Top Down shades were tested, let us know any problems with the untested resources to the email address below.

## Changelog
**v0.1**
  * First version

**v0.2**
  * Adds the reference to genertion 2 hub
  
*Please, report any issue with this driver to: support+drivers@khimo.com*

