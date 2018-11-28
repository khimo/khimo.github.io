Lutron HomeWorks Interactive
============================

Connecting to a HomeWorks processor
-----------------------------------

Connections to a HomeWorks processor can be done directly on Ethernet,
RS232, or indirectly with an RS232 to Ethernet interface. This last
option is only relevant for older HomeWorks generations that had no
network interface.

For RS232, hardware flow control is recommended. Be sure to use a fully
wired RS232 cable in this case.

Resources
----------------------------

Resources on HomeWorks are keypad buttons (both physical and phantom keypads) and dimmers.

Addressing of resources of the form:

-  `processor:link:address:button` for keypads
-  `processor:link:type:keypad:button` for RF keypads
-  `processor:link:router:bus:dimmer` for H48 dimmer or switch
-  `processor:link:type:dimmer` for RF dimmer or switch
-  `processor:link:router:module:output` for RPM or GRX dimmer or switch
-  `processor:link:router:bus:dimmer` for D48 dimmer
-  `processor:link:grx:output` for Grafik Eye zones

Events and commands
-------------------

Events from HomeWorks include *button activity* and *LED activity*. Normally
you should respond to keypad button press only. The other options are
provided for advanced use and need special care.

Commands to HomeWorks are keypad button presses. This is absolutely
general since all buttons on HomeWorks are completely programmable.

Setup on the HomeWorks project
------------------------------

For direct network access, a network account must be defined in the
addressing section. This account is identified by a user and password.
Be sure to enable the necessary permissions for interaction with
BeoLiving Intelligence. BeoLiving Intelligence will need access to full keypad
monitoring and executing button presses.

Define phantom keypads for integration with BeoLiving Intelligence. BeoLink
Gateway can act on any keypad (physical or phantom), but it is
recommended to channel commands from BeoLiving Intelligence to HomeWorks via
phantom keypads, so the special functionality for integration is not
mixed with standard keypad functionality.

### LED feedback

*Advanced use only:* BeoLiving Intelligence can generate events from keypad
LED state changes. This is provided only for advanced use, where you
want to generate BeoLiving Intelligence events as a consequence of
*conditional*, *time-clock*, or other autonomous activity in
HomeWorks.

1.  Define a state variable (or True/False variable) which you will use
    in your conditionals or time clock events to signal BeoLiving Intelligence.
2.  Define a phantom keypad on the HomeWorks project, and choose a
    button for this purpose.
3.  Set the button type to *conditional*.
4.  Set the LED behaviour to *conditional*, on (for example) *preset 5*,
    type *scene*.
5.  On Preset 5, add the state variable with a desired value.
6.  Configure BeoLiving Intelligence to respond to the LED of that button going ON or OFF,
    which will be an indication that the state variable has the
    specified value.

For example, use the "Time of Day" variable with value "Day". The LED
going ON will generate an event on sunrise, and the LED going off will
generate an event at sunset on BeoLiving Intelligence.
