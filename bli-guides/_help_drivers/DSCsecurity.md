---
title: DSC PowerSeries Security (Community)
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# DSC / IT-100

Communicates with DSC PowerSeries Security systems using the DSC IT-100 RS232 interface. Use a straight thru RS232 cable pin 2, 3 and 5 between DSC and the RS232/USB cable connected to the BLI/BLGW. 

Allows the user to Arm/Disarm partitions of the alarm system, and to receive feedback of states and notifications. 

**Notice**: This driver was coded by a member of our user community.

## Resources

### ALARM

+ Address: id of the partition [1-8]

+ States:

 - MODE: ARM AWAY, ARM HOME, DISARM
 - ALARM: The alarm is ringing 
 - READY: Alarm ready to be armed   

+ Commands:

 - ARM: arm partition 
     - Arguments:
         - MODE: AWAY, HOME
         - CODE: 4 digits code or 6 digit code
 - DISARM: disarm partition
     - Arguments:
         - CODE: 4 digits code or 6 digit code

+ Events:

 - MODE: ARM AWAY, ARM HOME, DISARM
 - ALARM: The alarm is ringing 
 - READY: Alarm ready to be armed  


### ALARM\_ZONE

+ Address: id of the zone [1-128]. Must have 3 digits, example: 001,012,128,...

+ States:

 - OPEN: true if zone is open, false if closed
 - TROUBLE: true if zone has some trouble, false otherwise
 - ALARM: true if this zone has triggered the alarm
 - TAMPER: true if zone has been tampered with, false otherwise


## Channel
+ Baudrate: 9600
+ Fc mode:  none


## Changelog

- v0.2 | 2019-06-26
    - Removes some log message.
- v0.3 | 2020-10-07
    - Improves in-line setup help.

