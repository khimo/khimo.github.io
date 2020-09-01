---
title: Limited TV time - Act differently depending on the time of day
layout: pagetoc
---


```lua
function(event, engine)
   function(event, engine) 
     time = engine.query("*/ */SYSTEM/Clock/") 
     if tonumber(time[1].get ("hour")) < 18 then 
       engine.fire("Main/loc al/DIMMER/dimmer/SET?LEVEL=99") 
       Debug("daledaledale") 
       engine.fire("Main/unassigned resources/AV renderer/NicoSound/Send command?Command=PLAY&Continue type=short_press")
     else
       Debug("Nononono")
     end
   end 
end
```