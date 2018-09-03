Macro programming
=================

The interaction between the different devices connected to BeoLiving Intelligence is defined by means of *macros*.

A macro consists of a set of events and a list of commands.

Whenever any of the events defined in a macro occurs, the macro is
triggered. Examples of events are a key press on a keypad, or a
Control command on a remote control.

When a macro is triggered, the list of commands is executed in order.

Macros are organized to zones in the same way as systems or
resources. Having macros assigned to zones helps when setting up user
interfaces.

Defining events
---------------

The list of events that will trigger a macro can be filled out
manually, or by selecting from a set of recent events.

Events may be of 3 types:

-  *Resource events* match a specific event on a specific resource.
   For example, *LIGHT 3 was pressed on the TV in the dining room*.
-  *Generic events* apply to a set of similar events throughout the
   house. For example, *a button named PARTY was pressed on any zone,
   any area*. See the help on [Generic Programming](#/Help/Generic programming).
-  *System events* include calendar and astronomical clock events,
   front-panel button events and system connectivity events.
<!-- FIXME: it should also mention location events if they are enable! -->

### Event encoding

Note that each event is shown on each row of the events list in an
encoded format. All event codes start with
`area/zone/type/name`. Generic events have an asterisk wherever a
field is generic.

For example, buttons named "Off" in any zone in the guest house will
start as `Guest House/*/BUTTON/Off`.

Commands
--------

Commands are the actions executed whenever a macro is triggered.

The list of commands is executed in order, and a delay before each
command can be set by giving a combination of seconds and
milliseconds.

The command list can be reordered by dragging the handles at the left
of each row, or by clicking on the arrows on the far right of each
row.

Commands may be of 4 types:

-  *Generic commands* apply to any area or zone, with the option to
   select the same area or zone where the event was generated. For
   example, the generic event of pressing the "Off" button in any room
   can call the generic command of setting all dimmers to 0% intensity
   on that same zone.  See the help on [Generic Programming](#/Help/Generic programming).
-  *Resource commands* apply to a specific resource.
-  *System commands* act directly on the systems that support them.
-  *Macro commands* trigger other macros, or act on other macros (see
   section below).

### Command encoding

As with events, commands are also represented in encoded format.

The main difference is that there is a new type of selector for
matching the same area or zone as that of the generating event.

For example, a command code starting with `$area/$zone/AV renderer/TV`
will act on all audio and video renderers named "TV" on the same area
where the event generated.

In constrast, a command code starting with `*/*/AV renderer/TV` can be
used to act on all TVs in the house.


### Actions on macros

Macros can contain delays between commands, and therefore take some
time to complete.

What happens if, during macro execution, another related macro is
called?

There are several commands to act on macros:

- *FIRE*: just call the macro, as if an event for that macro had
  happened. This is the default action.
- *CANCEL* will stop executing a (possibly) ongoing macro.
- *COLLAPSE* will execute all remaining commands in a (possibly)
   ongoing macro, but with no delays between commands.

Firing another macro allows to take advantage of existing
functionality without having to maintain several copies inside
different macros (just like calling a subroutine). Or you can even try
a loop where a macro calls itself as the last command (be careful to
provide some way of terminating this loop).

Since a macro execution can take some time due to delays between
commands, it is important to take care of what could happen if another
macro is triggered during execution.

For example, a macro called `THEATER ON` for setting up a home theater
(screen, curtains, lighting, projector, etc.) may take more than 1
minute to execute.

- What should happen if the user calls this macro repeatedly? Should
  all commands start to overlap with each other?
- What should happen if the user decides to call the `THEATER OFF`
  macro to put the home theater off while it is still being set up?

In these cases, it is important to understand that there is a possible
messy overlap of command executions from different macros.

The possibility to cancel or collapse a macro being executed ensures
that the ongoing macro will end immediately.

So in our example, the macro to put the home theater off should first
cancel the macro for setting up the home theater. Something like this:

`THEATER OFF` macro commands:
 1. Cancel `THEATER ON` macro.
 2. Raise screen.
 3. Shut down projector.
 4. Put BeoVision on STANDBY.
 5. etc.

Even the `THEATER ON` macro should start by cancelling itself in order
to avoid several instances of the same macro running one on top of the
other if the user is impatient and calls it repeatedly.

Orphan commands and events
--------------------------

If commands and events are already defined for a resource, and then
that resource is deleted or modified to another address, then the
events and commands will become orphan (without an associated
resource).

Orphan events or commands will still be functional, and will refer to
the original addressing of the resource.

The macro screen will signal the presence of orphan commands or
events.
