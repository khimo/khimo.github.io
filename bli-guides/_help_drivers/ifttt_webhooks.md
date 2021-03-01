---
title: IFTTT - Webhooks
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
 
# IFTTT through the Webhooks

This driver makes it simpler for the BLI user to fire IFTTT actions through the Webhooks trigger system.

To trigger an Event this driver makes a POST web request to: https://maker.ifttt.com/trigger/{BLIresourceAddress}/with/key/{SystemKey}

An optional body ({ "value1" : "", "value2" : "", "value3" : "" }) is sent, and these values can be set in the Macro configuration.

The data is completely optional, and you can also pass value1, value2, and value3 as query parameters or form variables. This content will be passed on to the Action in your Recipe. 

## Connecting to the system

Communication with Webhooks is HTTP RESTful. 

Channel settings are:

* _Key_ : The key is specific to each IFTTT user and can be found in the documentation (https://ifttt.com/maker_webhooks)

## Available resources

The available resource type is:

* **FIRE**: Fire an action.

## Resource Address

Resource Address should be exactly the name of the Webhooks event you wish to call.

## Commands, Events and States

Commands are the same for both resource types:

* Commands:
  - **SEND**: Send POST to Webhooks without values.
  - **SEND WITH VALUES**: Send POST to Webhooks with three required values.

**Value arguments are Optional for Webhooks.**

