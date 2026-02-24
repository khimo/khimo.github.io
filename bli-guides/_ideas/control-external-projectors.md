---
title: Control External Projectors Based on Renderer Input
description: Learn how to set up a BeoLiving Intelligence macro to automatically control an external projector based on your device's input selection. This guide provides a step-by-step breakdown of the Lua code, enabling seamless integration between your audio/video devices and external projectors.
keywords: BeoLiving Intelligence, external projector, macro, Lua, automation, home theater, RENDERER, projector control, input selection, STATE_UPDATE
layout: pagetoc
---

### Introduction

This tutorial will help you set up a macro that automatically controls an external projector based on the input selection and state of an audio/video device, such as the Beovision Theater or the Beosound Premiere. When you select certain inputs on your device (e.g., TV sources), the projector will automatically turn on. When you select other inputs or stop the device, the projector will turn off.

This is particularly useful for home theater setups where you want the projector to automatically turn on when watching TV content and turn off when listening to music or when playback stops.

### Features

- **Automatic Turn On**: The projector turns on when specific inputs are selected
- **Automatic Turn Off**: The projector turns off when the device stops or when non-projector inputs are selected
- **Wildcard Input Matching**: Use wildcards to match multiple inputs (e.g., `tv://*` matches all TV inputs)
- **Customizable Commands**: Define custom turn on/off command sequences to control additional devices beyond just the projector

### Customizable ON/OFF Behaviors

One of the most powerful features of this macro is the ability to customize the turn on and turn off command sequences. You are not limited to just controlling the projector—you can trigger any combination of commands to create a complete home theater experience.

**Examples of what you can automate:**

- **Close the shades** when the projector turns on, and open them when it turns off
- **Activate a TV lift** to raise or lower the projector screen
- **Adjust lighting** to dim lights for viewing and restore them afterwards
- **Control multiple projectors** or displays simultaneously
- **Set specific projector inputs** or picture modes

To add additional commands, simply add more entries to the `TURN_ON_COMMANDS` and `TURN_OFF_COMMANDS` lists in the settings section. For example:

```lua
local TURN_ON_COMMANDS = {
  TARGET_PROJECTOR .. "/_TURN_ON",
  "Main/Cinema/SHADE/Blackout shades/LOWER",
  "Main/Cinema/DIMMER/Ceiling lights/SET?LEVEL=10"
}

local TURN_OFF_COMMANDS = {
  TARGET_PROJECTOR .. "/_STANDBY",
  "Main/Cinema/SHADE/Blackout shades/RAISE",
  "Main/Cinema/DIMMER/Ceiling lights/SET?LEVEL=80"
}
```

### Setup Instructions

To set up the external projector control macro, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Go to the **Macro** tab.
3. Create a new Macro.
4. Add the trigger for this macro, which will be the **STATE_UPDATE** event of the device you want to tie to the external projector:
   - Select the **RENDERER** resource type
   - Choose your target device (e.g., your TV or media player)
   - Select the **STATE_UPDATE** event
5. Click the **Convert to code** button in the commands table.
6. Copy the entire code from "The Macro Lua Code" section below.
7. Paste the code into the code text area of the Macro.
8. Update the **SETTINGS** section with your actual values:
   - **TARGET_PROJECTOR**: The full address of your projector (e.g., `Main/Cinema/_PROJECTOR/MyProjector`)
   - **RENDERER_INPUTS**: List of inputs that should turn on the projector
   - **TURN_OFF_ON_OTHER_INPUTS**: Set to `true` if selecting a non-listed input should turn off the projector
   - **TURN_ON_COMMANDS**: Commands to execute when turning on—add shades, lights, TV lifts, or any other devices here
   - **TURN_OFF_COMMANDS**: Commands to execute when turning off—restore your room to its normal state
9. Test the macro:
   - Turn on the audio/video device and select one of the inputs listed in `RENDERER_INPUTS`
   - Verify that the external projector turns on
   - Select a different input or stop the device
   - Verify that the projector turns off

### Understanding Input Wildcards

The `RENDERER_INPUTS` setting supports wildcards using `*` to match multiple inputs. For example:

| Pattern | Matches |
|---------|---------|
| `tv://*` | `tv://hdmi_1`, `tv://hdmi_2`, `tv://mainTv/com.webos.app.livetv`, etc. |
| `hdmi_*` | `hdmi_1`, `hdmi_2`, `hdmi_3`, etc. |
| `*` | Any input |

### The Macro Lua Code

```lua
-- === External Projector control - BeoLiving Intelligence lua macro ==
-- This code allows to turn on and off an external projector, and perform
-- other setup actions based on the status of a given renderer.
--
-- Customize it by changing the SETTINGS section to define:
--  - TARGET_PROJECTOR: the full address of the projector to control.
--  - RENDERER_INPUTS: all the input names that should turn on the
--    target projector. This names MAY contain the * wildcard, matching
--    "the rest of the name", so the following entry: "tv://*" matches
--    all of the following: "tv://hdmi_1", "tv://hdmi_2", "tv://hdmi_3"
--    and "tv://mainTv/com.webos.app.livetv"
--  - TURN_OFF_ON_OTHER_INPUTS: true if selecting an input that
--    is not contained on RENDERER_INPUTS should turn the projector off.
--  - TURN_ON_COMMANDS: The list of commands to fire when turning on.
--    By default it just turns the projector on.
--  - TURN_OFF_COMMANDS: The list of commands to fire when turning off.
--    By default it just turns the projector off (standby).
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

  -- Should we turn off if another input is selected?
  local TURN_OFF_ON_OTHER_INPUTS = true

  -- List of commands for TURN_ON
  local TURN_ON_COMMANDS = {TARGET_PROJECTOR .. "/_TURN_ON"}

  -- List of commands for TURN_OFF
  local TURN_OFF_COMMANDS = {TARGET_PROJECTOR .. "/_STANDBY"}

  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------

  -- Helper function: fire a list of commands
  local function fire_all(list)
    for _, v in pairs(list) do
      engine.fire(v)
    end
  end

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
      Debug("Valid INPUT selected, will turn on")
      fire_all(TURN_ON_COMMANDS)
    elseif TURN_OFF_ON_OTHER_INPUTS then
      Debug("Not valid INPUT selected, will turn off")
      fire_all(TURN_OFF_COMMANDS)
    end
  end

  -- When the STATE was updated in the triggering event
  if event.updated("STATE") then
    -- If stopped, then standby the projector
    local st = event.get_string("STATE")
    if st == "Stop" then
      Debug("RENDERER stopped, will turn projector off")
      fire_all(TURN_OFF_COMMANDS)
    end
  end
end

```
