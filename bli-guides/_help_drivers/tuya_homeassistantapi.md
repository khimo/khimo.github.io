---
title: Tuya - homeassistant API (community) | Deprecated
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# TuyaAPI driver | Integrates tuya devices using the open homeassistant API | DEPRECATED

**Warning**: 2021-10-12: Tuya disabled the use of the open homeassistant API for new users, this driver will only work for users activated before.

This API has restrictions, a status update could only be requested every 10 minutes, but it is quite fast reacting to BLI commands.

Currently, as v0.2, the following resource are tested and working correctly:
  - "Dimmable light"
  - "Light non dimmable" 
  - "Scene"      - Fire
  - "Thermostat" - 1SP thermostat (ON/OFF/Temperature)


The following resources are implemented but were never tested with real hardware, so please send us your feedback if you use them:
  - "Light switch"
  - "Shade"
  - "Switch"
  - "Lock"

For thermostats, it is important to adjust the temperature unit and correction parameters in the BLI system settings. Tuya does not provide this information and they change depending on the thermostat manufactures.
For reference, command correction is a multiplier while state correction is a divider.


Please let us know your experience with this driver at: [support+drivers_tuya@khimo.com](mailto:support+drivers_tuya@khimo.com)

## Changelog
**v0.2**
  * First public version
