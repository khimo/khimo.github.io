---
title: Tools
layout: pagetoc
---


_Tools_ menu contains a set of tools for different purposes such as debugging, error reporting, firmware update, access to advanced features, direct 
access to the _Webpanel_ and a Logout option.

Below, the sub-menus showed after pressing _Tools_ menu option are described.

### Monitor

_Monitor_ shows a list of the latest actions which have occurred - events, macros and commands.
The menu can be used for the following:

+ To find the precise addressing of a specific component. If a keypad, a sensor, etc. is pressed on the _HA_ system, the event generated will be 
monitored by the tool.
+ To check whether macros and the belonging commands are working as intended.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/monitor.png" class="img-fluid" alt="Monitor"/>
</div>
<br>

On the upper-right side of _Monitor_'s page, a filter tool is located as to facilitate the processing of _Monitor_ information.

### Resource states

_Resource states_ shows a table of all resources in the installation and their current states. For each row, you may find the resource name in the
first column and all states in the second one. 

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/resource-states.png" class="img-fluid" alt="Resources States"/>
</div>
<br>

In the upper-right you may access a _Filter_ tool where you can filter by resource name or state.

### Log

_Log_ shows system messages concerning the interaction between the _BLI PRO_ and external devices connected.
> E.g. application errors and critical system errors.

The log menu can be used to:

- Verify the connection to external devices (errors will be shown).
- Check for incoming _HIP_ connections.

The size of the system log is limited, which means that old messages will be deleted when new messages appear.

### Service report

When any hardware or software error is experienced it is possible to create a service report containing the necessary information about your _BLI_ needed to solve any potential issue.

You must fill the form shown on the page. This information is essential to reproduce and fix any issues you are experiencing.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/service-report.png" class="img-fluid" alt="Service report"/>
</div>
<br>

Service reports are created and downloaded when the _Save_ button is clicked.

### Firmware

The Firmware page allows to check for and apply available updates for the _BLI_ Firmware. There are two ways to perform such updates:

+ Manually uploading a _BLI_ firmware file.
+ Online update through the Internet. 

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/firmware.png" class="img-fluid" alt="Firmware update"/>
</div>
<br>

#### Manual update

Press the _Choose File_ button to select your local _BLI_ firmware file. This will automatically be uploaded to _BLI_ and the update should begin immediately.

#### Online update

To perform an online update of _BLI_'s firmware you must ensure that the LAN network has Internet connection.

In this page you will find:

+ **Check for the latest version**: After pressed, the latest official Firmware version will be displayed, if available.
+ **Start online update**: If a new Firmware version is available for download, pressing this button will start the Firmware download and installation process.
+ **Automatic updates**: Enable/Disable automatic _BLI_ Firmware updates. If this option is selected, then the _BLI_ firmware will be automatically kept up to date.

### Go to Webpanel

Direct access to _Webpanel_.

### Logout

Logout of the current logged in user.

### Advanced

#### Programming report

_Programming report_ is an effective tool to find which _Macro_ interacts with a specific _Resource_ or _System_, this is really useful when _BLI PRO_ 
contains many of them in its configuration. 

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/programming-report.png" class="img-fluid" alt="Programming Report"/>
</div>
<br>


Left column features each pair of _Area/Zone_ to contain at least one resource or system. For each resource or system in a column, the next 
information will be displayed:

##### Macros being fired by this resource/system

The table contains a row for each Macro where an event of resource/system is involved.

+ **Macros**: Name of all macros that have this resource/system as an event.
+ **Events on area/zone/name**: Resource/system's events in this macro.
+ **Commands**: Commands of this macro.

##### Macros that execute commands on this resource/system

The table contains a row for each _Macro_ where a command on resource/system is involved.

+ **Macros**: Name of all _Macros_ that execute commands on resource/system.
+ **Events**: Events in this _Macro_.
+ **Commands on area/zone/name**: Commands on resource/system in this _Macro_. 

#### Custom driver editor {#driver-editor}

_BLI PRO_ offers the option to load your own driver into your configuration. Drivers must have a specific format and must be programmed in _Lua_ 
language. For more information regarding development of _BLI PRO_ custom drivers refer to _Driver Development Guide_.

#### Install external drivers {#external-drivers}

As explained in [Systems](#systems) section, external drivers are located in our own repository from where they can be installed in your _BLI 
PRO_ if internet connection is available.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/external-drivers.png" class="img-fluid" alt="External drivers"/>
</div>
<br>

The list of all available external drivers could be obtained by pressing _Update drivers list from remote repository_ button and _Show only 
installed drivers_ button will display external drivers currently installed. Also, next to the mentioned buttons, a _Filter_ tool is placed for 
filter by driver name.

The table showing external drivers available/installed displays:

+ **Name**: External driver name.
+ **Description**: Short description of external driver.
+ **Available version**: Version of external driver available in repository.
+ **Installed version**: Version of external driver currently installed.
+ **Action**: _Install_ if external driver installation is desired or _Remove_ to remove it from the current configuration.

##### Install a custom driver using file

Same functionality offered in [Custom driver editor](#driver-editor) page. 