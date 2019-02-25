
<a id="org08ee48d"></a>

# Introduction

With the introduction of BLI, there is a standard way of identifying resources and specifying activity and state in the connected systems. Such activity can be represented unambiguously in the form of a text string.

*Home Integration Protocol* allows external applications to directly interact with BLI. This is done by means of a minimalist line-based protocol that directly transports the text representation of all activity.

Users of HIP include mobile applications such as BeoLiving App, home and building automation controllers, event monitoring and logging applications, and other special applications.


<a id="org74226b7"></a>

# Interface support and details


<a id="orge7d3678"></a>

## RS232 connection

An RS232 interface connected to BLI can be assigned for HIP functionality.

An application using HIP over RS232 will not require authentication and can use the protocol directly. Access to all zones is allowed.

Settings for the communication are 8 bits, no parity, 1 stop bit. Bit rate ranges from 9600 bps to 115200 bps.


<a id="org5fe5993"></a>

## TCP/IP connection

HIP uses a TCP socket and messages are packaged by lines. Each line is terminated with the sequence CR + LF.

Authentication is always required for TCP connections, and is specified in the following section.

Connection initiation is as follows:

1.  Client establishes TCP connection to server.
2.  Server initiates authentication loop.
    -   On authentication success, HIP interchange begins.
    -   On authentication error, the TCP connection is closed.

Note: Future version of this protocol will also provide a SSL connection using SSL authentication.


<a id="orgbb3cf2f"></a>

## Authentication

When a new TCP HIP connection is established, the server (BLI) will start an authentication loop.

The procedure is as follows:

1.  Server sends the string `login:␣` (ends with a space, ASCII 0x20).
2.  Client sends the user name, followed by `CR+LF`.
3.  Server sends the string `CR+LF` + `password:␣` (ends with a space, ASCII 0x20).
4.  Client sends the corresponding password, followed by `CR+LF`. Server echo is disabled during password entry.
5.  Server sends `CR+LF`.
6.  If authentication succeeds, continue to HIP interchange.
7.  On failure, server sends `error` + `CR+LF`, waits 2 seconds and repeats from step 1 up to a total of 3 tries.


<a id="orgb77a73a"></a>

# Identification of areas, zones, resources, commands or events

An area is uniquely identified by its name, for example:

    Main

A zone is uniquely identified by the combination of *area* and its name, and is represented in string form as a path with the form area/name. For example:

    Main/global
    Guest house/Kitchen

A resource is uniquely identified by the combination of *area*, *zone*, *type* and *name*, and is represented uniquely in string form as a path with the form area/zone/type/name. For example:

    Guest house/Kitchen/AV renderer/BeoVision

An event or command is represented by a resource path followed by an action (event or command), optionally followed by attributes and values.

Example of a simple command, and a command with 2 attributes:

    Guest house/Kitchen/BUTTON/Lights ON/PRESS
    Guest house/Kitchen/AV renderer/BeoVision/Beo4 command?Command=TV&
           Destination selector=Video_source

Example state change event, with 1 attribute.

    Guest house/Kitchen/BUTTON/Lights ON/STATE_UPDATE?STATE=1

Example generic event matching all state updates (see documentation for *generic programming*):

    */*/*/*/STATE_UPDATE


<a id="orga5c8130"></a>

# HIP data interchange

The following requests are supported on HIP:

| Request | Arguments                         | Description                                      |
|------- |--------------------------------- |------------------------------------------------ |
| `c`     | Generic ID                        | Command, from client to server.                  |
| `f`     | Generic resource                  | State filter request, client to server.          |
| `e`     | Code, message                     | Error code, server to client.                    |
| `q`     | Generic resource                  | State query, client to server.                   |
| `s`     | Specific ID                       | State update, server to client.                  |
| `v`     | Specific ID                       | Resource event, server to client.                |
| `r`     | Specific ID                       | State response, server to client.                |
| `a`     | Specific ID                       | Add area or zone, client to server.              |
| `d`     | Specific ID                       | Delete area, zone or resource, client to server. |
| `m`     | Specific ID **Space** Specific ID | Move area, zone or resource, client to server.   |
| `u`     | Specific ID                       | Show (unveil) resource, client to server.        |
| `h`     | Specific ID                       | Hide resource, client to server.                 |

All requests from client to server take a single argument, which is an identifier for areas, zones, resources, commands or events.

A complete message consists of:

1.  The request type (1 character)
2.  Space (ASCII 0x20)
3.  The argument, which is an encoded string
4.  Line termination, consisting of `CR+LF` (the server will also accept a single `CR`)

For example, to press all buttons in the installation, the client sends (do not try this at home):

    "c */*/BUTTON/*/PRESS" + CR + LF

All responses from server to client may include further information, such as error codes.


<a id="orgcb608aa"></a>

## Command

The client application can send a command for BLI to act on one or more resources. Generic specifications are allowed.

