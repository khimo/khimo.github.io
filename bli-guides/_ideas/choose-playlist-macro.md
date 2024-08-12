---
title: Creating a Playlist Selection Button in Halo
description: This guide explains how to set up a macro for creating a playlist selection button in Halo, enabling content triggering on a target speaker using the Halo Wheel.
layout: pagetoc
---

### Introduction

<div class="text-left float-right  col-sm-6">
  <img src="/bli-guides/pictures/bli-halo-playlist-tutorial/halo.gif" alt="Halo running the macro" class="img-fluid">
</div>

This tutorial will help you set up a macro that creates a playlist selection button in Halo. This button allows you to trigger content on a target speaker using the Halo Wheel. If you have multiple target speakers defined, the content will be sent to the first speaker, and all others will join in, playing the playlist simultaneously.

After selecting a playlist, the Halo user should press the button to trigger the content selection or wait for 5 seconds, after which the macro will automatically trigger the content.
<div class="text-left">
</div>

### Setup Instructions

To set up the playlist selection button in Halo, follow these steps:

1. Open the BeoLiving Intelligence admin panel.
2. Go to the Macro tab.
3. Create a new Macro.
4. Add the trigger for this macro, which will be the Halo button PRESSED and WHEEL events:
<div class="text-center">
  <img src="/bli-guides/pictures/bli-halo-playlist-tutorial/macro-events.png" class="img-fluid" alt="Event to execute the Macro"/>
</div>
5. Click the "Convert to code" button in the commands table.
6. Copy the entire code from "The code" section below.
7. Paste the code into the code text area of the Macro.
8. Navigate to Resources -> Virtual Resources and ADD the halo_position integer variable, which the macro will use to track the wheel position.
9. Replace the placeholder addresses and settings in the SETTINGS section with your actual values.
10. Update the PLAYLISTS variable content with each Deezer or Tidal playlist you want to use (note: Tidal is currently only available for Mozart).
12. Test the macro by triggering the event. The macro should execute as described, allowing you to select and play playlists using the Halo Wheel.

