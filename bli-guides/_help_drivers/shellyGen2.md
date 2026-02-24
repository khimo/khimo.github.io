---
title: Shelly JSON-RPC (2nd & 3rd generation)
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Shelly, JSON-RPC, multicast DNS, HTTP, Cover, SHADE, Input, BUTTON, GPIO, Switch, DIMMER
description: This driver implements communication with second- and third-generation Shelly devices using the JSON-RPC 2.0 protocol over WebSocket, managing covers, inputs, switches and lights.
---
# Shelly JSON-RPC 2.0 (2nd and 3rd gen)

This driver implements communication with second- and third-generation Shelly devices using the JSON-RPC 2.0 protocol over WebSocket. It also implements device discovery via mDNS and HTTP to query device capabilities.

Integrated components:
- Cover: SHADE, with or without level control
- Input: as BUTTON or GPIO
- Switch: as BUTTON with status, as DIMMER, or as GPIO
- Light: as DIMMER with status

Resource addresses consist of the MAC or IP of the Shelly device combined with the component ID, e.g., 441793ac3804/0.

Discovered resources default to using the device name and component address reported by Shelly. It's good practice to name all Shelly devices before adding them to BeoLiving Intelligence. Shelly does not notify when internal names are synchronized; BLI syncs the name whenever devices come online. Reboot the device after renaming to force an update in BeoLiving Intelligence.

Any Shelly device with the listed components should be compatible. 

## Changelog:
### 2025/09/16
- Renamed to indicate compatibility with 3rd-generation devices
- FIX: Solved "Zombie Connection" issues using strict Watchdog logic.
- FIX: Solved "Ghost Resources" by ensuring correct finalization sequence.
- FIX: Replaced loggerFactory with standard LoggerClass to fix discovery crash.
- NEW: Added Device Health Monitor for self-healing.

### 2025/03/31
- Improve connection robustness.

### 2024/10/31
- Adds support for Light dimmers.

### 2024/01/03
- Improve connection stability, always use strings for IDs.

### 2023/05/08 v1
  - Initial release supporting Cover, Input, and Switch components.
