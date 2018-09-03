Generic programming
===================

Standard events and commands apply to a single specific resource.

Generic programming allows referencing a whole set of resources at
once.

For example, you can specify:

 - A single command to *mute all products called BeoVision*.
 - An event specification that matches *any button pressed that is
called LightsON*.
 - An event that matches *multi tap on any button in the kid's bedroom*

This has many benefits:

 - A single macro can now substitute a lot of macros previously
   tailored for individual resources.
 - The list of events and commands on a macro can be drastically
   reduced.
 - More importantly, it encourages a consistent setup throughout the
   installation.

A few examples below illustrate the use of generic programming.

**Note on name changes:** Generic events and commands are matched
  against all possible resources every time an event occurs or a
  command is executed. So, if on a working configuration the installer
  changes the name of a resource, that resource may no longer match
  an existing generic event or command. So be consistent with naming
  of resources, and careful not to break functionality by renaming
  resources.


## Example 1: Consistent lighting in all zones ##

It is extremely important for the user experience to be as consistent
as possible throughout the whole installation, so that the user knows
what to expect without having to memorize lots of different features
or functions.

A typical example is wall keypads and lighting control.

Normally, you would try to set up all keypads in the home with, for
example:

 - The top key for turning the lights on to a default scene.
 - The bottom key for turning the lights off.

This way, the user can walk into any room and have the lights on
without remembering what each button does.

Other keys in the keypad may then be assigned for more specific
functions, described by the key labels.

For this example, assume that the house has one or more lighting
control systems, with keypads on all zones, and every zone either
supports lighting scene selection, or direct control of a dimmer.

The following steps will get a consistent functionality for turning
lights on with the topmost key in all keypads.

 1. Define resources for the top button of all keypads at room
    entrances. Call them all by the same name `Lights ON`.
 2. If a zone, such as a corridor, needs a second such button on
    another keypad, call it `Lights ON 2` since you are not allowed to
    repeat names within a zone.
 3. For zones with scene control, set up a scene for the default
    lighting and assign a resource called `Scene ON`.
 4. For zones with direct dimmer control, assign a resource for the
    main lighting fixture and call it `Main dimmer`.
 5. On the macro screen, add a new macro called `Generic lights ON`.
    Assign it to the special zone called `global`, since it applies to
    many zones.
 6. Add a generic event that matches `any area`, `any zone`, `BUTTON`
    named `Lights ON`, action `PRESS`.
 7. Add more events if you used buttons named `Lights ON 2`.
 8. Now add a generic command for `area that fired`, `zone that
    fired`, `BUTTON` named `Scene ON`, action `PRESS`.
 9. Add another command for `area that fired`, `zone that fired`,
    `DIMMER` named `Main dimmer`, action `SET LEVEL 85%`.

Notes:

 - Events and commands that don't match are silently ignored. For
   example, rooms with dimmer control won't complain that there is no
   scene button available.
 - The generic options `area that fired` and `zone that fired` will
   only match the area and zone where the event was produced. In this
   case, you will only affect lighting on the same room where the key
   was pressed.
 - On the list of events and commands for the macro, you will see a
   special encoded description. In the case of generic events and
   commands, you will notice the use of `*` to mean *any*, and the
   codes `$area` and `$zone` as placeholders for the actual area and
   zone where the event occurred.


## Example 2: All area off ##

The residence has 3 areas: `Main house`, `Pool` and `Guest house`.

Pressing a button on Beo5/6 will switch off all lighting and A/V
products in whole area.

Assume a button has been set up on Beo5 for this purpose, that sends
`CONTROL 20`.

The installation is as follows:

 - Video products in all zones are named `BeoVision`, and audio
   products are named `BeoSound`.
 - All zones have a lighting scene button called `OffScene`.

The macro is as follows.

Events:

 1. `CONTROL 20` on any video product (encoded as `$area/$zone/AV
    Renderer/BeoVision/Control ? Action=Press & Command=FUNCTION_20`).
 2. `CONTROL 20` on any audio prdouct (encoded as `$area/$zone/AV
    Renderer/BeoSound/Control ? Action=Press & Command=FUNCTION_20`).

Commands:

 1. Set all video products in the same area, any zone, called "BeoVision" to standby
    (encoded as `$area/*/AV Renderer/BeoVision/Standby`)
 2. Set volume of all audio/video products in the same area, any zone, to standby
    (encoded as `$area/*/AV Renderer/*/Volume level=30`)
 3. Turn off all lighting by calling the OFF scene (encoded like `$area/*/BUTTON/OffScene/PRESS`)
