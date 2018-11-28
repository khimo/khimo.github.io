BeoLink
=======

The BeoLink system provides interaction with NetworkLink products.

This system is included by default in BeoLiving Intelligence, and cannot be
removed.

NetworkLink products
--------------------

NetworkLink products are identified by their serial number. BeoLiving Intelligence will automatically add all available products to the table of
NetworkLink products.

BeoLink Events
--------------

NetworkLink products generate `LIGHT` and `CONTROL` BeoLink events after reception of B&O remote control commands.

When an *all product standby* is performed on BeoLink, an event called
`ALL STANDBY` is also generated on BeoLiving Intelligence. This event has no
parameters.

CONTINUE and KEY_RELEASE functionality
---------------------------------------

Continue functionality refers to the way the products and terminals
report a key-press being held for some seconds, i.e. not immediately
released.

When a key is pressed and held, the products will report a key press
event followed by a single `CONTINUE` event. When the key is released, a
`KEY_RELEASE` event will be generated.

Several keys of B&O terminals support continuous key
presses which are reported in different ways:

-   The 4 colour keys, `STEP_UP`, `STEP_DOWN`, `WIND` and `REWIND` each report
    a specific `CONTINUE` event (e.g. `Continue STEP_UP`).
-   Other keys send a generic `CONTINUE` event.
-   Other keys (such as digits) have no continue functionality.

You can use the monitoring tools in order to check for continue
functionality on a specific key.

BeoLiving Intelligence will keep track of which was the original key-press
that lead to a `CONTINUE` - `KEY_RELEASE` sequence, so that you may
trigger different macros depending on which key was released.

This is done via the extra fields when defining a BeoLink event.

The typical usage is for a `CONTINUE` event to start a home-automation
action like dimming the lights. The `KEY_RELEASE` will stop dimming.

For example, in order to execute a macro when the `GO` key is released,
you should define a BeoLink event for the corresponding zone, and for
the `KEY_RELEASE` event. Then choose to also match against the original
command, and select `GO` from the original command list.

BeoLink Commands
----------------

Commands to products can emulate terminal commands from  Beo4/Beo5 or BeoRemote One.

The available options are:

 - All Standby
 - Cinema mode
 - Master volume adjust
 - Master volume level
 - Picture mute
 - Picture mode
 - Playqueue add Deezer playlist
 - Playqueue add TuneIn station
 - Playqueue add URL
 - Playqueue clean
 - Recall profile
 - Save profile
 - Select channel
 - Select source
 - Send command
 - Send digit
 - Sound mode
 - Speaker group
 - Stand position
 - Standby
 - Volume adjust
 - Volume level

*All Standby* has no parameters. This command will send all Masterlink
 and NetworkLink products into standby mode.

*Master volume adjust* and *Master volume level* enable controlling
the volume of several products at once via Multiroom. The command
is sent to a product and all the other products which are streaming
from the same master change their volume the same way. Use
*Master volume adjust* for relative control (step up or step down
or mute) and *Master volume level* for absolute control.

*Playqueue add Deezer playlist* adds a *Deezer playlist* specified by *Deezer playlist Id*.

*Playqueue add TuneIn station* adds a *TuneIn station* specified by *Station name* or *Station Id*.

*Playqueue add URL* adds an auido file to the *Playqueue* specified by a *URL*.

*Playqueue clean* is self explanatory.

*Recall profile* activates an existing profile. 

*Save profile* persists an existing profile.

*Select channel* is used to select a source and channel. If the source has
a favourite list defined the delay between the channel digits is taken from it,
otherwise a delay of 300 milliseconds is used.

*Select source* instructs a product to play a source via the multiroom
feature. The source can be originated from another product.

*Send command* enables sending miscelaneous commands related to
things like cursor control, menu acces, flow control, etc..

*Send digit* allows sending and individual digit to the product.

*Speaker group* allows selecting speaker groups.

*Sound mode*, *Stand position*, *Picture mode*, *Picture mute* and *Cinema mode*
 commands are self explanatory. The available options are
product dependent so the product must be online in order to be able
to see them. The command *Stand position* in particular is only available
 in products with a stand.

*Standby* is self exaplanatory.

*Volume adjust* permits to adjust volume relative to the current volume.

*Volume level* enables absolute volume control. The argument is an
integer value from 0 to 90.

## Pause between commands

Some products may fail to power up and immediately accept further
commands (for example, a source selection followed by a program
selection). This may also happen when controlling an external source
such as a set-top box, which cannot handle a fast succession of
commands.

In these cases, adding a small delay between commands will most likely
solve the issue.

## Cursor navigation vs. old Beo4 navigation

BeoLink products supporting Beo4 *navigation button* commands can be
configured for using either the new commands (`UP`, `DOWN`, `LEFT`, `RIGHT`,
`SELECT` and `BACK`), or the legacy alternatives (`STEP_UP`, `STEP_DOWN`,
`WIND`, `REWIND`, `PLAY` and `EXIT`).

You should keep this in mind if constructing macros that simulate menu navigation.

Mobile applications also need to know in which of these modes the
product is configured in order to send the right commands.

This configuration is done via the *Interfaces* screen on BeoLiving Intelligence. If 
the option is checked, BeoLiving Intelligence will tell the
mobile application that the product is controlled via the Beo4
navigation button commands `UP`, `DOWN`, `LEFT`, `RIGHT`, `SELECT` and
`BACK`. Otherwise it will instruct the mobile application to use the
legacy commands.
