---
title: WeMo Air Purifier
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: WeMo Air Purifier, SOAP, IP, WiFi, Off, Slow, Medium, Fast, Auto, Ionizer On, Ionizer Off, Air Purifier, Air quality, Expired filter time, Filter life, Filter present, Ionizer status, Mode
description: WeMo Air Purifier driver supports communication with Holmes Smart Air Purifier with WeMo using SOAP IP connection over WiFi.
---

driver_help= "WeMo / Air Purifier \
========================= \
\
This driver supports communication directly with the Holmes Smart Air Purifier with WeMo, allowing to control and receive feedback from the device. \
\
Connection to the system is done via SOAP IP connection over WiFi directly with the WeMo device. \
\
The WeMo driver checks connection and polls the device every 10 seconds for status updates. \
\
The Driver will also check for a status update emediately following any control commands sent to the device for quick feedback updates \
\
\
Communications:\
---------------\
\
To establish communication the following is needed: \
\
 - Host: The IP address of the WeMo device. \
\
 - Port: The port number for the communication (default is port 49153) \
\
\
\
\
Resources:\
---------------\
\
Available resources are as following: \
\
 - Off: Sets the Air Purifier in Off mode, State indicates the Wemo Device is Off\
\
 - Slow: Sets the Air Purifier in Slow mode, State indicates the Wemo Device is in Slow mode\
\
 - Medium: Sets the Air Purifier in Medium mode, State indicates the Wemo Device is in Medium mode\
\
 - Fast: Sets the Air Purifier in Fast mode, State indicates the Wemo Device is in Fast mode\
\
 - Auto: Sets the Air Purifier in Auto mode, State indicates the Wemo Device is in Auto mode\
\
 - Ionizer On: Sets the Ionizer mode On, State indicates the Ionizer is activated\
\
 - Ionizer Off: Sets the Ionizer mode Off, State indicates the Ionizer is deactivated\
\
 - Air Purifier: State Feedback data\
\
\
State Updates: \
---------------\
\
Available State updates are as following:\
\
 - Air quality: Integer value stating Air Quality \
\
\
 - Expired filter time: Integer value stating Expired filter time\
\
\
 - Filter life: Feedback for Filter Life\
\
\
 - Filter present: Feedback for Filter presence status \
\
\
 - Ionizer status: Status of current Ionizer activity, On or Off\
\
\
 - Mode: States current mode as either: Off, Slow, Medium, Fast or Auto\
"
        
                           
driver_load_system_help = "Loads all the resources needed for the Air Purifier."

driver_default_channel= "tcp"

local wemoArgs= {
   stringArgumentMinMax("_Host", "172.16.5.108", 1, 255, { context_help= "The host name or ip address of the WeMo device"}),
   numericArgument("_Port", 49153, 0, 65535, { context_help= "Port number of the WeMo device"}),
   boolArgument("checkServerCertificate", true, { hidden = "true" } )
}

driver_channels= {
   CUSTOM("WeMo SOAP", "Connection to the WeMo Air Purifyer", wemoArgs)
}


local function decodeHtml(str)
   local ret= string.gsub(str, "&amp;lt;", "<")
   ret= string.gsub(ret, "&amp;gt;", ">")
   return ret
end

