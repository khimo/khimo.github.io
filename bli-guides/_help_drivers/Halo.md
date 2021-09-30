---
title: BeoRemote Halo
layout: pagetoc
---

# BEOREMOTE HALO

## Introduction 
The Beoremote Halo is a remote control designed to work out-of-the-box with B&O sound systems. By integrating it with the BeoLiving Intelligence the Halo is the ideal instrument for you to control your Home's equipment, such as lights, shades, and more.

The Halo's interface, controllable through the wheel and touch screen, consists of pages created and customized by the user, and on each page, buttons can be added that will change the Halo's functionality depending on their **behavior**.

## Connecting

The Beoremote Halo should be previously configured and connected to the network using the Bang&Olufsen app. Devices are automatically discovered and should simply be added as BLI resources on the BLI's Setup website.

### Adding the resource
A Halo should be added as a resource in the *Resources* tab, under the *B&O Halo Remote* system. If the device is connected to the same network as the BLI, it will appear after clicking *Show discovered resources*.

## Halo configuration
To configure the Beoremotes go to the *Interfaces* tab. Under *B&O Halo Remote*, the added Halos will appear with their corresponding configurations to be set. Apart from the resource's name and zone, the default page can be set here, with a dropdown menu, either the audio controls or a custom page can be chosen. The dafault page will be the first one that is shown when approaching the Halo, the default button of the default page will be always focused while Halo is on Standby, if in the selected page no button is specified as default, the first button will automatically be chosen.

The configuration consists of **Pages** and **Buttons**.

### Pages
A page is what the Halo will show in its screen at a given time, a maximum of 3 home automation pages can be configured, and can be navigated by scrolling in the Halo's screen. Regarding pages, the supported actions are:

 - *Add Page*: This buttons adds a new page, by doing this a new page appears at the end of the interface page and the option to choose the name is available.
 - *Remove*: Removes selected page.
 - *Copy* and *Paste Page*: Allows to duplicate pages, *Copy* will copy the selected page and *Paste Page* will add it to the page's list.
 - *Move*: Pressing and dragging the 3 lines in a page will allow to set the order of the pages.

Each page contains buttons, as described in the following section.

### Buttons
There can be a maximum of 8 buttons per page, each button is customizible and, when selected, they determine the functionalities of the remote. Supported actions for the buttons are:

 - *Add Button*: Pressing "+" will add a button to the selected page. Added buttons appear horizontally in each page and by clicking them, configuration for each button is revealed.
 - *Delete Button*: The trash can icon deletes the selected button.
 - *Clone Button*: The circled "+" icon allows to duplicate the button, the copy will appear at the end of the buttons in the same page.
 - Set *Title* and *Subtitle*: A maximum of 16 characters is allowed for both titles and subtitles.
 - *Icon*: A dropdown menu with many options allows to choose the icon that will best describe the buttons function. The option *Change to text* is available where the icon can be a short text of a maximum of 5 characters.
 - *Default*: When checked, this option sets the selected button as the default for the page, this means that this button will be the one focused while Halo is on standby if its page is chosen as the default.
 - *Behavior* and *Resources*: Resources and behaviors are chosen, more about them will be explained below.

The **behavior** will state the purpose of the remote's button, this means that each behavior will cause the remote to work differently to better adapt to the resource type. Currently, the offered behaviors are:

 - *Dimmer*: Wheel dimmerizes or turns on/off lights (whichever applies). Raise/On and Lower/Off correspond to a clockwise and anticlockwise rotation, respectively. The behavior Dimmer - Color is also available where the wheel changes the color of lights by updating the hue.
 - *Shade*: Opens and closes shades with a clockwise and anticlockwise rotation, respectively. A strong turn will fully open/close shades, a gentle turn will cause shades to slowly advance and stop. If shades with tilt (or only tilt) are present, another button with behavior Shade - Tilt should be created to manage it.
 - *Scene*: Selecting the button causes selected scenes to fire.
 - *Thermostat*: Thermostats work with three buttons that have different behaviors. The first one is MODE, in which the mode is chosen between those available in the thermostat, by moving the wheel. The second and third one are SETPOINTS, one for COOL and one for HEAT, where the wheel will change the setpoint of the selected mode.
 - *Handle by custom macros*: This allows the user to create a custom behavior in *Macros*. The Halo offers events like "WHEEL TURNED", "PRESSED BUTTON", "ONLINE" and so on as well as commands to set title, subtitle and wheel level among others. An example of how to set this up can be found on the Khimo documentation website.

The **Resources** dictate which resources will be affected by the button. The button can control any amount of resources, it is recommended to use resources of the same kind in a single button (eg: dimmable/non-dimmable), nevertheless, any kind is supported. 

Each behavior acts differently towards mixed resource types when dealing with multiple resources.

**Dimmers** can be of 3 types: dimmable with/without state and non-dimmable. When all of them are controlled together, moving the wheel means something different for each type. The dimmables with state will raise/lower with their current state as starting point, dimmables without state will raise/lower with the mean of the levels of all the other dimmables with state as starting point. Non-dimmables will turn on when the aforementioned mean is above 50% and off when it's below.

Regarding **Shades**, they can have different capabilities, the ones taken into account here are, only raise/lower with/without state and set level with/without state. Mixing these together would mean that every shade behaves as a raise/lower without state. The same would happen with different types of tilt. Lastly, only one **Thermostat** and **Scene** is allowed per button.

## Automatic configuration

It is possible to create an automatic configuration for each Halo, relative to the room where it is located. It is enabled by checking the "Use automatic Halo configuration" option. BeoLiving Essential users always use the automatic configuration. 

Setting this option will get the available scenes and resources of the current room and it will try to complete the 3 pages (8 buttons each) in this order:

1. Local scenes that are not shown in dimmer,shade or thermostat view
2. Local dimmer scenes, a master dimmer and buttons for each dimmer
3. Local shade scenes, a master shade and buttons for each shade
4. Local thermostat scenes, thermostat control with MODE and SETPOINTS
5. Global scenes


### Changelog

#### v0.1 | 02/09/2021
 - First version supporting the integration of the Beoremote Halo with the BLI.