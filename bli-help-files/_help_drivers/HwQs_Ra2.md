Lutron Homeworks QS and Radio Ra2
===============================

This driver supports communication with Lutron HomeWorks QS, Lutron
Radio RA2 and Lutron Grafik QS systems.

Connecting to a Grafik QS system
--------------------------------

Connection to a Grafik QS system is done via a QSE-CI-NWK-E interface,
which allows Ethernet and RS232 connectivity.

For RS232 communications, set the same bit rate on the QSE-CI-NWK-E
interface and on BeoLiving Intelligence connection settings.

Connection settings for Ethernet are the IP address of the interface
and the password. The default password is `nwk`.

Connection to a Radio RA2 system
--------------------------------

Communication with Radio RA2 is done via the Radio RA2 Main Repeater,
which allows interaction with the system via 100 programmable virtual
buttons (*phantom buttons*). This device provides both RS232 and
Ethernet interfaces.

Connection to the RS232 interface can be done directly using a 3-wire
RS232 cable and it is fixed at 9600 bps, no parity, 1 stop bit, 8 data
bits, no flow control.

Connection settings for Ethernet consist of: IP address of the Main
Repeater (default: 192.168.1.50), login (default: lutron), password
(default: integration) and telnet IP port (default: 23).

Connection to a Homeworks QS system
-----------------------------------

Communication with the Homeworks QS system is done via the Ethernet
interface on the Homeworks QS Processor.

Connection settings consist of: IP address of the processor (default:
192.168.1.50), login (default: lutron), password (default: integration)
and telnet IP port (default: 23).

Resources
------------------

The supported resource types are:

 + **Button with LED**: buttons on keypads or control units having a LED
   for status.
 + **Button**: a keypad or control unit button with no LED.
 + **LED**: a single LED used for status.
 + **Dimmer**: a light dimmer.
 + **Shade**: a single shade.
 + **Shade group**: a group of shades.
 + **Thermostat**: a thermostat like Lutron HVAC controller.
 + **Lutron QS Scene Button**: a button mapped to a single scene which
   will be selected on press.

Resource address format
-----------------------

Most resource addresses use *Integration ID* which by default is a
number, but can also be a user defined string. Some resources require
a sub-address called *Component Number*.

"*Lutron QS Scene Button*" resources requires a scene number.

Possible scene numbers range from 0 (OFF) to 32, but depend on the
scenes actually programmed in the controller.

"*Button with LED*" resources also require a second component number
to identify the LED. In many cases, the LED component number is offset
80 above the button component number (and this is the default LED
component added during capture).

However, there are many cases in which the LED component number must
be explicitly edited.

You may find out the LED component number by checking the LED events
in the capture list. Or, you can check the complete list of component
numbers for all Lutron keypads and control units in Lutron's
Integration Protocol documentation.

All address formats are suggested as tooltips on the address field.

| Resource type    | Address format                                          | Examples                    |
|==================|=========================================================|=============================|
| Button with LED  | Integration ID, Component Number, LED Component Number  | `1,1,81` or `myIID,28,108`  |
| Button           | Integration ID, Component Number                        | `1,1` or `myIID,28`         |
| LED              | Integration ID, Component Number                        | `1,1` or `myIID,28`         |
| Dimmer           | Integration ID or Int. ID + Component Number            | `1` or `1,1` or `myIID,28`  |
| Shade            | Integration ID                                          | `1` or `myIID`              |
| Shade group      | Integration ID                                          | `1` or `myIID`              |
| Thermostat       | Integration ID                                          | `1` or `myIID`              |
| QS Scene Button  | Integration ID, Component Number, Scene                 | `1,1,1` or `myIID,43,1`     |

## Availability of events and commands

Lutron supports a lot of different hardware models and combinations.

Not all hardware setups support the whole set of events and commands.

Check the Lutron documentation (*Lutron Integration Protocol*), or use
the monitoring facilities in BeoLiving Intelligence to verify that the hardware actually
supports a command or event type.

A typical example is the `_MULTI TAP` event, which is available on a
limited combination of Lutron hardware.

Events
---------------
 + Button with LED, Button
   - **PRESS**
   - **RELEASE**
   - **HOLD**
   - **\_MULTI TAP**: Pressing on the button repeatedly
   - **\_HOLD RELEASE**: Releasing a button after a long press (HOLD)

Commands
-----------------
 + Button with LED, Button
   - **PRESS**
   - **RELEASE**
   - **HOLD**
   - **\_MULTI TAP**: Pressing on the button repeatedly
   - **\_HOLD RELEASE**: Releasing a button after a long press (HOLD)
 + Dimmer
   - **SET**: Set the dimmer level, in percentage.
 + Shade
   - **RAISE**
   - **LOWER**
   - **STOP**
   - **SET**: Set the shade level, in percentage.
 + Shade group
   - **RAISE**
   - **LOWER**
   - **STOP**
   - **SET**: Set the shade level, in percentage.
   - **PRESET**: Select one of the defined presets for the shade group
 + Thermostat
   - **SET HEAT SP**: Set the heat setpoint on the thermostat
   - **SET COOL SP**: Set the cool setpoint on the thermostat
   - **SET MODE**: Select the operation mode to OFF, Heat, Cool, Auto and Em.Heat (emergency heat)
   - **SET FAN AUTO**: Turn fan automatic mode ON or OFF
   - **SET SCHEDULE**: Turn the schedule ON or OFF
   - **SET ECO MODE**: Turn echo mode ON or OFF
   - **_SET SP**: Set cool and heat setpoints on the thermostat
 + Lutron QS Scene Button
   - **PRESS**: Select scene

Resource State
--------------
 + Button with LED
   - **STATE**: The state of the LED (0 means OFF and 1 ON)
 + LED
   - **\_STATE**: The state of the LED (0 means OFF and 1 ON)
 + Dimmer
   - **LEVEL**: Level of the dimmer
 + Shade
   - **LEVEL**: Level of the shade
 + Shade group
   - **LEVEL**: Level of the shade group
 + Thermostat
   - **TEMPERATURE**: The current temperature
   - **HEAT SP**: The current heat setpoint
   - **COOL SP**: The current cool setpoint
   - **MODE**: The active mode
   - **FAN AUTO**: Whether the fan automatic mode is ON or OFF
   - **SCHEDULE**: Whether the schedule is ON or OFF
   - **ECO MODE**: Whether the eco mode is ON or OFF
   - **\_SYSTEM MODE**: The current system mode
 + Lutron QS Scene Button
   - **STATE**: Whether this scene currently selected or not


## Known issues: Capture stops working for Grafik controllers

Grafik controllers may stop reporting events in a HomeWorks QS /
RadioRa 2 installation. This condition will prevent BeoLiving Intelligence
from detecting events and from showing resource capture information.

We found the following procedure will restore a non-communicating
Grafik controller:

 1. Verify that the Grafik unit is listed on the integration report
    (Lutron setup software).
 2. If it does not appear in the report, remove it and add it again to
    the project and re-check the report. Then upload the project to
    the HomeWorks / Ra2 controller.
 3. If the problem persists, you may try to **reset the Grafik
    controller to factory defaults**: Press and hold scene buttons 1,
    3 and 5, and main control arrow down (next to the display)
    simultaneously, until a message is displayed asking for
    confirmation. Press OK.
