---
title: Two-Way Sync a KNX Slider with a B&O Mozart Product's Volume
description: This guide demonstrates how to create a seamless, two-way synchronization between a KNX slider and the volume of a Bang & Olufsen Mozart product using BeoLiving Intelligence. Control your audio volume from your KNX panel, and see the panel update instantly when the volume is changed from another source, like a remote control.
keywords: BeoLiving Intelligence, KNX, Mozart, volume control, two-way sync, automation, Lua macro, RENDERER, 1 byte unsigned integer, debounce
layout: pagetoc
---

### Introduction

Integrate your KNX control system with your high-end Bang & Olufsen Mozart audio products for a unified smart home experience. This tutorial will walk you through setting up two BeoLiving Intelligence macros to create a robust, two-way binding between a KNX slider and a Mozart product's volume. You'll be able to adjust the volume from your KNX wall panel, and the slider will accurately reflect any volume changes made via a remote control or the BeoLiving app, keeping everything perfectly in sync.

### Prerequisites

Before you begin, ensure you have a KNX "1 byte unsigned integer (DPT 5.001)" resource configured in your BeoLiving Intelligence that corresponds to your KNX slider. This resource will represent the volume level (0-255) on the KNX bus.

### How to Set It Up

Creating a two-way synchronization requires two separate macros. One macro will listen for changes from the KNX slider and update the Mozart product's volume. The second macro will do the reverse: listen for volume changes on the Mozart product and update the KNX slider.

#### Part 1: Macro from KNX Slider to Mozart Volume

1.  Navigate to the **Macro** tab and create a new Macro. Name it something descriptive, like "KNX to Mozart Volume".
2.  As the event, add the `STATE_UPDATE` event from your KNX slider resource. It will look like: `RndLab/LivingRoom/_KNX_GROUP_ADDRESS/knxSlider/STATE_UPDATE`.
3.  Press the **"Convert to code"** button in the commands table.
4.  Copy the Lua code from the **Macro 1** section below and paste it into the code text area.
5.  Customize the `targetProduct` variable in the SETTINGS section to match your Mozart device address.
6.  Save the macro.

#### Part 2: Macro from Mozart Volume to KNX Slider

1.  Create another new Macro. Name it something descriptive, like "Mozart to KNX Volume".
2.  As the event, add the `STATE_UPDATE` event from your Mozart RENDERER product. It will look like: `RndLab/LivingRoom/RENDERER/Beovision Theatre-35554298/STATE_UPDATE`.
3.  Press the **"Convert to code"** button.
4.  Copy the Lua code from the **Macro 2** section below and paste it into the code text area.
5.  Customize the `knxSlider` and `macroAddress` variables in the SETTINGS section. The `macroAddress` must be the full address of this macro itself.
6.  Save the macro.

Now, when you adjust the KNX slider, the B&O product's volume should change. When you change the volume using a Beoremote or the B&O App, the KNX slider should update its position after a short delay.

### The Lua Code

#### Macro 1: KNX Slider → Mozart Product

This macro scales the KNX value (0-255) to the Mozart volume range (0-90) and updates the product, preventing command loops by checking the current volume first.

```lua
-- === KNX SLIDER TO MOZART VOLUME ===
-- This macro listens for changes on a KNX slider and updates the volume
-- of a target Mozart product. It includes volume scaling from KNX's 0-255
-- range to the Mozart's 0-90 range.
--
-- How to use it:
--  1. Create a Macro triggered by the STATE_UPDATE of your
--     KNX "1 byte unsigned integer" resource.
--     e.g., RndLab/LivingRoom/_KNX_GROUP_ADDRESS/knxSlider/STATE_UPDATE
--  2. Press "Convert to code" and paste this code.
--  3. Update the SETTINGS section with your device address.
-- =======================================================================

function(event, engine)
  -- --------------------------------------------------------
  -- SETTINGS
  -- --------------------------------------------------------
  -- Replace this with the address of the target Mozart product:
  local targetProduct = "RndLab/LivingRoom/RENDERER/Beovision Theatre-35554298"
  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------

  -- Check if the VALUE parameter of the KNX resource was updated
  if event.updated("VALUE") then
    -- Get the raw value (0-255) from the KNX slider
    local knxValue = event.get_number("VALUE")
    
    -- Scale the KNX value (0-255) to the B&O volume range (0-90)
    local targetVolume = math.floor((knxValue / 255) * 90)

    -- Query the current state of the target product to get its volume
    local productState = engine.query(targetProduct)
    if productState and productState[1] then
        local currentVolume = productState[1].get_number("VOLUME")

        -- To prevent loops, only send the command if the new volume is different
        if currentVolume ~= targetVolume then
            Debug("KNX->Mozart: Setting volume from " .. tostring(currentVolume) .. " to " .. tostring(targetVolume))
            engine.fire(targetProduct .. "/SET_VOLUME?VOLUME=" .. targetVolume)
        else
            Debug("KNX->Mozart: Volume already at " .. tostring(targetVolume) .. ". Ignoring.")
        end
    end
  end
end
```


