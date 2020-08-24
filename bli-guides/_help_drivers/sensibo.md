---
title: Sensibo
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
Sensibo
==============

Sensibo is a system that connects to any air conditioning through IR commands in order to give you
all control over it.

Sensibo conserves states and detects the signals of the original remote control, so you will always
have information of current and target temperatures as the mode and on/off state.


Device setup
------------

You will first have to setup your device to be connected with the air conditioning.
If you haven't yet, go download the 'Sensibo' app at App Store or Google Play, or in the sensibo
web page for [iOS](http://sensibo.com/pages/ios) and [Android](http://sensibo.com/pages/android).

Just follow the simple steps on the app to get started.


Connection Settings
-------------------

This driver connects to the REST API of the Sensibo system, wich uses an API KEY, which you can generate at
[the sensibo page](https://home.sensibo.com/me/api). Be careful not to share it with anyone, this key is the
way sensibo has to recognize authorized devices on internet to use your specific air conditioning.

Place your API KEY at Connection Settings of the driver.

The polling delay time is a number represented in seconds, which determines the time between two state refreshes.
The lower it is, the faster it will sync states.


Resources and commands
----------------------

The only resource there is, is AC Thermostat which represents a Sensibo device. It will be synchronized to the values
of the sensors of that device as so to the IR. So you will get themperature measurements in real time, and you will be
able to run commands over it:

  - _SET SETPOINT_ in order to choose the target temperature of the AC;
  - _SET FAN AUTO_ to enable or disable Fan Auto Mode on the AC;
  - _SET MODE_ will set any of Auto, Heat, Cool, Dry or Off modes.

