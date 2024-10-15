---
title: Automatically Join Playing Music or Start a Radio Station
description: This guide provides a BeoLiving Intelligence Lua macro that seamlessly enhances your multiroom audio experience. Learn how to automatically join a playing Network Link product with a single trigger, or, if no music is playing, start your favorite BeoCloud:netRadio station, creating a unified and intuitive audio system across your home.
keywords: BeoLiving Intelligence, Network Link, BeoCloud:netRadio, multiroom audio, automation, Lua macro, seamless audio, trigger events, music control, smart home, AV RENDERER
layout: pagetoc
---

### Introduction

Imagine you enter a room and want your audio system to either join an already playing session from another room or, if nothing is playing, start your favorite BeoCloud:netRadio station. **This automation makes it possible with a single trigger**. It's perfect for seamless audio experiences across your home.

This tutorial will guide you through setting up a macro that checks for any playing Network Link product and joins it. If no music is playing anywhere, it will select a predefined BeoCloud:netRadio station.

### How to set it up

To set up this macro, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Navigate to the Macro tab.
3. Create a new Macro.
4. Add the trigger for this macro, such as a button press or a specific time, as an event.
5. Press the "Convert to code" button in the commands table.
6. Copy the entire code in "The code" section below.
7. Paste the code into the code text area of the Macro.
8. Replace `_targetProduct_` with the actual address of your product in the SETTINGS section.
9. Test the macro by triggering the event. The macro should execute as described, joining a playing session or starting the predefined netRadio station.

### The macro lua code
```lua
-- === JOIN FIRST PLAYING NETWORK LINK PRODUCT OR PLAY BEOCLOUD:NETRADIO ===
-- This macro sets the volume of the _targetProduct_ to 35, checks for any playing
-- Network Link product, and joins it. If no music is playing anywhere, it selects
-- a predefined BeoCloud:netRadio station.
--
-- How to use it:
--  1. Create a Macro.
--  2. As an event, add the trigger for this macro, e.g., a button press or a specific time.
--  3. Press the Convert to code button in the commands table.
--  4. Copy this whole file into the code text area.
--  5. Replace _targetProduct_ with the actual address of your product.
--  6. Test it: Trigger the event, and the macro should execute as described.
--  ============================================================================

function(event, engine)
  -- --------------------------------------------------------
  -- SETTINGS
  -- --------------------------------------------------------
  local targetProduct = "RndLab/BS2 gen1/AV renderer/BeoSound2Gen1" -- The product to control
  local startup_volume = 35  -- Startup volume for the product
  local default_station = "6270395841449500" -- ID of the predefined BeoCloud:netRadio station
  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU REALLY UNDERSTAND IT!
  -- --------------------------------------------------------

  -- Query the status of the audio product
  local targetState = engine.query(targetProduct)
  -- If the product is not playing
  if targetState[1].get_string("state") ~= "Play" then
    -- Query the status of all the other products
    local all_renderers = engine.query("*/*/AV renderer/*")
    -- If any is playing: select that source as my source status
    local source = ""
    for i, renderer in ipairs(all_renderers) do
      if renderer.get_string("state") == "Play" then
        source = renderer.get_string("sourceUniqueId")
        break
      end
    end

    if source ~= "" then

      engine.fire(targetProduct .. "/Select source by id?sourceUniqueId=" .. source)
    -- Else: Select a BEO Radio station
    else
      engine.fire(targetProduct .. "/SET_CONTENT_ID?ID=".. default_station .. "&PROVIDER_TYPE=beoCloud:netRadio")
    end

    -- Wait for the product to start playing, NetworkLink product do not accept volume
    -- commands while they are not playing
    engine.wait_until(targetProduct .. "/STATE_UPDATE?state=Play", 120, 0)
    engine.fire(targetProduct .. "/Volume level?Level=" .. startup_volume)
  end
end
```

### Customize Settings

You can customize the macro by changing the variables defined in the SETTINGS section of the lua code. This allows you to specify the target product, the startup volume, and the default BeoCloud:netRadio station ID.


