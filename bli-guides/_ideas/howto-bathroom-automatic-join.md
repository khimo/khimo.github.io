---
title: Automatically Link Your Bathroom Speaker to Playing Music
description: This guide provides a BeoLiving Intelligence Lua macro to automate your audio experience, ensuring your bathroom speaker seamlessly links to any currently playing source in your home. If no music is playing, the macro will automatically switch to a predefined fallback radio station, creating a truly integrated and effortless audio system.
keywords: BeoLiving Intelligence, multiroom audio, automation, bathroom speaker, Network Link, Mozart, fallback radio, Lua macro, seamless integration, music control
layout: pagetoc
---

### Introduction

Wouldn't it be great if your bathroom speaker could automatically join the music playing elsewhere in your house as soon as you enter? Or, if there's no music playing, it could start playing your favorite radio station? This automation makes it all possible with minimal setup. Follow this tutorial to set up a macro that automatically links your bathroom speaker to the current playing source or a fallback radio station.

### How to set it up

To set up this macro, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Navigate to the Macro tab.
3. Create a new Macro.
4. Add the trigger for this macro, such as a button press or a specific time, as an event.
5. Press the "Convert to code" button in the commands table.
6. Copy the entire code in "The code" section below.
7. Paste the code into the code text area of the Macro.
8. (Optional) Customize the `FALLBACK_SOURCE` in the SETTINGS section according to your preference.
9. Test the macro by ensuring no music is playing to see if the fallback radio station starts playing in your bathroom. Then, start playing music from another source and see if the bathroom speaker links to it.

### The macro lua code
```lua
function(event, engine)
  -- SETTINGS: Customize these variables according to your setup and preferences.
  -- --------------------------------------------------------
  local nl_renderer_address = "House/*/AV renderer/*" -- Address to query Network Link renderer states.
  local mozart_renderer_address =  "*/*/RENDERER/*" -- Address to query Mozart renderer states.
  local target_address = "House/Bathroom/AV renderer/Beoplay M5 Bathroom" -- The target bathroom speaker address.
  local FALLBACK_SOURCE = "beoradio:2714.1200304.29348027@products.bang-olufsen.com" -- Fallback radio station if no music is playing.
  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------

  -- Query renderer states to find a currently playing source.
  local nl_renderer_state = engine.query(nl_renderer_address)
  local mozart_renderer_state = engine.query(mozart_renderer_address)

  local link_to_source = nil

  -- Check Network Link renderers for a playing source.
  for i, rstate in ipairs(nl_renderer_state) do
    if (rstate.get_string("sourceUniqueId") ~= "" and rstate.get_string("state") == "Play") then
      link_to_source = rstate.get_string("sourceUniqueId")
      break
    end
  end

  -- If no Network Link source is playing, check Mozart renderers.
  if (link_to_source == nil) then
    for i, rstate in ipairs(mozart_renderer_state) do
      if (rstate.get_string("MULTIROOM_ORIGIN") ~= "" and rstate.get_string("STATE") == "Play") then
        link_to_source = rstate.get_string("sourceUniqueId")
        break
      end
    end
  end

  -- If no source is playing, use the fallback radio station.
  if (link_to_source == nil) then
    link_to_source = FALLBACK_SOURCE
  end

  -- Link the bathroom speaker to the found source or fallback.
  engine.fire(target_address .. "/Select channel on source by id?Channel=&sourceUniqueId=" .. link_to_source )
end
```

### Customize Settings

You can customize the macro by changing the variables defined in the SETTINGS section of the lua code. This allows you to specify the addresses for your Network Link and Mozart renderers, the target bathroom speaker, and the fallback radio station.


