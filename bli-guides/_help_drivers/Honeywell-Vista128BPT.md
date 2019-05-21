---
title: Honeywell VISTA-128 BPT
layout: pagetoc
---

Allows the user to Arm/Disarm partitions of the alarm system, and to receive feedback of states and notifications. 

Resources
=========

ALARM
-----

+ Address: id of the partition [1-8]

+ States:

 - MODE: ARM AWAY, ARM HOME, DISARM
 - ALARM: The alarm is ringing 
 - READY: Alarm ready to be armed   

+ Commands:

 - ARM: arm partition 
     - Arguments:
         - MODE: AWAY, HOME, FORCE AWAY, FORCE HOME, INSTANT or MAXIMUM
         - CODE: 4 digits code
 - DISARM: disarm partition
     - Arguments:
         - CODE: 4 digits code

+ Events:

 - \_eventNotification: this event will be fired every time the alarm system sends a notification.
     - Arguments:
         - \_code: event code (2 characters)
         - \_zone: zone number (3 digits)
         - \_timeStamp: mm/hh/dd/MM/YY (mm: minute, hh: hour, dd: day, MM: month, YY: year)

ALARM\_ZONE
----------

+ Address: id of the zone [1-128]. Must have 3 digits, example: 001,012,128,...

+ States:

 - OPEN: true if zone is open, false if closed
 - TROUBLE: true if zone has some trouble, false otherwise
 - ALARM: true if this zone has triggered the alarm
 - BYPASSED: true if zone is bypassed, false otherwise

\_OUTPUT
-------

+ Address: any string, by default: Output

+ Commands: 

 - \_OUTPUT\_CONTROL: turn on/off a single output.
     - Arguments:
         - \_VALUE: ON / OFF
         - \_OUTPUT: the output number [1-96]

Channel
-------
+ Baudrate: 9600
+ Fc mode:  none
