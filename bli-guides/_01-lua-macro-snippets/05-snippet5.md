---
title: Set all group lights to 25%
layout: pagetoc
---

```lua
-- Group usage sample code:
function(event, engine)
   local grp = event.group()
   engine.fire_on_group(grp, "DIMMER/*/SET?LEVEL=25")
end
```