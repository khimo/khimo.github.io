---
title: "Hey Siri, play the BBC on B&O"
description: Excecute Macro on the BLI using Siri Shortcuts
layout: pagetoc
---

As you may have seen in the "How to control your BLI with Siri Shortcuts" document, it is possible to control your BLI by talking to Siri.

In this document, we aim to show a short example, from start to finish, of a cool integration sequence you could perform. After following this tutorial, you will be able to ask Siri to turn on your favourite radio station every morning.

Important reminder:
 - This functionality works on **both Essential and Pro Modes**. 
 - This **can only be done while connected to the same network** that your BLI is connected to. 
 - Running **Siri Shortcuts requires iOS 12 or later** on iPhone, iPod touch, HomePod or Apple Watch Series 3 or later, and iOS 12 or iPadOS or later on iPad.

### Setting up the Macro


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
  <img src="/bli-guides/pictures/shortcuts.PNG" height="800" alt="Shortcuts screenshot"/>
</div>