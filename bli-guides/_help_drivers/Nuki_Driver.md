---
title: Nuki
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Nuki, SET, SmartLocks
description: Nuki driver allows to control and check Nuki SmartLocks.
---
# Nuki 

## Connecting
The driver connects to the Nuki Bridge at its IP address or local hostname using the default HTTP API port 8080. When using an IP address, configure a DHCP reservation or static lease so the Bridge address does not change. Custom Bridge API ports are not supported by this driver.

1. In the Nuki App, open the Bridge settings and allow HTTP API authorization. Alternatively, configure a plain API token there before starting the driver.
2. Enter the Bridge IP address or local hostname in the host field; do not include `http://` or a port.
3. Save or start the driver. If no token is stored, the Bridge LED lights for a 30-second authorization window.
4. Press the Bridge button while the LED is lit. The driver securely stores the returned token in its hidden system field.

HTTP 403 means Bridge API authorization is disabled; enable it in the Nuki App and retry. If the Bridge cannot be reached, verify its power, Wi-Fi connection, configured address, and port 8080.


## Adding resources
Add a resource by entering its numeric Nuki ID as the address or, preferably, press *Import resources* and then *Load resources from connected system*. Import performs a fresh request to the connected Bridge. If a lock is missing, verify in the Nuki App that it is paired with the Bridge, then retry the import.

## Supported resources
Currently only Nuki Smart Locks (Bridge device types 0 and 4) are supported. It is possible to lock (STATE = 0), unlock or unlatch (STATE = 1), and execute the additional Nuki lock actions. The driver also reports battery charge percentage, detailed lock status, and optional door-sensor status. Locks without a door sensor may not update the door-sensor state. Transitional and fault states do not overwrite the last stable lock state. ONLINE is normally based on presence in the latest successful Bridge device list. A successful live state request restores ONLINE, while HTTP 404 or 503 during an action or live state request temporarily clears it until a later successful request.

The driver uses the Bridge API plain token over HTTP. Only use it on a trusted private network or VLAN. Tokens and authenticated request URLs are never written to the driver log.

## Polling and limitations

The driver polls the Bridge's cached device list every 30 seconds by default. The configurable field accepts the legacy range 0–305 seconds; values below 5 are safely clamped to 5 seconds at runtime. One list request updates all configured locks, avoiding direct lock-state polling and unnecessary battery use. The Bridge handles one request at a time, so another client or an action in progress can temporarily produce HTTP 503; the next scheduled poll retries automatically.

The Bridge must remain available at its configured IP address or local hostname on port 8080. Nuki Opener, Smart Door, custom Bridge API ports, and encrypted API tokens are not supported.

## Upgrading from v0.2

`SET?VALUE=true` now performs an unambiguous unlock and no longer releases the latch on knob-equipped locks. Existing macros that intentionally used `SET?VALUE=true` to open or release the door must use `_SET LOCK ACTION` with `_ACTION=Unlatch` instead. `SET?VALUE=false` continues to use the legacy lock operation. Existing Bridge hostnames, polling values from 0 to 4, numeric resource addresses, and the legacy misspelled detailed-state enum remain accepted for configuration compatibility.

## Lock in BeoLiving APP
On BeoLiving App versions that do not display lock resources directly, there are two options:
- Create Macros for locking and unlocking and make them visible in the scene view.
- Better way:
	1. Add a *Virtual resource* of type *Virtual button with LED*, then in the *Interface* tab, check the option *Confirm* of the virtual button (to avoid accidental pressing of the button).
	2. Create a macro that will, after pressing the virtual button, lock or unlock the lock (depending on previous state) and turn ON or OFF the LED (LED will be OFF if locked, ON if unlocked). 
	This macro should include 2 events: one with the Virtual Button as a resource and "PRESS" as the event, and the other with your Nuki Smart Lock as a resource and "STATE_UPDATE" as the event (with nothing checked). 
	
Below is a sample macro code that should be included as the command after pressing *Convert to code* in the Macros view. Remember to change the names of the Area, Zone, Smartlock and the Virtual Button, otherwise it won't work.

	function(event, engine)
	  your_area = "YOUR_AREA"
	  your_zone = "YOUR_ZONE"
	  your_virtual_button_name = "YOUR VIRTUAL BUTTON NAME"
	  your_nuki_smartlock_name = "YOUR SMARTLOCK NAME"
	  
	  nuki_smartlock_address = your_area.."/"..your_zone.."/GPIO/"..your_nuki_smartlock_name
	  virtual_button_address = your_area.."/"..your_zone.."/BUTTON/"..your_virtual_button_name
	  
	  local lock = engine.query(nuki_smartlock_address)
	  local state = lock[1].get_number("STATE")
	  

	  if (event.name() == your_nuki_smartlock_name) then
	    engine.fire(virtual_button_address.."/_SET STATE?STATE="..tostring(state))
	  elseif (event.name() == your_virtual_button_name) then
	    if state == 1 then
	      engine.fire(nuki_smartlock_address.."/SET?VALUE=false")
	    else
	      engine.fire(nuki_smartlock_address.."/SET?VALUE=true")
	    end
	  end
	end 


## Changelog
**v0.1**
  * First version
**v0.2**
  * Added support for Nuki Smart Lock 3.0
**v0.3**
  * Aligned lock actions, states, door sensor values, polling, and error handling with Nuki Bridge API 1.13.3
  * `SET?VALUE=true` now unlocks without unlatching; use `_SET LOCK ACTION` with `Unlatch` when a macro must release the latch
  
*Please, report any issue with this driver to: support+drivers@khimo.com*
