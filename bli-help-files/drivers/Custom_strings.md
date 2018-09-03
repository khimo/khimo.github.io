Custom strings driver
=====================

The Custom strings driver is intended to enable limited communication
with unsupported home automation systems.

Use of this driver requires knowledge of the protocol for the external
system.

Resources
---------

This driver is based on matching incoming byte strings from the external
system, and sending byte strings back to it.

Therefore resources are actual generic strings which can be used used
for matching against the incoming byte stream, and for sending to the
external system.

There are 3 parameters to each resource:

-   Name of the resource.
-   Whether it should be listed for input matching (INPUT), for
    sending commands (OUTPUT), or for both (BOTH).
-   A generic character string.

In order to allow for arbitrary byte values, the following encoding is
used:

-   Any character except for backslash (`\`) will be given it's
    corresponding value. Non-ASCII (international) characters are
    interpreted as Unicode UTF-8 byte sequences.
-   Backslash is used as an escape character, which gives special
    meaning to the character or characters that follow:
    -   `\\` (double backslash) is interpreted as a single backslash.
    -   `\r` is interpreted as a carriage return character (0x0D). It
        will be immediately redisplayed as `\0D`.
    -   `\n` is interpreted as a newline character (0x0A). It will be
        immediately redisplayed as `\0A`.
    -   `\"` is equivalent to a double quote (`"`). This notation is
        `required` for import/export of resources in text form.
    -   `\xx` (where x is a hexadecimal digit [0-9, a-f, A-F]) is
        interpreted as a hexadecimal byte value. E.g. `\0A` is
        equivalent to `\n`.

Any non-printable or non ASCII character entered by the user will be
redisplayed as a hexadecimal sequence. Illegal or truncated escape
sequences will be marked as errors.

Events and commands
-------------------

Resources marked for input (or both input + output) will be searched for
in all incoming data. As soon as a match is found, the corresponding
event will be generated and search will continue *after* the match.

For example, the input stream `AAAB` will match `AA` only once.

If the incoming channel becomes idle, then all partial matches will be
discarded.

For example, the input stream `123` (pause) `4` *will not* match `1234`.

Commands are all resources marked as output (or both input + output)
and can be transmitted to the channel.

End of line sequence
--------------------
Use this setting if the protocol messages are delimited by a fixed
character sequence. Typical examples are line-oriented
protocols which end each message with `CR(0x0D)` or `LF(0x0A)`
characters.

If an end of line sequence is configured, then BeoLiving Intelligence will
know how to split incoming data into complete messages, with the
following effects:

1. Matching of incoming messages now applies *to the whole message*.
   Matching part of a message is not possible.
2. BeoLiving Intelligence now provides *capture functionality*. Complete
   messages can be captured and added as resources as with other drivers.
3. The end of line sequence is automatically appended to all outgoing
   commands.

To illustrate the different behaviour when defining and end of line
sequence, consider the following example:

Consider two resources of type "Custom event and command":

- resource A with address = `12`
- resource B with address = `345`

When an incoming message `12345\n` arrives with no end of line
sequence defined, two events will be generated: one matching
resource A and another matching resource B.

But, if end of line is set to `\n`, and the same incoming message
arrives, no events will be generated since neither resource matches *a
complete message*. Rather, a new resource will be offered on capture
mode with address `12345`.

TCP connection maintenance
--------------------------

Read this section if you experience *periodic TCP reconnections*.

In order to rapidly detect broken TCP connections, BeoLiving Intelligence uses the
standard *TCP Keepalive probes* mechanism: when a TCP connection is
idle, probe packets are sent periodically over the connection and an
acknowledge is expected. The probe is an empty TCP packet with the
request for acknowledge flag set.

This method for detecting active connections is specified in RFC-1122
section 4.2.3.6.

There are products with non-compliant TCP implementations which do not
respond to these acknowledge requests. In such cases, HAGW will detect a
broken TCP connection and reconnect. This may happen as frequent as
every 20 seconds if there is no other data on the communication channel.

If you experience this problem, then you must somehow force some data to
be sent back to HAGW periodically, so as to keep the channel active.

For example, you can use a clock event to send a status request to the 3rd
party product periodically, or a ping/pong message. On command-line based
protocols that echo all characters typed, probably sending a carriage
return character is enough for getting characters back to BeoLiving Intelligence.

What to do strongly depends on the protocol of the external system.
