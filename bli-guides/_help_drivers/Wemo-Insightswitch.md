---
title: WeMo Insight Switch 
layout: pagetoc
---


This driver supports communication directly with the WeMo Insight Switch, allowing to control and receive feedback from the device. 

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

 - Toggle: Toggles the Switch On Off, State indicates the Wemo Switch is On

 - On: Sets the Switch in On mode, State indicates the Wemo Switch is On
 
 - Off: Sets the Switch in Off mode, State indicates the Wemo Switch is Off


State Updates: 
---------------

Available State updates are as following:

 - On: Feedback indicating the Switch has been turned On 

 - Off: Feedback indicating the Switch has been turned Off
