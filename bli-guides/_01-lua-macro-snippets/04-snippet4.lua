---
title: Set all indoor lights to 70%
layout: pagetoc
---

```lua
-- Group usage sample code:
function(event, engine)
   engine.fire_on_group("indoors", "DIMMER/*/SET?LEVEL=70")
end
```
