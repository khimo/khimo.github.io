KNX / EIB
=========

BeoLiving Intelligence can interact with KNX systems by means of shared variables (group
addresses).

Connection to a KNX system
--------------------------

BeoLiving Intelligence can connect to a KNX system by means of KNX data interfaces.

The supported interfaces are:

-   PEI type 10 (BCU2, with FT 1.2 protocol) over RS232 connection
-   IP tunnelling over Ethernet connection

PEI type 16 serial interfacing is not supported. PEI 10 bit rate is
fixed at the default 19200 bps. The IP tunnelling interface could provide or not
support for *Bus Monitor Mode*. **In case *Bus Monitor Mode* is not supported, use 
*Virtual Bus Monitor*** as a workaround checking the box *"Use Virtual Bus Monitor"* on 
*Connection Settings*.

*Note on IP tunnelling:* It is usually necessary to disconnect the ETS
software from the IP tunnelling interface before BeoLiving Intelligence can connect to the
system. Also, after disconnecting ETS, the interface can take several
minutes before it accepts a new connection from BeoLiving Intelligence. The same
considerations apply when switching back to ETS.

KNX resources
-------------

All the interaction between KNX and BeoLiving Intelligence is by means of *group
addresses*. Group addresses have an associated *datapoint type* which
identifies the type of data it holds (e.g. boolean, signed integer,
etc.).

It is therefore necessary to define group addresses for all the resources
intended for integration with BeoLiving Intelligence.

To be able to integrate KNX with BeoLiving Intelligence resources must be defined in BeoLiving Intelligence.
BeoLiving Intelligence resources refer to one or more KNX resources and the way to map between BeoLiving Intelligence
and KNX resources is the address.

A BeoLiving Intelligence resource address maps to one, two or three KNX group addresses.
Group addresses have the form *a/b/c* (3 level address) or
*a/b* (2 level). The default is the 3 level addresses, but both formats
are accepted.

For resources mapping to two or three KNX resources the address contains group addresses
spearated by a ':' character.

For resources with state BeoLiving Intelligence keeps track of whether or not any state was received since
the connection began, and sets the ONLINE state to false until some state is received from KNX.
If ONLINE state stays false, it probably means the resource address is wrong.

### Group address flags in ETS

There are several flags in the setup of KNX resources in an ETS
project which determine the behaviour of the resources and their
capabilities for integration with BeoLiving Intelligence.

The *Communication Flag* is the master switch for communication i.e.
if this flag is not set, the object cannot be integrated with BeoLiving Intelligence.

The *Read Flag* enables the object value to be read by BeoLiving Intelligence. If not
set, BeoLiving Intelligence can still notice when the value changes but cannot request
its value, thus failing to get a correct state after a power failure
or a configuration load.

When setting up a resource where the Read Flag is unset, select a
resource type without state in BeoLiving Intelligence.

The *Write Flag* enables the object to be modified from BeoLiving Intelligence. If it is
unset events can still be generated on BeoLiving Intelligence but there will be no
possible command on the object.

The *Transmit Flag* enables the group address to send information to
BeoLiving Intelligence, if unset the object will not notify events and neither can BeoLiving Intelligence
request its state so for *Read Flag* to work this also must be set.

In BeoLiving Intelligence help and documentation, the abbreviations *C*, *T*, *R* and
*W* are used for Communication, Transmit, Read and Write flags
respectively.

## Standard and non-standard resources

BeoLiving Intelligence supports two kinds of resources for KNX: standard BeoLiving Intelligence resources,
and native KNX resources.

Standard BeoLiving Intelligence resources are: Toggle, Button, Dimmer with and without
state, Shade with and without state, Thermostat 1SP, Thermostat 2SP, and GPIO.

Native KNX resource types are: Boolean, 1 byte unsigned integer, 1 byte signed integer,
2 Bytes unsigned integer, 2 Bytes signed integer and 3 bit controlled.

Standard resource types allow for better integration, offering more generic programming
capabilities on BeoLiving Intelligence (generic programming), and better display on
BeoLiving Intelligence user interfaces (web panel and mobile applications).

As a general rule try to avoid assigning the native resource types,
unless you need macros with precise control over these group addresses.


System connection state
=======================
The KNX system connection state can be Offline, Connected, Connecting or Online.
Offline means the KNX is not reachable.
Connecting means the KNX system initialized the connection.
Online means an interaction with the KNX system succeeded for at least one command/event/state request.

Resource types
==============

