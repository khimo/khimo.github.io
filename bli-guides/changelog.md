---
title: BeoLiving Intelligence changelog | 1706 
layout: pagetoc
---


# 2.3.2.489
_Date: Feb. 15, 2024, 7:10 p.m._
### Changelog  2.3.2.489 3502ace52 | 2024-02-15

#### General
- Fixes drivers module import, improving consistency
- Improves LoggerClass, allowing better logging from drivers
- driverEnvironment: cleans some unneeded logs
- Implements image hash return on publisher for zone and project images (remote images synchronization)
- Adds a limit on resource query time
- Fixes some deadlocks related to loading a configuration in some network conditions: while a BLDriver product is going offline. Also corrects a crash on RtspProxyClient experienced when updating cameras while leading revisions
- Warns NetworkChangedObservers when handling changes in network properties
- Aligns Reolink camera implementation with latest specs. Corrects camera codec support check. Adds resource publish check on Lua drivers

#### Drivers
##### ABiCUS DMX Gateway
  - First driver implmenentation

##### LG
  - Adds experimental _OPEN command

##### Crestron Home
  - Initial release

##### Bosch
  - Corrects Bosch driver, ignoring power meter notification that were messing up with light and plug ones

##### Halo
  - Adds more logs
  - Adds protection for simultaneous notifications of Halo updates, preventing double connections
  - Improves documentation 

##### ControlLink Driver (Mozart)
  - Improves handling of discovery, adding lock protection of discovery notifications
  - Protects Mozart reconnection
  - Adds timeout to Mozart URL requests. Before this, a resource could leave leaked threads waiting forever and possible deadlocks associated with that. 
  - Rebuilds playqueue synchronization to improve responsiveness

------


# 2.3.2.436
_Date: Jan. 26, 2024, 4:37 p.m._
### v2.3.2.436-be916b0-78a87f3
#### Cameras
- Corrects camera support check.
- Corrects a crash on the proxy experienced when updating cameras while leading revisions.
#### Lua drivers
- Adds resource publish check for camera support.
#### BeoLink
- Solves a deadlock caused when loading a revision while products are going online-offline.
#### Bosch
- Corrects driver, ignoring power meter notification that were messing up with light and plug ones.
#### Reolink cameras
- Aligns camera implementation with latest specs.
#### TRO.Y
- The driver is not experimental any more.
#### Niko
- Fixes mqtt module handling and improves tracking of connections.
#### Mozart
- Adds timeout to URL requests. Before this, a resource could leave threads waiting forever, causing deadlocks.
- Improves playqueue synchronization, making it more responsive.
#### General
- Changes in network properties are always processed.
- DSGW (generation 2) predefined configuration download now always allows macro execution.
- Implements image hash return on publisher for zone and project.
- Adds a limit on resource query time.
### 2.3.2.423_acaec2aef
- Mozart: Improves playqueue synchronization, fixes an issue in source selection status.
### v2.3.2.422-3cec5b8-8b80a1f
#### Shelly 2nd generation
- Updates timeout to 5 minutes so it does not interrupt ongoing connections.
### v2.3.2.421-c423dce-8b80a1f
#### Shelly 2nd generation
- Improves connection stability.
- Corrects an import error that was causing online/offline misbehaves.
#### Lua macros
- Corrects an error that on updated fields on empty strings. The previous versions could not tell if the fields were correctly updated or not.
### v2.3.2.410-0fcd7b0-8b80a1f
#### BeoLink driver
- Adds net radio queries to networklink products, correcting macro edition errors.
#### Halo driver
- Corrects resource finalization, fixing a system crash caused by a race condition.
#### Mozart driver
- Adds more protection to error responses from Mozart products.
### v2.3.2.403-5571b29-8b80a1f
#### LG driver
- Adds support for secure web socket connection (wss)
#### Mozart driver
- Changes to only simulate the selected_source upon a source selection command when the product is turned on. This solves a race condition where we will select the source, then in the next status update force it to off because the networkState is off, and then select the source again when we get the     notification from the product.
#### General
- Intelligent assistant is not experimental anymore.
### v2.3.2.400
#### General
- Adds an experimental flag that allows to keep a history log of monitor events, which are included in service reports.
- Removes now playing details max length, correcting state update failures.
#### Intelligent assistant
- Adds experimental flag for enabling assistant.
- Removes fast/precise prompt, and sets the model to be always gpt-4-1106-preview for open AI.
- Simplifies assistant implementation by removing token model update and using multiple function calls.
- All comunication now goes through Khimo using AI credits.
- Improves help and documentation.
#### Mozart driver
- Changes how the connection timeout is managed.
- Changes the lineIn and spif sources to have capabilities, multiroom id and be internal sources.
#### Lutron LEAP driver
- Fixes access to area.Name adding a protection, in some lutron casetta devices areas are not named.
### v2.3.2.380
#### General
- Adds a check on license key for not rewriting it when
already present.
- Implements license check retry strategy.
#### Admin UI
- Improves log searching by adding the query string in the
location bar. Now you can reload a search and it will keep
your search terms.
#### Macros
- Adds &quot;cancel other&quot; command.
- Logs for Lua macros are now show on monitor.
#### Intelligent assistant
- Adds macro intelligent assistant, which can use Openai
(default) or Azure engine (experimental).
#### Lua drivers
- Corrects buffer management for lua data channels.
- Corrects lua driver finalization, marking all pending queries as
&#39;failed&#39;.
#### UPnP driver
- Adds data checks and protections for several responses.
#### Mozart driver
- All unknown sources now have channel selection.
- Adds missing beoCloud headers.
- Adds data protection for failed requests, queries and commands.
- Implements REBOOT command.
- Adds support for BeoLab 8.
#### Halo driver
- Adds protection for initialization/finalization cycle.
#### LEAP driver
- Corrects setPointRange syntax errors.
- Changes the driver label to include all the compatible products.
#### Lutron QS drver
- Adds protections to data entry.
#### BeoLink driver
- Adds UI hints for making searches easier.
- Corrects credential management, now every &#39;online&#39; notification
restarts the whole procedure.
#### LG web os driver
- Fixes handling of connection timeout, improves connection stability.
#### New drivers
- TRO.Y shades (experimental)

