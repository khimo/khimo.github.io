Clipsal
=======

The Clipsal programming model defines *trigger groups* and *trigger
actions* as a way to call lighting scenes. Any scene defined by a
trigger group/action pair can be called from BeoLiving Intelligence.
Also dimmers and shades can be controlled knowing the corresponding
application and group address numbers.

Clipsal resources
-----------------

Resources correspond to trigger groups. Usually a trigger group is
shared by a set of mutually exclusive scenes, each identified by a
trigger action within the group.

So the address of Clipsal scene button resources is composed of two numbers,
*trigger group* and *action selector*, separated by a comma.

For example, `3,6` identifies action selector 6 within trigger group
3.

For dimmers and shades the address is also composed by two numbers,
but in this case they are *application number* and *group address*.

For example, `56,1` identifies the dimmer or shade with application number
56 (default for lighting) and group address 1.

There are three resource types for shades: *Clipsal shade*, *Clipsal shade toggle*
and *Clipsal shade GPIO*.
Clipsal shade can interact with a 3 button shutter relay, Clipsal shade toggle with a
single button shutter relay and Clipsal shade GPIO with a two button shutter relay.