local function myStartElement(name,nsURI,nsPrefix)
   currentElementName= name
   if currentElement[name] then
      currentPath[#currentPath+1]= { name= name,
                                     index= #(currentElement[name])+1 }
      currentElement[name][#(currentElement[name])+1]= {}
   else
      currentPath[#currentPath+1]= { name= name,
                                     index= 1 }
      currentElement[name]= {}
      currentElement[name][1]= {}
   end
   currentElement= currentElement[name][#(currentElement[name])]
   if not currentElement.attribute then
      currentElement.attribute= {}
   end
end

local function foundAttribute(name,value,nsURI,nsPrefix)
   currentElement.attribute[name]= value
end

local function foundText(text)
   currentElement.text= text 
end

local function myCloseElement(name,nsURI)
   table.remove(currentPath, #currentPath)
   if #currentPath > 0 then
      currentElementName= currentPath[#currentPath].name
   end
   currentElement= theXML
   for _,e in ipairs(currentPath) do
      currentElement= currentElement[e.name][e.index]
   end
end

local function xmlToTable(xml)
   SLAXML= loadExtraLib("SLAXML")
   parser= SLAXML:parser{
      startElement= myStartElement,
      attribute= foundAttribute,
      closeElement= myCloseElement,
      text         = foundText, -- text and CDATA nodes
      comment      = function(comment) end, -- comments
      pi           = function(target,content) end, -- processing instructions e.g. "<?yes mon?>"
   }
   
   theXML= {}
   currentPath= {}
   currentElement= theXML
   currentElementName= ""
   parser:parse(xml)
   --Trace(tableToString(theXML))
   --SLAXML:parse(msg)
   return theXML
end


local function getValues(theTable)
   local names= {}
   for _, v in pairs(theTable) do 
      table.insert(names, v)
   end
   return names
end
local function getKeys(theTable)
   local keys= {}
   for k, _ in pairs(theTable) do 
      table.insert(keys, k)
   end
   return keys
end

local AIR_PURIFIER= "Air Purifier"
local FAN_OFF= "Fan Off"
local FAN_SLOW= "Fan Slow"
local FAN_MEDIUM= "Fan Medium"
local FAN_FAST= "Fan Fast"
local FAN_AUTO= "Fan Auto"
local IONIZER_ON= "Ionizer On"
local IONIZER_OFF= "Ionizer Off"
local MODES= {
   ["0"]="Off",
   ["1"]="Slow",
   ["2"]="Medium",
   ["3"]="Fast",
   ["4"]="Auto",
}
local MODE_NAMES= getValues(MODES)
local FILTER_ADVISES= {
   ["0"]= "Ionizer Off",
   ["1"]= "Ionizer On"
}
local FILTER_ADVISE_NAMES= getValues(FILTER_ADVISES)

resource_types= {
   [FAN_OFF]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Fan Speed to Off, state shows if fan is off." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Fan Speed to Off, state shows if fan is off."
   },
   [FAN_SLOW]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Fan Speed to Slow, state shows if fan is on Slow." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Fan Speed to Slow, state shows if fan is on Slow."
   },
   [FAN_MEDIUM]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Fan Speed to Medium, state shows if fan is on Medium." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Fan Speed to Medium, state shows if fan is on Medium."
   },
   [FAN_FAST]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Fan Speed to Fast, state shows if fan is on Fast." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Fan Speed to Fast, state shows if fan is on Fast."
   },
   [FAN_AUTO]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Fan Speed to Auto, state shows if fan is on Auto." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Fan Speed to Auto, state shows if fan is on Auto."
   },
   [IONIZER_ON]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to turn the Ionizer On, state shows if Ionizer is On." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to turn the Ionizer On, state shows if Ionizer is On."
   },
    [IONIZER_OFF]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to turn the Ionizer Off, state shows if Ionizer is Off." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to turn the Ionizer Off, state shows if Ionizer is Off."
   },
   [AIR_PURIFIER]= {
      standardResourceType= "_AIR_PURIFIER",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Device status feedback, state feedbck from device." } 
         ) 
      },
      events= {},
      commands= {},
      states= {
         enumArgument( "_Mode", MODE_NAMES, "Off"),
         enumArgument("_IonizerStatus", FILTER_ADVISE_NAMES, "Ionizer Off"),
         numericArgument("_AirQuality", 0, 0, 4294967296),
         numericArgument("_FilterLife", 0, 0, 4294967296),
         numericArgument("_ExpiredFilterTime", 0, 0, 4294967296),
         numericArgument("_FilterPresent", 0, 0, 4294967296),		 
      },
      context_help= "Handles Air Purifier status."
   },
}

local DATA_PREFIX= [[<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body>
