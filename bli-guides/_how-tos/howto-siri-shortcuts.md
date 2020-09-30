---
title: How to fire BLI Macros using Siri Shortcuts
description: Send HTTP commands to excecute FIRE commands on the BLI using Siri Shortcuts
layout: pagetoc
---

Siri shortcuts allow you to execute routines or fire commands on your BeoLiving Intelligence with just a tap or by asking Siri.

Siri Shortcuts can be configured to send an HTTP command that fires a Macro you have previously set up or presses a button, to your BeoLiving Intelligence, **either on Essential or on Pro Mode**. 

This **can only be done while connected to the same network** that your BLI is connected to. Also take into account that running Siri Shortcuts requires iOS 12 or later on iPhone, iPod touch, HomePod or Apple Watch Series 3 or later, and iOS 12 or iPadOS or later on iPad.

### Setting up the Shortcut

This video exemplifies the configuration process:

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jn2jql_Z_uo?autoplay=1&loop=1"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen muted></iframe>
	</div>
  </div>
</div>

#### Step by step


 1. You can go to the Shortcut's settings to change the name.

 1. Add a “Text” action. In this action, enter your BLI's credentials, like: *user:password*

 1. Add a “Base64 Encode” action after the “Text” action which contains the credentials, and a line should connect the two. Selecte "Encode", and “None” in Line Breaks.

 1. Add a “URL” action. In this action, add the BLI's url address, this can be *http://bli.local/* or *http://<your BLI's IP>/* followed by */a/exe/#AREA OF RESOURCE#/#ZONE OF RESOURCE#/#TYPE OF RESOURCE#/#NAME OF RESOURCE#/#ACTION TO PERFORM#*

	 > E.g: http://110.220.11.22/a/exe/Main/LivingRoom/BUTTON/myButton/PRESS

 5. After the “URL” action, add a “Get Contents of URL” action. This action contains a few entries which require configuring.
    Change the Method to POST and add the following 3 headers:
     - Content-Type: text/plain
     - Accept: application/json
     - Authorization: Basic
       In the Authorization header, after the word Basic, insert a link to the “Base64 Encode” action (check out the screenshot). A space is required between the word Basic and the “Base64 Encode” action. eg: Basic Base64 Encode

    No Request Body is needed.

After this press the play button, a successful response should show a blank page in the quick view under the final step.

**Remember you can run any shortcut that you have by asking Siri on your iPhone, iPad, iPod touch, Apple Watch or HomePod, by saying "Hey Siri," and then the name of the shortcut.**

Here is how the full configuration should look.
<div class="text-center">
  <img src="/bli-guides/pictures/shortcuts.png" class="img-fluid" alt="Shortcuts screenshot"/>
</div>