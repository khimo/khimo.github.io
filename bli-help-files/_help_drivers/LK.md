Lauritz Knudsen, IHC/Schneider, LexControl
==========================================

IHC/LexControl programming model consists of physical input and output
devices plus function blocks. Function blocks implement the programming
of the system, and the interface between the programming and the actual
components is done by linking physical input signals to function block
inputs. Actuators can also be handled directly (dimmers and shades).

Importing resources from LK project file
----------------------------------------

The configuration tool for the controller (LK Visual) saves all the
programming and setup in an XML file with extension .VIS.

Use the `Import Resources` feature on BeoLiving Intelligence resources
screen in order to import the resources from the VIS file into each zone.

The Visual project file is absolutely necessary, since there is no way
to inspect all of the events occurring on the controller. Therefore,
monitoring information will only be available for already defined
resources.

It is also possible to extract the list of resources from the LK
controller. This works by downloading the Visual project file from the
LK contoller itself, and is equivalent to loading the project file
manually.

The supported resource types are:

 + Airlink inputs
 + Dataline inputs
 + Function block inputs:
 + Function block output
 + Dataline output
 + Airlink dimmers
 + Wired shutter
 + Wireless shutter

Events
---------------

The following list indicates which IHC activities generate a BeoLiving Intelligence event:

 + AirLink inputs and Dataline inputs:
   - **PRESS**: Input set to True.
   - **RELEASE**: Input set to False.
 + Airlink dimmers:
   - **\_RAISE**: Internal variable airlink\_dimmer\_increase set to True.
   - **\_LOWER**: Internal variable airlink\_dimmer\_decrease set to True.
   - **\_STOP**: Internal variable airlink\_dimmer\_increase or
     airlink\_dimmer\_decrease set to False.
 + Shutters:
   - **RAISE**: Shutter being raised. On a dataline (wired) shutter,
     this corresponds to the first dataline\_output within the shutter
     being set to True. On an Airlink shutter it corresponds to the
     shuttter's airlink\_shutter\_up variable being set to True.
   - **LOWER**: Shutter being lowered. On a dataline shutter, this
     corresponds to the second dataline\_output within the shutter
     being set to True. On an Airlink shutter it corresponds to the
     shutter's airlink\_shutter\_down variable being set to True.
   - **STOP**: After **RAISE** or **LOWER**, the corresponding ID being set to
     False.

Commands
-----------------

BeoLiving Intelligence commands produce the following IHC activity:

+ AirLink inputs and Datline inputs:
   - **PRESS**: Set value to True.
   - **RELEASE**: Set value to False.
   - **TAP**: logical pulse (True followed by False).
+ Function block inputs and outputs, Dataline outputs:
   - **SET**: Set value to variable.
   - **PULSE**: Logical pulse (True followed by False).
   - **TOGGLE**: Set opposite of current value.
+ Airlink dimmers:
   - **\_RAISE**: Set internal variable airlink\_dimmer\_increase being set to True.
   - **\_LOWER**: Set internal variable airlink\_dimmer\_decrease being set to True.
   - **\_STOP**: after **\_RAISE** or **\_LOWER**, set the corresponding
     variable to False.
   - **SET**: Set dimmer level, in percentage. This corresponds to setting the
     dimmer's airlink\_dimming internal variable to the given value.
+ Shutters:
   - **RAISE**: Raise shutter. In a dataline shutter, this corresponds to
     setting the first dataline\_output within the shutter to True. On an airlink
     shutter it corresponds to setting the shutter's airlink\_shutter\_up variable
     to True.
   - **LOWER**: Lower shutter. In a dataline shutter, this corresponds to
     setting the second dataline\_output within the shutter to True. On an airlink
     shutter it corresponds to setting the shutter's airlink\_shutter\_down
     variable to True.
   - **STOP**: After **RAISE** or **LOWER**, set the corresponding
     variable to False.

Resource State
--------------
+ Function-block inputs and outputs, Dataline outptus:
   - **STATE**: The state of the variable (True or False).
+ Airlink dimmers:
   - **LEVEL**: Current dimmer level (value of the dimmer's airlink\_dimming variable).