------


# 2.3.2.410
_Date: Dec. 22, 2023, 12:28 p.m._
### 2.3.2.410_461bf0b57

#### BeoLink driver
- Adds net radio queries to networklink products, correcting macro edition errors.

#### Halo driver
- Corrects resource finalization, fixing a system crash caused by a race condition.

#### Mozart driver
- Adds more protection to error responses from Mozart products.

### v2.3.2.403-5571b29-8b80a1f

#### LG driver
- Adds support for secure web socket connection (wss)

#### Mozart driver
- Changes to only simulate the selected_source upon a source selection command when the product is turned on. This solves a race condition where we will select the source, then in the next status update force it to off because the networkState is off, and then select the source again when we get the     notification from the product.

#### General
- Intelligent assistant is not experimental anymore.

### v2.3.2.400

#### General
- Adds an experimental flag that allows to keep a history log of monitor events, which are included in service reports.
- Removes now playing details max length, correcting state update failures.

#### Intelligent assistant
- Adds experimental flag for enabling assistant.
- Removes fast/precise prompt, and sets the model to be always gpt-4-1106-preview for open AI.
- Simplifies assistant implementation by removing token model update and using multiple function calls.
- All comunication now goes through Khimo using AI credits.
- Improves help and documentation.

#### Mozart driver
- Changes how the connection timeout is managed.
- Changes the lineIn and spif sources to have capabilities, multiroom id and be internal sources.

#### Lutron LEAP driver
- Fixes access to area.Name adding a protection, in some lutron casetta devices areas are not named.

### v2.3.2.380

#### General
- Adds a check on license key for not rewriting it when
already present.
- Implements license check retry strategy.

#### Admin UI
- Improves log searching by adding the query string in the
location bar. Now you can reload a search and it will keep
your search terms.

#### Macros
- Adds &quot;cancel other&quot; command.
- Logs for Lua macros are now show on monitor.

#### Intelligent assistant
- Adds macro intelligent assistant, which can use Openai
(default) or Azure engine (experimental).

#### Lua drivers
- Corrects buffer management for lua data channels.
- Corrects lua driver finalization, marking all pending queries as
&#39;failed&#39;.

#### UPnP driver
- Adds data checks and protections for several responses.

#### Mozart driver
- All unknown sources now have channel selection.
- Adds missing beoCloud headers.
- Adds data protection for failed requests, queries and commands.
- Implements REBOOT command.
- Adds support for BeoLab 8.

#### Halo driver
- Adds protection for initialization/finalization cycle.

#### LEAP driver
- Corrects setPointRange syntax errors.
- Changes the driver label to include all the compatible products.

#### Lutron QS drver
- Adds protections to data entry.

#### BeoLink driver
- Adds UI hints for making searches easier.
- Corrects credential management, now every &#39;online&#39; notification
restarts the whole procedure.

#### LG web os driver
- Fixes handling of connection timeout, improves connection stability.

#### New drivers
- TRO.Y shades (experimental)

------


# 2.3.2.403
_Date: Dec. 15, 2023, 3:19 p.m._
### 2.3.2.403_7f6c58420

#### LG driver
- Adds support for secure web socket connection (wss)

#### Mozart driver
- Changes to only simulate the selected_source upon a source selection command when the product is turned on. This solves a race condition where we will select the source, then in the next status update force it to off because the networkState is off, and then select the source again when we get the     notification from the product.

