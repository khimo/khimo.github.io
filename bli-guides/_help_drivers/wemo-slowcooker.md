---
title: WeMo Slow Cooker
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: WeMo Slow Cooker, SOAP, IP, WiFi, Off, Low, Keep Warm, High
description: WeMo Slow Cooker driver supports communication with the WeMo enabled Slow Cooker using SOAP IP connection over WiFi.
---
WeMo / Slow Cooker 
========================= 

This driver supports communication directly with the WeMo enabled Slow Cooker, allowing to control and receive feedback from the device. 

Connection to the system is done via SOAP IP connection over WiFi directly with the WeMo device. 

The WeMo driver checks connection and polls the device every 10 seconds for status updates. 

The Driver will also check for a status update emediately following any control commands sent to the device for quick feedback updates 


Communications:
---------------

To establish communication the following is needed: 

 - Host: The IP address of the WeMo device. 

 - Port: The port number for the communication (default is port 49153) 




Resources:
---------------

Available resources are as following: 

 - Off: Sets the Slow Cooker in Off mode, State indicates the Slow Cooker is Off

 - Low: Sets the Slow Cooker in Low Heat mode, State indicates the Slow Cooker is in Low Heat mode

 - Keep Warm: Sets the Slow Cooker in Keep Warm mode, State indicates Slow Cooker is in Keep Warm mode

 - High: Sets the Slow Cooker in High Heat mode, State indicates the Slow Cooker is in High Heat mode


State Updates: 
---------------

Available State updates are as following:

 - Off: State indicates the Slow Cooker is Off

 - Low: State indicates the Slow Cooker is in Low Heat mode

 - Keep Warm: State indicates Slow Cooker is in Keep Warm mode

 - High: State indicates the Slow Cooker is in High Heat mode
