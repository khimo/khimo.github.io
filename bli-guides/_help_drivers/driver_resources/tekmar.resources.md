---
title: Resource for Tekmar
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Resource definition for Tekmar driver
## Heater (THERMOSTAT_1SP)

Use for a device supporting HeatSetpoint, FanPercent, ActiveDemand and CurrentTemperature

### Commands: 

<dl>

<dt>SET FAN AUTO</dt><dd>Turning off sets fan to minimum speed, use the corresponding non standard operation to set the fan to an actual value (which also disables auto mode).</dd>
<dt>_SET FAN SPEED</dt><dd>Sets the fan speed, for thermostats other than 544, 545, 546. Setting to 0 is the same as using SET FAN AUTO(true).</dd>
<dt>SET SP</dt><dd></dd>
<dt>SET MODE</dt><dd></dd>
<dt>_SET FAN SPEED 1 - 10</dt><dd>Sets the fan speed, for thermostats 544, 545, 546. Setting to 0 is the same as using SET FAN AUTO(true).</dd>
</dl>
## Setback switch (BUTTON)

Enable or disable setback state, only one is allowed for the system.

### Commands: 

<dl>

<dt>PRESS</dt><dd></dd>
</dl>
## Snow Melting Control (BUTTON)

Enable or disable Snow Melting device.

### Commands: 

<dl>

<dt>PRESS</dt><dd></dd>
</dl>
## Cooler and Heater (THERMOSTAT_2SP)

Use for a device supporting HeatSetpoint, CoolSetpoint, FanPercent, ActiveDemand and CurrentTemperature

### Commands: 

<dl>

<dt>SET COOL SP</dt><dd></dd>
<dt>_SET FAN SPEED</dt><dd>Sets the fan speed, for thermostats other than 544, 545, 546. Setting to 0 is the same as using SET FAN AUTO(true).</dd>
<dt>_SET FAN SPEED 1 - 10</dt><dd>Sets the fan speed, for thermostats 544, 545, 546. Setting to 0 is the same as using SET FAN AUTO(true).</dd>
<dt>SET HEAT SP</dt><dd></dd>
<dt>SET MODE</dt><dd></dd>
<dt>SET FAN AUTO</dt><dd>Turning off sets fan to minimum speed, use the corresponding non standard operation to set the fan to an actual value (which also disables auto mode).</dd>
</dl>
## Setpoint device (_SETPOINT_DEVICE)

Use for a device supporting SetpointDevice, ActiveDemand and CurrentTemperature

### Commands: 

<dl>

<dt>SET SP</dt><dd></dd>
</dl>
## Slab control (_TEKMAR_SLAB)

To work properly the thermostat must be configured to have the air temperature sensing sensor disabled and the floor temperature sensor must be enabled.

### Commands: 

<dl>

<dt>SET MODE</dt><dd></dd>
<dt>SET SP</dt><dd></dd>
</dl>
