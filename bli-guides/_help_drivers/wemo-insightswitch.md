---
title: WeMo Insight Switch
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: WeMo Insight Switch, SOAP, IP, WiFi, Toggle, On, Off
description: WeMo Insight Switch driver supports communication with WeMo Insight Switch using SOAP IP connection over WiFi.
---

driver_help= "WeMo / Insight Switch \
========================= \
\
This driver supports communication directly with the WeMo Insight Switch, allowing to control and receive feedback from the device. \
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
 - Toggle: Toggles the Switch On Off, State indicates the Wemo Switch is On\
\
 - On: Sets the Switch in On mode, State indicates the Wemo Switch is On\
 \
 - Off: Sets the Switch in Off mode, State indicates the Wemo Switch is Off\
\
\
State Updates: \
---------------\
\
Available State updates are as following:\
\
 - On: Feedback indicating the Switch has been turned On \
\
 - Off: Feedback indicating the Switch has been turned Off\
"
        
                           
driver_load_system_help = "Loads all the resources needed for the Insight Switch."

driver_default_channel= "tcp"

local wemoArgs= {
   stringArgumentMinMax("_Host", "172.16.5.128", 1, 255, { context_help= "The host name or ip address of the WeMo device"}),
   numericArgument("_Port", 49153, 0, 65535, { context_help= "Port number of the WeMo device"}),
   boolArgument("checkServerCertificate", true, { hidden = "true" } )
}

driver_channels= {
   CUSTOM("WeMo SOAP", "Connection to the WeMo Insight Switch", wemoArgs)
}


local function getKeys(theTable)
   local keys= {}
   for k, _ in pairs(theTable) do 
      table.insert(keys, k)
   end
   return keys
end

local OFF= "Off"
local ON= "On"
local TOGGLE= "Toggle"
local state= ""

resource_types= {
   [OFF]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Switch to Off, state shows if switch is off." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Switch to Off, state shows if switch is off."
   },
   [ON]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Switch to On, state shows if switch is on." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Switch to On, state shows if switch is on."
   },
   [TOGGLE]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set Switch to On, state shows if switch is on." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set Switch to On, state shows if switch is on."
   },
}


local DATA_PREFIX= [[<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body>
