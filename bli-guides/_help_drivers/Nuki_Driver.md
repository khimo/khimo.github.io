---
title: Nuki
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Nuki 

## Connecting
To connect to the Nuki bridge, simply set the IP of the Nuki bridge, the bridge LED will start blinking and the bridge button must be pressed within 30 seconds.
**The HTTP API must be activated in the *Nuki Bridge* menu to be able to connect to the bridge**
A Poll Interval must be chosen, this will be the time between status updates.


## Adding resources
Adding a resource can be done by introducing the resource's Nuki Id as address or, **preferably** by pressing the *Import resources* button and then *Load
resources from connected system*.

## Supported resources
Currently only Nuki SmartLocks are supported, it is possible to lock (STATE = 0) and unlock (STATE = 1) as well set different lock action. Also it can check the battery, door and connection states.

## Lock in BeoLiving APP
Locks aren't visible in the app, to use it there are two options:
- Create Macros for locking and unlocking and make then visible in the scene view.
- Better way:
	1. Add a *Virtual resource* of type *Virtual button with LED*, check the option *Confirm* in the *Interface* tab (to avoid accidental pressing of the button).
	2. Create a macro that will, after pressing the virtual button, lock or unlock the lock (depending on previous state) and turn ON or OFF the LED (LED will be OFF if locked, ON if unlocked). 
	This macro should include 2 events: one with the Virtual Button as a resource and "PRESS" as the event, and the other with your Nuki Smart Lock as a resource and "STATE_UPDATE" as the event (with nothing checked). 
	
Below is a sample macro code that could be included after pressing *Convert to code* in the Macros view (Area, Zone and Names should be changed).

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
	  else if (event.name() == your_virtual_button_name) then
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
