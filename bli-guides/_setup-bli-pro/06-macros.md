---
title: Macros {#macros}
layout: pagetoc
---

The interaction between the devices connected to the _BLI_ is defined by means of a _Macro_. A _Macro_ consists in a set of events and commands. 
When any of the events that are defined in a _Macro_ occur (e.g. a key press on a keypad; a Control Command on a Bang & Olufsen remote control etc
.), the macro will be triggered. This means that the commands in the macro will be executed in order. 

<br>
<div class="text-center">
  <img src="../../pictures/bli-pro-user-guide/macros.png" class="img-fluid" alt="macros"/>
</div>
<br>

A _Macro_ is also assigned to an _Area/Zone_ to which it belongs even if it handles activity outside the zone. Having _Macros_ assigned to zones 
helps when setting up user interfaces. The left column shows all _Macros_ contained in each _Area/Zone_. To add a _Macro_ in a specific _Area/Zone_ press "**+**" in the column entry. 

For each macro, the next options are available:

+ **Add event**: used to add an _Event_ to a _Macro_. The two buttons (see figure above) can be used to set the cinema scene. See 
[Resource Event](#resource-event) section.
+ **Capture**: when the _Capture_ button is pressed, all system/resource events fired from that moment will be displayed so that they can be added.
>> An example of captured events could be: the press of a virtual or physical button or the source selection in a A/V renderer device.

+ **Add command**: used to define the commands of a _Macro_. See [Resource Command](#resource-command) section.
+ **Clone**: creates an exact copy of the _Macro_ adding "_- Clone n_" as suffix to the cloned _Macro_ name, where _n_ is the number of clones made.
+ **Remove**: deletes _Macro_.
+ **Fire**: fires/triggers _Macro_.
+ **Convert to code**: switches _Macro_ commands configuration into a _Lua_ editor, turning existant _Macro_ commands into _Lua_ code. _Lua_ 
commands help is showed after pressing _Show Help_ button. Pressing _Convert to table_ will convert _Lua_ commands into table format.
+ **Cut/Copy/Paste**: when selecting an event/command (pressing left side of the event/command), _Cut/Copy/Paste_ buttons become available. The
purpose, as the meaning of their names illustrate, is to _Cut/Copy/Paste_ _Events_ or _Commands_ on the same _Macro_ or between _Macros_.     

### Resource Event {#resource-event}

When pressing the _Add event_ button, the window expands, fields for the _Resource Event_ are shown and are filled in by selecting from the drop down lists with each entry field. The illustration is an example only and the drop down list may vary depending on the choices made.

<br>
<div class="text-center">
  <img src="../../pictures/bli-pro-user-guide/macros-event.png" class="img-fluid" alt="Macros event"/>
</div>
<br>

#### Defining Events 

The list of events (for triggering a macro) can be filled in manually or selected from captured events.

There are three types of events:

+ **Generic**: Generic events apply to a number of similar events throughout the house. See [Generic Programming](#generic-programming) section for
more information.
+ **Resource**: Resource events match a specific event on a specific resource.
+ **System**: System events include calendar and astronomical clock events and system connectivity events.

### Resource command {#resource-command}

When pressing the _Add command_ button, the window expands, fields for the resource command are shown and are filled in by making selections 
from the drop down lists with each entry field. The illustration is an example only, and drop down lists may vary depending on the choices made.

<br>
<div class="text-center">
  <img src="../../pictures/bli-pro-user-guide/macros-command.png" class="img-fluid" alt="Macros command"/>
</div>
<br>

Commands are the actions executed when a _Macro_ is triggered. The list of commands are executed in order, and a delay can be set before each 
command as a combination of seconds and milliseconds. The list can be reordered by dragging the handles at the left of each row, or by clicking on
 the arrows on the far right of each row.

There are four types of commands:

+ **Generic**: applies to any area or zone, with the possibility of selecting the same area or zone where the event was generated.
+ **Resource**: applies to a specific resource.
+ **System**: acts directly on the systems, which support them.
+ **Macro**: calls other macros, or acts on other macros.

### Actions on macros

Several command options are available to act on macros:

+ **FIRE**: Call the macro, as if an event for that macro had happened. This is the default action.
+ **CANCEL**: Will stop executing the ongoing macro.
+ **COLLAPSE**: Will execute remaining commands in the ongoing macro, but with no delays between commands.

> Although not recommended, it is possible to make a loop where a macro calls itself as the last command, e.g. switching Off growth light
for plants; night and day temperature control, etc. It is required to make a macro that stops such loops.

### Macro-considerations

> Firing a new macro makes it possible to take advantage of a existing functionality without having to maintain several copies inside different
macros. 

As a macro execution can take some time due to delays between commands, it is important to take care of what could happen if another macro is
triggered during the execution. 

For instance if a macro called "_THEATER ON_" (for setting- up a home theater) takes more than one minute to execute, what will happen if this 
macro is called repeatedly? Will all commands start to overlap each other? What will happen if the "_THEATER OFF_" macro is called to switch the 
home theater off during the set-up? It is important to understand that a possible messy overlap of command executions from different macros may 
occur. The possibility to cancel or collapse a macro being executed ensures that the ongoing macro will end immediately.

In the above mentioned example, the macro to switch the home theater Off should first cancel the macro for setting-up the home theater:

"_THEATER OFF_" macro commands:

1. Cancel "_THEATER ON_" macro.
2. Raise screen.
3. Shut down projector.
4. Switch Avant to _STAND BY._
5. Etc.

### Orphan commands and events

If commands and events are defined for a resource and the resource is deleted or modified to another address, events and commands will become
orphan (without an associated resource). Orphan events and commands will still be available and refer to the original addressing of the resource.
The macro screen will signal the presence of orphan commands or events by colour coding and text in the macro header.

### Generic programming

Standard events and commands apply to a single specific resource. _Generic programming_ makes it possible to refer to a whole set of resources at 
once. 
> E.g.: It's possible to specify:
> + A single command to mute all products.
> + An event specification that matches any button pressed.

This has the following advantages:

+ A single macro can now substitute a lot of macros previously tailored for individual resources and the list of events and commands on a macro 
can be reduced.
+ It encourages a consistent setup throughout the installation.

_NOTE_: Generic events and commands are matched against all possible resources every time an event occurs or a command is executed. If the name of
 a resource is changed on a working configuration, the resource will no longer match an existing generic event or command. Therefore, it is 
important to be consistent when naming resources. It is also important to avoid spoiling functionality by renaming resources.

### Command coding

Commands are also represented by a code. The main difference is that there is a new type of selector for matching the same area or
zone as of the generating event. A command code starting with _$area/$zone/AV renderer/TV_ will act on all audio and video renderers named "_TV_" 
on the same area where the event generated and a command code starting with "_*/*/AV renderer/TV_" can be used to work with all TVs in the house.