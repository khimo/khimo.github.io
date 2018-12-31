---
title: Setup
layout: pagetoc
---


#### Date & Time

Correct time setting is important for the monitoring of events, astronomic clock events and for error log time stamping.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-date-time.png" class="img-fluid" alt="Date and Time page"/>
</div>
<br>

##### Date & Time settings 

+ **Date**: Date corresponing to the selected **Time zone**.
+ **Time**: Time corresponing to the selected **Time zone**.
+ **Time zone**: Setting for the time zone is chosen from the drop down list. Choices are made based on an appropriate match of "Continent"/"City".

##### Location settings (Astronomical Clock and Location events)

The location settings are used by the _BLI PRO_ to calculate time related events (e.g. sunrise and sunset). Events can then be set relative to this. Latitude and 
longitude are the settings for the astronomic clock. The settings are in decimal degrees. Values are entered in format ‘degrees.minutes’. 
Seconds are only used to round the minute-value.
Positive values are for North and East.
Negative values are for South and West.

#### Integration Protocols

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-integration-protocols.png" class="img-fluid" alt="Integration protocols page"/>
</div>
<br>

Home Integration protocol allow other devices to interact with _BLI_. This protocol is used by mobile applications or by other 
home automation controllers.

Home Integration protocols provide two-way control of all resource types. This protocol can be enabled on the local network, with mandatory 
authentication. You should provide a TCP port (default port is 9100). Port numbers below 1024 are reserved for standard TCP services, so use 
values above this range.

#### Network

The network page contains the _BLI's_ network connectivity configuration.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-network.png" class="img-fluid" alt="Network page"/>
</div>
<br>

The following options are available:

+ **Hostname**: _BLI's_ name as it's found in the LAN.
+ **DHCP**: Enable/Disable _DHCP_ mode. Per factory default, _DHCP_ mode is enabled.
+ **Address**: If _DHCP_ is disabled, the static _BLI_ network address could be set in _Address_.
+ **Mask**: Mask related to the _BLI's_ LAN.
+ **DNS Server**: _DNS Server_ network address in the LAN.
+ **Gateway**: Gateway address in LAN.

> The settings must be confirmed by clicking on _Apply_.

#### Khimo cloud link

_BLI_ is configured from factory to be connected to _Khimo's_ cloud service. This service is used to enable features like 
voice control (e.g.: Amazon Alexa) and remote access to your installation (with _BLI PRO_ mode). If this
 service is disabled those features will no longer work.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-cloud-access.png" class="img-fluid" alt="Khimo cloud link page"/>
</div>
<br>

Access restrictions regarding which zones will be able to be controlled could be set from the selection of a specific _BLI_ user. This means 
that all accounts will share the same zone access restrictions as the selected user. Zone access restriction could be modified in the
[Interfaces](https://khimo.github.io/bli-guides/bli-pro-guide/#interfaces) page.

To remotely access your installation through _BLApp_, remote access must be enabled in the application.

At the bottom of this page, a list with the current remote users is displayed.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-cloud-users.png" class="img-fluid" alt="Khimo cloud link users page"/>
</div>
<br>

##### Enable remote access in BeoLiving App

To enable _Remote Access_ in the _BLApp_ you must:

1. Go to the _Settings_ menu and select your _BLI_.
1. Go to _Device Settings_ and press _Request Remote Access_.

The next video shows interactively how to accomplish this feature:

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9R8mR-LxnXE?autoplay=0&loop=1&playlist=9R8mR-LxnXE"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

#### System modes

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/setup-system-modes.png" class="img-fluid" alt="System modes page"/>
</div>
<br>

_BLI PRO_ can have any number of System modes, which can be used to enable or disable the execution of macros, as follows:

+ System modes can be activated by the _BLI PRO_ command SET MODE.
+ Any number of modes can exist, but only one can be active at any given time.
+ A macro can have any number of modes, and a mode can be set to any number of macros.
+ A macro with no mode set will behave normally.
+ If a macro has one or more modes set, then it will be triggered by events only if one of those modes is active.

>> Typical examples of system modes: Vacation and Normal. You can set up a button to toggle between normal and vacation modes. Macros for setting thermostats, or for controlling lighting and shades may be assigned individually to each mode.

#### Units

The systems temperature unit can be configured to be Fahrenheit or Celsius, affecting all the clients connected to the _BLI PRO_. For example, if the current temperature unit is Fahrenheit, then all the thermostats will report the temperature in these units to all connected clients.

This setting only affects what is displayed on the _BLI PRO_ user interface. It does not affect the units displayed on the actual thermostats.