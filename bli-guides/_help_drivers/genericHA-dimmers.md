---
title: Generic HomeAutomation Dimmers (Community)
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Generic Home Automation Dimmers

The Generic Home Automation Dimmers Driver implements a generic protocol for communicating with devices in programeble Home Automations systems like Crestron, Control4, Savant, AMX, etc.

The Home Automation Controller opens a TCP/IP Server on selected port and responds to Ping/Pong messages as requested by the BLI (or BLGW) driver.

The Protocol is structured as a comma seperated ASCII protocol with a Carrige Return terminator as following: 

**Type,ID,Data/x0d**


The following Types are referenced by number as following: 

- Type 0 = Resource 
- Type 1 = Button without LED
- Type 2 = Button with LED
- Type 3 = Dimmer
- Type 4 = Shade
- Type 5 = HVAC

## Example Strings:

- 0,0,0\x0d = Ping
- 0,0,1\x0d = Request all resource names
- 0,0,2\x0d = Request all status updates
- 0,1,Bedroom Lights/x0d = Status feedback from HA system
- 2,1,1\x0d = Button with LED feedback, Press, ID Number 1
- 3,4,90\x0d = Dimmer, 4 set to 90%
