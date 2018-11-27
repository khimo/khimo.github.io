Nest thermostat
===============

Connection to Nest REST API
--------------------------------------

In order to connect BeoLiving Intelligence to a Nest thermostat, a PIN code
is required.

A link labeled `Get PIN code for BeoLink NEST driver` is available on
the `Systems` page when setting up a Nest thermostat. This link will
redirect you to Nest web site for obtaining the PIN after
authenticating with your Nest login.

**Note:** Each PIN code can be used for authorization only once. If
*Apply* button in *Systems* page is pressed twice with the same PIN
code, connection with Nest will be reset and a new PIN code must be
generated.

Resources
--------------------

The supported resource types are:

 + **Thermostat SP1**: thermostat with single set point (for heating or cooling).
 + **Thermostat SP2**: thermostat with two set points (for heating and cooling).
 + **Home/Away**: button with feedback to interact with the away state of a home.
 + **Rush Hour**: GPIO to indicate rush hour.
 + **Smoke + CO Alarm**: a non standard resource type that reflects Nest's Smoke + CO Alarm (Nest Protect) state.

While adding or editing resources, it is normal for the connection
status icon to blink.

Once finished with resource edition, it may take up to 30 seconds for
the connection to settle and for all resource states to synchronize.

Resource address
-----------------------

Nest thermostat device ID is used as a resource address. Since it's
quite hard to find it, it's advised to register your thermostat into
your Nest account and capture thermostats automatically by pressing
*Import resources* → *Load resource from connected system*.

Commands, events and states
-----------------
 + **Thermostat SP1**
   - **Set setpoint**: sets temperature set point of a thermostat or captures event on a given level.
   - **Set mode**: sets system mode to home/away or captures event on a given state.
   - **System mode**: captures system mode event (home/away).
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + SETPOINT: The current setpoint.
     + MODE: The current mode: Heat, Cool or Off.
     + \_FAN TIMER ACTIVE: Indicates whether or not the fan is active.
 + **Thermostat SP2**
   - **Set heat SP**: sets heating set point of a thermostat or captures event on a given level.
   - **Set cool SP**: sets cooling set point of a thermostat or captures event on a given level.
   - **Set mode**: sets system mode to home/away or captures event on a given state.
   - **System mode**: captures system mode event (home/away).
   - **State variables**:
     + TEMPERATURE: The current temperature.
     + HEAT SP and COOL SP: The current heat and cool setpoints respectively.
     + MODE: The current mode: Heat, Cool, Auto or Off.
     + \_FAN TIMER ACTIVE: Indicates whether or not the fan is active.
 + **Home/Away**
   - **Home**: sets the corresponding home away status to home.
   - **Away**: sets the corresponding home away status to away.
   - **Toggle**: toggles the corresponding home away status.
 + **Rush Hour**:
   - **State variables**:
     + STATE: Indicates whether or not a rush hour is taking place.
 + **Smoke + CO Alarm**:
   - **State variables**:
     + \_IS\_ONLINE: True when the Smoke CO Alarm is online.
     + \_BATTERY\_HEALTH: The battery health status, can be `ok` or `replace`.
     + \_CO\_ALARM\_STATE: The CO alarm state, one of `ok`, `warning` or `emergency`.
     + \_SMOKE\_ALARM\_STATE: The smoke alarm state, one of `ok`, `warning` or `emergency`.
     + \_UI\_COLOR\_STATE: The Protect LED color, useful for detecting problems without checking all the above state variables, can be one of `gray`, `green`, `yellow` or `red`.
