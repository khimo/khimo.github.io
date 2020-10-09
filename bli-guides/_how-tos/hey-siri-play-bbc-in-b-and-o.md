---
title: "Hey Siri, play the BBC on B&O"
description: Excecute Macro on the BLI using Siri Shortcuts
layout: pagetoc
---

As you may have seen in the [How to control your BLI with Siri Shortcuts](howto-siri-shortcuts) document, it is possible to control your BeoLiving Intelligence (BLI) by talking to Siri.

In this document, we aim to show a short example, from start to finish, of a cool integration sequence you could perform using the BLI in Pro or Essential mode. After following this tutorial, you will be able to ask Siri to turn on your favourite radio station every morning.

Important reminder:
 - This functionality works on **both Essential and Pro Modes**. 
 - This **can only be done while connected to the same network** that your BLI is connected to. 
 - Running **Siri Shortcuts requires iOS 12 or later** on iPhone, iPod touch, HomePod or Apple Watch Series 3 or later, and iOS 12 or iPadOS or later on iPad.

### Setting up the Scene/Macro

#### On a PRO BLI
If your BLI is in PRO mode you can create a Macro by going to the "Macros" tab on the web setup page and pressing the plus (+) sign in the desired Zone. You should then name the Macro, and set the "Playque add TuneIn station" command on the desired resource.

 > If you paste the TuneIn link of the desired station (E.g. *https://tunein.com/radio/BBC-Radio-1-988-s24939/* ) into the "Station name" field, the BLI will automatically extract the information it needs.

 Here is an example of how the configuration should look:

<div class="text-center">
  <img src="/bli-guides/pictures/bbc-on-bando.png"  alt="BBC macro screenshot" class="col-sm-12"/>
</div>

#### On an Essential BLI
If your BLI is in Essential mode, you should set up BBC radio 1 as one of your product's "Favourites" (see below). Once this is done, on the BeoLiving app you must go to the zone where you wish to create the Scene, go to the "Scenes" tab, and press the plus (+) sign to create a new scene. Select the desired product, and choose the Favourite button that you have previously configured to play BBC Radio 1 on TuneIn. Press "DONE".

##### Setting up BBC Radio 1 as a favourite
B&O products have between three and four "Favourites" buttons that can be configured using a BeoRemote One, on the product itself, or through the B&0 app/web setup page. This changes depending on the product, in our example we use a BeoSound 2 which can be configured by voice control: Keep the button of choice pressed, until the voice assistant asks you what command you want to configure. You can find more information on how to configure it on the B&O app.

### Setting up the Siri Shortcut
Go to the *Shortcuts* app and press *Create Shortcut*

#### Step by step

 1. You can go to the Shortcut's settings to change the name, this is important as it will what you will tell Siri to do.

 1. Add a “Text” action. In this action, enter your BLI's credentials, like: *user:password*

 1. Add a “Base64 Encode” action after the “Text” action which contains the credentials, and a line should connect the two. Selecte "Encode", and “None” in Line Breaks.

 1. Add a “URL” action. In this action, add the BLI's url address, this can be *http://bli.local/* or *http://<your BLI's IP>/* followed by */a/exe/<AREA OF RESOURCE#/#ZONE OF RESOURCE#/#TYPE OF RESOURCE#/#NAME OF RESOURCE#/#ACTION TO PERFORM#*

	 > E.g: http://110.220.11.22/a/exe/Main/Bedroom/MACRO/BBC%20on%20B&O/FIRE

 5. After the “URL” action, add a “Get Contents of URL” action. This action contains a few entries which require configuring.
    Change the Method to POST and add the following 3 headers:
     - Content-Type: text/plain
     - Accept: application/json
     - Authorization: Basic
       In the Authorization header, after the word Basic, insert a link to the “Base64 Encode” action (check out the screenshot). A space is required between the word Basic and the “Base64 Encode” action. eg: Basic Base64 Encode

    No Request Body is needed.

After this press the play button, a successful response should show a blank page in the quick view under the final step.

This video exemplifies the configuration process:

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VruG41UOvZs?autoplay=1&loop=1"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen muted></iframe>
	</div>
  </div>
</div>

**Remember you can run any shortcut that you have by asking Siri on your iPhone, iPad, iPod touch, Apple Watch or HomePod, by saying "Hey Siri," and then the name of the shortcut.**