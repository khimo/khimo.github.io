---
title: Vitrea
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Vitrea, WiFi, VBox-PRO, DIMMER, _BOILER, LIGHT_SWITCH, SHADE, SCENARIO, BUTTON, _SATELLITE_KEY, SET, _STOP, _TOGGLE, _TURN, RAISE, LOWER, PRESS, _PRESS, _RELEASE, _HOLD
description: VITREA DRIVER integrates Vitrea systems managing lights, dimmers, shades, boilers and scenes on the VBox-PRO Wireless Controller.
---
# VITREA DRIVER

This driver connects the Beolink Gateway with Vitrea, allowing to control lights, dimmers, shades, boilers and fire scenes on the VBox-PRO Wireless Controller.

## Conecting to the system

The VBox Pro Controller connects with the LAN Router through WiFi. The communication between the BLGW and the VBox Controller is established over an IP socket (IP address and port). The VBox Pro Controller always operates as a server.

## Resources

	+ DIMMER: Allow to set levels, stop dimerization and toggle the dimmer to a previous intensity.
	+ _BOILER: Allow to turn on or off and toggle the boiler to a previous state.
	+ LIGHT_SWITCH (DIMMER): Allow to turn on or off and toggle the light to a previous state.
	+ SHADE: Allow to set shade to raise, lower or a specific level and stop shade movement.
	+ SCENARIO (BUTTON): Allow to fire scenes previously configured at the VBox-PRO.
	+ _SATELLITE_KEY: Fire events on press, hold or release.
						
## Resource Address

	* DIMMER/BOILER/SHADE/_SATELLITE_KEY: Address format = "NNN:K" where "NNN" is the Node Number (3 Bytes) and "K" is the Key Number (1 Byte)
	* SCENARIO: Address format = "R0XXX"  equal to the Scenario ID Number(4 Bytes)
	
## Resource Discovery

  The "H:NALL:G" is used to get status of the keys of all the Nodes, so it could be used to get all the keys and nodes configured on the VBox Controller with the resource state included.

## Commands

  * DIMMER, LIGHT_SWITCH:
    + SET: Set the dimmer level
    + _STOP: Stop the level transition
    + _TOGGLE: Toggles Dimmer to previous intensity
  * BOILER:
    + _TURN: Turn boiler/light to On/offline
    + _TOGGLE: Toggles boiler/light to previous intensity
  * SHADE:
    + RAISE: Set the position level of the shade to the max. position
    + LOWER: Set the position level of the shade to the min. position
    + STOP: Stop the level transition
    + SET: Set the shade position
  * SCENARIO_BT:
    + PRESS: Fire scenario
    
## Events

  * _SATELLITE_KEY:
    + _PRESS: Press of the tap switch
    + _RELEASE: Release of the tap switch
    + _HOLD: Hold of the tap switch
