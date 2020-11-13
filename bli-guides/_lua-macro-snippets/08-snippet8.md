---
title: All follow me! - Refresh speakers
layout: pagetoc
---

This code was inspired by a user who had an installation with over 20 B&O speakers, and one of their main setups involved using the line-in of a BeoSound Core as source. The issue was that over time products would stop playing because when a speaker fell of the WiFi or was restarted it wouldnt start playing again.

The Snippet we have here queries the BS Core for its source and volume, and sets it to all the speakers in the installation. We also check that if the speaker is already at the correct source and/or volume, the command should not be sent, so as not to add noise to the setup.

```lua
function(event, engine)
  local core = engine.query("Main/Living Room/AV renderer/BS Core") -- queries core's information
  local SET_VOLUME = core[1].get_number("volume") -- gets volume info from the query
  local SEL_SOURCE = core[1].get_string("sourceUniqueId")
  local speakers = engine.query("Main/*/AV renderer/*") -- gets all the speaker's info
    -- Iterate through them
    for i, s in ipairs(speakers) do
    -- Check if current speaker has same source
if s.get_string("sourceUniqueId") ~= SEL_SOURCE then
      engine.fire(s.area() .. "/" .. s.zone() .. "/AV renderer/" .. s.name() .. "/Select source by id?sourceUniqueId=" .. SEL_SOURCE)
      end
    -- Check if current speaker has same volume
if s.get_number("volume") ~= SET_VOLUME then
      engine.fire(s.area() .. "/" .. s.zone() .. "/AV renderer/" .. s.name() .. "/SET?volume=" .. SET_VOLUME)
      end
    end
end 
```