The following examples act on a specific dimmer, and on all products named *BeoVision*:

    c Social/Dining/DIMMER/Chandelier/SET?LEVEL=60
    c */*/AV renderer/BeoVision/All standby

The server will answer with an *e* as soon as it processes the command.


<a id="org5db7e39"></a>

## State query

The state of a resource or group of resources can be queried at any time. Normally, the client application will query the state of some resources in order to render a user interface with representations for those resources.

Resource state responses will be returned as a block, with no further state updates in between. The block of responses correspond to a snapshot of the resources at the time the query was processed by the server.

Example query for all resources in a zone:

    q Social/Dining/*/*

The server will answer with an *e* as soon as it processes the command, followed by the corresponding responses if the command succeeds:

    r Social/Dining/DIMMER/Downlight/STATE_UPDATE?LEVEL=33
    r Social/Dining/AV renderer/BeoSound/STATE_UPDATE?...
    r Social/Dining/BUTTON/Lights on/STATE_UPDATE?STATE=1
    r Social/Dining/BUTTON/Party mode/STATE_UPDATE?STATE=0


<a id="org887ef62"></a>

## State filter request

In order to receive state update and event notifications, the client must specify a filter. The filter consists of a generic path to a group of resources.

The following example will match all state updates and events from the zones Kitchen or Dining:

    f */Kitchen|Dining/*/*

The following example will match all dimmer state updates and events:

    f */*/DIMMER/*

To disable state update and event notifications, send the command with no arguments:

    f

By default, HIP connections start with state and event notifications disabled.

The server will answer with an *e* as soon as it processes the command.


<a id="org99bac74"></a>

## Add area or zone

The client application can attempt to create an area or zone.

The following examples create an area and a zone:

    a Social
    a Social/Game room
    a Social/Smoke|room

The server will answer with an *e* as soon as it processes the request, which will contain the final name of the added area or zone.

The following can be responses to the previous examples, note the last one is different from the example initializing message because it replaces the pipe with a space:

    e OK a%20Social
    e OK a%20Social/Game%20room
    e OK a%20Social/Smoke%20room


<a id="org3767287"></a>

## Delete area, zone or resource

The client application can attempt to delete an area, zone or resource.

The following examples delete an area, a zone and a resource:

    d Social/Game room/TV/tv
    d Social/Game room
    d Social

The server will answer with an *e* as soon as it processes the request, which can have a code of PRE if the area or zone to be deleted are not empty or ACC if th user has not access permissions.

The following can be responses to the previous examples, note the last one is an error because the area is not empty:

    e OK d%20Social/Game%20room/TV/tv
    e OK d%20Social/Game%20room
    e PRE d%20Social


<a id="org1aab904"></a>

## Move area, zone or resource

The client application can attempt to move or rename an area, zone or resource. The following combinations are allowed:

| Source                 | Target                 | Effect                          |
|---------------------- |---------------------- |------------------------------- |
| area1                  | area2                  | Renames the area.               |
| area1/zone1            | area2                  | Moves the zone to another area. |
| area1/zone1            | area1/zone2            | Renames the zone.               |
| area1/zone1/type/name1 | area1/zone1/type/name2 | Renames the resource.           |
| area1/zone1/type/name1 | area2/zone2            | Moves the resource.             |

The following examples show how the request can be sent (note the name encoding):

    m Garden BBQ
    m Guest/Bedroom Guest/Main%20Bedroom
    m Main/Audio%20room First%20floor/Music
    m Main/global/DIMMER/Light First%20floor/Main%20Bedroom

The server will answer with an *e* as soon as it processes the request, which will contain the final name of the moved area, zone or resource.


<a id="org159ac95"></a>

## Hide or show resource

The client application can attempt to hide or show resources, as stated in the following examples:

    h Social/Music/DIMMER/Light
    u Main/Bedroom/SHADE/Curtain

The server will answer with an *e* as soon as it processes the request.


<a id="org3c29d1f"></a>

## State update notification

Whenever the state of a resource changes, the server will generate a state update.

The client will only receive state update notifications for resources that match the state filter set and are accessible by the authenticated user.

Example state update:

    s Social/Dining/BUTTON/Party mode/STATE_UPDATE?STATE=3


<a id="org8ea1f92"></a>

## Return code messages

A message sent to the server may result in an error. The server will generate an error response which consists of an error code followed by the received message, plus some specific information, which depends on the processed command.

The only exception is for the *message too long* error, which will not include the message in the reply.

In any case, if an error condition arises, the originating message will not be processed.

Error codes:

| Code | Meaning                                                               | Includes specific information? |
|---- |--------------------------------------------------------------------- |------------------------------ |
| OK   | Command successfully processed.                                       | YES                            |
| CMD  | Wrong / unrecognized command.                                         | NO                             |
| SYN  | Bad syntax, or wrong character encoding.                              | NO                             |
| ACC  | Zone access violation, or the user does not have edition permissions. | NO                             |
| PRE  | Precondition failed.                                                  | NO                             |
| LEN  | Received message too long.                                            | NO                             |
| TOS  | The connected user did not agree with the terms of service.           | NO                             |
| UNK  | Area, zone or resource unknown.                                       | NO                             |

Specific returned information:

| Command | Specific information                                                |
|------- |------------------------------------------------------------------- |
| `c`     | The number of command executions that where processed on the server |
| `f`     | None                                                                |
| `e`     | None                                                                |
| `q`     | None                                                                |
| `s`     | None                                                                |
| `r`     | None                                                                |
| `a`     | None                                                                |
| `d`     | None                                                                |
| `m`     | None                                                                |
| `u`     | None                                                                |
| `h`     | None                                                                |

Example responses from server:

    e OK c global/global/BUTTON/*/PRESS 3
    e ACC c */*/BUTTON/*/PRESS


