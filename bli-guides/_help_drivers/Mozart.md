---
title: B&O ControlLink
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Bang & Olufsen ControlLink

This driver adds integration with the new B&O ControlLink AV products. All the products are displayed as BeoLiving Intelligence RENDERER resources.

## System connection status

System connection status is shown on the BLI's web interface, each color represents the system connection state:

  - Green: the connection to all of your resources is working as expected.
  - Yellow: not every resource is connected, please check your network and settings.
  - Red: there is a system error.

## Resources

Resources are automatically discovered on the network and can be added to Zones either using the iOS app or in the Resources tab of the web interface by clicking on "Show discovered resources".

Available inputs vary depending on the ControlLink product, they can be found in the "Interfaces" tab under "AV Products", where they can be hidden in the app.
Every ControlLink product offers the B&O NetRadio input, where radios all over the world can be found.

The resource states include the selected input, the playing state (play, pause etc.), volume information, and information about what is currently playing such as name, artist, album and artwork.

TV resources can be configured to show the BLI Home Control panel. This configuration is done automatically by the BLI once a TV is added to any zone, and only if the TV's Home Control configuration is not yet set.
For overwriting this configuration, you can go to the "Interfaces" tab, select the device under "AV Products" and check/uncheck the Home control owner flag. 

### Commands:
<dl>

<dt>_SET_SPEAKER_GROUP</dt><dd>Set the current speaker group</dd>
<dt>AUDIO_OVERLAY_URI</dt><dd>Play an audio from a URL, overlayed to whatever is playing and at the selected volume</dd>
<dt>NEXT</dt><dd>Next track command</dd>
<dt>_SET_LISTENING_POSITION</dt><dd>Set the listening position</dd>
<dt>MOVE_ITEM</dt><dd>Move an item in the playqueue</dd>
<dt>STANDBY</dt><dd>Turn off the audio product</dd>
<dt>AUDIO_OVERLAY_TEXT</dt><dd>Speak the text as overlay content. Currently, 100 unique TTS messages can be generated a day and generated messages are cached for 24 hours</dd>
<dt>SELECT_INPUT</dt><dd>Select an input</dd>
<dt>PREV</dt><dd>Previous track command</dd>
<dt>_MOVE_STAND</dt><dd>Move the stand position to a defined angle</dd>
<dt>_SET_SOUND_LISTENING_MODE</dt><dd>Select the listening mode</dd>
<dt>HOME CONTROL</dt><dd>Request a TV to open the HOME CONTROL panel</dd>
<dt>ADD_ITEM</dt><dd>Add an item to the playqueue for a given provider and id. Requires the content metadata like artist, name and so on</dd>
<dt>YELLOW</dt><dd>Simulate the yellow key press</dd>
<dt>CHANNEL_DOWN</dt><dd>Send channel down command</dd>
<dt>CHANNEL_UP</dt><dd>Send channel up command</dd>
<dt>PAUSE</dt><dd>Pause command</dd>
<dt>ALL_STANDBY</dt><dd>Turn off all the audio products of the network</dd>
<dt>UNLINK</dt><dd>Unlink from the ongoing multiroom experience</dd>
<dt>BLUE</dt><dd>Simulate the blue key press</dd>
<dt>LEFT</dt><dd>Cursor command LEFT</dd>
<dt>SEND_DIGIT</dt><dd>Send a digit key</dd>
<dt>SET_SHUFFLE</dt><dd>Set the playqueue to shuffle or not</dd>
<dt>SET_VOLUME</dt><dd>Set the volume to a given level</dd>
<dt>CUSTOM_COMMAND</dt><dd>Send a custom command, each product may provide different custom commands</dd>
<dt>TURN_ON</dt><dd>Turn on the product</dd>
<dt>RED</dt><dd>Simulate the red key press</dd>
<dt>EXIT</dt><dd>Send an exit command</dd>
<dt>ENTER</dt><dd>Cursor command ENTER</dd>
<dt>RETURN</dt><dd>Send a return command</dd>
<dt>UP</dt><dd>Cursor command UP</dd>
<dt>SET_REPEAT</dt><dd>Change the playqueue repeat mode policy (repeat all, current track, none)</dd>
<dt>JOIN</dt><dd>Join the first Multiroom experience found (touch to join)</dd>
<dt>RIGHT</dt><dd>Cursor command RIGHT</dd>
<dt>VOLUME_UP</dt><dd>Increase the volume</dd>
<dt>_TRIGGER_SCENE</dt><dd>Trigger a specific scene</dd>
<dt>DOWN</dt><dd>Cursor command DOWN</dd>
<dt>STOP</dt><dd>Stop command</dd>
<dt>_PRESET</dt><dd>Trigger a specific preset</dd>
<dt>_MOVE_CURTAIN</dt><dd>Move the curtain to the specified position</dd>
<dt>PLAY</dt><dd>Play command</dd>
<dt>SET_CONTENT_ID</dt><dd>Select the content to play from a content provider (use it with beoCloud:netRadio for radio selection)</dd>
<dt>GREEN</dt><dd>Simulate the green key press</dd>
<dt>SET_INDEX</dt><dd>Change the playing item from the playqueue by number</dd>
<dt>REMOVE_ITEM</dt><dd>Remove an item from the playqueue</dd>
<dt>AUDIO_OVERLAY_USB</dt><dd>Play an audio from a USB drive connected to the B&O speaker, overlayed to whatever is playing and at the selected volume</dd>
<dt>CLEAR</dt><dd>Clear the playqueue</dd>
<dt>VOLUME_DOWN</dt><dd>Decrease the volume</dd>
<dt>SET_DEFAULT_VOLUME</dt><dd>Set the default volume, which the product will use on startup</dd>
<dt>SET_MUTE</dt><dd>Enable or disable mute</dd>
<dt>LINK</dt><dd>Perform a link to a Multiroom experience</dd>
</dl>

## Connecting to BeoCloud
A BeoCloud connection is needed in order to use B&O NetRadio, and requires signing into the BeoCloud account. 

A connection can be established from the BLI on the "ControlLink" system in the "Systems" tab, or directly from the BeoLiving application in _Settings->YOUR-BLI->Device Settings->BeoCloud_.

Both means will prompt the user for a **pin**, which can be retrieved from the **Bang & Olufsen application** in **_Settings->Integrations_**, where a code with the format **"XXX-XXX-XXX"** can be created. 

Once the BeoCloud account is linked with the BLI, all of the NetRadio content will be available.

## Product Group

The ControlLink system allows you to make groups of ControlLink and NetworkLink products. By defining one product as the Main product, the rest of the group will follow the behavior of this product in terms of volume, source selection, and standby mode.

The Product Group’s configuration is shown under Systems. When you select the ControlLink system, the configured product groups will be listed below, with options for editing the existing groups or adding new ones. ControlLink products can only form part of one group, so you won’t be able to add a product to a group if it’s already in another.

For a new group to be created you need to select a Main product for the group and at least one Follower, if not, the group won’t be created.

A group can also be created from the BeoLiving application in _Settings->YOUR-BLI->Device Settings->Group products_ where you should first choose a master and then the followers.

## Changelog
### v0.3 | 2022/10/31

- Documentation updates.

### v0.2 | 2021/04/28

- Initial version.
 
*Please, report any issue with this driver to: support+drivers@khimo.com*