Once added it should look like:

![Macro 1](howto-bind-knx-slide-to-Mozart-Volume-macro1.png)



#### Macro 2: Mozart Product → KNX Slider (with Debounce)

This macro listens for volume changes on the Mozart product, debounces the events to avoid flooding the KNX bus, scales the volume (0-90) to the KNX range (0-255), and updates the slider.

```lua
-- === MOZART VOLUME TO KNX SLIDER (WITH DEBOUNCE) ===
-- This macro listens for volume changes on a Mozart product and updates
-- a KNX slider. It includes a debounce mechanism to prevent flooding the
-- KNX bus with rapid volume changes.
--
-- How to use it:
--  1. Create a Macro triggered by the STATE_UPDATE of your Mozart RENDERER.
--     e.g., RndLab/LivingRoom/RENDERER/Beovision Theatre-35554298/STATE_UPDATE
--  2. Press "Convert to code" and paste this code.
--  3. Update the SETTINGS section with your device and macro addresses.
-- =======================================================================

function(event, engine)
  -- --------------------------------------------------------
  -- SETTINGS
  -- --------------------------------------------------------
  -- Replace this with the address of the KNX slider resource ("1 byte unsigned integer"):
  local knxSlider = "RndLab/LivingRoom/_KNX_GROUP_ADDRESS/knxSlider"
  -- Replace this with the address of this macro, required for the debouncer.
  -- Find it in the BeoLiving Intelligence UI (e.g., Main/global/MACRO/Mozart to KNX Volume).
  local macroAddress = "Main/global/MACRO/Mozart to KNX Volume"
  -- Debounce delay in milliseconds to prevent flooding the KNX bus.
  local debounce_ms = 500
  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------
  
  -- Check if the VOLUME parameter of the Mozart product was updated
  if event.updated("VOLUME") then
    -- 1. Debounce: Cancel any other instance of this macro that is waiting.
    engine.fire(macroAddress .. "/CANCEL OTHER")
    -- Wait for a short period to see if more volume changes come in.
    engine.delay(0, debounce_ms)

    -- Get the new volume (0-90) from the Mozart product.
    -- We re-query the state in case it changed during the delay.
    local productState = engine.query(event.area() .. "/" .. event.zone() .. "/" .. event.type() .. "/" .. event.name())
    local mozartVolume = productState[1].get_number("VOLUME")

    -- Scale the B&O volume (0-90) to the KNX slider range (0-255)
    local targetKnxValue = math.floor((mozartVolume / 90) * 255)

    -- Query the current state of the KNX slider
    local knxState = engine.query(knxSlider)
    if knxState and knxState[1] then
        local currentKnxValue = knxState[1].get_number("VALUE")

        -- To prevent loops, only send the command if the new value is different
        if currentKnxValue ~= targetKnxValue then
            Debug("Mozart->KNX: Setting slider from " .. tostring(currentKnxValue) .. " to " .. tostring(targetKnxValue))
            engine.fire(knxSlider .. "/SET?VALUE=" .. targetKnxValue)
        else
            Debug("Mozart->KNX: Slider value already at " .. tostring(targetKnxValue) .. ". Ignoring.")
        end
    end
  end
end
```

### A Note on Volume Scaling

Bang & Olufsen Mozart products typically use a volume scale of 0 to 90. In contrast, a KNX "1 byte unsigned integer" (DPT 5.001) has a range of 0 to 255. The provided macros automatically handle the mathematical conversion between these two scales. This ensures that when your B&O volume is at its maximum (90), the KNX slider correctly shows its maximum value (255), and vice-versa, with proportional mapping for all values in between.
