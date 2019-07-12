---
title: How to write lua Macros
layout: pagetoc
---

The Macro configuration page of the BeoLiving Intelligence has a simple user interface that displays available resources and commands on these resources, but aside from selecting the command to execute and setting a time delay between commands, the possibilities are limited.

A user may desire to use their system variable's values to act in a different way deppending on this.

> E.g.: Lower the curtains after sunset only if the rooms lights are turned ON. 

For this kind of control, the installer/advanced-user may press the _Convert to code_ button and gain access to an very easy and complete tool: **_lua Macros_**

The following is an introduction to the main tools used in _lua code_ programming for the BeoLiving Intelligence, including code snippets and practical examples.

## Getting started

When the macro executes because any of the defined events has matched, and before any of the UI defined commands are executed, the function defined in the "Lua code" text area will be executed.

### Parameters
The function should have the following signature: _function(event, engine)_
The available parameters are those under _event_ and under _engine_:
### Event
The event that originated the call.
#### Members
- **tostring (function(): string):** The full string representation of the event.
>> event.tostring() = "Main/global/DIMMER/MyLamp/STATE_UPDATE?LEVEL=55!"
- **area (function(): string):** The area name.
>> event.area() = "Main"
- **zone (function(): string):** The zone name.
>> event.zone() = "global"
- **type (function(): string):** The type name.
>> event.type() = "DIMMER"
- **name (function(): string):** The originator name.
>> event.name() = "MyLamp"
- **parameters (function(): table):** The parameters, with full values, as a lua table.
>> event.parameters() = {"LEVEL" = "55!"}
- **get (function(string): string):** Gets the value of a parameter, excluding the updated mark.
>> event.get("LEVEL") = "55"
- **updated (function(string): boolean):** Checks whether a parameter was updated on the event.
>> event.updated("LEVEL") = true
- **group (function(): string):** The name of the group the zone is in.
>> event.group() = "indoors"
- **group_zones (function(string) : table):** The addresses of the zones contained in a group.
>> event.group_zones("indoors") = {"Main/global", "Downstairs/Kitchen", "Upstairs/Main room", "other/room"}

### Engine
The hip engine manager.
#### Members
- **fire (function(string, ...)):** Fires one or more commands on the engine.
>> engine.fire("other/room/DIMMER/*/SET?LEVEL = 75")
- **fire_on_group (function(string, string)):** Fires one commands every zone that belongs to a group.
>> engine.fire_on_group("indoors", "DIMMER/*/SET?LEVEL = 75")
- **query (function(string): table):** Performs a state query on the engine. The returned table is an array of states, with the following members:
	- **tostring (function(): string):** The full string representation of the state.
	- **area (function(): string):** The area name.
	- **zone (function(): string):** The zone name.
	- **type (function(): string):** The type name.
	- **name (function(): string):** The state owner name.
	- **get (function(string):** string): Gets the value of a parameter.
	- **group (function(): string):** The name of the group the zone is in.
	- **group_zones (function(string) : table):** The addresses of the zones contained in a group.

>> tab = engine.query("other/room/DIMMER/\*")
>>> tab[1].tostring() = "other/room/DIMMER/OtherLamp/STATE_UPDATE?LEVEL=62"
>>> tab[1].area() = "other"
>>> tab[1].zone() = "room"
>>> tab[1].type() = "DIMMER"
>>> tab[1].name() = "OtherLamp"
>>> tab[1].get("LEVEL") = "62"
>>> tab[1].group() = "indoors"
>>> tab[1].group_zones("indoors") = {"Main/global", "Downstairs/Kitchen", "Upstairs/Main room", "other/room"}

- **wait_until (function(string, int, int): bool, string):** Blocks the execution of the macro for a certain amount of time or until a given condition is met. Returns whether the condition was held and the address that matched.
>> success, address = engine.wait_until("other/room/AV renderer/TV/STATE_UPDATE?state=Play", 120, 0)

- **delay (function(int, int)):** Blocks the execution for a certain amount of time.


### Return
No return value is expected.


## Notes
Any runtime error will be sent to the system log (Tools-->Log).
> Example of what could be seen in log: _Execution error on Main/global/MACRO/sample: Line 6: attempt to call field 'wrong_delay' (a nil value)_.

