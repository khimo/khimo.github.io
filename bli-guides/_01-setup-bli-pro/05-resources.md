---
title: Resources
layout: pagetoc
---


Resources are provided by the installed systems:

+ BeoLink system (_NL_ A/V products and its connected sources) 
+ Home Automation system(s) (e.g. buttons, sensors) 
+ Virtual resources (programmed resources e.g. related to a button on a user interface or based on an event)


#### BeoLink resources

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/resources-beolink.png" class="img-fluid" alt="BeoLink resources"/>
</div>
<br>

The resources have the following parameters:

+ **Zone**: The zone to which the resource belongs.
+ **Name**: Enter a name to ease identification of the resources.
+ **Type**: Select type from the drop down list. The only available resource type is _NL_ product.
+ **Address**: Unique identification of a resource. The format depends on the system. For _NL_ products, address will be the serial number.
+ **Force Discovery**: Forces the product discovery in case it could not be done automatically.

#### Home Automation system resources

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/resources-ha.png" class="img-fluid" alt="Home Automation resources"/>
</div>
<br>

The resources have the following parameters:

+ **Zone**: The zone to which the resource belongs.
>> This defines from which zone you will be able to effectively control the resource. Independently of what zone the system is in.
+ **Name**: Name to ease identification of the resources.
+ **Type**: Resource type. The type of available resources depends on the actual system, for instance: button, dimmer, shade 
etc. 

Some systems 
can extend the standard button to provide extra features (see this in the drop down list). The purpose of having standard resource types is that 
such common set of features are shared by most supported systems.

>> E.g. a standard button supports PRESS, HOLD and RELEASE actions plus a status indication (e.g. a LED that can be On or Off). 

+ **Address**: Unique identification of a resource. The format depends on the _HA_ system - using various number schemes.
+ **Capture**: Used to capture resources by their activity, captured by the _BLI_. Resource selected from the capture list are added automatically to 
the table of defined resources. The capture functionality is supported by most systems.
+ **Import resources**: Used to import _HA_ system resources into _BLI_ uploading a specific _HA_ system file or just requesting them directly. This feature depends on each _HA_ system driver. 

#### Virtual resources

An example of a _Virtual Resource_ is a button on the user interface (_BLApp_, _TV overlay_, _Webpanel_ - see [Interfaces](https://khimo.github.io/bli-guides/bli-pro-user-guide/#interfaces) 
section for more information).
> E.g. a virtual button for cinema scene, or a boolean variable to indicate that a specific condition has been reached. 
_Virtual Resources_ make it possible to define buttons and variables of String, Integer and Boolean types for systems, without implementing these 
directly. 

The _BLApp_ currently uses virtual buttons to display scene buttons. _Virtual Resources_ have no functionality by themselves. 
[Macros](https://khimo.github.io/bli-guides/bli-pro-user-guide/#macros) must be defined to link user actions on a virtual resource, with events and commands in the system.

<br>
<div class="text-center">
  <img src="https://khimo.github.io/bli-guides/pictures/bli-pro-user-guide/resources-virtual.png" class="img-fluid" alt="Virtual resources"/>
</div>
<br>

The address of a _Virtual Resource_ is a unique number and if isn't set manually, _BLI PRO_ generates automatically an un-used address for that
 resource. 
