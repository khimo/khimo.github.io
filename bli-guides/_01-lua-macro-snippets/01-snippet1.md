---
title: A simple dimmer toggle
layout: pagetoc
---

This code queries the level of a dimmer(_engine.query()[1].get("LEVEL")_), regardless of the Event that has triggered the Macro, and turns it ON (_engine.fire()_) on full intensity if it was OFF, or turns it OFF if it was ON. It also prints notice of the action it takes in the Log (_Debug()_).
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