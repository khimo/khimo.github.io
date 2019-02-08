---
title: Business reception setup for TVs and doorbell
layout: pagetoc
---

This guide shows an interesting Macro setup, inspired by a client who had various B&O TVs in a reception room of their business.

The client wanted the BLI to respond to somebody ringing the doorbell by turning on (if on standby) the TVs and showing the doorbell's camera. After the receptionist had open the door through any of the TVs, these should return to their previous state, before anybody rang the door.

This is easily setup through a LuaMacros code, esaily implemented with the functions shown in the help section of the Macro writing section.

First we will show a whole example of a LuaMacro code that completes these actions on a certain installation:

```lua
function(event, engine)
  init_tvs = engine.query("Reception/TVs/AV renderer/*")
  for i=1,#init_tvs do
    init_state=tostring(init_tvs[i].get("state"))
    if init_state=="Stop" or init_state=="None" then
      offname=tostring(init_tvs[i].name())
      Error(offname)
      engine.fire("Reception/TVs/AV renderer/"..tostring(init_tvs[i].name()).."/Select source?Connector=&Origin=local&Source Type=TV")
    end
  end
  
  if tostring(init_tvs[1].get("state"))~="Play" then
    engine.wait_until("Main/Home Theater/AV renderer/"..tostring(init_tvs[1].name()).."/STATE_UPDATE?state=Play",15,0)
  end
  
  engine.fire("Reception/TVs/AV renderer/*/Send command?Command=HOME CONTROL&Continue type=short_press")
  engine.wait_until("Reception/TVs/BUTTON/DoorState/PRESS", 80, 0)
  
  engine.delay(5,0)
  engine.fire("Reception/TVs/AV renderer/*/Send command?Command=BACK&Continue type=short_press")
  
  for i=1,#init_tvs do
    init_state=tostring(init_tvs[i].get("state"))
    if init_state=="Stop" or init_state=="None" then
      engine.fire("Reception/TVs/AV renderer/"..tostring(init_tvs[i].name()).."/Standby")
    end
  end
  
end
```

Ok, so first let us explain our ficticious installation has configured an _Area_ called "Reception" and a _Zone_ where all the television resources will be which we called "TVs". 
> The amount and name of the TVs is not relevant but the idea would be that no other B&O Audio equipment be assigned to this _Zone_.

We will also work with a DoorBird smart door stations, these stations don't send an _Event_ notification when the OPEN_DOOR command is sent through a gateway, this event is needed to know when to close the Home Control panel again. The work-around is to Hide the direct access to the OPEN_DOOR button on the _Interfaces_ panel, add a _Virtual Device_ button and create a Macro that does PRESS on both the OPEN_DOOR button and the virtual "StateButton" which will send an _Event_ when saying that it has been pressed.

> Our Lua code waits for this PRESS on the code line:
> ```lua
> engine.wait_until("Reception/TVs/BUTTON/DoorState/PRESS", 80, 0)
> ```
> If nobody opens or the door is opened phisically, after 80 seconds the programe advances to the next line.



