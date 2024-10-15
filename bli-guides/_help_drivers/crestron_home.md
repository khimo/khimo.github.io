---
title: Crestron Home
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Crestron Home, HTTP, Dimmer, Switch, Scene, BUTTON
description: Driver for managing Crestron Home devices as Dimmer, Switch and Scene (BUTTON) resource types.
---
Crestron Home
===============================

This driver supports communication with the Crestron Home, allowing the
control of different types of devices and scenes.

Connecting to the system
--------------------------------

Connection to the system is performed via an HTTP connection with the
Crestron Home. The following configuration is needed:

 1. *Authentication token*: An authentication token provided by the
Crestron Home. This token can be obtained from the Crestron Home
Setup app on Installer Settings > System Control Options > Web API Settings.
Note that if this token is updated the BLI connection to the
Crestron Home will fail until this parameter is also updated.
 2. *Host*: The hostname or IP address of the Crestron Home.
 3. *Poll interval*: The number of seconds to wait between status
requests.

The Crestron Home driver polls every device and scene on the each
*Poll interval* seconds for status updates. If the system has a low
number of resources, then this parameter may be set to a small value,
although anything below 5 is not recommended.

Available resources
--------------------------------

The Crestron Home driver supports commanding the following devices:

+ **Dimmer**: supports on/off control and dimming.
+ **Switch**: supports on/off control.
+ **Scene**: supports recalling the scene.

Dimmers are mapped to a DIMMER Standard Resource.
Switches and Scenes are mapped to BUTTON Standard Resources.

### Changelog

 - v1 | 24/4/2023.

    First version