#### General
- Intelligent assistant is not experimental anymore.

### v2.3.2.400

#### General
- Adds an experimental flag that allows to keep a history log of monitor events, which are included in service reports.
- Removes now playing details max length, correcting state update failures.

#### Intelligent assistant
- Adds experimental flag for enabling assistant.
- Removes fast/precise prompt, and sets the model to be always gpt-4-1106-preview for open AI.
- Simplifies assistant implementation by removing token model update and using multiple function calls.
- All comunication now goes through Khimo using AI credits.
- Improves help and documentation.

#### Mozart driver
- Changes how the connection timeout is managed.
- Changes the lineIn and spif sources to have capabilities, multiroom id and be internal sources.

#### Lutron LEAP driver
- Fixes access to area.Name adding a protection, in some lutron casetta devices areas are not named.

### v2.3.2.380

#### General
- Adds a check on license key for not rewriting it when
already present.
- Implements license check retry strategy.

#### Admin UI
- Improves log searching by adding the query string in the
location bar. Now you can reload a search and it will keep
your search terms.

#### Macros
- Adds &quot;cancel other&quot; command.
- Logs for Lua macros are now show on monitor.

#### Intelligent assistant
- Adds macro intelligent assistant, which can use Openai
(default) or Azure engine (experimental).

#### Lua drivers
- Corrects buffer management for lua data channels.
- Corrects lua driver finalization, marking all pending queries as
&#39;failed&#39;.

#### UPnP driver
- Adds data checks and protections for several responses.

#### Mozart driver
- All unknown sources now have channel selection.
- Adds missing beoCloud headers.
- Adds data protection for failed requests, queries and commands.
- Implements REBOOT command.
- Adds support for BeoLab 8.

#### Halo driver
- Adds protection for initialization/finalization cycle.

#### LEAP driver
- Corrects setPointRange syntax errors.
- Changes the driver label to include all the compatible products.

#### Lutron QS drver
- Adds protections to data entry.

#### BeoLink driver
- Adds UI hints for making searches easier.
- Corrects credential management, now every &#39;online&#39; notification
restarts the whole procedure.

#### LG web os driver
- Fixes handling of connection timeout, improves connection stability.

#### New drivers
- TRO.Y shades (experimental)

------


# 2.3.2.400
_Date: Nov. 30, 2023, 10:44 a.m._
### v2.3.2.400

#### General
- Adds an experimental flag that allows to keep a history log of monitor events, which are included in service reports.
- Removes now playing details max length, correcting state update failures.

#### Intelligent assistant
- Adds experimental flag for enabling assistant.
- Removes fast/precise prompt, and sets the model to be always gpt-4-1106-preview for open AI.
- Simplifies assistant implementation by removing token model update and using multiple function calls.
- All comunication now goes through Khimo using AI credits.
- Improves help and documentation.

#### Mozart driver
- Changes how the connection timeout is managed.
- Changes the lineIn and spif sources to have capabilities, multiroom id and be internal sources.

#### Lutron LEAP driver
- Fixes access to area.Name adding a protection, in some lutron casetta devices areas are not named.

### v2.3.2.380

#### General
- Adds a check on license key for not rewriting it when
already present.
- Implements license check retry strategy.

#### Admin UI
- Improves log searching by adding the query string in the
location bar. Now you can reload a search and it will keep
your search terms.

#### Macros
- Adds &quot;cancel other&quot; command.
- Logs for Lua macros are now show on monitor.

#### Intelligent assistant
- Adds macro intelligent assistant, which can use Openai
(default) or Azure engine (experimental).

#### Lua drivers
- Corrects buffer management for lua data channels.
- Corrects lua driver finalization, marking all pending queries as
&#39;failed&#39;.

#### UPnP driver
- Adds data checks and protections for several responses.

#### Mozart driver
- All unknown sources now have channel selection.
- Adds missing beoCloud headers.
- Adds data protection for failed requests, queries and commands.
- Implements REBOOT command.
- Adds support for BeoLab 8.

#### Halo driver
- Adds protection for initialization/finalization cycle.

#### LEAP driver
- Corrects setPointRange syntax errors.
- Changes the driver label to include all the compatible products.

#### Lutron QS drver
- Adds protections to data entry.

#### BeoLink driver
- Adds UI hints for making searches easier.
- Corrects credential management, now every &#39;online&#39; notificatin
restarts the whole procedure.

#### LG web os driver
- Fixes handling of connection timeout, improves connection stability.

#### New drivers
- TRO.Y shades (experimental)

------


# 2.3.2.256
_Date: Sept. 26, 2023, 3 p.m._
### v2.3.2.256-a20b365-475e932

#### Mozart driver
- Protects url requests, adding default sensible values.

#### USB keyboard driver
- Protects usb device open, preventing thread errors.

