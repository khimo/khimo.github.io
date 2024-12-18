---
title: LaMetric Time
layout: drivertoc
keywords: LaMetric Time, Clock
description: LaMetric Time (Community, build by Brad Smith)
---
## LaMetric Time (Community)

Allows display of notifications and alerts on a LaMetric Time device. Additional resources allow interaction
with the native apps.

The driver, crafted by Brad Smith, has its original code published at [LaMetric-Driver](https://github.com/usefulfish/LaMetric-Driver). We sincerely appreciate Brad's contribution!. 

### Connection to the device

You need to add one instance of the driver for each LaMetric device. Each driver instance
will expose resources for the apps on that device via resource discovery.

The Time device does not support setting a static IP address directly, you must either use
the advertised network name or an IP address you assign. To find the network name use the smartphone app and select
*Wi\-Fi* under *Settings* and the name is visible under *Local Domain*. Alternatively assign the device a network name
or static IP using your router.

Connection settings are:

- **La metric time api key**: This can be obtained by accessing the settings for the device from the smartphone
  app and requesting a key under *Device API Key*.
- **La metric time host**: IP address or network name of the LaMetric device.
- **Poll interval**: The number of seconds between polling for resource state updates. Ideally
  keep polling to a minimum.
- **Check server certificate**: This should be turned off.

### Available Resources

- **\_LAMETRIC TIME**: A LaMetric Time device allowing notifications and basic settings.

This is the main resource for the device. It allows sending notifications, basic operation similar to the
the buttons on the device and control of some simple settings.

Control of the apps is achieved though separate app resources. The supported resource
types are:

- **\_CLOCK APP**: interaction with the native alarm clock app.
- **\_TIMER APP**: interaction with the native countdown timer app.
- **\_STOPWATCH APP**: interaction with the native stopwatch app.
- **\_RADIO APP**: interaction with the native radio app.
- **\_WEATHER APP**: interaction with the native weather app.
- **\_3RD PARTY APP**: interaction with a generic app from the LaMetric Market. No app specific commands are available.

### Resource addresses and discovery

Resource discovery is required because of the way in which the device
allocates addresses to applications. The primary device and all installed apps are listed.

The unique address for an app can change if you delete the app from your device
and re\-install it. If this happens you will need to use the resource discovery again to find the new address
and then update it in the resource list.

### Resource Events

The LaMetric Time does not support events over its API, but the driver will poll for
changes and raise appropriate state update events as expected. As events only happen after polling
there could be some delay.

### Resource Commands

#### Device Notifications

There are two commands which display notifications: a basic one with minimal parameters to easily send a simple
notification, and an enhanced one giving the full range of customization.

*\_LAMETRIC TIME*

- **\_NOTIFY**: Display a simple message.
    - *\_NOTIFICATION PRIORITY*: Control how the notification priority is handled.
      - INFO: This level of notification should be used for notifications like news, weather, temperature, etc. This
      notification will not be shown when screensaver is active.
      - WARNING: Should be used to notify the user about something important but not critical. For example, events like
      “someone is coming home” should use this priority when sending notifications.
      - CRITICAL: The most important notifications. Interrupts notification with priority INFO or WARNING and is
      displayed even if screensaver is active. Use with care as these notifications can pop in the middle of the night. Must
      be used only for really important notifications like notifications from smoke detectors, water leak sensors, etc. Use
      it for events that require human interaction immediately.
    - *\_MESSAGE*: The text of the message to display.
- **\_NOTIFY WITH DETAILS**: Display a customized message. Arguments are populated with defaults
which match the simple message command.
    - *\_MESSAGE*: The text of the message to display.
    - *\_MESSAGE ICON*: Icon id or base64 encoded binary. There is a huge array of possible options. Choose
    here: [LaMetric Icons](https://developer.lametric.com/icons).
    - *\_MESSAGE REPEAT*: The number of times message should be repeated. If this is set to 0, notification will
    stay on the screen until user dismisses it manually.
    - *\_NOTIFICATION LIFETIME*: Lifetime of the notification in seconds. Default is 2 minutes.
    - *\_NOTIFICATION PRIORITY*: As above.
    - *\_NOTIFICATION TYPE*: Indicates the nature of the notification. This defines an optional "announcing"
    icon which is displayed before the message is displayed.
        - NONE: No notification preamble will be shown.
        - INFO: "i" icon will be displayed prior to the notification. Means that notification contains information,
        no need to take actions on it.
        - ALERT: "!!!" icon will be displayed prior to the notification. Use it when you want the user to pay attention
        to that notification as it indicates that something bad happened and user must take immediate action.
    - *\_SOUND CATEGORY*: Indicates the category of any sound id selected.
        - ALARMS: The sound id supplied should be one of the *alarm sound ids* listed below.
        - NOTIFICATIONS: The sound id supplied should be one of the *notification sound ids* listed below.
    - *\_SOUND ID*: Should be one of the ids listed below for the selected sound category e.g. *alarm1* or *dog* etc.
    - *\_SOUND REPEAT*: Defines the number of times sound must be played. If set to 0 sound will be played until
    notification is dismissed.

Full list of **alarm sound ids** currently defined on the device is: alarm1, alarm2, alarm3, alarm4, alarm5, alarm6, alarm7, alarm8,
alarm9, alarm10, alarm11, alarm12, alarm13.

Full list of **notification sound ids** currently defined on the device is: bicycle, car, cash, cat, dog, dog2, energy, knock\-knock,
letter\_email, lose1, lose2,
negative1, negative2, negative3, negative4, negative5,
notification, notification2, notification3, notification4,
open\_door, positive1, positive2, positive3, positive4, positive5, positive6,
statistic, thunder, water1, water2, win, win2, wind, wind\_short.

#### Device General Commands

The *\_LAMETRIC TIME* resource also supports the following app and settings commands:

- *\_LAMETRIC TIME*
    - **\_NEXT APPLICATION**: Make the next app visible. Equivalent to pressing the right button on the device.
    - **\_PREV APPLICATION**: Make the previous app visible. Equivalent to pressing the left button on the device.
    - **\_SET MODE**: Set the app switching mode. This might be required if you want a app to remain visible.
        - *\_MODE*: The app switching mode to set \- see resource states below.
    - **\_SET VOLUME**: Set the overall volume of the device. This will affect the volume for notifications, alarms as well as the radio.
      - *\_VOLUME*: The overall volume to set.
    - **\_SET SCREENSAVER**: Allows the device to activate the screensaver. This might be required because app switching
    might not work as expected when the screensaver is active.
        - *\_ENABLED*: True to allow the screensaver, false to disable it.

#### Interaction with apps and app switching

You can switch forward and backwards between apps using the commands on the Time device resource. Alternatively you can select
a specific app directly on the resource for that app using its *\_ACTIVATE* command.

Some apps have additional commands:

- \_CLOCK APP
    - **\_ACTIVATE**: Makes the clock the currently displayed app.
    - **\_ENABLE ALARM**: Turn the alarm on or off. This will act on the *first* alarm.
        - *\_ENABLED*: Turns on the alarm if set to true, turns it off otherwise.
        - *\_WAKE WITH RADIO*: If true, radio will be activated when alarm goes off.
    - **\_SET ALARM**: Change the action for the alarm at the specified time. This command will create
    a new alarm or modify an existing alarm if one already exists matching the supplied time.
        - *\_ENABLED*: Turns on the alarm if set to true, turns it off otherwise.
        - *\_TIME*: Local time in format "HH:mm" or "HH:mm:ss".
        - *\_WAKE WITH RADIO*: If true, radio will be activated when alarm goes off.
    - **\_SET CLOCKFACE**: Select the type of icon displayed when the clock is visible.
        - *\_TYPE*:
            - NONE: No icon is displayed.
            - WEATHER: Displays an icon representing the current weather conditions for your area.
            - PAGE\_A\_DAY: Displays a calendar icon or an indicator for special days in your area.
- \_TIMER APP
    - **\_ACTIVATE**: Makes the timer the currently displayed app.
    - **\_START**: Start the timer.
    - **\_PAUSE**: Pause the timer.
    - **\_RESET**: Reset the timer.
    - **\_CONFIGURE**: Set the duration of the timer.
        - *\_DURATION*: Time in seconds.
        - *\_START NOW*: If set to true countdown will start immediately.
- \_STOPWATCH APP
    - **\_ACTIVATE**: Makes the stopwatch the currently displayed app.
    - **\_START**: Start the stopwatch.
    - **\_PAUSE**: Pause the stopwatch.
    - **\_RESET**: Reset the stopwatch.
- \_RADIO APP
    - **\_ACTIVATE**: Makes the radio the currently displayed app.
    - **\_PLAY**: Start the radio.
    - **\_PLAY CHANNEL**: Start a specific radio station.
        - *\_INDEX*: The station to play.
    - **\_STOP**: Stop the radio.
    - **\_NEXT**: Next radio station.
    - **\_PREV**: Previous radio station.
- \_WEATHER APP
    - **\_ACTIVATE**: Makes the weather the currently displayed app.
    - **\_FORECAST**: Display the weather forecast.
- \_3RD PARTY APP
    - **\_ACTIVATE**: Makes this 3rd party app the currently displayed app.

### Resource States

The Time resource has the following states which are updated on each poll:

- \_LAMETRIC TIME
    - **\_MODE**:
        - *MANUAL*: Click to scroll mode, when user can manually switch between apps.
        - *AUTO*: Auto\-scroll mode, when the device switches between apps automatically.
        - *SCHEDULE*: Mode when apps get switched according to a schedule defined using the smartphone app.
        - *KIOSK*: Kiosk mode when single app is locked on the device.
    - **\_VOLUME**: The current overall volume on the device.
    - **\_SCREENSAVER ENABLED**: Indicates whether the screensaver is allowed to activate. When the screensaver is active activating
    an app will not work.

All the app resources simply expose a single state which indicates whether or not the app if currently visible. Only
one app can be visible at a time and the state is only updated on polling.

- \_CLOCK APP, \_TIMER APP, \_STOPWATCH APP, \_RADIO APP, \_WEATHER APP and \_3RD PARTY APP
    - **\_VISIBLE**: Indicates whether this app is currently displayed on the device.

### Driver Compatibility

This driver is tested against LaMetric Time firmware **v2.3.0**, but should be fully compatible with **v2.1.0**.

For the older **v2.0**, the driver should still work but with limited functionality. You should expect the *\_LAMETRIC TIME*
notifications and most settings to work, but all apps, app related commands and screensaver settings are not
supported in this version.

### Change Log

#### v1.0 | 30/10/2024 | 4f0a9cfb8e6527badfdb771166bf33d5cdf64987

  - Initial version
