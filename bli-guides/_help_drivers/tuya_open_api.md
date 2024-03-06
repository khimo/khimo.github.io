---
title: Tuya
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# TuyaAPI driver | Integrates tuya devices using the open Tuya API

## Connecting

To use this driver, you will need to create an account in the [Tuya IoT Platform](https://iot.tuya.com/). 

In order to do so, please follow these steps:

1. Go to Cloud->Development in the Tuya IoT Platform.
2. Click Create Cloud Project and fill the required fields.
3. In Development Method, select SmartHome.
4. In Data Center, choose the one that fits best with your location. If you are not sure which one, you can select more than one.
5. The next window will be "Authorize API Services" where you should choose at least: IoT Core, Authorization, Smart Home Scene Linkage, IoT Data Analytics, and Device Status Notification.
6. Once the project is created, go to Cloud->Development->Your Project->Overview.
7. Copy the Access ID/Client ID and the Access Secret/Client Secret.
8. Paste them in the Client id and Client secret fields in the Systems Tab of the BLI.
9. Next, you will need to link your Tuya app account.
10. In Cloud->Development->Your Project->Devices, choose Link Tuya App Account->Add App Account.
11. A QR code will appear that must be scanned with the Tuya app.
12. If the linking isn't successful, check if the data center chosen corresponds with the region on your app (if you selected more than one Data Center, you can change it in the top right, scan the code until the app account appears in the list).
13. Once this is done, copy the UID and paste it in the "User ID" field on the BLI.

## Resources

To add resources, simply click on Import Resources->Load resource from the connected system. The address of the resource corresponds to the Device ID presented in Cloud->Development->Your Project->Devices->All Devices. 

Currently, as v0.7, the following resources are tested and working correctly:

- "Dimmable light"
- "Light non-dimmable" 
- "Thermostat": 1SP thermostat (ON/OFF/Temperature)
- "Switch"

The following resources are implemented but were never tested with real hardware, so please send us your feedback if you use them:

- "Shade"

Switches that correspond to lights will be discovered as switches and as non-dimmable lights, choose the one that fits best for you.
For thermostats, it is important to adjust the temperature unit and correction parameters in the BLI System settings. Tuya does not provide this information, and they change depending on the thermostat manufacturers.
For reference, command correction is a multiplier while state correction is a divider.

Please let us know your experience and any issues with this driver at: [support+drivers_tuya@khimo.com](mailto:support+drivers_tuya@khimo.com)

## Changelog
### v0.4
- First public version

### v0.6
- Added support for lights with Tuya code "dj" 

### v0.7
- Fixed "cz" switches not discovering as lights

### v0.8
- Fixed dimmable and non-dimmable lights command bug

### v0.9
- Improves helps, adds some logs.

### v0.10
- Adds support to category "tdq" supporting ON/OFF dimmers or GPIO

