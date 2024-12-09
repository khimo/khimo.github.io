---
title: Send push notification from a BLI
description: Configure a macro to send push notifications.
layout: pagetoc
---

### Introduction
The BeoLiving Intelligence allows sending *push notifications* to all devices for a single user or to all devices of all users.

> Push notifications work on users configured on the BeoLiving Intelligence. These user may be manually configured or password-less users.

> Make sure the BeoLiving Intelligence and BeoLivin App are up-to-date.

### BeoLiving App: Identify the connected user.

> These instructions must be followed with the BeoLiving App connected locally to the BeoLiving Intelligence. Once configured, push notifications will work locally and remotely.

1. Open the app and go to Settings > Devices and select your BeoLiving Intelligence.
1. Click on MORE INFO.
1. A dialog will appear, which includes the *connected User*. This information will be used for macro configuration on the BeoLiving Intelligence.

### BeoLiving Intelligence: configure the macro.

1. Create a new macro.
1. Add a new System command.
1. Select the **BLI** system, and the **NOTIFY** command.
1. Configure the **TITLE** and **BODY** parameters.
1. Configure the **LEVEL** parameter. A *Normal* notification will be shown for a couple of seconds, while a *Critical* notification will remain visible until manually dismissed and will trigger an alarm sound.
1. Configure the **USER** parameter, selecting the user identified on the BeoLiving App.
