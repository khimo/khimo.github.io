Lutron Radio RA
===============

Connection to a Radio RA system
-------------------------------

Communications with Radio RA is done via the Radio RA RS232 interface.
Use a full RS232 cable between Radio RA and BeoLiving Intelligence. *Hardware flow control
is used*, so a 3-wire connection will not work.

Alternatively, you can use an Ethernet to RS232 interface and connect
via BeoLiving Intelligence network port. In this case, it is important to configure the
Ethernet to RS232 interface to use hardware flow control, 9600 bps, no
parity, 1 stop bit.

The only connection setting available is the TCP port number and IP
address in case connecting via Ethernet.

Resources
---------------------------

The supported resource  types are:

 + **Master Button LED**: LED on a Master Control.
 + **Phantom Button Dimmer**: a light dimmer.
 + **Phantom Button Shade**: a single shade.
 + **Phantom Button Switch**: a light switch.
 + **Phantom Button Toggle**: a single button.
 + **Phantom LED**: programmable LED.

Resource address format
-----------------------

Most resource addresses in Radio RA are based on Master Control
Number, Zone Number and Button Number.

Master Control Number is a number between 1 and 12, which is displayed
in the Radio RA RS232 interface when Master Control is used. Zone
Number is a number between 1 and 32. Button Number is a number between
1 and 17; where 16 and 17 are normally "all on" and "all off" respectively.

The address depends on the resource type:

 + *Master Button LED*: Master Control Number and a LED number separated by a colon `:`. The LED number ranges from 1 to 15.
 + *Phantom Button Dimmer*: Zone Number.
 + *Phantom Button Shade*: Button Number excluding 16 and 17.
 + *Phantom Button Switch*: Button Number.
 + *Phantom Button Toggle*: Button Number.
 + *Phantom LED*: Button Number excluding 16 and 17.

Commands
-----------------
 + Master Button LED
   - **SET**: Set the LED state (0 means OFF and 1 ON)
 + Phantom Button Dimmer
   - **SET**: Set the dimmer level, in percentage.
 + Phantom Button Shade
   - **RAISE**
   - **LOWER**
   - **STOP**
 + Phantom Button Switch
   - **TOGGLE**
   - **SET**
 + Phantom Button Toggle
   - **PRESS**

Resource State
--------------
 + Master Button LED
   - **STATE**: The state of the LED (0 means OFF and 1 ON)
 + Phantom LED
   - **STATE**: The state of the LED (0 means OFF and 1 ON)