### Standard resource types

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left"><b>Resource type</b></th>
<th scope="col" class="left"><b>Std. type</b></th>
<th scope="col" class="left"><b>Comment</b></th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Toggle</td>
<td class="left">BUTTON</td>
<td class="left">Switch or any boolean toggle, and keeps track of its current value.</td>
</tr>

<tr>
<td class="left">Button</td>
<td class="left">BUTTON</td>
<td class="left">Button with press, hold and release functionality.</td>
</tr>

<tr>
<td class="left">Dimmer without state</td>
<td class="left">DIMMER</td>
<td class="left">Dimmer with set level functionality, but no feedback.</td>
</tr>

<tr>
<td class="left">Dimmer</td>
<td class="left">DIMMER</td>
<td class="left">Dimmer with feedback of its current level.</td>
</tr>

<tr>
<td class="left">Shade without state</td>
<td class="left">SHADE</td>
<td class="left">Shade with raise, lower and stop functionality, but no feedback.</td>
</tr>

<tr>
<td class="left">Shade</td>
<td class="left">SHADE</td>
<td class="left">Shade with raise, lower, stop and feedback of its current level.</td>
</tr>

<tr>
<td class="left">GPIO</td>
<td class="left">GPIO</td>
<td class="left">Switch, or any boolean value that can be set to true
/ false. Keeps track of its current value.</td>
</tr>

<tr>
<td class="left">Thermostat 1SP</td>
<td class="left">THERMOSTAT_1SP</td>
<td class="left">Thermostat with a temperature and a setpoint states, and a set setpoint command.</td>
</tr>

<tr>
<td class="left">Thermostat 2SP</td>
<td class="left">THERMOSTAT_2SP</td>
<td class="left">Thermostat with a temperature, a cool setpoint and a heat setpoint states and commands to set both setpoints.</td>
</tr>

</tbody>
</table>

### Address

The following table summarizes the supported resource types, the KNX
Datapoint Type code, the needed flags and group addresses.

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="left" />
<col  class="left" />
<col  class="left" />
<col  class="left" />
<col  class="left" />
<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Resource type</th>
<th scope="col" class="left">DPT</th>
<th scope="col" class="left">Address</th>
<th scope="col" class="left">Group Address</th>
<th scope="col" class="left">Needed Flags</th>
<th scope="col" class="left">Comment</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Toggle</td>
<td class="left">DPT 1.001</td>
<td class="left">a/b/c or a/b/c:d/e/f</td>
<td class="left">a/b/c and d/e/f</td>
<td class="left">CRTW</td>
<td class="left">Some Toggle resources have value and status object in the same GA (a/b/c) or in a different GA (a/b/c and d/e/f). So in the last case, it's possible to specify the resource address as a/b/c:d/e/f [ 1 ]</td>
</tr>

<tr>
<td class="left">Button</td>
<td class="left">DPT 1.001</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">Dimmer without state</td>
<td class="left">DPT 5.001</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">Dimmer value object GA.</td>
</tr>

<tr>
<td class="left">Dimmer</td>
<td class="left">DPT 5.001</td>
<td class="left">a/b/c:d/e/f</td>
<td class="left">a/b/c and d/e/f</td>
<td class="left">CTW (a/b/c) and CRT (d/e/f)</td>
<td class="left">Dimmer value object GA (a/b/c) and value status object (d/e/f). [ 1 ]</td>
</tr>

<tr>
<td class="left">Shade without state</td>
<td class="left">DPT 1.007 and 1.008</td>
<td class="left">a/b/c:d/e/f</td>
<td class="left">a/b/c and d/e/f</td>
<td class="left">CTW (both a/b/c and d/e/f)</td>
<td class="left">Shade 'StopStep UpDown' object GA (a/b/c) and 'Move UpDown' object GA (d/e/f).</td>
</tr>

<tr>
<td class="left">Shade</td>
<td class="left">DPT 1.007, 1.008 and 5.001</td>
<td class="left">a/b/c:d/e/f:g/h/i</td>
<td class="left">a/b/c, d/e/f and g/h/i</td>
<td class="left">CTW (a/b/c), CTW (d/e/f) and CRT (g/h/i)</td>
<td class="left">Shade 'StopStep UpDown' object GA (a/b/c), 'Move UpDown' object GA (d/e/f) and status object GA (g/h/i). [ 1 ]</td>
</tr>

<tr>
<td class="left">GPIO</td>
<td class="left">DPT 1.001</td>
<td class="left">a/b/c or a/b/c:d/e/f</td>
<td class="left">a/b/c and d/e/f</td>
<td class="left">CRTW</td>
<td class="left">Some GPIO resources have value and status object in the same GA (a/b/c) or in a different GA (a/b/c and d/e/f). So in the last case, it's possible to specify the resource address as a/b/c:d/e/f [ 1 ]</td>
</tr>

