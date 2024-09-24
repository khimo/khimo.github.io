---
title: Toggle Mute on a Bang & Olufsen Mozart Product
description: Use this BeoLiving Intelligence macro to toggle the mute state of a Bang & Olufsen Mozart product.
layout: pagetoc
---

### Introduction

This tutorial explains how to create a simple BeoLiving Intelligence macro to toggle the mute state of a Bang & Olufsen Mozart product, such as a Beosound Balance or Beosound Emerge. This can be useful for connecting a mute button on a keypad or third-party remote to your Mozart product.

### How to set it up

To set up the mute toggle macro, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Go to the Macro tab.
3. Create a new Macro.
4. Add a trigger for this macro, such as a button press on your keypad or third-party remote, as an event.
5. Press the "Convert to code" button in the commands table.
6. Copy the entire code in "The code" section below.
7. Paste the code into the code text area of the Macro.
8. Replace `_targetProduct_` with the actual address of your Mozart product in the SETTINGS section.
9. Test the macro by triggering the event. The macro should toggle the mute state of your Mozart product.

### The macro lua code

```lua
-- === TOGGLE MUTE ON A BANG & OLUFSEN MOZART PRODUCT ===
-- This macro toggles the mute state of the _targetProduct_.
--
-- How to use it:
--  1. Create a Macro.
--  2. As an event, add the trigger for this macro, e.g., a button press on a keypad.
--  3. Press the Convert to code button in the commands table.
--  4. Copy this whole file into the code text area.
--  5. Replace _targetProduct_ with the actual address of your Mozart product.
--  6. Test it: Trigger the event, and the macro should toggle the mute state.
--  ============================================================================

function(event, engine) 
  -- --------------------------------------------------------
  -- SETTINGS
  -- --------------------------------------------------------
  local renderer = "_targetProduct_" -- Replace with the address of your Mozart product.
  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU REALLY UNDERSTAND IT!
  -- --------------------------------------------------------

  local isMute = engine.query(renderer)[1].get_boolean("MUTE")
  local nextState = isMute and "false" or "true"
  engine.fire(renderer .. "/SET_MUTE?MUTE=" .. nextState)
end
```

### Example macro view
<div class="text-center">
  <img src="/bli-guides/pictures/howto-toogle.mute.png" class="img-fluid" alt="A mute toogle macro"/>
</div>


### Customize Settings

You can customize the macro by changing the `renderer` variable in the SETTINGS section of the lua code to match the address of your Mozart product.


