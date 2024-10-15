---
title: Fade Volume with a BeoLiving Intelligence Macro
description: This guide provides a Lua macro code for BeoLiving Intelligence to smoothly fade the volume of Mozart products or compatible RENDERER products to a desired level. It also explains how to implement and customize the macro for seamless volume control in your smart home.
keywords: BeoLiving Intelligence, Lua, macro, fade volume, Mozart products, RENDERER products, automation, volume control, smart home, code examples
layout: pagetoc
---

This Lua macro is designed for the BeoLiving Intelligence system. It allows you to smoothly adjust the volume of a Mozart product or any compatible RENDERER product to a target volume level. The macro will stop if a manual volume change is detected.

## How to Use

1. Copy the Lua code below into a Lua code macro in your BeoLiving Intelligence system.
2. Adjust the `productAddress`, `targetVolume`, and `fadeTime` settings according to your needs.
3. Save and execute the macro. The volume of the specified product will gradually change to the target volume.

```lua
function (event, engine)
  -- Name: Fade to volume
  -- Description: This macro sets the volume of a productAddress to the targetVolume in a given fadeTime.
  -- It stops execution if manual volume control is detected.

  -- Settings
  local productAddress= "Main/theate/RENDERER/Beosound Theatre-35554298"
  local targetVolume = 20
  local fadeTime = 9000 -- in milliseconds, min 800ms
  ------------------------------------------------------------

  -- ## Macro Implementation
  -- Function to get the current volume
  function getVol()
    return engine.query(productAddress)[1].get_number("VOLUME")
  end

  -- Calculate the number of steps and volume change per step
  local STEP_TIME = 400
  local steps = math.max((fadeTime / STEP_TIME),2)

  local initVolume = getVol()
  local currentVolume = initVolume
  local volumeDiff    = (currentVolume - targetVolume)
  local volumePerStep = volumeDiff/steps
  local nextVolume = currentVolume
  local isLowering = volumeDiff > 0

  -- Loop until the target volume is reached or manual volume control is detected
  while (
    currentVolume == math.ceil(nextVolume)            --< detect manual change
    and
    (isLowering and currentVolume > targetVolume )    --< did we reach the target lower vol?
    or
    (not isLowering and currentVolume < targetVolume) --< did we reach the target raise vol?
  )  do

    -- Update the next volume target
    if (isLowering) then
      nextVolume = math.max(nextVolume - volumePerStep,targetVolume)
    else
      nextVolume = math.min(nextVolume - volumePerStep,targetVolume)
    end

    -- Set the new volume and wait for the next step
    engine.fire(productAddress .. "/SET_VOLUME?VOLUME=" .. math.ceil(nextVolume))
    engine.delay(0,STEP_TIME)
    currentVolume = getVol()
  end
end
```
