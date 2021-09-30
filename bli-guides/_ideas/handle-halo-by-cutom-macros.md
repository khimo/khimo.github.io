---
title: Halo configuration with Macros
description: Disarm an alarm with the BeoRemote Halo through a macro
layout: pagetoc
---

This guide shows an example of how to control the BeoRemote Halo through a macro. In this case, the Halo will be used to to disarm an alarm by introducing the code in a rotary padlock fashion.

### Halo configuration

The Halo configuration page can be found in the *Interfaces* tab. Firstly, a button should be created in any page, if no pages exist one should be created too. After choosing a title, subtitle and icon, the behavior "Handle by custom macros" must be chosen. The button and page number should be remembered as they will be used later.

How to create a page and a button, as well as more information on behaviors and resources, can be found in the [help](../_help_drivers/Halo) document of the Halo. 

### Macro configuration
A rotary lock works by turning the inner wheel in different directions while choosing the correct numbers. One would have to rotate the handle clockwise until the correct number is selected, then, proceed to choose the next number with an anticlockwise rotation and so on.

The macro will have to know which way the wheel is turning, sense a change in the direction and act accordingly, pressing the button will cause the code to reset in case of mistakes. Moreover, the Halo's icon will show the number being selected and the button title will show the amount of digits chosen with "****". 
Supposing there is an area called "MyArea" with a zone "MyZone" that has a resource called "Alarm" of "ALARM" resource type and a BeoRemote Halo named "Halo", we can create the following macro. 

The events for this macro would be:

<div class="text-center">
  <img src="/bli-guides/pictures/HaloEvent.png" class="img-fluid" alt="Event to execute the Macro"/>
</div>

When creating the event, the button to choose should be the one with the page and button number remembered before, this will automatically change to the button ID as shown in the image. 

For this application, some virtual resources should also be created. In Resources->Virtual Resources create the following resources:
  - "Number", of type INTEGER: This will be the number that is currently chosen and that will later be added to the code.
  - "Code", of type STRING: Here the code will be created as each individual number is added.
  - "Direction", of type BOOLEAN: This variable will indicate the direction the wheel is moving, TRUE means clockwise, FALSE means anticlockwise. It will also help the macro know if the direction has changed.
  - "Fired", of type BOOLEAN: While the macro is running, this variable will be TRUE. This is necessary to avoid the macro running multiple times at the same time and causing wrong values in the previous variables. 


The macro's command as LuaMacros would start as follows:

~~~lua 

  local fired_query = engine.query("MyArea/MyZone/VARIABLE/Fired")
  local fired = fired_query[1].get_boolean("VALUE")
  if not fired then
    engine.fire("MyArea/MyZone/VARIABLE/Fired/SET?VALUE=true")
   -- EVERYTHING HAPPENS HERE
    engine.fire("MyArea/MyZone/VARIABLE/Fired/SET?VALUE=false")
  end

~~~

First we ask the value of the "Fired" variable, we only proceed with the rest of the code if this macro is not already in use, which means "fired" will be false. Once inside, the variable is set to TRUE, so that the macro won't start again, and then set to FALSE again when it is done.

Next we will see what happens inside:

~~~lua

  local number_query = engine.query("MyArea/MyZone/VARIABLE/Number")
  local number = number_query[1].get_number("VALUE")

  local code_query = engine.query("MyArea/MyZone/VARIABLE/Code")
  local code = code_query[1].get_string("VALUE")

  local direction_query = engine.query("MyArea/MyZone/VARIABLE/Direction")
  local direction = direction_query[1].get_boolean("VALUE")
  
  if event.parameters()["OFFSET"] then 
   -- THE WHEEL TRIGGERED THE MACRO
  else
   -- THE BUTTON TRIGGERED THE MACRO
  end
~~~

It starts by getting the values of the variables, observe that depending on the resource type, we use different "get" functions. With *event.parameters()["OFFSET"]*, the macro asks the system which event triggered the macro (either the wheel or the pressing of the button). We'll start with what the button does as it is easier:

~~~lua

  engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE=")
  engine.fire("MyArea/MyZone/VARIABLE/Number/SET?VALUE=0")
  engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=true")
  engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TEXT?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TEXT=0")
  engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE=BEGIN")

~~~

By pressing the button, we want all the values to reset, and that is exactly what this lines are doing. We set the code value to nothing, the number to 0 and the direction to RIGHT (as we want the first number to be chosen clockwise). The last lines set the Halo's icon to 0 (the number chosen before) and the button's title to "BEGIN".

If the macro was triggered by the wheel, the code will be as follows:

