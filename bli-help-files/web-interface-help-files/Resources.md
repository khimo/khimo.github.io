Resources
=========

Every component of a system is mapped to a *resource*.

All resources have the following parameters:

-  *Zone*: Where the resource belongs. This is used for setting up
   BeoLiving Intelligence and for generating user interfaces.
-  *Name*: Resources should be given a name for easy identification.
-  *Type*: The types of resource available depends on the actual system. For
example, a button, a dimmer or an A/V product.
-  *Address*: A unique identification of the resource. The actual
   format depends on the system.

The most convenient way of adding resources is by using the capture
functionality. All recent activitiy on a system is recorded by BeoLiving Intelligence, and the Capture button will show that activity.

Selecting a resource on the capture list will automatically add it to
the table of defined resources.

Most systems support the capture functionality.

Standard resource types
-----------------------

While each system has its own features and details, most resources
from all supported systems fall into a few groups: buttons, dimmers,
shades, thermostats, etc.

BeoLiving Intelligence defines a set of standard resources with a basic
functionality.

For example, a *standard button* supports PRESS, HOLD and RELEASE
actions plus a status indication (an LED that can be ON or OFF).

Some systems can extend the standard button to provide extra features.

The purpose of having standard resource types is that there is a common
set of features shared by most supported systems.

This standardization allows to set up *generic macro programming*; for
example:

- When a button named "LIGHT" is pressed in any zone,
- Set the dimmer named "MAIN" on that same zone to 90% intensity.

The home may have several heterogeneous lighting systems. Having a
common feature base (for buttons and dimmers in this example) allows
to program actions for all the house with just a single macro.

This is called [Generic Programming](#/Help/Generic programming).

Importing resources
-------------------

Some drivers allow to import resources from a project file.

In these cases, an `Import Resources` button is available at the
bottom of the resources screen.

This button will open up a dialog with an option to select a project
file to import, and then a list of all imported resources.

The resources read from the file must then be added into zones. First
select a zone and then click on the `Add` option for all desired
resources.

If the table is too long, use the filter field for easier searching.
