System events
=============

BeoLiving Intelligence produces its own set of events which are not
associated to external systems.

When creating a macro, select events of type `System` to get a menu of
different options.

These events are:

<!--
Experimental: Location events
---------------

You can have an event whenever the user of BeoLiving App enters or
leaves the home.

Note that you need to [precisely set up](#/Setup/DateTime) the coordinates of the house,
a Location event radius, and also your mobile operator must provide 
assisted GPS support for your mobile phone.

When configuring a macro that is fired by `LEAVE` or `ARRIVE` events,
you should provide the name of the user that is leaving or entering
the location of the BeoLiving Intelligence.

Note that if remote access is enabled, both local and remote users 
should be configured. This can be achieved by adding an event for 
each user, or by configuring this field to include all names, separated 
by '|' (pipe).

For example, if your local user is named "localuser", and you can connect
remotely to the gateway with the user named "remoteuser@something.com",
then the following entry on `USER NAME` will work for both: localuser|remoteuser@something.com
//-->

Setup button event
------------------

This event is generated when you make a short press on the setup
button on BeoLiving Intelligence.

This is used mainly for testing macros during configuration, and is
not intended for the end users.

System connection events
------------------------

You can trigger a macro whenever one of the connections to the
external systems changes state. For example, whenever the lighting
control system disconnects.

Note that not all supported systems can detect all of the connection
states.

If using this feature, please make sure to actually test your macros,
and use the system logs for understanding how BeoLiving Intelligence detects
each state.

Clock events
------------

You can generate events at specific times and dates, or even relative
to surnise or sunset.

For sunrise and sunset events, see the help on <a href="" ng-click="goTo('Clock')">astronomical clock</a>.

For absolute clock events, you can choose:

- Month
- Day of month
- Day of week
- Hour
- Minute

For each of these, you can choose *any* or an actual value.

For example, for having an event every wednesday at noon, select `any
month`, `any day of month`, `Wednesday`, `12 hours`, `0 minutes`.