#### Leap driver
- Adds initialization checks, solving a crash when the channel is closed while reading.

#### Lua drivers
- Sets a fixed connection timeout to URL requests for lua drivers (C++ only), solving long locks on incorrect IP addresses.
- Corrects status update checks for resources that were causing a thread error on empty state.

#### General
- ConnectionManager: corrects selection of first IPv4 nameserver available.
- Removes manual nameserver when turning on DHCP.

#### Admin UI
- Monitor: Fixes display of Lua macro logs.

### v2.3.2.238-58a8822-3812a43

#### Lua macros
- Adds logger to lua macros, showing all messages on monitor.

#### Lua resources module
- Adds implementations for 1 and 2 setpoint thermostats.
- Corrects state and field updates, keeping the new value locally.

#### Shelly 2nd generation driver
- Removes websocket timeout.

#### Mozart driver
- Corrects &#39;shortPress&#39; button check to compare only the first 10 chars, aligning it with the new implementation.

#### Khimo driver
- Changes classic shade signals to UTF-8 characters.

#### BeoLink driver
- Corrects credential management, now every &#39;online&#39; notification restarts the whole procedure.

#### Webpanel
- Fixes the positioning of camera view.
- Fixes a forced reload of resources that was ending in an endless reload loop.

#### Cameras
- Changes view to only use hls if BLI hardware is generation 3 or later.

#### General
- Corrects persisted hostname during initialization.

### v2.3.2.203-37ca64b-9355bfb
- Updates lighttpd.

### v2.3.2.202-417e45c-438f894
- Changes hls proxy.
- Changes watchdog functionality when disabled for remote support.

### v2.3.2.201 840963b 3eb3f78 c65e716d1
- Halo: fix a race condtion in PAWSocket finalization, in both mozart and halo.
- Mozart: 
  - Fixes Mozart update resource: handle everything in a thread, force the setHost even if the device is unknown.
  -  force to use domain and not IP address on resolve.
