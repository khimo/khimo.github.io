---
title: WeMo Slow Cooker
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: WeMo Slow Cooker, SOAP, IP, WiFi, Off, Low, Keep Warm, High
description: WeMo Slow Cooker driver supports communication with the WeMo enabled Slow Cooker using SOAP IP connection over WiFi.
---

driver_help= "WeMo / Slow Cooker \
========================= \
\
This driver supports communication directly with the WeMo enabled Slow Cooker, allowing to control and receive feedback from the device. \
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
 - Off: Sets the Slow Cooker in Off mode, State indicates the Slow Cooker is Off\
\
 - Low: Sets the Slow Cooker in Low Heat mode, State indicates the Slow Cooker is in Low Heat mode\
\
 - Keep Warm: Sets the Slow Cooker in Keep Warm mode, State indicates Slow Cooker is in Keep Warm mode\
\
 - High: Sets the Slow Cooker in High Heat mode, State indicates the Slow Cooker is in High Heat mode\
\
\
State Updates: \
---------------\
\
Available State updates are as following:\
\
 - Off: State indicates the Slow Cooker is Off\
\
 - Low: State indicates the Slow Cooker is in Low Heat mode\
\
 - Keep Warm: State indicates Slow Cooker is in Keep Warm mode\
\
 - High: State indicates the Slow Cooker is in High Heat mode\
"
        
                           
driver_load_system_help = "Loads all the resources needed for the Slow Cooker."

driver_default_channel= "tcp"

local wemoArgs= {
   stringArgumentMinMax("_Host", "172.16.5.134", 1, 255, { context_help= "The host name or ip address of the WeMo device"}),
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
local KEEP_WARM= "Keep Warm"
local LOW= "Low"
local HIGH= "High"


resource_types= {
   [OFF]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to set to Off, state shows if Mode is off." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to set to Off, state shows if Mode is off."
   },
   [KEEP_WARM]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to select Keep Warm Mode, state shows if Mode is on." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to select Keep Warm Mode, state shows if Mode is on."
   },
   [LOW]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to select Low Mode, state shows if Mode is on." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to select Low Mode, state shows if Mode is on."
   },
   [HIGH]= {
      standardResourceType= "BUTTON",
      address= { 
         stringArgumentRegEx("address", "", "", 
                             { context_help= "Press to select High Mode, state shows if Mode is on." } 
         ) 
      },
      events= {},
      commands= {PRESS=      { code= "PRESS" }},
      states= {
         enumArgument( "STATE", {0,1}, 0 ),
      },
      context_help= "Press to select High Mode, state shows if Mode is on."
   },   
}

local DATA_PREFIX= [[<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body>
