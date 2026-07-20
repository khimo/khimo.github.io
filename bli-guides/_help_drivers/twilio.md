---
title: Twilio
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
keywords: Twilio, SMS, MMS, PHONE
description: Twilio driver allows to send SMS using Twilio API.
---

# Twilio

Communicates with Twilio API and allows to send SMS using their API.

Create an account at www.twilio.com and define an outgoing phone number associated to your account, after that you should get from twilio the *ACCOUNT_ID*, a *TOKEN* and the *phone number* associated to your account and use all this information to setup this driver.

Please enable the SMS API and enable it to send message to the area that you want to send messages to.


# Resources

PHONE: A phone number to which you can send an SMS or a MMS.

# Changelog
- v0.1 | 2019-11-28: Initial version with support to send text SMS and MMS
- v0.2 | 2020-08-31: Adds connection help (only for BLI v2.1.2 and newer)
- v0.3 | 2020-10-07: Improves in-line setup help

