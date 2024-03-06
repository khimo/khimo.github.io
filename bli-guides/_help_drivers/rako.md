---
title: Rako Bridge
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# RAKO BRIDGE DRIVER

This driver integrates Rako Bridge with the BLI/BLGW, allowing to set dimmer levels and fire scenes on the Rako modules.

## Conecting to the syste

The connection to the Rako Bridge is established through a REST connection, and only the Rako Bridge Host or its ip address must be specified.

## Resource

  * Dimmer: Allows to: 
    - Set dimmer levels.
    - Fade dimmers
    - Address format: ```<room number>:<channel number>```.
  * Scene: Allows to: 
    - Fire scenes previously configured at the Rako button panel
    - Address format: ```<room number>:<channel numer>:<scene number>```.
      - The ```<scene number>``` must be between 1 and 4.
  * In both cases:
    - The ```<room number>``` must be between 0 and 255.
    - The ```<channel number>``` must be between 0 and 15.
    - The channel 0 control all channels.

## Commands

  * DIMMER: 
    - SET: Set the dimmer level
    - OFF: Turn off the lights of the current channel
    - \_FADE UP: Fade up the lights of the current channel
    - \_FADE DOWN: Fade down the lights of the current channel
    - \_STOP: Stop fading sequence
  * SCENE: 
    - PRESS: Fire Rako scene
