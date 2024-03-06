---
title: WeMo Air Purifier
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
WeMo / Air Purifier 
========================= 

This driver supports communication directly with the Holmes Smart Air Purifier with WeMo, allowing to control and receive feedback from the device. 

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

 - Off: Sets the Air Purifier in Off mode, State indicates the Wemo Device is Off

 - Slow: Sets the Air Purifier in Slow mode, State indicates the Wemo Device is in Slow mode

 - Medium: Sets the Air Purifier in Medium mode, State indicates the Wemo Device is in Medium mode

 - Fast: Sets the Air Purifier in Fast mode, State indicates the Wemo Device is in Fast mode

 - Auto: Sets the Air Purifier in Auto mode, State indicates the Wemo Device is in Auto mode

 - Ionizer On: Sets the Ionizer mode On, State indicates the Ionizer is activated

 - Ionizer Off: Sets the Ionizer mode Off, State indicates the Ionizer is deactivated

 - Air Purifier: State Feedback data


State Updates: 
---------------

Available State updates are as following:

 - Air quality: Integer value stating Air Quality 


 - Expired filter time: Integer value stating Expired filter time


 - Filter life: Feedback for Filter Life


 - Filter present: Feedback for Filter presence status 


 - Ionizer status: Status of current Ionizer activity, On or Off


 - Mode: States current mode as either: Off, Slow, Medium, Fast or Auto
