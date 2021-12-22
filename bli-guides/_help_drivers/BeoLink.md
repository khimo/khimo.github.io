---
title: BeoLink
layout: pagetoc
---

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

The available commands based in BNR (BeoNetRemote Protocol) are:

- *All standby*: This command will set all NetworkLink products into standby mode. 

- *Cinema mode*: Sets *Cinema mode* on product. The available options are product dependent so the product must be online in order to be able
to see them in *Macro* edition. 

- *Master volume adjust*: Enable controlling the volume of several products at once via Multiroom. The command is sent to the master product and 
all the other products which are streaming from the master, changing their volume the same way. *Master volume adjust* is used for relative 
control.

- *Master volume level*: Similar to *Master volume adjust* but used for absolute volume control. This command takes `Volume` as parameter and must
 be an interger between 0 and 90.
 
- *Picture Mute*: This command (if corresponds) is used to freeze video picture.

- *Picture mode*: Sets *Picture mode* on product. The available options are product dependent so the product must be online in order to be able
to see them in *Macro* edition.  

- *Playqueue add Deezer playlist*: Adds a *Deezer playlist* by *Deezer Playlist Id* in products playqueue.
 
- *Playqueue add TuneIn station*: Adds a *TuneIn station* by TuneIn *Station name* or *Station Id* in products playqueue.
  
- *Playqueue add URL*: Adds an audio file to products playqueue specified by it's *URL*.
 
- *Playqueue clean*: Self explanatory. 

- *Recall profile*: Activates an existing profile on product.
 
- *Save profile*: Saves profile on product. 

- *Select channel*: Selects channel in specific product source. If the source has a favourite list defined the delay between the channel digits is taken from it, otherwise a delay of 300 milliseconds is used.
 
- *Select source*: Play source on product. The source can be originated from another product.
 
- *Send command*: Enables sending miscelaneous commands related to things like cursor control, menu acces, flow control, etc..

- *Send digit*: allows sending individual digit to the product.

- *Sound mode*: Sets *Sound mode* on product. The available options are product dependent so the product must be online in order to be able
to see them in *Macro* edition.

- *Speaker group*: Sets *Speaker group* on product. The available options are product dependent so the product must be online in order to be able
to see them in *Macro* edition.
 
- *Stand position*: Sets *Stand position* on product. This command in particular is only available in products with a stand. The available options
are product dependent so the product must be online in order to be able to see them in *Macro* edition.

- *Standby*: This command sets product in stand-by mode.

- *Volume adjust*: Enable relative volume control on product.

- *Volume level*: Similar to *Volume adjust* but used for absolute volume control. This command takes `Volume` as parameter and must
 be an interger between 0 and 90.

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

This configuration is done via the *Interfaces* screen on BeoLiving Intelligence. If the option is checked, BeoLiving Intelligence will tell the
mobile application that the product is controlled via the Beo4 navigation button commands `UP`, `DOWN`, `LEFT`, `RIGHT`, `SELECT` and `BACK`. 
Otherwise it will instruct the mobile application to use the legacy commands.


## Product Groups

The BeoLink system allows you to make groups of NetworkLink and ControlLink products. By defining one as the Main product, the rest of the group will follow the behavior of this Main product in terms of volume, source selection, and standby mode.

The Product Group's configuration is shown under Systems. When you select the BeoLink system, the configured product groups will appear listed below, with options for editing the existing groups or adding new ones. NetworkLink products can only form part of one group, so you won't be able to add a product to a group if it's already in another.

For a new group to be created you need to select a Main product for the group and at least one Follower, if not, the group won't be created.