- Niko driver: force level 0 in lights that are off.
- LuaDrivers: Apply a 10 minutes default timeout to all url connections without (#212)
  defined timeout.
- Added an experimental feature for creating &#39;classic&#39; Khimo signals for the BLI
- Added a persistence protection for updated instances that do not modify transient fields, or when an update does not effectively update a field value

### v2.3.2.185-1313aa3-9fdac90
#### Admin UI
- Change the groups of RENDERER commands
- Fixes a bug in KNX state

### v2.3.2.177-eff1fe9-9fdac90
#### Admin UI
- fixes some glitches in user editor

#### Webpanel
- Cameras: changed stream prioritization to force jpeg in older TV&#39;s
- Login: fixes some glitches in login form.

### v2.3.2.173-81cb706-9fdac90
#### General
- Changes the RTSP proxy to mediamtx. The new one allows for RTSP(s) and HLS.
- Adds Hls.js and mediamtx licenses to the about page.
- Removes verbose logs.

#### Driver development
- Adds generic COPAS channel.
- Adds new &#39;class&#39; and &#39;resources&#39; modules, which allow to develop drivers in a clean way.

#### Lua drivers
- Implements backtrace and log upload to error server on driver error.
- Corrects an error on readUntil procedure so it does not discard bytes and effectively waits for the delimiter. This solves errors on drivers that use this procedure and can return very large messages (such as Lutron HW).
- Adds a watchdog touch on receiveMessage function. This solves an issue where the driver was failing with &#39;execution took too long&#39; on processing really large buffers.
- Changes the log of non existing state arguments on status change, the previous version was causing the driver to restart.

#### Camera
- Adds further authentication methods, such as DIGEST.
- Implements RTSP substreams for both generic and onvif cameras.
- Implements low definition snapshot for onvif cameras.
- Implements secure RTSP connections.
- Implements codec request for RTSP connections.
- Admin UI
  - Adds image and video preview.
  - Now shows available codecs for cameras.
  - Adds fingerprint update for RTSPS connections.
  - Adds title texts.
  - Updates interfaces help.
  - Adds feedback on camera selection.
- Web panel
  - Now shows HLS cameras, if availalble.

#### BeoLink
- Corrects BCP/BNR reset error that was causing the BLI to restart on reconnection.

#### Mozart
- Improves commands help.
- Adds AUDIO\_OVERLAY commands, tested for URI and TEXT.
- Adds support for ALL\_STANDBY.
- Changes the message when the access token is not defined to be only displayed once as an error in the driver lifecycle.

#### Lutron LEAP
- Corrects WHITE TUNE command implementation.

#### Bosch
- Implements shutter and shade control.
- Minor corrections.

#### KNX
- Adds SceneController support.
- Adds STATE\_UPDATE to 1 byte, 2 bytes, 3-bit, and strings knx\_group_address resources.
- Adds value state to all group address values.
- Adds value state to all the KNX raw variables.

#### New drivers
- ReoLink Cameras (experimental)
- Niko Home Control

------


# 2.3.2.211
_Date: Sept. 6, 2023, 4:19 p.m._
### v2.3.2.211-862b444-475e932
- Webpanel:
  - Fixes a forced reload of resources that was ending in a reload infint loop.
  - Fix to camera view position.
- Shelly generation 2:
  -  Removed websocket timeout.

### v2.3.2.207-3058661-475e932
- Khimo driver:
  - Renamed shade signals to UTF-8 characters.

### v2.3.2.206-fd7cb90-475e932
- BeoLink driver:
  - Corrected credential management, now every start process by online restarts the whole procedure
- Cameras:
  - HLS is only supported on hardware from generation 3.

### v2.3.2.202-417e45c-5fbe9fc
- Changes hls proxy
- Changes watchdog functionality when disabled for remote support

### v2.3.2.201 840963b 3eb3f78 c65e716d1
- Halo: fix a race condtion in PAWSocket finalization, in both mozart and halo.
- Mozart: 
  - Fixes Mozart update resource: handle everything in a thread, force the setHost even if the device is unknown.
  -  force to use domain and not IP address on resolve.
- Niko driver: force level 0 in lights that are off.
- LuaDrivers: Apply a 10 minutes default timeout to all url connections without (#212)
  defined timeout.
- Added an experimental feature for creating &#39;classic&#39; Khimo signals for the BLI
- Added a persistence protection for updated instances that do not modify transient fields, or when an update does not effectively update a field value

### v2.3.2.185-1313aa3-9fdac90
#### Admin UI
- Change the groups of RENDERER commands
- Fixes a bug in KNX state

### v2.3.2.177
#### Admin UI
- fixes some glitches in user editor

#### Webpanel
- Cameras: changed stream prioritization to force jpeg in older TV&#39;s
- Login: fixes some glitches in login form.

### v2.3.2.173
#### General
- Changes the RTSP proxy to mediamtx. The new one allows for RTSP(s) and HLS.
- Adds Hls.js and mediamtx licenses to the about page.
- Removes verbose logs.

#### Driver development
- Adds generic COPAS channel.
- Adds new &#39;class&#39; and &#39;resources&#39; modules, which allow to develop drivers in a clean way.

#### Lua drivers
- Implements backtrace and log upload to error server on driver error.
- Corrects an error on readUntil procedure so it does not discard bytes and effectively waits for the delimiter. This solves errors on drivers that use this procedure and can return very large messages (such as Lutron HW).
- Adds a watchdog touch on receiveMessage function. This solves an issue where the driver was failing with &#39;execution took too long&#39; on processing really large buffers.
- Changes the log of non existing state arguments on status change, the previous version was causing the driver to restart.

#### Camera
- Adds further authentication methods, such as DIGEST.
- Implements RTSP substreams for both generic and onvif cameras.
- Implements low definition snapshot for onvif cameras.
- Implements secure RTSP connections.
- Implements codec request for RTSP connections.
- Admin UI
  - Adds image and video preview.
  - Now shows available codecs for cameras.
  - Adds fingerprint update for RTSPS connections.
  - Adds title texts.
  - Updates interfaces help.
  - Adds feedback on camera selection.
- Web panel
  - Now shows HLS cameras, if availalble.

#### BeoLink
- Corrects BCP/BNR reset error that was causing the BLI to restart on reconnection.

#### Mozart
- Improves commands help.
- Adds AUDIO\_OVERLAY commands, tested for URI and TEXT.
- Adds support for ALL\_STANDBY.
- Changes the message when the access token is not defined to be only displayed once as an error in the driver lifecycle.

#### Lutron LEAP
- Corrects WHITE TUNE command implementation.

#### Bosch
- Implements shutter and shade control.
- Minor corrections.

#### KNX
- Adds SceneController support.
- Adds STATE\_UPDATE to 1 byte, 2 bytes, 3-bit, and strings knx\_group_address resources.
- Adds value state to all group address values.
- Adds value state to all the KNX raw variables.

#### New drivers
- Niko Home Control

------


# 2.3.1.543
_Date: June 10, 2023, 7:17 p.m._
### 2.3.1.543 (gen3) 3ce2be124    f709a1c-f40ca0d (Jun 10, 2023, 9:30:11 PM)
#### B&amp;O Halo
- Fixes assignment of button ids

#### Lutron LEAP
- Improves support for 2sp thermostat

### 2.3.1.536 (gen3)  9ea87252d   d0f3901-f40ca0d (May 15, 2023, 9:13:02 PM)
##### B&amp;O Halo
- Changes to keep the ids upon configurations.

### 2.3.1.534  
#### Drivers
##### B&amp;O ControlLink
- Adds JOIN to Mozart
- Fixes some bugs in Mozart
- Fixes SET_LISTENING_POSITION command

##### B&amp;O Halo
- Improves reconnection

##### BeoLink 
- Adds A5 pictures

##### KNX
- Adds support to KNX SceneController (18.001/17.001)

##### Shelly
- Adds ShellyGen2 driver

#### General Systems Improvements
- Starts the migration to a new driver architecture that we hope will make driver development easier for third parties
- WebPanel Browser: Fixes an error that in some situations located a button out of the screen.
- WebPanel TV: Fixes button focus upon configuration reload.
- Admin UI: Adds search capability to the add system dialog.
- Some minor bugfixes.

------


# 2.3.1.536
_Date: May 15, 2023, 6:49 p.m._
### 2.3.1.536_9ea87252d (gen3
##### B&amp;O Halo
- Changes to keep the ids upon configurations.

### 2.3.1.534  
#### Drivers
##### B&amp;O ControlLink
- Adds JOIN to Mozart
- Fixes some bugs in Mozart
- Fixes SET_LISTENING_POSITION command

##### B&amp;O Halo
- Improves reconnection

##### BeoLink 
- Adds A5 pictures

##### KNX
- Adds support to KNX SceneController (18.001/17.001)

##### Shelly
- Adds ShellyGen2 driver

#### General Systems Improvements
- Starts the migration to a new driver architecture that we hope will make driver development easier for third parties
- WebPanel Browser: Fixes an error that in some situations located a button out of the screen.
- WebPanel TV: Fixes button focus upon configuration reload.
- Admin UI: Adds search capability to the add system dialog.
- Some minor bugfixes.

------


# 2.3.1.460
_Date: March 22, 2023, 12:52 p.m._
### v2.3.1.460
- ControlLink (Mozart) driver:
 - Adds a protection to handle mozart product crash from our side.
 - Adds _PRESET.
 - Adds definition and images to gallery for A9 gen5 and BeoSound 2 gen3; also adds the definition of A5 without icons nor pictures.
- Philips HUE:
 - Corrects driver IP address resynchronization.
- Masterlink Protocol driver:
 - Adds MUTE as custom command.
- LG webOS driver:
 - Adds _SCREEN_ON status to LG resources.
 - Adds support for TURN_ON and TURN_OFF screen commands.
 - Adds an error message when command execution fails.
 - Fixes warnings.
- NetworkLink:
 - Corrects health check for BCP and BNR connections.
- Halo:
 - Improves Halo documentation explaining Volume behavior.
 - Halo: VolumeBehavior: Removes MUTE commands as was triggered by button selection.
- BeoLink driver:
 - Corrects linklocal deadlock, that was inserted in the previous release.
- Platform changes:
 - Drivers engine: Migrated to copas 4.
 - Gen3: Enables the use of external POE adapter connected on USB-C port.
 - Driver validation: Corrects icon type validation.
 - Implements watchdog on persistence load and save routines.
 - Adds specification information to each system publisher.

------


# 2.3.1.429
_Date: Feb. 22, 2023, 1:05 p.m._
### v2.3.1.429
- Adds support for POE USB-C adapter

ref: d46271c aa25b1d

### v2.3.1.428-4aaa89c-ad76277
 - Fixes gen3 issue with user images.

### 2.3.1.427 | Halo volume
- Removes MUTE as default action for Halo volume behavior

### v2.3.1.425-89d9dca-544953a

- Home assistant driver:
  - Updated lights integration.
- Khimo driver:
  - Added compilation flag for SSL security level set
  - Set SSL security level for ICE connections. This prevents a handshake error on newer SSL library versions.
- BCP:
  - Added protection to duplicate socket close on XMPP
- General:
  - Implemented gateway filter for all hardware types (1704, 1705 and 1706).
  - Implemented service delete and republish on dns daemon failure.
  - Added usb serial compute support to dsgw platform.

### 2.3.1.413-cc84f04-544953a

- BeoLink driver:
  - Updated documentation.
  - Added timeout to Deezer queries. This solves a freeze issue when the BLI is not on internet.
  - Implemented SHUFFLE and REPEAT commands and states for BNR.
  - Corrected playqueue URL management.
  - Implemented SET CONTENT ID for BNR, allowing selection of Bang &amp; Olufsen net radio content.
- ControlLink driver (Mozart):
  - Implemented device reconnection on network update.
- Khimo driver:
  - Added KEEPALIVE and send timeout to Khimo connection socket.
  - Sent liap socket connection and initialization to secondary thread, so getaddrinfo does not block engine.
- Admin UI:
  - Improved camera editor by adding clone, sort and image preview.
  - Added UI to navigate net radios for macro edition.
- General:
  - Implemented network updated notification for Lua drivers.
  - Implemented WebHooks on the BLI, for using from drivers. Added webhooks.lua driver in experimental mode.
  - All requests for firmware updates and version are now managed in an async way.
  - Added warning logs to detect command executions that are too slow.
  - Fixed creation of images directory before copying images from loaded configurations.
  - Corrected Crypto initialization procedure, the previous one called the functions in the wrong order for AES.
  - Added warning logs for AES failures.
  - Removed verbose logs, making sure they only appear on Debug mode.
  - Enabled https.
  - Fixed issues in mjpeg streaming.
  - Implemented store demo config API.

### v2.3.1.311-ac6dbba-de8a6c8
- ControlLink driver (Mozart):
  - Adds &#39;tv&#39; category to content sources.
  - Corrects a storm update error on home control URI management.

- General:
  - Adds gateway type number to publisher and bonjour service.

### v2.3.1.308-0988912-de8a6c8
- BlDriver:
  - Adds MULTIROOM capabilities and queries for macro source selection.

### v2.3.1.307-6e18ad5-de8a6c8

- ControlLink driver (Mozart):
  - Corrects home automation control URI setting, the previous version was causing driver resets on resource updates.
- General:
  - Adds missing lua copas modules.

### v2.3.1.305-89911f7-de8a6c8

- ControlLink driver (Mozart):
  - Input status field is set to empty on UNLINK.
  - Implements HOME CONTROL command.

- KNX driver:
  - Corrected daemon initialization.

- General:
  - Corrected source and input status fields when an UNLINK is performed.

### v2.3.1.299-8800f1d-de8a6c8

- WebUI: 
  - Admin: Search bar is shown on all drop down fields that show model queries.

### v2.3.1.298-7131672-de8a6c8

- BlDriver:
  - Adds multiroom queries to source NL selection.
  - Adds Mozart sources to multiroom link commands on macro configuration.

- ControlLink driver (Mozart):
  - Implements check and set for home automation control URI.
  - Adds applications as sources.
  - Adds BL sources to multiroom link commands on macro configuration.
  - Updates the driver&#39;s documentation.
  
- General:
  - Corrects application launch specs and generic commands.

### v2.3.1.281-eca55b7-de8a6c8

- Lutron Leap driver:
  - Correct initial resource synchronization.

------


# 2.3.1.428
_Date: Feb. 8, 2023, 4:47 p.m._
### v2.3.1.428-4aaa89c-ad76277
 - Fixes gen3 issue with user images.

### 2.3.1.427 | Halo volume
- Removes MUTE as default action for Halo volume behavior

### v2.3.1.425-89d9dca-544953a

- Home assistant driver:
  - Updated lights integration.
- Khimo driver:
  - Added compilation flag for SSL security level set
  - Set SSL security level for ICE connections. This prevents a handshake error on newer SSL library versions.
- BCP:
  - Added protection to duplicate socket close on XMPP
- General:
  - Implemented gateway filter for all hardware types (1704, 1705 and 1706).
  - Implemented service delete and republish on dns daemon failure.
  - Added usb serial compute support to dsgw platform.

### 2.3.1.413-cc84f04-544953a

- BeoLink driver:
  - Updated documentation.
  - Added timeout to Deezer queries. This solves a freeze issue when the BLI is not on internet.
  - Implemented SHUFFLE and REPEAT commands and states for BNR.
  - Corrected playqueue URL management.
  - Implemented SET CONTENT ID for BNR, allowing selection of Bang &amp; Olufsen net radio content.
- ControlLink driver (Mozart):
  - Implemented device reconnection on network update.
- Khimo driver:
  - Added KEEPALIVE and send timeout to Khimo connection socket.
  - Sent liap socket connection and initialization to secondary thread, so getaddrinfo does not block engine.
- Admin UI:
  - Improved camera editor by adding clone, sort and image preview.
  - Added UI to navigate net radios for macro edition.
- General:
  - Implemented network updated notification for Lua drivers.
  - Implemented WebHooks on the BLI, for using from drivers. Added webhooks.lua driver in experimental mode.
  - All requests for firmware updates and version are now managed in an async way.
  - Added warning logs to detect command executions that are too slow.
  - Fixed creation of images directory before copying images from loaded configurations.
  - Corrected Crypto initialization procedure, the previous one called the functions in the wrong order for AES.
  - Added warning logs for AES failures.
  - Removed verbose logs, making sure they only appear on Debug mode.
  - Enabled https.
  - Fixed issues in mjpeg streaming.
  - Implemented store demo config API.

### v2.3.1.311-ac6dbba-de8a6c8
- ControlLink driver (Mozart):
  - Adds &#39;tv&#39; category to content sources.
  - Corrects a storm update error on home control URI management.

- General:
  - Adds gateway type number to publisher and bonjour service.

### v2.3.1.308-0988912-de8a6c8
- BlDriver:
  - Adds MULTIROOM capabilities and queries for macro source selection.

### v2.3.1.307-6e18ad5-de8a6c8

- ControlLink driver (Mozart):
  - Corrects home automation control URI setting, the previous version was causing driver resets on resource updates.
- General:
  - Adds missing lua copas modules.

### v2.3.1.305-89911f7-de8a6c8

- ControlLink driver (Mozart):
  - Input status field is set to empty on UNLINK.
  - Implements HOME CONTROL command.

- KNX driver:
  - Corrected daemon initialization.

- General:
  - Corrected source and input status fields when an UNLINK is performed.

### v2.3.1.299-8800f1d-de8a6c8

- WebUI: 
  - Admin: Search bar is shown on all drop down fields that show model queries.

### v2.3.1.298-7131672-de8a6c8

- BlDriver:
  - Adds multiroom queries to source NL selection.
  - Adds Mozart sources to multiroom link commands on macro configuration.

- ControlLink driver (Mozart):
  - Implements check and set for home automation control URI.
  - Adds applications as sources.
  - Adds BL sources to multiroom link commands on macro configuration.
  - Updates the driver&#39;s documentation.
  
- General:
  - Corrects application launch specs and generic commands.

### v2.3.1.281-eca55b7-de8a6c8

- Lutron Leap driver:
  - Correct initial resource synchronization.

### v2.3.1.280-9db9aed-de8a6c8

- ControlLink driver (Mozart):
  - Implements source selection for Mozart secondary sources. Currently showing only &#39;hdmi&#39;.
  - Adds support for new products (for example, BeoSound Theatre).
  - Corrects dlna content management.
  - Implements new commands such as Move stand, Move curtain and Set listening position.
  - Adds new custom commands for use on the apps.
  - Bugfixes.

- BeoLink driver:
  - Implements periodic health checks on BCP and BNR discovery, restarting both when inconsistencies are found.
  - Implements Motorized active preset.
  
- Lutron Leap driver:
  - Adds support to MOTOR shade (UP/DOWN/STOP).

- UPnP driver:
  - Implements SEEK, NEXT and PREV commands.
  - Implements ouput queue for commands, solving output command ordering.
  
- Cameras:
  - Local cameras are connected as admin to RTSP proxy.
  - RTSP GET_PARAMETER errors are shown on log and reported to remote.

- KNX driver:
  - Adds watchdog to EIBD harwdare interface.
  - After a successful connection with KNXD, sets all resources to OFFLINE state and query their state.
  - Implements connection via select, ditching poll.
  - Removes EIBD client from source compilation.
  
- Clipsal driver:
  - Defines types for OPENWRT hardware.

- Philips Hue driver:
  - Replaced math.pow for ^.
  
- General:
  - Adds forced deletion of driver instances on custom system deletion., this solves a segfault on custom active driver re activation.
  - Adds external library finalization and null callback check for lua drivers.
  - Improves customDrivers editor to keep the topbar always visible and to show the errors as a tooltip.
  - Updates gallery with default pictures of new products.
  - Corrects memory management for lua temp files management.
  - Bonjour service discovery bridge for lua now notifies on every available service when an observer is added. This solves missing online services on runtime.
  - Corrects Ambient finalization.
  - Synchronized curl connection finalization and add-remove-notify cycle.
  - Removes model cached values, this solves segfault issues on multiple cores.
  - Fixes serviceReport creation.
  - Moves Openssl to 1.1.

------


# 2.3.1.425
_Date: Jan. 31, 2023, 4:37 p.m._
### v2.3.1.425-89d9dca-544953a

- Home assistant driver:
  - Updated lights integration.
- Khimo driver:
  - Added compilation flag for SSL security level set
  - Set SSL security level for ICE connections. This prevents a handshake error on newer SSL library versions.
- BCP:
  - Added protection to duplicate socket close on XMPP
- General:
  - Implemented gateway filter for all hardware types (1704, 1705 and 1706).
  - Implemented service delete and republish on dns daemon failure.
  - Added usb serial compute support to dsgw platform.

------


# 2.3.1.378
_Date: Dec. 19, 2022, 10:33 p.m._
### 2.3.1.378M

- Fixes handling of error on password synchronization for ASE products

------


# 2.3.1.377
_Date: Dec. 9, 2022, 2:56 p.m._
### 2.3.1.377 | fa1b5dc0f  | Production gen3 firmware

 - Factory firmware

------


# 2.3.1.351
_Date: Dec. 6, 2022, 8:32 a.m._
### 2.3.1.351M 1a3dd22f3

- B&amp;O NetRadio

------


# 2.3.1.285
_Date: Oct. 20, 2022, 4:10 p.m._
### 2.3.1.285 g94743f07e
- Gen3 verification release

------


# 2.3.1.264
_Date: Oct. 19, 2022, 4:23 p.m._
### 2.3.1.264 g9dc19af8dM
- Gen3 verification release

------