<tr>
<td class="left">Thermostat 1SP</td>
<td class="left">DPT 9.001</td>
<td class="left">a/b/c:d/e/f:g/h/i</td>
<td class="left">a/b/c and d/e/f</td>
<td class="left">CRT (a/b/c), CTRW (d/e/f)</td>
<td class="left">a/b/c is the temperature GA and d/e/f the setpoint temperature GA.</td>
</tr>

<tr>
<td class="left">Thermostat 2SP</td>
<td class="left">DPT 9.001</td>
<td class="left">a/b/c:d/e/f:g/h/i</td>
<td class="left">a/b/c, d/e/f and g/h/i</td>
<td class="left">CRT (a/b/c), CTRW (d/e/f) and CTRW (g/h/i)</td>
<td class="left">a/b/c is the temperature GA, d/e/f the heat setpoint temperature GA and g/h/i the cool setpoint temperature GA.</td>
</tr>

<tr>
<td class="left">Boolean</td>
<td class="left">DPT 1.xxx</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">1 byte unsigned integer</td>
<td class="left">DPT 5.xxx</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">1 byte signed integer</td>
<td class="left">DPT 6.xxx</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">2 bytes unsigned integer</td>
<td class="left">DPT 7.xxx</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">2 bytes signed integer</td>
<td class="left">DPT 8.XXX</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>

<tr>
<td class="left">3 bit controlled</td>
<td class="left">3.007 / 3.008</td>
<td class="left">a/b/c</td>
<td class="left">a/b/c</td>
<td class="left">CTW</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>

[ 1 ]: Device configuration in ETS may be required for this object to be shown as available.

### Events

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

<colgroup>
<col  class="left" />
<col  class="left" />
<col  class="left" />
<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Event</th>
<th scope="col" class="left">Argument</th>
<th scope="col" class="left">Resource type</th>
<th scope="col" class="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left"><code>PRESS</code></td>
<td class="left">&#xa0;</td>
<td class="left">Button</td>
<td class="left">Button press</td>
</tr>

<tr>
<td class="left"><code>RELEASE</code></td>
<td class="left">&#xa0;</td>
<td class="left">Button</td>
<td class="left">Button release</td>
</tr>

<tr>
<td class="left"><code>HOLD</code></td>
<td class="left">&#xa0;</td>
<td class="left">Button</td>
<td class="left">Button hold, depends on setup. Typically means holding a button for 200 ms or more.</td>
</tr>

<tr>
<td class="left"><code>SET</code></td>
<td class="left">Number</td>
<td class="left">All non standard</td>
<td class="left">Generated when the value is set.</td>
</tr>

<tr>
<td class="left"><code>SET_NON_ZERO</code></td>
<td class="left">&#xa0;</td>
<td class="left">All non standard</td>
<td class="left">Generated when the value is set to a non zero one.</td>
</tr>
</tbody>
</table>

The value ranges for the native KNX resources are as follows:

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
<colgroup>
<col  class="left" />

<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Resource type</th>
<th scope="col" class="left">Range</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Boolean</td>
<td class="left">0 .. 1</td>
</tr>

<tr>
<td class="left">1 Byte unsigned integer</td>
<td class="left">0 .. 255</td>
</tr>

<tr>
<td class="left">1 Byte signed integer</td>
<td class="left">-128 .. 127</td>
</tr>

<tr>
<td class="left">2 Bytes unsigned integer</td>
<td class="left">0 .. 65535</td>
</tr>

<tr>
<td class="left">2 Bytes signed integer</td>
<td class="left">-32768 .. 32767</td>
</tr>

<tr>
<td class="left">3 Bit Controlled</td>
<td class="left">0 .. 15 (0 to 7 setp size, add 8 for increase instead of decrease)</td>
</tr>
</tbody>
</table>

### Commands

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
<col  class="left" />
<col  class="left" />
<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Command</th>
<th scope="col" class="left">Argument</th>
<th scope="col" class="left">Resource type</th>
<th scope="col" class="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">PRESS</td>
<td class="left">&#xa0;</td>
<td class="left">Toggle</td>
<td class="left">Swaps the resource value</td>
</tr>

<tr>
<td class="left">PRESS</td>
<td class="left">&#xa0;</td>
<td class="left">Button</td>
<td class="left">Button press</td>
</tr>

<tr>
<td class="left">RELEASE</td>
<td class="left">&#xa0;</td>
<td class="left">Button</td>
<td class="left">Button release</td>
</tr>

