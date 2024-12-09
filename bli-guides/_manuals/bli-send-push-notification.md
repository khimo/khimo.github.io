---
title: Send Push Notification from a BLI  
description: Configure a macro to send push notifications.  
layout: pagetoc  
---

### Introduction
The **BeoLiving Intelligence** allows users to send *push notifications* to all devices associated with a single user or to all users across all devices.

> **Note:** Push notifications are only effective for users configured on the BeoLiving Intelligence. These users can be either manually configured or password-less. Ensure that both the BeoLiving Intelligence and BeoLiving App are up-to-date.

### BeoLiving App: Identify the Connected User

> These instructions must be followed with the BeoLiving App connected locally to the BeoLiving Intelligence. Once configured, push notifications will function both locally and remotely.

1. Open the BeoLiving App.
2. Navigate to **Settings** > **Devices** and select your BeoLiving Intelligence.
3. Click on **MORE INFO**.
4. A dialog will appear displaying the *connected user*. This information will be essential for macro configuration on the BeoLiving Intelligence.

### BeoLiving Intelligence: Configure the Macro

1. Create a new macro.
2. Add a new **System Command**.
3. Select the **BLI** system and then choose the **NOTIFY** command.
4. Configure the **TITLE** and **BODY** parameters for your notification.
5. Set the **LEVEL** parameter:
   - A *Normal* notification will display for a few seconds.
   - A *Critical* notification will remain visible until manually dismissed and will trigger an alarm sound.
6. Set the **USER** parameter by selecting the user identified in the BeoLiving App.

> The notification will be sent to all devices where the login corresponds to that user.

### Notifyin all users

In addition to sending notifications to individual users, you can use the **NOTIFY ALL USERS** command to send a notification to all users connected to the system.

1. Create a new macro or modify an existing one.
2. Add a new **System Command**.
3. Select the **BLI** system and then choose the **NOTIFY ALL USERS** command.
4. Configure the **TITLE**, **BODY**, and **LEVEL** parameters as needed.
