---
title: Generic HomeAutomation Buttons (Community)
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Generic Home Automation Buttons, TCP/IP, Button, Dimmer, Shade, HVAC
description: Generic Home Automation Buttons Driver implements a generic protocol for communicating with programmable Home Automations systems managing buttons, dimmers, shades and HVAC resource types.
---
 
# Generic Home Automation Buttons

The Generic Home Automation Buttons Driver implements a generic protocol for communicating with devices in programmable Home Automations systems like Crestron, Control4, Savant, AMX, etc.

The Home Automation Controller opens a TCP/IP Server on selected port and responds to Ping/Pong messages as requested by the BLI driver.

The Protocol is structured as a comma seperated ASCII protocol with a Carrige Return terminator as following: 

**Type,ID,Data/x0d**

The following Types are referenced by number as following: 

- Type 0 = Resource 
- Type 1 = Button without LED
- Type 2 = Button with LED
- Type 3 = Dimmer
- Type 4 = Shade
- Type 5 = HVAC

## Here are a few Example Strings:

**0,0,0\x0d = Ping/Pong from BLI to HA:**

When the HomeAutomation system receives this command it should emediately within 1 sec respond with 0,0,0\x0d 

This is the Ping/Pong messages that the BLI (or BLGW) uses to indicate if the connection is alive and working

**0,0,1\x0d = Request resources from BLI (or BLGW) to HA:**

When the HomeAutomation system receives this command, it should respond with all resources to be added to the BLI (or BLGW) like so: 0,1,Bedroom Lights/x0d

This will add a Button with ID 1 and Name Bedroom Lights to the BLI (or BLGW) config, repeat for all resources as needed

**0,0,2\x0d = Request all status updates from BLI (or BLGW) to HA:**

When the HomeAutomation system receives this command, it should respond with state update for all resources, this command is used to Sync status 

- 2,3,1\x0d = example of string sent from HA to BLI (or BLGW) (Button type with LED feedback, ID Number 3, Press)
- 2,4,0\x0d = example of string sent from HA to BLI (or BLGW) (Button type with LED feedback, ID Number 4, Release)
- 3,4,90\x0d = example of string sent from HA to BLI (or BLGW) (Dimmer type, ID Number 4, 90%)

General control commands from BLI (or BLGW) to the HA controller follows the same protocol, here are a few examples:

- 2,3,1\x0d = example of string sent from BLI (or BLGW) to HA (Button type with LED feedback, ID Number 3, Press)
- 2,4,0\x0d = example of string sent from BLI (or BLGW) to HA (Button type with LED feedback, ID Number 4, Release)
- 3,4,90\x0d = example of string sent from BLI (or BLGW) to HA (Dimmer type, ID Number 4, 90%)
