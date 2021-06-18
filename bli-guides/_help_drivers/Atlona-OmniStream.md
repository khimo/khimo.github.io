---
title: Atlona OmniStream
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Atlona OmniStream

Integration with the Atlona OmniStream devices

# Comunication with the System

Comunication with the Atlona OmniStream devices is made through two websockets for device, one for polling information and setting configuration parameters, and the other
for notifications of changes. For that purpouse the same user and password is needed on all the devices, and setted on the corresponding channel parameters of the driver.

**WARNING:** Have special care on the network setup, so the multicast streaming traffic of atlona is away from the B&O products network. Otherwise you may found connection
problems.

# Available Resources

The available resources are the following:

 - **Decoder** (MATRIX) - Any decoder

 - **Encoder** (_ENCODER) - Any encoder

# Resource Address

Each device is represented as a resource, the decoders follows the standard Matrix Resource definition and the encoders a non standard _Encoder Resource 
definition that improves the meaning of the decoder as a matrix resource. The address of each resource is the IP.

The devices should use a FIXED IP or has an IP reserved in the DHCP server. 

# Resource Discovery

Discovery is not available on this system.

# Resource Events

There is no events for this resources

# Captured Events

As there is no events, you can't capture any

# Resource Commands

- Encoder command:
  - This resource doesn't have commands, its purpose is to query the streams to be set on a decoder

- Decoder commands:
  - **TURN_ON** - it enables the stream that is configures
  - **STANDBY** - it dissables the stream that is configures
  - **SELECT_INPUT** - given the ip of an encoder and its corresponding session, it sets the audio and video stream on the decoder to the adresses of that session 


# Resource States
  
- Encoder state:
  - **_ONLINE** - tells if the bli was abled to conect to the websockets of the device

- Decoder states:
  - **ONLINE** - tells if the bli was abled to conect to the websockets of the device
  - **INPUT** - the ip address of an encoder and the corresponding session from the stream that comes

# Sources

Sources should be edited to match user requirements in the *Interfaces tab*. The controller will get all the available sources from the defined encoders resources.

# Changelog

## v0.1 
 - First release supporting the integration of the Atlona OmniStream Encoders and Decoders with the BLI.

