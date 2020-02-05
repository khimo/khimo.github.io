---
title: WeMo Coffee Maker
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
WeMo / Mr Coffee Maker 
========================= 

This driver supports communication directly with the WeMo enabled Mr Coffee Maker, allowing to control and receive feedback from the device. 

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

 - Make Coffee: Initiate brewing Coffee, State indicates brewing is in progress

 - Coffee Done: LED State indicates the Freshly Brewed Coffee is ready for enjoyment

 - Ready to Brew: LED State indicates the Coffee Maker is ready to Brew Coffee

 - Coffee Maker: State Feedback data


State Updates: 
---------------

Available State updates are as following:

 - Brewed: Integer value stating Brewed Status 


 - Brewing: Integer value stating Brewing Status


 - Clean Advice: True/False Feedback for Cleaning Advice from Coffee Maker


 - Cleaning: Feedback for Cleaning status 


 - Filter advise: Filter status feedback


 - Last Cleaned: Status feedback for last cleaned status


 - Mode time: Feedback for Mode Time


 - Time remaining: Feedback for Time Remaining


 - Water level reached: True/False Feedback for Water Level reached


 - Mode: States current mode as either: Refill, Cleaning Brewing, Brewed, Brew Failed Carafe Removed, Cleaning Soaking, Refill Water, Place Carafe, Brewing or Ready
