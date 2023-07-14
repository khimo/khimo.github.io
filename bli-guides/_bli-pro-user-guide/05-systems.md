---
title: Systems
layout: pagetoc
---

The systems settings is for setting-up systems connected to _BLI PRO_. BeoLink system and _HA_ systems are ‘systems’. 
> Example of supported systems are: Nest, Philips Hue, Lutron, KNX. Check [Systems Drivers PRO](https://khimo.github.io/help_drivers) page to know all _HA_ systems that _BLI PRO_ supports.

Each system has in _BLI PRO_ a correspondent driver. There are two driver types:

+ _Native driver_,  included in _BLI PRO_ firmware and ready to be added to your _BLI_.
+ _External driver_, located in our cloud. _BLI PRO_ will download and install the external driver if desired.

In this section, only _Native drivers_ will be included. Go to [Install external drivers](https://khimo.github.io/bli-guides/bli-pro-user-guide/#advanced) for more information.

### System add

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/system-add.png" class="img-fluid" alt="System add page"/>
</div>
<br>

Select "**+**" sign to add a new _HA_ system from the drop down list and click on _Add system_. A System may be added in a specific _Area/Zone_ if it only serves functions there. If the system serves more zones it may be added to the _Main/global_ zone. Any of the supported 
systems can be added, except internal systems, which only appear once in the installation, such as _BeoLink_ and _Virtual Resources_ that are 
added by default. When selecting a system added to a certain zone, it's possible to select another zone in the _Zone drop down list_, by which the system is moved to that zone. A system can be renamed and its configuration and connection settings can be changed. 
> Systems are assigned to 
zones by the installer, but they are invisible in the users interface. For example, assigning a System to a specific zone could be used by the installer to locate system hardware in the installation.

### Connection settings

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/system-settings.png" class="img-fluid" alt="System settings page"/>
</div>
<br>

Connection settings depend on each system. Examples of Connection settings are: 
+ Connection type
+ Login
+ Password
+ Host
+ Port
+ Check server certificate

> For specific details on different systems please refer to the online help. The default values must be changed according to the settings used in the installation. 

Press _Apply_ button to confirm settings.

### System status icons

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/system-status.png" class="img-fluid" alt="System status bar"/>
</div>
<br>

For each system installed, a text string icon is shown in the bottom of the screen. The status of each system is indicated by the colour of the 
background of the text string icon. 

<table class="table">
  <thead>
    <tr style="color: #eb5946" >
      <th scope="col" style="width: 50%">Color</th>
      <th scope="col" style="width: 50%">State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Green</td>
      <td>Online</td>
    </tr>
    <tr>
      <td>Orange</td>
      <td>Connecting</td>
    </tr>
    <tr>
      <td>Red</td>
      <td>Error</td>
    </tr>
    <tr>
      <td>Grey</td>
      <td>Synchronizing</td>
    </tr>
  </tbody>
</table>

This gives a quick status indication on each system. Moving the mouse pointer to each icon displays a pop-up that shows specific logs for that system. 
> If a system cannot connect, the system logs should be checked for information about the problem.