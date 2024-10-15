---
title: Trigger IFTTT Applets with BeoLiving Intelligence Macros
description: This guide explains how to configure BeoLiving Intelligence to trigger your IFTTT applets. Learn to utilize BLI's built-in driver to send POST HTTP requests to IFTTT webhooks, triggering your applets with ease. The guide includes step-by-step instructions for setting up the IFTTT applet and configuring the IFTTT-Webhooks driver on your BLI system.
keywords: BeoLiving Intelligence, IFTTT, webhooks, automation, integration, applets, triggers, HTTP requests, configuration, smart home, IFTTT - Webhooks
layout: pagetoc
---

_BeoLiving Intelligence_ is now capable of firing **IFTTT applets** in a really simple way through its own driver. The driver can be found in the _external drivers list_ (Tools--> Advanced-->Install External Drivers).

Basically, _BeoLiving Intelligence_ will trigger your **Applet** by sending a POST HTTP request to an specific URL. Depending on the selected trigger, a body message will be needed or not.

### Creating your IFTTT applet with Webhooks as a service

To create your **Applet** follow the next instructions:

1. Choose **Webhooks** as a service (the one that will trigger your Applet).
1. Select "_Receive a web request_" as a trigger.
1. Set an "_Event name_" that will identify your trigger.
1. Select the action of your **Applet**. Depending on the action selected, a body on the POST can be sent by _BeoLiving Intelligence_.
1. To know the _Key_ needed to fire your **Applet**s its necessary to visit the [IFTTT Webhook documentation](https://ifttt.com/maker_webhooks) and
go to "_Documentation_".


### Configuring IFTTT - Webhooks driver on BeoLiving Intelligence

Enter to the web-interface of _BeoLiving Intelligence_ and follow the next steps:

1. Add the _IFTTT - Webhooks_ system.
1. At "_Connection settings_" of the driver insert your Key.
1. Go to _Resources_ and add a "_FIRE_" resource with the _Event name_ at the resource address.
1. Create a _Macro_ setting a _SEND_ (or _SEND WITH VALUES_ to send a message with a _body of three values_) command on the resource created at 3. Add the _Event_ you prefer. For example, this could be any physical button of your configuration. After pressing this button, the request will be fired and your phone will start ringing.
