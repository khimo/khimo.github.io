BTicino My Home
===============

Connection
----------

Connection to a BTicino My Home system is made via an Ethernet connection to a *My Home Gateway* interface. 
The available interfaces are the **MH200N** (that acts as a scenario programmer and SCS/LAN Gateway) and **F454** 
(Audio/Video Web Server that also acts as an integration Gateway) BTcino products. It's worth mentioning that: 
- The **MH202** scenario programmer doesn't work as a SCS/LAN Gateway.
- BTicino presents his own Gateway as the **F455** product, but as explained in his technical sheet *it cannot be 
used as a development Gateway (SDK) for third-party Apps or as an integration Gateway (Vantage drivers, etc.); the Gateway F454 must be used)*. 				
Both the IP address and the TCP port must be configured on BeoLiving Intelligence. Note
that in order to establish a communication, BeoLiving Intelligence must reside in an
allowed IP range defined in the *My Home* project.

Defining Resources
------------------

Integration between BeoLiving Intelligence and BTicino consist in interaction implemented via
button presses and scenario selection, and two types of dimmer control. Therefore, *New Bticino scene
button*, *Bticino button*, *Bticino dimmer 100 level* and *Bticino dimmer 10 steps* can be defined as resources.

*Bticino dimmer 100 level* support intensity sets between [0-100]. *Bticino dimmer 10 steps* only support intensity
set between [0-100] by 10 steps level. In this case, a round is implemented in the `LEVEL` command. Selection between
this two types of dimmer resource depends on the capabilites of the BTicino dimmer product to integrate with BeoLiving Intelligence.

There is also *Bticino scene button* which is deprecated and kept only
for backward compatibility.

The address of a button resource is composed of the `where` part and the
`what` part, separated by a comma.`Where` is the address of a module or group of devices, and `what`
indicates a scenario or push button identification.

The address of a dimmer resource is the `where` based in point-to-point interaction, as `area` part and `point of light` part (`<A><PL>`).


Events and commands
-------------------

Events and commands can be either scenario selection, CEN or dimmer `LEVEL` changes/sets.

For scenario selection *New Bticino scene button* resources must be
defined (*Bticino scene button* which is now deprecated and only
present for backward compatibility).

*New Bticino scene button* has `PRESS` event and command for scene
selection.

*Bticino button* has `PRESS`, `RELEASE`, `HOLD` and `HOLD
RELEASE` events and commands.

*Bticino dimmer 10 steps* and *Bticino dimmer 100 level* has `LEVEL` events and commands.

