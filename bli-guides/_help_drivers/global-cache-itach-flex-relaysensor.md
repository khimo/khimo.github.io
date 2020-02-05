---
title: iTach Flex Relay & Sensor
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
Global Cache iTach FLEX RELAY/SENSOR
=====================================

This driver supports communication with a Global Cache iTach Flex with Relay & Sensor link cable connected, allowing to control Relays (SPST, SPDT, DPDT), detect Contact Clousures and sense Voltages.

Connecting to the system
--------------------------------

Connection to the system is done via Ethernet interface. For
achieving this, the following parameters should be provided:

 1. *Host*: The IP address or host name of the device.
 2. *Port*: The port number where the device is waiting for
connections (by default equal to ```4998```).

The Global Cache iTach Flex driver polls each Relay, Contact Clousure and Voltage Sensor every second for state changes.

Available resources
--------------------------------

The available resource types are:

* **RELAY_SPST** : Relay SPST represented as a BUTTON with feedback representing the open/close state of the Relay.   
* **RELAY_SPDT** : Relay SPDT represented as a custom _GPIO resource allowing to set the Relay to 3 possible states. 
* **RELAY_DPDT** : Relay DPDT represented as a custom _GPIO resource allowing to set the Relay to 3 possible states.
* **SENSOR\_CC\_VS** : Contact Closure/Voltage Sensor (depending of iTach Flex configuration) represented as a GPIO to indicate contact closure or voltage below/above threshold.

Resource Address
-------------------

Resource address represents the port of the iTach Flex Relay & Sensor link cable.  

* **RELAY_SPST** : Address equal to number between ```[1-4]```. 
* **RELAY_SPDT** : Address equal to number ```1``` or ```3```.
* **RELAY_DPDT** : Address equal to number ```1```.
* **SENSOR\_CC\_VS** : Address equal to number between ```[1-4]```.

Commands, Events and States
-------------------------------

+ **RELAY_SPST** : 
    - **PRESS** : Toggles state of Relay.
    - **\_SET** : Set Relay state to position ```0``` or ```1```.
+ **RELAY_SPDT** : 
    - **\_SET** : Set Relay state to position ```0```, ```1``` or ```2```.
+ **RELAY_DPDT** : 
    - **\_SET** : Set Relay state to position ```0```, ```1``` or ```2```. 
+ **SENSOR\_CC\_VS** : 
    - **State variable**:
        + STATE: On **Contact Clousure** indicates if the contact is open/closed. On **Voltage Sensor** indicates if the voltage sensed on the port is between ```+/-3Vrms``` and ```+/-24Vrms``` or not.     

Load Resources
-----------------

Load resources feature is available on the driver. It will load the Relays configured with the correct port address and 4 CC's/Voltage sensor's detected on the iTach Flex device. 

**Note**: Ports must be configured via hardware with the available jumpers and by the web interface of the iTach Flex. For further information about configuration for each ports visit the *iTach Flex Relay & Sensor link cable User Guide*.
