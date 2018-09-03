Virtual Resources
=================

Virtual resources are an abstraction that lets you define buttons for
systems that do not implement these directly.

Also, **BeoLiving App currently uses virtual buttons** for displaying
scene buttons. It does not yet support displaying all available
resources on each zone.

**Virtual resources have no functionality by themselves**; you must
define macros to link user actions on a virtual resource, with actual
events and commands on the systems. See the example below.

Future releases of BeoLiving Intelligence will also support virtual thermostats.

## End user experience

Virtual resources can appear as a single functional entity on user
interfaces, hiding the fact that internally the resource is
implemented by putting together a set of macros for all the needed
actions on the button.

## Addressing

Virtual resources have an address which is a unique number. This
number is used by external controllers and applications to identify
this resource.

Example: KNX button
-------------------

You have a KNX system, which communicates with BeoLiving Intelligence via
changes to group addresses.

There is a boolean group address `1/2/3` which acts on the ceiling
fan, and you want to show it as a button on the user interfaces.

The steps are:

1. Create a virtual resource of type button, called `Fan`, with
   address `1`.
2. Create a KNX resource of type boolean on group address `1/2/3`, and
   call it `KnxFan`.
3. Create a macro called `Fan ON` with event `Fan PRESS`, and command
   `Set KnxFan to 1`.
4. Create another macro called `Fan OFF` with event `Fan RELEASE`, and
   command `Set KnxFan to 0`.

Now you have a button that looks and behaves like a button on the user
interfaces, but internally acts on a boolean KNX group address.

Example: LUTRON Shades
----------------------

You have LUTRON buttons that can raise, lower and stop a shade, let's call them `RaiseBtn`, `LowerBtn` and `StopBtn` respectively.
It is possible to create a Virtual Shade and use it to trigger the PRESS command of the LUTRON buttons.

The steps are:

1. Create a virtual resource of type Shade, called `MyShade`.
2. Create a macro called `Raise Shade` with event `MyShade RAISE_REQUIRED`, and command `RaiseBtn PRESS`.
3. Create a macro called `Lower Shade` with event `MyShade LOWER_REQUIRED`, and command `LowerBtn PRESS`.
4. Create a macro called `Stop Shade` with event `MyShade STOP_REQUIRED`, and command `StopBtn PRESS`.

Now you have a resource that looks like a shade in the user interfaces, but acts triggering the Lutron buttons.

Example: Virtual Dimmers
------------------------
Whenever the `SET` command is executed on a Virtual Dimmer, the `SET_REQUIRED` event will be fired with the same `LEVEL` value of the `SET` command (the level of the dimmer will not change).
You can use the `SET_REQUIRED` event to trigger the commands you need to set the value of your dimmer, for example executing `PRESS` command on some button.
Then you can set the level of the virtual dimmer using the `SET_VIRTUAL` command which takes a `LEVEL` value.

The steps are:

1. Create a Virtual Dimmer called `MyVirtualDimmer`
2. Create a macro called `Set Virtual Dimmer` with event `MyVirtualDimmer SET_REQUIRED` and the following command:
```lua
function(event, engine)
  ----
  -- Do what you have to do to set the level
  ----

  --- Set the Virtual Dimmer level
  engine.fire(event.area().."/"..event.zone().."/DIMMER/"..event.name().."/SET_VIRTUAL?LEVEL="..event.get("LEVEL"))
end
```
