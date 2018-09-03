Setup of BeoLiving Intelligence
========================

Network
-------

The network settings determine how BeoLiving Intelligence connects into the
local network, and how it accesses the Internet.

The settings available are:

+ *Hostname* is the name by which BeoLiving Intelligence will be found in the
   local network. This must be a single word containing letters `A` to
   `Z`, `a` to `z` or digits `0` to `9`.
+ *DHCP enabled* may be selected if the local network has a DHCP
   server, that automatically assigns the rest of the parameters (IP
   address, mask, name server and gateway).
+ IP address, IP mask, DNS address and gateway are the standard IP
   settings that must be provided in case of a manual connection (no
   DHCP).

### Apply button

Note that network settings do not apply immediately as you type.

You can safely edit all the fields, check for consistency, and then
press the *Apply* button for the changes to take effect.

The *Apply* button will change colour as a reminder whenever
modifications are made.

### Finding out manual settings

Sometimes it is useful to have a fixed IP address (rather than an
address dynamically assigned by a DHCP server). For example, if some
home automation equipment needs to connect to BeoLiving Intelligence,
normally a fixed IP address is required.

If you don't have all the manual settings available, you can try
choosing a DHCP configuration, and apply settings, so that the DHCP
server in the local network fills in an IP address, IP mask, gateway
and DNS server addressses. You can now uncheck the DHCP option, and
edit the last part of the IP address to your value of choice outside
of the DHCP range, which normally starts at around 100.

For example, if DHCP assigns `192.168.33.125`, then a value around
`192.168.33.20` should be OK (first, try pinging that address from
your computer to make sure no other device is already configured at
that address). Don't choose addresses with very low values (below 10)
since these are normally assigned to the network routers and servers.

Date & time
-----------

BeoLiving Intelligence needs to keep the date and time for many functions,
including timestamping of logs and monitoring, clock events, and
astronomical clock events.

If BeoLiving Intelligence has access to the Internet, then date and time can
be synchronized to Internet time servers. Select this option and
choose your timezone.

Otherwise, you can manually set the date and time.

For calculating sunrise and sunset times for your location, not only
the current date must be set, but also the geographic location of the
installation.

Set the latitude and longitude accordingly; the format is in decimal
degrees. Positive values for North and East, negative for West and
South.

For example, the coordinates for New York City (40.6700° N, 73.9400°
W) would be entered this way:

+ Latitude: `40.67`
+ Longitude: `-73.94`

<!-- FIXME If using location events, then make sure to get the coordinates of -->
<!-- your home with enough precision. 5 decimal digits should be OK. -->

<!--
#  Radius is used for Location events: if it is bigger than zero, 
#  BeoLiving Intelligence system driver will generate  `LEAVE` or `ARRIVE` events when
#  a BeoLiving App user leaves or enters the provided radius of the given location.
-->

Home Integration Protocol
-------------------------

Home Integration Protocol allow other devices to interact with BeoLiving Intelligence. This protocol is used by mobile applications, or by other
home automation controllers and provides two way control of all resource types.

This protocol can be enabled on the local network, with mandatory
authentication. You should provide a TCP port, which defaults to
9100. Port numbers below 1024 are reserved for standard TCP services,
so use values above this range.

System modes
------------

BeoLiving Intelligence can have any number of *System modes*, which can be
used to enable or disable the execution of macros, as follows:

+ System modes can be activated by the BeoLiving Intelligence command *SET MODE*.
+ Any number of modes can exist, but at most one can be active any given time.
+ A macro can have any number of modes, and a mode can be set to any number of macros.
+ A macro with no mode set will behave normally.
+ If a macro has one or more modes set, then it will be triggered by
events only if one of those modes is active.

Typical example of system modes: `Vacation` and `Normal`. You can set
up a button to toggle between normal and vacation modes. Macros for
setting thermostats, or forcontrolling lighting and shades may be
assigned individually to each mode.

Units
-----

The system temperature units can be configured to be Fahrenheit or Celsius, affecting
all the clients connected to the BeoLiving Intelligence. For example, if the
current temperature unit is *Fahrenheit*, then all the thermostats will report the 
temperature in these units to all connected clients.

This setting only affects what is displayed on BeoLiving Intelligence user
interfaces. It does not affect the units displayed on the actual
thermostats.
