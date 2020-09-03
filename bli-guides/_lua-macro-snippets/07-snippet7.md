---
title: Limited TV time - Act differently depending on the time of day
layout: pagetoc
---

This code could be set up to respond to any command excecuted on a certain TV where the user wants to restric himself, or others, from watching television too early or late in the day. It queries the clock of the BLI and if it is outside of the desired range (6pm to 10pm in this example) it turns the TV off again by sending a STANDBY command.

It also sends a short message to the Log, so that the user can see when it was activated.

```lua
function(event, engine) 
  time = engine.query("*/ */SYSTEM/Clock/") 
  -- Only allows TV to be ON and respond to commands of its between 6pm and 10pm
  -- If command sent out of "TV time" hours, it responds with a standby
  if tonumber(time[1].get ("hour")) < 18 or tonumber(time[1].get ("hour")) > 22 then
    engine.fire("Main/kids_playroom/AV renderer/Beo_TV/Send command?Command=STANDBY&Continue type=short_press")
    Trace("TV Time Macro cancelled a sent command") 
  end
end
```