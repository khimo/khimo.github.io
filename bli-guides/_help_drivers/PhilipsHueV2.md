---
title: Philips Hue | CLIP API | V2
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Philips Hue, CLIP API, DIMMER, GPIO, BUTTON, On Off Light, Dimmable Light, Color Temperature Light, Color Light, Extended Color Light, Group, Motion, Motion Camera, Entertainment, Scene, Hue Button, Hue Rotary, Temperature, Light Level, Contact, battery, zigbee, FADE
description: Philips Hue CLIP API v2 driver controls lights, groups, sensors (motion, temperature, light level, contact), buttons, rotary dials and scenes. Supports battery monitoring, zigbee connectivity and smooth fade transitions.
---
Philips Hue CLIP API
===============================

This driver supports communication with a Philips Hue bridge,
allowing to control lights, lighting groups, different sensors and
activate scenes.

Connecting to the system
--------------------------------

Connection to the system is done via a REST connection with the
Philips Hue bridge. The following configuration is needed:

 1. *Bridge host*: The IP address or host name of the bridge.
 2. *Bridge id*: The internal identifier of the HUE bridge. This field
is automatically updated when the connection is established.
 3. *Bridge user*: This user is automatically created when the button
    *Create Philips HUE user on bridge* is pressed, as described below.
 4. *New color turns dimmers on*: If this flag is set, and a new color
is picked for a dimmer that is turned off, then the dimmer will be
turned on with the new selected color.

If system connection can't be established specifying Hue Bridge Hostname
on *Bridge host*, bad configuration or absence of the DNS server on the
BeoLiving Intelligence LAN could be responsible for the issue.
Try using the IP address of the Bridge. Default Hostname of Hue Bridge
is ```Philips-hue```.

If the *Bridge user* is not defined or is invalid, then you can create a new
one by pressing the *link* button on the bridge and then pressing the *Create
Philips HUE user on bridge* within 30 seconds. If the action is successful,
then a new user will be assigned, updating the value for *Bridge user*.

Available resources
--------------------------------

The Philips Hue driver supports commanding the lights, groups, sensors
and scenes that are available for the configured user.

The following resource types are available:

 - **On Off Light**: supports on/off control.
 - **Dimmable Light**: supports on/off control and dimming.
 - **Color Temperature Light**: supports on/off control, dimming and setting
color temperature.
 - **Color Light**: supports on/off control, dimming and setting color in either
hue or color coordinates.
 - **Extended Color Light**: supports on/off control, dimming, setting color (hue
or color coordinates) and setting color temperature.
 - **Group**: a light groupt that supports on/off control, dimming, setting color
and color temperature.
 - **Motion**: A motion sensor.
 - **Motion Camera**: A camera motion sensor.
 - **Entertainment**: Lighting experience that synchronizes with entertainment systems.
 - **Scene**: a scene activation.
 - **Hue Button**: a Hue-connected button or switch (Friends of Hue switches, Hue Dimmer,
Hue Tap Dial, Hue Smart Button, etc.). Fires PRESS, HOLD and RELEASE events from physical
button presses via the Hue bridge SSE stream.
 - **Hue Rotary**: a rotary dial (e.g. Hue Tap Dial). Fires PRESS on rotation start
and HOLD on continued rotation. Reports rotation direction, steps and duration.
 - **Temperature**: a Hue temperature sensor. Reports ambient temperature in degrees Celsius.
 - **Light Level**: a Hue ambient light sensor. Reports light level in lux.
 - **Contact**: a Hue contact sensor (e.g. door/window). STATE 1 = contact (closed),
STATE 0 = no contact (open).

Both lights and groups are mapped to the DIMMER Standard Resource
type, and allow full control of every state variable, such as
brightness, hue or color coordinates and color temperature depending on the above
categories.

Also, as a DIMMER, they provide the SET LEVEL command which acts
on the *brightness* and *on* state variables. As a simple example,
setting the level to 100 implies setting "on" to true and "bri" to
255 on the Philips Hue bridge.
When using an "On Off Light" the SET LEVEL command only sets "on"
to true on the Philips Hue Bridge if LEVEL is greater than 0 (or
"off" on the contrary).

