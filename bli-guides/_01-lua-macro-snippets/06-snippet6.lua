---
title: Turn on the TV and raise the volume
layout: pagetoc
---


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