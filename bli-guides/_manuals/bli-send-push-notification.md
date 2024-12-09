---
title: Sending Push Notifications from a BeoLiving Intelligence  
description: Learn how to configure macros to send push notifications using the BeoLiving Intelligence and BeoLiving App.
layout: pagetoc  
keywords: BeoLiving Intelligence, push notifications, BeoLiving App, macro programming, home automation, alerts, customized messages, Khimo, system command, NOTIFY command, critical notification, Android, iOS, home security
---

## Introduction

The **BeoLiving Intelligence** system allows you to send *push notifications* to the **BeoLiving App** through macro programming. These notifications can target all devices associated with a specific user or all users across their respective devices.

Push notifications are useful for receiving alerts about events in your home, such as someone being at the front door or a triggered burglary alarm. You can customize messages to provide detailed status updates of your home at any given time.

**Important Considerations:**

*   Push notifications are only effective for users configured on the BeoLiving Intelligence. Users can be configured manually or set up without a password.
*   Ensure that both the BeoLiving Intelligence and BeoLiving App are updated to the latest versions.
*   **Push notifications currently do not work for users who are only using cloud access (remote access via Khimo).**

### Identifying the Connected User in the BeoLiving App

> These instructions require a local connection between the BeoLiving App and the BeoLiving Intelligence. Once configured, push notifications will function both locally and remotely.

1. Open the BeoLiving App.
2. Navigate to **Settings** > **Devices**.
3. Select your BeoLiving Intelligence.
4. Tap on **MORE INFO**.
5. A dialog will display the *connected user*. Note this user, as it will be needed for macro configuration on the BeoLiving Intelligence.

### Configuring the NOTIFY Macro in BeoLiving Intelligence

1. Create a new macro.
2. Add a new **System Command**.
3. Select the **BLI** system and then choose the **NOTIFY** command.
4. Configure the **TITLE** and **BODY** parameters for your notification.
5. Set the **LEVEL** parameter:
    *   **Normal:** The notification will be displayed briefly.
    *   **Critical:** The notification will persist until manually dismissed and will trigger an alarm sound [1].
6. Set the **USER** parameter by selecting the user identified in the BeoLiving App.

> The notification will be sent to all devices where the user is logged in.

## Sending Notifications to All Users

You can send notifications to all users connected to the system using the **NOTIFY ALL USERS** command.

1. Create a new macro or modify an existing one.
2. Add a new **System Command**.
3. Select the **BLI** system and then choose the **NOTIFY ALL USERS** command.
4. Configure the **TITLE**, **BODY**, and **LEVEL** parameters as needed.

## Notes on Critical Notifications (Android)

\[1] The behavior of *Critical* notifications on Android devices may vary. Some devices will always play a sound for critical alerts, while others may not. The BeoLiving App for Android offers a workaround in **Settings**: "Force volume on critical". When enabled, and with the necessary Android permissions granted, the BeoLiving App will set the device's notification volume to 100% for critical notifications, even in Do Not Disturb mode.

## Disclaimer

Our solution relies on cloud communication and the push notification services provided by Android and iOS. While we strive to ensure reliable notification delivery, inherent limitations of push notification systems and cloud solutions mean that delivery cannot be guaranteed. It is strongly recommended to have a backup notification method for essential alerts and to avoid relying solely on these notifications for critical situations.
