---
title: Use a dimmer as a master dimmer
layout: pagetoc
---

This example reads the name of the event that has triggered the macro (_event.name()_) and decides according to the devices name, to modify the level of all dimmers in the same zone (see _event.fire(string)_ where the _string_ is a concatenation of the events area, zone and level with _/DIMMER/*/_ that selects all dimmers regardles of their name).
```lua
function(event, engine) 
   -- If the event corresponds to a dimmer
   if event.type() == "DIMMER" then
      -- if the dimmer is named masterLight
      if event.name() == "masterLight" then
         -- set all the dimmers of the room to the same level
         engine.fire(event.area() .. "/" .. event.zone() .. "/DIMMER/*/SET?LEVEL=" .. event.get("LEVEL") )
      end
   end
end
```