~~~lua 

  if tonumber(event.parameters()["OFFSET"]) >= 1 then
    if direction then
      number = number + 1
    else
      code = code..tostring(number)
      engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=true")
    end
  else
    if not direction then
      number = number - 1
    else
      code = code..tostring(number)
      engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=false")
    end
  end

  if (number == 10) then
    number = 0
  elseif (number == -1) then
    number = 9

  engine.fire("MyArea/MyZone/VARIABLE/Number/SET?VALUE="..tostring(number))
  engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TEXT?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TEXT="..tostring(number))
  local anon_code = code:gsub(".","*",4)
  engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE="..anon_code)

  if (string.len(code)>=4) then
     engine.fire("Main/global/ALARM/Alarm/DISARM?CODE="..code)
     engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE=")
     engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE=FIRED")
     engine.fire("MyArea/MyZone/Halo remote/Halo/SET_ICON?BUTTON=497f6eca-6276-4993-bfeb-000000810179&ICON=unlock")
  else
    engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE="..code)
  end 

~~~

The parameter "OFFSET" of the wheel is positive if the wheel is turning right and negative if it's turning left. If the wheel is turning right, we check the "direction" variable, if "direction" is TRUE, then the last time the wheel was moved it was also to the right, in this case we just add 1 to the number being chosen and continue. If "direction" is FALSE, the wheel was going left and then turned right, this means that the last number is the one chosen to be the next digit of the code. In this case, we add the chosen number to the code, and we set the "direction" variable to TRUE (as the next time we go right we just want to keep choosing the new number). A similar thing happens when going left.

Next we have a small correction of the number as we only want numbers form 0 to 9, this means that after 9 the number will turn to 0 and so on. After this we set the new number value to the "number" variable and to the button's icon, and we set the subtitle to the current code shown with asterisks. 

Lastly we need to know if the code is complete, we know the code consists of 4 numbers (this could be changed by changing the if statement), if the length of the code is 4, we proceed to fire the "DISARM" command and reset the variables, we also write "FIRED" in the tile and choose the "unlocked" icon as the button. If the code is not yet complete, we just set the "code" variable with the new code to start the process again the next time the macro is called.
 

The complete macro is below, remember to change the Areas, Zones, Resource's Names and Button ID to yours before trying it.

~~~lua 
function(event, engine)
  local fired_query = engine.query("MyArea/MyZone/VARIABLE/Fired")
  local fired = fired_query[1].get_boolean("VALUE")
  if not fired then
  engine.fire("MyArea/MyZone/VARIABLE/Fired/SET?VALUE=true")
    local number_query = engine.query("MyArea/MyZone/VARIABLE/Number")
    local number = number_query[1].get_number("VALUE")

    local code_query = engine.query("MyArea/MyZone/VARIABLE/Code")
    local code = code_query[1].get_string("VALUE")

    local direction_query = engine.query("MyArea/MyZone/VARIABLE/Direction")
    local direction = direction_query[1].get_boolean("VALUE")
    
    if event.parameters()["OFFSET"] then
      if tonumber(event.parameters()["OFFSET"]) >= 1 then
        if direction then
          number = number + 1
        else
          engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=true")
          code = code..tostring(number)
        end
      else
        if not direction then
          number = number - 1
        else
          engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=false")
          code = code..tostring(number)
        end
      end
      if (number == 10) then
        number = 0
      elseif (number == -1) then
        number = 9
      end
      engine.fire("MyArea/MyZone/VARIABLE/Number/SET?VALUE="..tostring(number))
      engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TEXT?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TEXT="..tostring(number))
      anon_code = code:gsub(".","*",4)
      engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE="..anon_code)

      if (string.len(code)>=4) then
         engine.fire("Main/global/ALARM/Alarm/DISARM?CODE="..code)
         engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE=")
         engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE=FIRED")
         engine.fire("MyArea/MyZone/Halo remote/Halo/SET_ICON?BUTTON=497f6eca-6276-4993-bfeb-000000810179&ICON=unlock")
      else
        engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE="..code)
      end 
    else
      engine.fire("MyArea/MyZone/VARIABLE/Code/SET?VALUE=")
      engine.fire("MyArea/MyZone/VARIABLE/Number/SET?VALUE=0")
      engine.fire("MyArea/MyZone/VARIABLE/Direction/SET?VALUE=true")
      engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TEXT?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TEXT=0")
      engine.fire("MyArea/MyZone/Halo remote/Halo/SET_TITLE?BUTTON=497f6eca-6276-4993-bfeb-000000810179&TITLE=BEGIN")
    end
    engine.fire("MyArea/MyZone/VARIABLE/Fired/SET?VALUE=false")
 end
end 

~~~


This was just an example of how to configure a button with a macro, just by knowing if a button was pressed or what direction the wheel is going, any command of any resource can be tied to the Halo. Like any other resource, any state update from the Halo can be selected as an event as well as a "button released". Apart from the ones used in this macro, the Halo also accepts other commands such as show notification, show page, set wheel value, among others.