### The Macro Lua Code
```lua
function (event, engine)
  --[[ 
This macro creates a button in Halo to select a playlist. You can use the Halo Wheel to play content on a target speaker. If there are multiple TARGET_SPEAKERS, the content will play on the first speaker, and the others will join in and play the playlist at the same time.

After choosing a playlist, the Halo user should press the button to start the content or wait for 5 seconds for the macro to start it automatically.

This macro makes the Halo button show and handle a playlist selection using the Halo Wheel.

To use this macro, you need to define a button in the Halo configuration (Interfaces -> Your Halo) and a Virtual variable to store the last user selection. Then, edit the SETTINGS below:

  ]]
  -- --------------------------------------------------------
  -- SETTINGS 
  -- --------------------------------------------------------

  -- Address of this macro, to implment debouncing:
  local THIS_MACRO_ADDRESS = "Main/Living/MACRO/Halo button playlist"

  -- Virtual variable that that you should define and will hold the last user
  -- selection. Define the variable as a number (Integer) in Resources -> Virtual
  -- Resources and place the address below: 
  local BUTTON_POSITION_ADDRESS = "Main/Living/VARIABLE/Halo button playlist position" 

  -- Target speakers addresses (e.g., {"MyArea/MyZone/RENDERER/BS2"}), 
  -- a list of all speakers that must connect to this experience. The first one will be chosen as the master 
  local TARGET_SPEAKERS = {
    "Main/Living/RENDERER/Beosound Theatre-35554298",
    "Main/Terrace/AV renderer/Beosound Stage_32580316"
  }

  
  -- Playlists: define a list of playlists, specifying the playlist ID and the label shown to the user
  -- add or remove as many playlist as you want
  local PLAYLISTS = {
  -- { ID        , LABEL    , PROVIDER_TYPE [deezer or tidal or empty] } 
     {"1266971851", "TOP 100"},
     {"playlist:fea2aa93-1693-4e0c-be47-22e1771a04a8", "T. Chillout", "tidal"},
     {"10387252442", "WINE & DINE", "deezer"},
     {"253141911", "FAVOURITES", "deezer"},
     {"1914526462", "JAZZ", "deezer"}
  }
  -- if not defined in PLAYLISTS list, this type will be used
  local DEFAULT_PROVIDER_TYPE  = "deezer"  


  -- --------------------------------------------------------
  -- DO NOT EDIT BELOW HERE UNLESS YOU UNDERSTAND THE CODE!
  -- --------------------------------------------------------
 
  
  -- Helper functions ---------------------------------------
  function playContent(target, contentType, contentId)
    if string.find(target, "/RENDERER/") then
      -- clean
      engine.fire(target .. "/CLEAR")
      -- add
      engine.fire(target .. "/ADD_ITEM?PROVIDER_TYPE=" .. contentType .. "&PLAY_NOW=true&ID=" .. contentId .. "&TYPE=playlist&DETAILS=&ART=https://e-cdns-images.dzcdn.net/images/cover/0bc34ce79169a66ace4b4fd553e13355/250x250-000000-80-0-0.jpg")
    else
      if contentType == 'deezer' then
        -- clean
        engine.fire(target .. "/Playqueue clean")
        -- add
        engine.fire(target .. "/Playqueue add Deezer playlist?Play now=true&Playlist id="..contentId)

      else
        Error("AV renderers only support DEEZER, use a MOZART product as first product.")
      end
    end
  end

  function waitForProductToBePlaying(target)
    if string.find(target, "/RENDERER/") then
      engine.wait_until(target .. "/STATE_UPDATE?STATE=Play", 180, 0)
    else
      engine.wait_until(target .. "/STATE_UPDATE?state=Play", 180, 0)
    end
  end

  function getSourceUniqueId(target)
    local source
    if string.find(target, "/RENDERER/") then
      source = engine.query(target)[1].get_string("MULTIROOM_ORIGIN")
    else
      source = engine.query(target)[1].get_string("sourceUniqueId")
    end
    return source
  end

  function linkSpeaker(target, source)
    if string.find(target, "/RENDERER/") then
      local jid = tostring(source):gsub('^[^:@]*:', '')
      engine.fire(target .."/LINK?MULTIROOM_ID=" .. jid  .. "&MULTIROOM_TYPE=beoLink")
    else
      engine.fire(target .."/Select source by id?sourceUniqueId=".. source)
    end
  end

  function getPlaylistId(button_position)
    return PLAYLISTS[button_position][1]
  end

  function getPlaylistLabel(button_position)
    return PLAYLISTS[button_position][2]
  end

  function getPlaylistProviderType(button_position)
    return #(PLAYLISTS[button_position]) == 3 and PLAYLISTS[button_position][3] or DEFAULT_PROVIDER_TYPE
  end

  function startPlayingSelectedPlaylist()
    local button_position = engine.query(BUTTON_POSITION_ADDRESS)[1].get_number("VALUE")
    -- Play the selected playlist/track on the target product
    playContent(TARGET_SPEAKERS[1], getPlaylistProviderType(button_position), getPlaylistId(button_position))

    engine.delay(1,0)

    waitForProductToBePlaying(TARGET_SPEAKERS[1])
        
    local targetSource = getSourceUniqueId(TARGET_SPEAKERS[1])
    
    -- give some time to the univese

    if #TARGET_SPEAKERS > 1 and targetSource then
      -- If we have more speakers, check and link all the products that were not linked yet
      for i = 2, #TARGET_SPEAKERS do
        local speaker = TARGET_SPEAKERS[i]
        local currentSource = getSourceUniqueId(speaker)
        if currentSource ~= targetSource then
          linkSpeaker(speaker, targetSource)
        end
      end
    end
  end

  --------------------------------------------------------------

  -- Fire any other instance of this macro. If it is running multiple times, we must keep just the last run
  engine.fire(THIS_MACRO_ADDRESS .. "/CANCEL OTHER")
  -- A small debouncing delay
  engine.delay(0,10) 
     
  -- Process the event
  if event.parameters()["OFFSET"] then 
    local button_position = engine.query(BUTTON_POSITION_ADDRESS)[1].get_number("VALUE")
    -- If OFFSET exists, we assume that it is a WHEEL event, so we update the
    -- position button_position and the Halo screen

    if tonumber(event.parameters()["OFFSET"]) >= 1 then
      if button_position >= #PLAYLISTS then
        button_position = 1
      else
        button_position = button_position + 1
      end
    else
      if button_position <= 1 then
        button_position = #PLAYLISTS
      else
        button_position = button_position - 1
      end
    end
    
    -- update position variable
    engine.fire(BUTTON_POSITION_ADDRESS.."/SET?VALUE="..tostring(button_position))
    
    -- update halo button text
    local halo_button_address = event.parameters()["BUTTON"]
    local halo_address = event.area() .. "/" .. event.zone() .. "/" .. event.type() .. "/" .. event.name()
    engine.fire(halo_address.."/SET_TITLE?BUTTON="..halo_button_address.."&TITLE=".. getPlaylistLabel(button_position))
    
    -- wait 5 seconds, if nobody cancel us we will fire the playlist
    engine.delay(5,0) 
    startPlayingSelectedPlaylist()

  else 
    -- Offset does not exist, assuming it is a PRESS event, so we will send the currently selected playlist
    startPlayingSelectedPlaylist()
  end
end 

```
