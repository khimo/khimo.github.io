Astronomical Clock
==================

BeoLiving Intelligence can generate events relative to the time of sunrise or sunset.

When setting up a macro, create an event and choose `System events`,
and for setting the time, select `Relative to sunrise` or `Relative to
sunset`.

In each case, an integer value ranging from -720 to +720 minutes must
be given (720 minutes corresponds to 12 hours).

For example, to turn on the front lights 30 minutes before sunset,
select `Relative to sunset`, with value `-30`.

Note that usual values are no larger than a few tens of minutes
relative to sunrise or sunset.

If using greater values, be careful not to cause event overlaps at
certain times of year that could result in an undesired behaviour for
the customer. For example, an event set for sunset plus 420 minutes in
Denmark will occur after sunrise during the summer.

Setting up the astronomical clock
---------------------------------

The astronomical clock needs to know your geographic location in order
to calculate sunrise and sunset times.

This is configured in `Settings / Date & Time / Astronomical Clock`,
where values for latitude an longitude must be provided.

These values must be entered as a number. Positive latitude indicates
North, positive longitude indicates East. Similarly, negative values
indicate South latitude or West longitude.

For example, the coordinates for New York City (40.6700° N, 73.9400°
W) would be entered this way:

+ Latitude: `40.67`
+ Longitude: `-73.94`

Precautions with high latitudes
-------------------------------

Be aware that cities with latitudes at or beyond the polar circles
will have several days per year without a proper sunrise or sunset
event.

In this situation, be careful that these naturally missing events are
taken into account when setting up the system.

For example, avoid things like leaving all lights on during weeks or
months until the next sunrise occurs.