<a id="orgc63140c"></a>

# Access restrictions

Each user has a list of zones where he can interact. Zones not in this list cannot be accessed via HIP for that user.

Therefore, unless the user has access to all zones that are included in the message, generic commands are not allowed and will generate an access violation error.

The following list shows some commands and the condition needed for them to succeed:

-   `c */*/BUTTON/*/PRESS`: The user must have the "all zone access" flag set.
-   `c global/*/BUTTON/*/PRESS`: The user must have the "all zone access" flag set.
-   `c */global/BUTTON/*/PRESS`: The user must have the "all zone access" flag set.
-   `c global/bedroom|kitchen/BUTTON/*/PRESS`: The user must access to global/bedroom and global/kitchen.
-   `c global/kitchen/BUTTON/*/PRESS`: The user must access to global/kitchen.


<a id="org2a579e7"></a>

# Edition restrictions

Each user can have edition permissions, which allow him to execute add, move, hide and show requests.


<a id="orge4ffb03"></a>

# Encoding of messages

All zone, resource, command and event identifiers have the format of a relative URI (uniform resource identifier):

-   Identifiers have the form of a URI path, with a hierarchic list of symbols joined by forward slashes.
-   Arguments to commands and events also comply with URI queries, with a list of attributes and corresponding values.

When it comes handling special characters, such as the space (ASCII 0x20) or multilingual characters, it is necessary to avoid ambiguity by encoding the path as a single string (no spaces), and all in plain printable ASCII characters.

The same applies to *reserved characters*, such as `/` or `?`, which have special meaning as delimiters in the URI, and must be encoded if they appear elsewhere.

This specification adopts the same encoding as specified in section 2 of IETF RFC 3986, commonly known as *URL encoding* or *percent encoding*.

Rules are basically as follows:

-   *Percent encoding* of a byte is the percent sign `%` followed by the two upper-case hexadecimal digits of the byte. For example, the percent sign (ASCII 0x25) *must* be encoded as `%25`. Similarly, the byte 0xE3 is encoded as `%E3`.
-   Special characters must be percent encoded.
-   Multilingual characters must be represented in UTF-8, and each of the corresponding bytes should then be percent encoded if needed.

In the direction server to client, the encoding is always done according to this specification (uppercase hexadecimal, only percent encode special characters).

The client, however, has more flexibility when sending messages to the server:

-   The server will accept both upper or lower case hexadecimal digits.
-   The server will accept UTF-8 characters directly. Note that Telnet encoding must be taken care of anyway for a TCP connection.
-   Any character (not only special characters) can be percent encoded.

For example, the following messages are equivalent:

    c Up/Salón/BUTTON/свет/PRESS
    c Up/Salón/BUTTON/свет/PRES%53
    c Up/Sal%C3%B3n/BUTTON/%d1%81%d0%b2%d0%b5%d1%82/PRESS
    c Up/Sal%C3%B3n/BUTTON/%D1%81%D0%B2%D0%B5%D1%82/PRESS


<a id="org842696d"></a>

# Glossary and references

-   **BLI:** BeoLiving Intelligence
-   **HIP:** Home Integration Protocol
-   **Server:** BLI or, in general, the product / application accepting HIP connections from clients, processing commands and returning events and state.
-   **Client:** Application or product establishing a HIP connection to BLI (server).
-   **Telnet:** Protocol for terminal communication over Internet Protocol defined in RFC 854: <https://tools.ietf.org/html/rfc854>
-   **Echo:** Repetition of characters received on a connection back to the sender. For telnet, this is pecified in RFC 857: <https://tools.ietf.org/html/rfc857>
-   **CR:** Carriage return ASCII 0x0D.
-   **LF:** Line Feed ASCII 0x0A.
-   **Line termination:** The sequence CR + LF. The server also accepts a single incoming CR as line termination.
-   **URL encoding:** ASCII encoding of URIs as specified in RFC 3986: <http://tools.ietf.org/html/rfc3986>
