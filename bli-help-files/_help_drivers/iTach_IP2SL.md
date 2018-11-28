Global Cache iTach IP2SL
===============================

This driver supports communication with a Global Cache iTach IP2SL,
allowing to control RS232 serial devices.

Connecting to the system
--------------------------------

Connection to the system is done via Ethernet. The following
parameters should be provided:

 1. *Host*: The IP address or host name of the device.
 2. *Port*: The port number where the device is waiting for
connections (the suggested default will probably be correct).

There are two types of TCP connections:

 1. *Direct Ethernet connection for communication*: should be used
for normal communication.
 2. *Direct Ethernet connection for configuration*: should be used
if RS232 port configuration is not known or needs to be changed.
RS232 settings will be sent to the device after pressing "Apply" button.
After `Apply` button is pressed, change TCP connection to
*Direct Ethernet connection for communication*.

Available resources
--------------------------------

This driver is based on matching incoming byte strings from the external
system, and sending back byte strings to it.

Therefore resources are generic strings used for matching from, and for
sending to the external system.

There are 3 parameters to each resource:

-   Name for the resource.
-   Whether it should be available for matching (INPUT), for sending
    (OUTPUT), or for both input and output (BOTH).
-   A generic character string.

In order to allow arbitrary byte values, the following encoding is
used:

-   Any character except for backslash (`\`) will be given it's
    corresponding value. Non-ASCII (international) characters are
    interpreted as Unicode UTF-8 byte sequences.
-   Backslash is used as an escape character, which gives special
    meaning to the character or characters that follow:
    -   `\\` (double backslash) is interpreted as a single backslash.
    -   `\r` is interpreted as a carriage return character (0x0D).
    -   `\n` is interpreted as a newline character (0x0A).
    -   `\xx` (where x is a hexadecimal digit [0-9, a-f, A-F]) is
        interpreted as a hexadecimal byte value. E.g. `\0A` is
        equivalent to `\n`.

Any non-printable or non-ASCII character entered by the user will be
shown as hexadecimal sequences. Illegal or truncated escape sequences
will be marked as errors.

Events and commands
-------------------

Resources marked for input (or both input + output) will be searched for
in all incoming data. As soon as a match is found, the corresponding
event will be generated and search will continue *after* the match.

If the incoming channel becomes idle, then all partial matches will be
discarded.

Commands are all resources marked as output (or both input + output)
that can be transmitted to the channel.

End of line sequence
--------------------
An end of line sequence can be defined at the channel configuration.

Being non empty implies a working mode in which events are delimited by it,
matching only when the complete message is equal to a defined event.

Defining end of line allows discovery of resources by using the "capture"
button on the resources page, for each received string ending with the end
of line sequence, an unknown resource will show up using it as address.

Also the end of line is appended to commands before sending them to the
external system.