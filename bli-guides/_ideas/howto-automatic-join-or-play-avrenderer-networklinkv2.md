---
title: Automatically Join Playing Music or Start a Radio Station (with Exclusions)
description: This guide provides a BeoLiving Intelligence Lua macro to enhance your multiroom audio experience, allowing you to automatically join a playing Network Link product with a single trigger, or, if no music is playing, start your favorite BeoCloud:netRadio station. Additionally, this version allows you to define an exclusion list of products that should not be automatically joined.
keywords: BeoLiving Intelligence, Network Link, BeoCloud:netRadio, multiroom audio, automation, Lua macro, trigger events, music control, exclusion list, customization, AV RENDERER
layout: pagetoc
---

### Introduction

Imagine you enter a room and want your audio system to either join an already playing session from another room or, if nothing is playing, start your favorite BeoCloud:netRadio station. This automation makes it possible with a single trigger, while also allowing you to customize which products are considered for joining. It's perfect for seamless and personalized audio experiences across your home.

This tutorial will guide you through setting up a macro that checks for any playing Network Link product, excluding those defined in an exclusion list, and joins it. If no music is playing, it will select a predefined BeoCloud:netRadio station.

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
9. Customize the `exclusion_list` to include products you don't want to be automatically joined.
10. Test the macro by triggering the event. The macro should execute as described, joining a playing session from eligible products or starting the predefined netRadio station.

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

  local exclusion_list = [] -- This list contains products that shouldn't be chosen as master.
                            -- Products are excluded if their names start with any string in this list.
                            -- Example: ["Main/Bathroom/AV renderer/", "Outdoor/"]
                            -- Wildcards are not allowed in this list.


  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU REALLY UNDERSTAND IT!
  -- --------------------------------------------------------

  -- Helper functions
  function stringStartsWith(str, start)
     return str:sub(1, #start) == start
  end

function isExcluded(renderer)
    for i, excluded in ipairs(exclusion_list) do
      if stringStartsWith(renderer.tostring(), excluded) then
         return true
      end
    end
    return false
end




  -- Query the status of the audio product
  local targetState = engine.query(targetProduct)
  -- If the product is not playing
  if targetState[1].get_string("state") ~= "Play" then

    -- Query the status of all the other products
    local all_renderers = engine.query("*/*/AV renderer/*")
    -- If any is playing: select that source as my source status
    local source = ""
    for i, renderer in ipairs(all_renderers) do
      if renderer.get_string("state") == "Play" and not isExcluded(renderer) then
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

You can customize the macro by changing the variables defined in the SETTINGS section of the lua code. This allows you to specify the target product, the startup volume, and the default BeoCloud:netRadio station ID. Additionally, the `exclusion_list` variable has been introduced to further refine the behavior of the macro. This list allows you to specify products that should not be considered when the macro is looking for a playing Network Link product to join. Products are excluded based on their full address starting with any string specified in the `exclusion_list`. This feature is particularly useful for excluding certain areas or types of products from being automatically selected, ensuring the macro only joins sessions from desired sources. Note that wildcards are not supported in the exclusion list, and each entry should be a specific string that matches the beginning of the product's name you wish to exclude.


