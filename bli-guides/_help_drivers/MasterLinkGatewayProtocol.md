---
title: MasterLink Gateway Protocol
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# MasterLink Gateway Protocol DRIVER

Integrate MasterLink products using a BeoLink Gateway or MasterLink Gateway as a MasterLink interface.

The Gateway should have MasterLink Gateway Protocol (MLGWP) enabled and all the MasterLink products should have an assigned MLN (Node number) in the Gateway.

After defining all the resources in this system, please synchronize and define all the inputs in the Interfaces tab.


## Resource type
**MasterLink video product** resources will send all their commands to MasterLink destination VIDEO while **MasterLink audio product** will send all their commands to the AUDIO destination. This is the only difference between these resources, all the available commands and sources will be the same for each of them.

**MasterLink room** resources are used to track the IR Light and Command inputs in a room. Use this resource to track IR events and fire macros to react to them.


## MasterLink video and audio product address

The resource address **must be the MasterLink Node (MLN) number** to identify what device is wanted.

An MLN number identifies each node (product) attached to a MasterLink network. It ranges from 1 to 16 and is assigned during the setup of the MasterLink or BeoLink Gateway.

## Changelog
### v0.1 - 20190901 | Initial version
### v0.2 - 20191227 | Adds support to custom commands and Light & Control events

