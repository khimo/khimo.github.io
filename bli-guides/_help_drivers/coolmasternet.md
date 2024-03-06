---
title: CoolMasterNet
layout: drivertoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# CoolMasterNet HVAC Bridge

The CoolMasterNet driver on the BeoLiving Intelligence integrates all HVAC´s configured in the CoolMasterNet bridge. 

## Connecting to the system

Communication with CoolMasterNet Bridge could be established via RS232 or TCP Ethernet connection. 

TCP ethernet connection only contains as setting _Poll Interval_, time between status requests (default to 30 seconds).

For RS232 connection, CoolMasterNet Bridge is configured as default with 9600bps, 8 Data bits, no Parity, 1 Stop bit and no Flow control.  

## Available resources

The available resource type is:

* **Air Conditioning unit**: Air Conditioning device connected and configured in CoolMasterNet Bridge.
* **Ventilation unit**: Ventilation unit device connected and configured in CoolMasterNet Bridge. _No state feedback available for this resource type_.
* **Water Heater unit**: Water Heater device connected and configured in CoolMasterNet Bridge. _No state feedback available for this resource type_.

## Resource Address

Address of each resource is represented by their _UID_ (Indoor Unit address). The address format is _Ln.XYZ_ (Eg: _L1.202_) where:

    * _n_: Equal to line number. Could be any number between 1-8.
    * _XYZ_: Equal to Indoor Number.

## Commands

Commands depending of resource type:
* **Air Conditioning unit**:

  - **SET SETPOINT**: Set setpoint of AC.
  - **SET MODE**: Set AC mode to _Auto_, _Cool_, _Heat_, _Dry_, _Fan_ and _Off_.
  - **\_SET FANSPEED**: Set fan speed to the predifined values _Very\_Low_, _Low_, _Medium_, _High_, _Very\_High_ and _Auto_.
  - **\_SET LOUVER POSITION**: Sets louver position to the predifined values _Horizontal_, _Vertical_, _30_, _45_ and _60_.
* **Water Heater unit**:

  - **\_SET SETPOINT**: Set water heater setpoint.
  - **\_SET MODE**: Set water heater mode to _Heat_, _Hot__ and _Eco_.
  - **\_SET STATE**: Turn On/Off water heater.
  - **\_SET BOOSTER**: Turn On/Off water heater booster.
* **Ventilation unit**:

  - **\_SET MODE**: Set ventilation unit mode to _Auto_, _Cool_, _Heat_, _Dry_, _Fan_ and _Off_.
  - **\_SET FAN**: Set fan mode to _Low_, _Low\_Fresh\_Up_, _High_, _High\_Fresh\_Up_, _Super\_High_, _Top_, _Auto_.
  - **\_SET STATE**: Turn On/Off ventilation. An extra parameter _IS\_DUAL_ must be specified for correct command execution and must be _true_ if Indoor Unit consist in a Air Conditioning and Ventilation Unit at the same time or _false_ if not.

## Resource discovery

CoolMasterNet Driver of BeoLiving Intelligence has the capability of import all devices configured in CoolMasterNet Bridge but, due to CoolMasterNet protocol limitations, BeoLiving Intelligence can´t distinguish resource type of discovered devices. It´s installer responsability to know the correct resource type of a device with the resource address as a reference.

## Changelog

- v0.3 | 2022-03-04: Simplify the driver to improve the handling of multiple resources.

