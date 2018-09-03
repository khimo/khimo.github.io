---
title: BeoLiving Intelligence Quick Setup Guide
layout: pagetoc
---

_BeoLiving Intelligence_ is a Plug & Play home automation controller. The next steps show how to quickly set up your _BeoLiving Intelligence_.

## Setting up the _BeoLiving Intelligence_ {#setup}

By default, _BeoLiving Intelligence_ comes configured in DHCP mode. This means it gets its IP address from the router it is connected to. To 
configure a static IP address, please refer to [BeoLiving Intelligence Advanced User Guide](bli-advanced-user-guide.md).

Follow the next steps for setting up your BeoLiving Intelligence:
 
+ Connect your _BeoLiving Intelligence_ to your LAN through its RJ45 ethernet port.
+ Power your _BeoLiving Intelligence_ using the AC power supply or by using PoE (Power over Ethernet).
+ Wait until the _BeoLiving Intelligence_ is on normal operation mode (the User LED in solid green).
+ Go to the store in your smart device, download and install the _BeoLiving App_.
+ Open the _BeoLiving App_. When your _BeoLiving Intelligence_ is ready a pop-up will appear. If you own more than one, you can identify them 
by the serial number located at the back side of each.
+ Once in the pop-up window press "_Request access_" and follow the instructions provided.
+ Your _BeoLiving Intelligence_ should appear on the _BeoLiving App_ main screen, ready to be used.

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/7Sa3cIVKDeA?autoplay=1&loop=1&playlist=7Sa3cIVKDeA"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

## Adding Bang & Olufsen products {#add-products}

+ In the main screen of the _BeoLiving App_, select your _BeoLiving Intelligence_ and click on "Add products". A list of the supported products that are on the same network will appear.
+ Before adding a product, at least one zone (the room where the product resides) must be created. Click on "Create zone" and create one.
+ Select the product you want to add from the list and click on "Assign to zone". Assign the product to the zone you just created.
+ Return to the _BeoLiving Intelligence_ main screen and you should see the zone with the icon of the product added.

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kxKkUu6QZVI?autoplay=1&loop=1&playlist=kxKkUu6QZVI"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>
<br>

You can **add more products to that zone, edit products name, change products from zone and create more zones** by pressing **"Edit products"**. 
Note that only one icon per type of product will appear in the zone.

## Controlling Bang & Olufsen products {#control-products}

+ Select the zone that the product you want to control is in.
+ In the bottom left corner press the "Source" button. A list of all the products in the zone will appear, including the available sources.
+ Select the source in the product you want, e.g.: "Deezer" in an M5 speaker.
+ Once a source is selected, controls will be shown on the main screen. What you control depends on the device and the source you have selected. You can control volume, select content, play, pause, etc.

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/YiecxJ7fW_c?autoplay=1&loop=1&playlist=YiecxJ7fW_c"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

## Creating Scenes {#create-scenes}

_BeoLiving Intelligence_ Scenes are the way you can control several products at the same time. For example, you can create a Scene that sets the source of a speaker on _Deezer_, while at the same time sets a TV on _YouTube_. Each time you execute the Scene those commands will be executed on your _BeoLiving Intelligence_, and what's more, you can schedule the Scene to execute at a given time or periodically, e.g.: turn on the lights and close the shades each Tuesday at 10 o'clock. To configure a Scene, follow the next steps:

+ Select the zone where the Scene will reside.
+ In the top left corner press the "Scenes" button, and then press the "+" to create a Scene.
+ Give the newly created Scene a meaningful name.
+ In the list of available products, press "+" to add it to the Scene, and press the name to configure the action that the product will do when the Scene is executed.
+ The configuration of an action is done through a screen that depends on the device selected. For instance, if it's a _Bang & Olufsen_ product it will be similar to a remote control, if it's a light it will be similar to a switch.
+ After selecting all the products you want to control and configuring their actions press "Done".
+ To fire a scene just press the name of it, or you can click on the clock icon to schedule it for certain time or day.

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/R1-aekRwmR0?autoplay=1&loop=1&playlist=R1-aekRwmR0"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

## Creating Products Groups {#products-groups}

Creating a group of Bang & Olufsen products lets you control all of them as if they were one. The content that the _master_ product reproduces is reproduced as well in the rest of the products in the group. To create a group follow the next steps:

+ Go to the _Settings_ menu and select your _BeoLiving Intelligence_.
+ Go to _Device Settings_ and press _Group products_.
+ Press _Create group_ and select the _master_ product from the list.
+ Press the "+" button on each product you want to add to the group.
+ Once the group is created, whenever content is reproduced in the _master_, it will be reporduced automatically in the rest of the products of the group. The same goes for volume control on the _master_.

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/q04J8CAvP10?autoplay=1&loop=1&playlist=q04J8CAvP10"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

## Set content provider credentials {#set-credentials}

A new feature that comes with _BeoLiving Intelligence_ included in both of its modes, is the ability to set content providers credentials (
_TuneIn_ and _Deezer_) to all _Bang & Olufsen_ devices. _BeoLiving Intelligence_ will set credentials to every discovered device that has not been
setted previously (this mean that _BeoLiving Intelligence_ does not override existing credentials). To set content provider credentials follow the
 next steps:

+ Go to the _Settings_ menu and select your _BeoLiving Intelligence_.
+ Go to _Device Settings_ and choose the content provider in _Accounts_.
+ Insert credentials and press _Login_.
+ _STATUS_ will display credentials state. _BeoLiving Intelligence_ will verify if inserted credentials are valid or not after send them to a 
detected device without credentials. 

<div class="row justify-content-center">
  <div class="col-sm-5">     
	<div class="embed-responsive" style="padding-bottom: 179%;">
	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1Tab-Vqt4ZA?autoplay=1&loop=1&playlist=1Tab-Vqt4ZA"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
  </div>
</div>

## Controlling products with your voice

Most of the functionalities you can control with the _BeoLiving App_ can also be controlled with your voice if you have an Amazon Alexa (or if you have it in your phone). For instance, you could ask Alexa to "Turn on Deezer on the M5".
To be able to do so, a linking process must be done first: please refer to [BeoLiving Intelligence Link to Third Party Cloud Service Guide](bli-link-third-party-service.md). A complete list of the available commands can be found in [Alexa usage guide](bli-alexa.md) or at the Alexa skill 
description for the _BeoLiving Intelligence_.

<!--
## Integrating the BeoLiving Intelligence with other services

_BeoLiving Intelligence_ supports IFTTT, enabling the integration of it with different services. For example, you could configure it to change the
 source of a TV by sending an email, and many other combinations. A linking process very similar to the one for Alexa has to be made first, please
 refer to [BeoLiving Intelligence Link to Third Party Cloud Service Guide](bli-link-third-party-service.md). A complete list of the available 
combinations can be found in the IFTTT page.
-->

## Advanced usage

Continue with [BeoLiving Intelligence Advanced User Guide](bli-advanced-user-guide.md) to learn web interface configuration in _ESSENTIAL_ mode. 
Also, you will find how to upgrade to _PRO_ mode, which will add even more functionalities to it and enhance your experience.

Enjoy your smart home experience with _BeoLiving Intelligence_! 