<tr>
<td class="left">SET</td>
<td class="left">1..100</td>
<td class="left">Dimmer, Dimmer without state</td>
<td class="left">Sets the level of the dimmer to a percentage</td>
</tr>

<tr>
<td class="left">RAISE</td>
<td class="left">&#xa0;</td>
<td class="left">Shade, Shade without state</td>
<td class="left">Starts raising the shade</td>
</tr>

<tr>
<td class="left">LOWER</td>
<td class="left">&#xa0;</td>
<td class="left">Shade, Shade without state</td>
<td class="left">Starts lowering the shade</td>
</tr>

<tr>
<td class="left">STOP</td>
<td class="left">&#xa0;</td>
<td class="left">Shade, Shade without state</td>
<td class="left">Stops shade motion</td>
</tr>

<tr>
<td class="left">SET</td>
<td class="left">Boolean</td>
<td class="left">GPIO</td>
<td class="left">Sets the level of the GPIO</td>
</tr>

<tr>
<td class="left">SET</td>
<td class="left">Resource range</td>
<td class="left">All non standard</td>
<td class="left">Sets the value of the resource.</td>
</tr>

<tr>
<td class="left">SET SETPOINT</td>
<td class="left">[ 2 ]</td>
<td class="left">Thermostat 1SP</td>
<td class="left">Sets the setpoint to the given temperature</td>
</tr>

<tr>
<td class="left">SET COOL SP</td>
<td class="left">[ 2 ]</td>
<td class="left">Thermostat 2SP</td>
<td class="left">Sets the cool setpoint to the given temperature</td>
</tr>

<tr>
<td class="left">SET HEAT SP</td>
<td class="left">[ 2 ]</td>
<td class="left">Thermostat 2SP</td>
<td class="left">Sets the heat setpoint to the given temperature</td>
</tr>

</tbody>
</table>

[ 2 ]: Temperature as a string in the form NU where N is the numeric value of the temperature and U a letter indicating the units, either C for Celsius or F for Fahrenheit. 

### Resource State

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />
<col  class="right" />
<col  class="left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="left">Resource type</th>
<th scope="col" class="right">State</th>
<th scope="col" class="right">Type</th>
<th scope="col" class="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left">Toggle, GPIO</td>
<td class="right">STATE</td>
<td class="right">0..1</td>
<td class="left">Current value</td>
</tr>

<tr>
<td class="left">Dimmer</td>
<td class="right">LEVEL</td>
<td class="right">0..100</td>
<td class="left">Current level in percentage</td>
</tr>

<tr>
<td class="left">Shade</td>
<td class="right">LEVEL</td>
<td class="right">0..100</td>
<td class="left">Current level in percentage</td>
</tr>

<tr>
<td class="left">Thermostat 1SP, Thermostat 2SP</td>
<td class="right">TEMPERATURE</td>
<td class="right">[ 2 ]</td>
<td class="left">Current ambient temperature.</td>
</tr>

<tr>
<td class="left">Thermostat 1SP</td>
<td class="right">SETPOINT</td>
<td class="right">[ 2 ]</td>
<td class="left">Setpoint current value.</td>
</tr>

<tr>
<td class="left">Thermostat 2SP</td>
<td class="right">HEAT SP</td>
<td class="right">[ 2 ]</td>
<td class="left">Heat setpoint current value.</td>
</tr>

<tr>
<td class="left">Thermostat 2SP</td>
<td class="right">COOL SP</td>
<td class="right">[ 2 ]</td>
<td class="left">Cool setpoint current value.</td>
</tr>

<tr>
<td class="left">Toggle, GPIO, Dimmer, Shade, Thermostat 1SP, Thermostat 2SP</td>
<td class="right">ONLINE</td>
<td class="right">true, false</td>
<td class="left">Indicates whether or not the other resource states reflect the state on KNX for the given address.</td>
</tr>

</tbody>
</table>



Importing and exporting KNX resources
-------------------------------------

KNX resources can be loaded from an ETS project using: 1) Group Address CSV export; and 2) OPC export (ESF).

 1. Group Address CSV export.
 On the Group Addresses view, right click over Group Addresses (root of the group addresses tree) and select the "Export Group
 Addresses" option to open the Export Group Address popup. Once in the popup select CSV as output format, "1/1 - Name/Address"
 as CSV format and comma as CSV separator.

 2. OPC export (ESF).
 On the main menu bar under "Extras" select "Export OPC" and leave the type unchanged (EIB session files (esf)).
 *This is the preferred method, as it provides more complete information for importing into BeoLiving Intelligence.*

On BeoLiving Intelligence's resources screen, use the `Import Resources` button for adding resources from the ETS export file.
