---
title:
layout: pagetoc
---

This guide shows an interesting Macro setup, inspired by a client who had various B&O TVs in a reception room of their buisness.

The client wanted the BLI to respond to somebody ringing the doorbell by turning on (if on standby) the TVs and showing the doorbell's camera. After the receptionist had open the door through any of the TVs, these should return to their previous state, before anybody rang the door.

This is easily setup through a LuaMacros code, esaily implemented with the functions shown in the help section of the Macro writing section.

First we will show a whole example of a LuaMacro code that compleates these actions on a certain installation:

```lua
function(event, engine)
  init_tvs = engine.query("Reception/TVs/AV renderer/*")
  for i=1,#init_tvs do
    init_state=tostring(init_tvs[i].get("state"))
    if (init_state=="Stop" or init_state=="None") then
      engine.fire("Main/Home Theater/AV renderer/BeoVision Eclipse_28750648/Select source?Connector=&Origin=local&Source Type=TV")
      engine.delay(15,0)
    end
  
  engine.fire("*/*/AV renderer/*/Send command?Command=HOME CONTROL&Continue type=short_press")
  engine.wait_until("RND/TV/BUTTON/DoorState/PRESS", 80, 0)
  
  engine.delay(5,0)
  engine.fire("*/*/AV renderer/*/Send command?Command=BACK&Continue type=short_press")
  
  if (init_state=="Stop" or init_state=="None") then
    engine.fire("*/*/AV renderer/*/Standby")
  end
end 
```




