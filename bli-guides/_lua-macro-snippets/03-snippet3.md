---
title: Rush hour - Limit all dimmers to 70%
layout: pagetoc
---

For this example a _for_ iteration must be used to verify the level of all dimmers and in the case the level is greater than 70, turn them down to 70. _ipairs(arr)_ is an array of the type _(index,array)_  
```lua
-- Rush hour example code:
function(event, engine)
   -- Get all the dimmers
   local dimmers = engine.query("*/*/DIMMER/*")
   -- Iterate through them
   for i, v in ipairs(dimmers) do 
      -- If their level is > 70...
      if v.get_number("LEVEL") > 70 then
         -- Set it to 70
         engine.fire(v.area() .. "/" .. v.zone() .. "/DIMMER/" .. v.name() .. "/SET?LEVEL=70")
      end
   end
end
```