tekmar
===============================

This driver supports communication with tekmar thermostats.

Connecting to a tekmar system
--------------------------------

Connection to a tekmar system is done through tekmarNet4 Gateway 482 Serial Interface.

Resources
------------------

The supported resource types are:

 + **Cooler and Heater**: Thermostat that supports Heating and Cooling (HeatSetpoint and CoolSetpoint operations).
 + **Heater**: Thermostat that only supports Heating (HeatSetpoint operation).
 + **Slab control**: Thermostat that supports Slab heating (SlabSetpoint operation).
 + **Setback switch**: Button with LED, LED is on when setback is enabled and pressing the button switches setback state.
 + **Setpoint device**: Thermostat that supports only one setpoint (SetpointDevice operation).

Resource address format
-----------------------

All thermostats addresses are the tekmar addresses.
The *Setback switch* resource has no address and only one is allowed for the system.

Addressess in tekmar depend on the wiring, so if wiring is modified, BeoLiving Intelligence resource addresses must be updated accordingly.

There is no one to one mapping between BeoLiving Intelligence resources and tekmar thermostats,
one tekmar thermostat can handled through more than one BeoLiving Intelligence device.
For example if your tekmar thermostat has two setpoints for Cooling and Heating and also has a Slab control,
you should define a *Cooler and Heater* thermostat and a *Slab control* in BeoLiving Intelligence.

If you don't know what addresses are defined in tekmar you can use the "Load resource from connected system" button under "Import resources"
on resources setup. This will provide all the connected devices addresses, but won't help with their capabilities.
If you don't know your tekmar thermostats capabilities or for example, you have a thermostat with slab and one without and don't know which address is which,
you can add all the listed resources in the resource import list, and then find out by trying (in the example, define slab for both and test which works).
