---
title: Control External Projectors Based on Renderer Input
description: Learn how to set up a BeoLiving Intelligence macro to automatically control an external projector based on the selected input of a renderer. This guide provides a step-by-step breakdown of the Lua code, enabling your projector to turn on when specific inputs are selected and turn off when the renderer stops or switches to other inputs.
keywords: BeoLiving Intelligence, projector control, macro, Lua, automation, home theater, RENDERER, STATE_UPDATE, INPUT, external projector
layout: pagetoc
---

### Introduction

This tutorial will help you set up a macro that automatically controls an external projector based on the status of a renderer (such as a TV or media player). The macro monitors the renderer's input selection and state changes to:

- **Turn on the projector** when specific inputs are selected (e.g., HDMI inputs connected to the projector)
- **Turn off the projector** when other inputs are selected (optional behavior)
- **Turn off the projector** when the renderer enters Stop state

This is particularly useful in home theater setups where you want the projector to automatically turn on when you switch to a projector-connected input, and turn off when you want to listen to music or stop playback.

### Setup Instructions

To set up the external projector control macro, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Go to the Macro tab.
3. Create a new Macro.
4. Add the trigger for this macro, which will be the STATE_UPDATE event of the RENDERER you want to tie to the external projector.
5. Click the "Convert to code" button in the commands table.
6. Copy the entire code from "The Macro Lua Code" section below.
7. Paste the code into the code text area of the Macro.
8. Replace the placeholder addresses and settings in the SETTINGS section with your actual values:
   - **TARGET_PROJECTOR**: Set the full address of your projector (e.g., `Main/Theater/_PROJECTOR/MyProjector`)
   - **RENDERER_INPUTS**: Define which inputs should trigger the projector to turn on. You can use the `*` wildcard to match multiple inputs (e.g., `tv://*` matches all TV inputs)
   - **TURN_PROJECTOR_OFF_ON_OTHER_INPUTS**: Set to `true` if you want the projector to turn off when an input not in the list is selected, or `false` to leave the projector state unchanged
9. Test the macro:
   - Turn on the renderer and select one of the inputs defined in RENDERER_INPUTS - the projector should turn on
   - Select an input not in the list - the projector should turn off (if TURN_PROJECTOR_OFF_ON_OTHER_INPUTS is true)
   - Stop the renderer - the projector should turn off

### Understanding Wildcard Matching

The `RENDERER_INPUTS` setting supports wildcard matching using the `*` character. This allows you to match multiple inputs with a single entry:

| Pattern | Matches |
|---------|---------|
| `tv://hdmi_1` | Only the exact input `tv://hdmi_1` |
| `tv://hdmi_*` | Any input starting with `tv://hdmi_` (e.g., `tv://hdmi_1`, `tv://hdmi_2`) |
| `tv://*` | Any TV input (e.g., `tv://hdmi_1`, `tv://mainTv/com.webos.app.livetv`) |

### The Macro Lua Code

```lua
-- === External Projector control - BeoLiving Intelligence lua macro ==
-- This code allows to turn on and off an external projector based on
-- the status of a given renderer.
--
-- Customize it by changing the SETTINGS section to define:
--  - TARGET_PROJECTOR: the full address of the projector to control.
--  - RENDERER_INPUTS: all the input names that should turn on the
--    target projector. This names MAY contain the * wildcard, matching
--    "the rest of the name", so the following entry: "tv://*" matches
--    all of the following: "tv://hdmi_1", "tv://hdmi_2", "tv://hdmi_3"
--    and "tv://mainTv/com.webos.app.livetv"
--  - TURN_PROJECTOR_OFF_ON_OTHER_INPUTS: true if selecting an input that
--    is not contained on RENDERER_INPUTS should turn the projector off.
--
-- This function should be triggered by a RENDERER STATE_UPDATE event of the
-- the product that you want to tie to the external projector.
--
-- How to use it:
--  1. Create a Macro
--  2. As an event, add the STATE_UPDATE event of the desired RENDERER
--  3. Press the Convert to code button in the commands table
--  4. Copy this whole file into the code text area
--  5. (optional) Customize the settings to your needs
--  6. Test it: Turn on the RENDERER and select one of the RENDERER_INPUTS,
--     then check that the external projector is also turned on;
--     do the same for STANDBY.
--  ===========================================================================
function(event, engine)
  -- --------------------------------------------------------
  -- SETTINGS
  -- --------------------------------------------------------
  -- Full address of projector to control
  local TARGET_PROJECTOR = "Main/room/_PROJECTOR/DILA"

  -- Inputs of the renderer that should turn on the projector
  local RENDERER_INPUTS = {"tv://*"}

  -- Should we turn the projector off if another input is selected?
  local TURN_PROJECTOR_OFF_ON_OTHER_INPUTS = true

  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------

  -- Helper function: check if item is contained in list,
  -- * wildcard is accepted.
  local function is_contained(item, list)
    for _, v in pairs(list) do
      if v == item or item:match("^" .. v:gsub("%*", ".*") .. "$") then
        return true
      end
    end
    return false
  end

  -- When INPUT was updated in the triggering event
  if event.updated("INPUT") then
    -- Updated input, check if it is contained on the RENDERER_INPUTS list
    local input = event.get_string("INPUT")
    if is_contained(input, RENDERER_INPUTS) then
      -- The power was just changed to ON
      Debug("Valid INPUT selected, will turn projector on")
      -- Turn on the configured projector
      engine.fire(TARGET_PROJECTOR .. "/_TURN_ON")
    elseif TURN_PROJECTOR_OFF_ON_OTHER_INPUTS then
      Debug("Not valid INPUT selected, will turn projector off")
      -- Put the configured projector in standby
      engine.fire(TARGET_PROJECTOR .. "/_STANDBY")
    end
  end

  -- When the STATE was updated in the triggering event
  if event.updated("STATE") then
    -- If stopped, then standby the projector
    local st = event.get_string("STATE")
    if st == "Stop" then
      Debug("RENDERER stopped, will turn projector off")
      -- Put the configured projector in standby
      engine.fire(TARGET_PROJECTOR .. "/_STANDBY")
    end
  end
end

```
