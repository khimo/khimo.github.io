SmartHouse SH2
===============

Connection to a SmartHouse SH2 system
--------------------------------------

Connection to a SmartHouse SH2 system is done via a Modbus
interface. The following configuration is needed:

 + **Host**: The IP address or host name of the device.
 + **Port**: The port number where the device is waiting for connections (default: 23).

*Remark:* when loading different configurations it may be necessary to reboot the Smart-House system to reestablish connection with it.


Resources
---------

The supported resource types are:

 + **Button**: buttons and digital inputs.
 + **Dimmer**: a light dimmer.
 + **Shade**: a single shade.

Resource address format
-----------------------

Resource addresses use relative Modbus address.

SmartHouse configuration tool, (*SH Tool*) can save the Modbus
configuration map into a CSV file (this is found in the Program setup
menu). The relevant entries in the CSV file are the lines containing
the keywords `function status` or `movement position`.

The following is an example line in the generated Modbus map CSV file:

`,(Fx) Root - Light function_Function status,HREG,400711,unsignedShort,`

The 6 digit number `400711` is the absolute Modbus address. The
relative Modbus address is absolute address without the 3-digit
prefix. In this case, it is `711`.

All address formats are suggested as tooltips on the address field.

| Resource type    | Address format                                          | Examples                    |
|==================|=========================================================|=============================|
| Button           | Function status                                         | `1`                         |
| Dimmer           | Function status                                         | `1`                         |
| Shade            | Function status, Movement position                      | `1,1`                       |

Commands and events
-----------------

+ **Button**
   - **PRESS**: Toggles button state.
   - **ON**: Sets resource state to one or captures event on given state.
   - **OFF**: Sets resource state to zero or captures event on given state.
+ **Dimmer**
   - **SET**: Sets dimmer level (in percentage) or captures event on set level.
+ **Shade**
   - **RAISE**: Moves shade to upper position.
   - **LOWER**: Moves shade to lower position.
   - **STOP**: Stops shade on current position.
   - **SET**: Sets shade level (in percentage) or captures event on set level.