For debugging purposes, the macro code can call the Debug function, which receives a string that is sent to the system log. This can be used to print a variable's value or to see if your macro is arriving to the end of the code or "crashing" before hand.
> Example of what you can write in your Macro's code: _Debug("Will debug: " .. tostring(123))._

Two special commands, which cannot be added via normal macro edition, are available for group creation and group clear. These commands are provided by the system driver, which is located on the global zone.
> Set the kitchen on the "indoors" group: _Main/global/SYSTEM/BeoLiving Intelligence/SET GROUP?zone=Downstairs/Kitchen&group=indoors_
> Clear the kitchen group: _Main/global/SYSTEM/BeoLiving Intelligence/CLEAR GROUP?zone=Downstairs/Kitchen_

Only one execution of a macro is allowed to wait_until or delay at a time. If the macro is fired while the same macro is waiting or delaying, then the previous wait is canceled.

Canceling a macro immediately cancels any wait_until or delay.

Collapsing a macro immediately times out any wait_until or delay.

## Code examples
### A simple dimmer toggle

```lua
function(event, engine) 
    local result = engine.query("global/main/DIMMER/New DIMMER")
    if result[1].get("LEVEL") == "0" then
   Debug("Turning on global/main/DIMMER/New DIMMER")
       engine.fire("global/main/DIMMER/New DIMMER/SET?LEVEL=100");
    else
   Debug("Turning off global/main/DIMMER/New DIMMER")
       engine.fire("global/main/DIMMER/New DIMMER/SET?LEVEL=0");
    end
end
```

### Use a dimmer as a master dimmer

```lua
function(event, engine) 
   -- If the event corresponds to a dimmer
   if event.type() == "DIMMER" then
      -- if the dimmer is named masterLight
      if event.name() == "masterLight" then
         -- set all the dimmers of the room to the same level
         engine.fire(event.area() .. "/" .. event.zone() .. "/DIMMER/\*/SET?LEVEL=" .. event.get("LEVEL") )
      end
   end
end
```

### Rush hour: Limit all dimmers to 70%

```lua
-- Rush hour example code:
function(event, engine)
   -- Get all the dimmers
   local dimmers = engine.query("\*/\*/DIMMER/\*")
   -- Iterate through them
   for i, v in ipairs(dimmers) do 
      -- If their level is &gt; 70...
      if tonumber(v.get("LEVEL")) &gt; 70 then
         -- Set it to 70
         engine.fire(v.area() .. "/" .. v.zone() .. "/DIMMER/" .. v.name() .. "/SET?LEVEL=70")
      end
   end
end
```

### Set all indoor lights to 70%
```lua
-- Group usage sample code:
function(event, engine)
   engine.fire_on_group("indoors", "DIMMER/\*/SET?LEVEL=70")
end
```

### Set all group lights to 25%
```lua
-- Group usage sample code:
function(event, engine)
   local grp = event.group()
   engine.fire_on_group(grp, "DIMMER/\*/SET?LEVEL=25")
end
```

### Turn on the TV and raise the volume

```lua
function(event, engine)
   -- First, select the source on the TV
   engine.fire("other/room/AV renderer/TV/Select source?Connector=&Origin=local&Source Type=TV")

   -- Wait until the TV is playing
   -- A few notes here:
   -- - If the TV is already playing, then the condition holds immediately.
   -- - Waiting for a new state is possible by using '!'. For example
   --   "other/room/AV renderer/TV/STATE_UPDATE?state=Play!" will wait
   --   until the state effectively changes to "Play", meaning the 
   --   condition will not hold if the TV is already playing.
   -- - (120, 0) means wait for 120 seconds and 0 milliseconds.
   -- - In case the condition does not hold, the address is meaningless.
   local succ, addr = engine.wait_until("other/room/AV renderer/TV/STATE_UPDATE?state=Play", 120, 0)

   -- Check if the condition holds
   if succ then
      -- Mini delay so we can effectively command the TV
      engine.delay(0, 300)
      -- And step up
      engine.fire("other/room/AV renderer/TV/Volume adjust?Command=Step Up")
   end
end
```
