Philips Hue
===============================

This driver supports communication with a Philips Hue bridge,
allowing to control lights and lighting groups.

Connecting to the system
--------------------------------

Connection to the system is done via a REST connection with the
Philips Hue bridge. The following configuration is needed:

 1. *Bridge host*: The IP address or host name of the bridge.
 2. *Bridge port*: The port number where the bridge is waiting for
connections (the suggested default should be correct).
 3. *Bridge user*: This user is automatically created when the button
    *Create Philips HUE user on bridge* is pressed, as described below.
 4. *New color turns dimmers on*: If this flag is set, and a new color
is picked for a dimmer that is turned off, then the dimmer will be
turned on with the new selected color.
 5. *Poll interval*: The number of seconds to wait between status
requests.

If system connection can't be established specifying Hue Bridge Hostname on *Bridge host*, bad configuration or absence of the DNS server on the BeoLiving Intelligence LAN could be the responsible issue. Try using the IP address of the Bridge. Default Hostname of Hue Bridge is ```Philips-hue```.

The Philips Hue driver polls every light and group on the bridge each
*Poll interval* seconds for status updates. If the system has a low
number of resources, then this parameter may be set to a small value,
although anything below 5 is not recommended.

If the *Bridge user* is not defined or is invalid, then you can create a new
one by pressing the *link* button on the bridge and then pressing the *Create
Philips HUE user on bridge* within 30 seconds. If the action is successful,
then a new user will be assigned.

Available resources
--------------------------------

The Philips Hue driver supports commanding the lights, groups
and scenes that are available for the configured user.

Both lights and groups are mapped to the DIMMER Standard Resource
type, and allow full control of every state variable, such as
brightness, hue or color coordinates.

Also, as a DIMMER, they provide the SET LEVEL command which acts
on the *brightness* and *on* state variables. As a simple example,
setting the level to 100 implies setting "on" to true and "bri" to
255 on the Philips Hue bridge.

The scene is mapped to a BUTTON Standard Resource type, and the button
PRESS recalls the scene on the Philips Hue bridge.

Deprecated commands
--------------------------------
As of version 1.4.19116 and on, the command _SET TRANSITION TIME
is no longer available. For setting a dimmer with fade time,
the _TIMED SET command should be used.
