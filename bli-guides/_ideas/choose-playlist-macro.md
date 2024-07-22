---
title: Halo "Choose the playlist" button 
description: Create a Halo button to select a desired playlist
layout: pagetoc
---

This guide shows an example of how to control the BeoRemote Halo through macros. In this case, the Halo will be used to select a Deezer playlist from a predefined list and play it on a specific source. The macro also includes a multiroom setting in case the user wants to play the same music on multiple speakers.

We will use a BeoRemote Halo named Halo in an area called My_Area in a zone called My_Zone.

## Halo Configuration
The Halo configuration page can be found in the Interfaces tab. Firstly, a button should be created on any page (if no pages exist, one should be created too). After choosing a title, subtitle, and icon, the behavior "Handle by custom macros" must be chosen. The button and page number should be remembered as they will be used later. How to create a page and a button, as well as more information on behaviors and resources, can be found in the help document of the Halo.

## Macro Configuration
The macro is triggered by the wheel or the button. When the wheel is turned, different playlist names (from a predefined list) should appear in the button title. Once you reach the one you want to play, you have to press the button for it to start. Supposing there is an area called My_Area with a zone My_Zone that has a resource Halo of BeoRemote Halo type, we can create the macro. The events for this macro would be:

<div class="text-center">
  <img src="/bli-guides/pictures/bli-halo-playlist-tutorial/macro-events.png" class="img-fluid" alt="Event to execute the Macro"/>
</div>

When creating the event, the button to choose should be the one with the page and button number remembered before; this will automatically change to the button ID as shown in the image.

For this application, some virtual resources should also be created. In Resources->Virtual Resources, create the following:
- Count, of type INTEGER: This will be used for selecting the different playlists.
- Source, of type STRING: This will be used to save the selected playlist's ID.
- Fired, of type BOOLEAN: While the macro is running, this variable will be TRUE. This is necessary to avoid the macro running multiple times at the same time and causing wrong values in the previous variables.

The code as LuaMacros begins as follows:

```lua
function(event, engine)
  ---- variables ------
  local HALO_ADDRESS = "My_Zone/My_Area/Halo remote/Beoremote Halo"
  local HALO_BUTTON_ADDRESS = "497f6eca-6276-4993-bfeb-000008101411"
  
  ---- Virtual resources
  local COUNT_ADDRESS = "My_Zone/My_Area/VARIABLE/count" 
  local SOURCE_ADDRESS = "My_Zone/My_Area/VARIABLE/source" 
  local FIRED_ADDRESS = "My_Zone/My_Area/VARIABLE/Fired"
  
  -- playlists 
  local available_sources = {[1] = "TOP 100", [2] = "WINE & DINE", [3] = "FAVOURITES", [4] = "JAZZ"} -- Playlists' name for the button title
  local choose_source = {[1] = "1266971851", [2] = "10387252442", [3] = "253141911", [4] = "1914526462"} -- Playlists' ID
  local source_type = "deezer" 
  local sources_quant = 4 -- number of available sources
  
  -- all the speakers you want to play in
  local speakers = {"My_Zone/My_Area/AV renderer/Cono"}
```

This section is for the user to define the resource addresses.
- speakers: define the address of all speakers that should play the music you select. In the example, only one speaker named Cono is used. It is necessary to define at least one speaker. If there are more, the multiroom function will activate so that all the speakers reproduce the same music.
- available_sources: define the playlist titles to set in the button title.
- choose_source: define the playlist IDs (corresponding to the titles defined in available_sources).
- source_type: source from where the playlists are selected (Deezer, etc.).
- sources_quant: number of playlists you can choose from.

Once all the variables and resource addresses are defined, you can go on to the actual macro instructions.

The code:
```lua
  local fired = engine.query(FIRED_ADDRESS)[1].get_boolean("VALUE")
  if not fired then
    engine.fire(FIRED_ADDRESS.."/SET?VALUE=true")
    -- Macro activated by wheel
    if event.parameters()["OFFSET"] then 
     local count = engine.query(COUNT_ADDRESS)[1].get_number("VALUE")

     if tonumber(event.parameters()["OFFSET"]) >= 1 then
        if count == sources_quant then
          count = 1
        else
          count = count + 1
        end
     else
        if count == 1 then
          count = sources_quant
        else
          count = count - 1
        end
     end
     engine.fire(COUNT_ADDRESS.."/SET?VALUE="..tostring(count))
     engine.fire(HALO_ADDRESS.."/SET_TITLE?BUTTON="..HALO_BUTTON_ADDRESS.."&TITLE="..available_sources[count])                
     engine.fire(SOURCE_ADDRESS.."/SET?VALUE="..choose_source[count])

    -- Macro activated by button
    else 
      local multiroom_source = source_type..":6655.1665509.28386322@products.bang-olufsen.com"
      local content = engine.query(SOURCE_ADDRESS)[1].get_string("VALUE")

      local bs1_state = engine.query(speakers[1])[1].get_string("state")
      local bs1_source = engine.query(speakers[1])[1].get_string("sourceUniqueId")

      engine.fire(speakers[1].."/Playqueue add Deezer playlist?Play now=true&Playlist id="..content)

      engine.delay(5,0)
      for i = 1,#speakers do
        state = engine.query(speakers[i])[1].get_string("state")
        if state ~= "Play" then
          engine.fire(speakers[i].."/Select source by id?sourceUniqueId="..multiroom_source)
        end
      end
    end
    engine.fire(FIRED_ADDRESS.."/SET?VALUE=false")
  end
end 
```

We begin by checking if the macro is already running to avoid having problems. If the macro is not running, we continue with the instructions (and set the fired variable to true).

The code is divided into two parts: the first part has the instructions it has to follow if the macro was triggered by the wheel. The second part contains the instructions for when the macro is triggered by the button. This is checked in the if line that asks if the event parameters include OFFSET, which means that the wheel was turned.

We will start with the wheel section. The parameter OFFSET of the wheel is positive if the wheel is turning right and negative if it is turning left. If the wheel is turning right, we want to go forward in the playlist list. If the wheel is turning left, we want to go backward. That is set with the count variable, which increments its number if the wheel is turned clockwise and decreases if it is turned left.

Next, we have a small correction of the number as we only want numbers from 1 to sources_quant. This means that after sources_quant, the number will turn to 1 and so on. If we move left, after 1 the number will turn to sources_quant. After this, we set the count variable to the new number, the button title to the playlist's name, and define the source's address.

It's important to note that the playlist will not start playing by only turning the wheel because there is no engine.fire() command in this section.

If the macro is triggered by the button, we set the multiroom source, which content is going to be played (defined when the wheel was turned), and the state and source ID of our main speaker. After that, we fire the command that makes the playlist start playing on the main speaker. Finally, if multiple speakers were defined, the playlist will start playing with a five-second delay on all the speakers that do not have music already playing.

Before leaving the macro, we change the fired variable to false and leave it ready for the next time you will use it.

This was just an example of how to select a playlist from a predefined list of Deezer playlists with a macro. You can select different playlists just by changing the ID in choose_sources and the button's title in available_sources. You will also have to change the source_type and source_quant in case you have more (or fewer) than four choices.