Sensors (Motion, Temperature, Light Level, Contact) and Entertainment
are mapped to the GPIO Standard Resource type.
Sensors provide state updates from the bridge, and the
Entertainment can be turned on or off.

The scene is mapped to a BUTTON Standard Resource type, and the button
PRESS recalls the scene on the Philips Hue bridge.

Hue Buttons and Hue Rotary dials are mapped to the BUTTON Standard
Resource type. Each button on a multi-button device (e.g. a 4-button
Friends of Hue switch) appears as a separate resource, named after the
parent device and button number.
They generate the following events that can be used as macro triggers:

 - **PRESS**: fired on initial button press (or rotation start for rotary dials).
 - **HOLD**: fired on long press (or continued rotation for rotary dials).
 - **RELEASE**: fired when the button is released (short or long). Not available on rotary dials.

All battery-powered sensors and buttons report **BATTERY** (0-100%) and
**\_BATTERY STATE** (normal, low, critical). Zigbee connectivity changes
are reflected in the **ONLINE** state of all resources.

**Warning** have in mind that when you set a color maybe Philips hue could not map
that color for the lights, and set the nearest coordinates for that color. So in the state,
you can see a difference between the color you set in HSV format and the HSV color shown
on the resource state.

### Changelog

#### v1.1 | 2026-02-24

**New resource types:**
 - **Hue Button** (BUTTON): Hue-connected buttons and switches (Friends of Hue, Hue Dimmer, Hue Tap Dial, Hue Smart Button). Fires PRESS, HOLD and RELEASE events. Each button on a multi-button device appears as a separate resource named after the parent device.
 - **Hue Rotary** (BUTTON): rotary dial (e.g. Hue Tap Dial). Fires PRESS and HOLD events. Reports \_DIRECTION, \_STEPS and \_DURATION states.
 - **Temperature** (GPIO): ambient temperature sensor with \_TEMPERATURE (Celsius) and \_DATETIME states.
 - **Light Level** (GPIO): ambient light sensor with \_LIGHT\_LEVEL (lux) and \_DATETIME states.
 - **Contact** (GPIO): door/window contact sensor. STATE 1 = closed, 0 = open.

**New commands:**
 - \_FADE: smooth brightness transition with duration in milliseconds. Available on all dimmable lights and groups.
 - \_FADE COLOR: smooth color transition with duration. Available on color lights and groups.
 - \_FADE COLOR TEMPERATURE: smooth color temperature transition with duration. Available on color temperature and extended color lights.

**New features:**
 - Battery monitoring (BATTERY and \_BATTERY STATE) for all battery-powered sensors and buttons (Motion, Hue Button, Temperature, Light Level, Contact, Hue Rotary).
 - Zigbee connectivity monitoring: ONLINE state updates from zigbee\_connectivity events for all resources.
 - Color temperature division-by-zero guard when Kelvin value is 0.
 - \_SET ALERT now uses enumerated values (none, select, lselect) with descriptions.
 - \_SET EFFECT now uses enumerated values (no\_effect, candle, fire, prism, sparkle, opal, glisten) with descriptions.
 - All command arguments now include context help descriptions.

**Bug fixes:**
 - Fixed fatal error handler: `copas.exit()` referenced undefined global instead of `copasLib.exit()`.
 - Fixed consecutive error counter that always reset to 0 on every error, preventing the fatal shutdown threshold from ever being reached.
 - Fixed `executeSystemCommand` (TEST) blocking the driver host; now runs in a copas thread.
 - Fixed implicit global variables (`copas_sse`, `cmd` in Entertainment).
 - Fixed undefined variable `var` in SSE error logging (now uses the actual error value).
 - Fixed `requestResources` always returning count 0 instead of the actual discovered count.

#### v1.0 | First version<|||file_end|||>
