---
title: BeoLiving Intelligence hardware description
layout: pagetoc
---

### Connection Panel

Located on the back of the _BLI_:

+ *System Reset Button*: Press & hold for 8 seconds to *reboot* the system.
+ *User Button*: This button is intended for user confirmation and button function input. For more information refer to [Button Functions](05-user_button.md) section. 
+ *LAN Connector*: For connecting the BeoLiving Intelligence to a local network. 
+ *USB Port*: The USB port can be used for connections via RS232 or for service purposes.
+ *Power USB-C*: Powers the BLI.


<img src="../pictures/bli-advanced-user-guide/hardware-description.png" class="img-fluid" alt="Ports"/>

*Please note that BeoLiving Intelligence generation 3 can be only powered by the *USB-C connector*

### User Led 

+ *User LED*: The circular LED located on top of the BLI is used to signalize the current state of the _BLI_, using different colours and ON-OFF pattern combinations. Colours could be Green, Red or Yellow and the patterns could be Solid, Flash and Quick Flash. For more information about different _BLI_ LED states refer to [*Led States*](#led-states) section.

<div class="text-center">
  <img src="../pictures/bli-advanced-user-guide/imagen-2.png" class="img-fluid" alt="BLI"/>
</div>

### Led States

All the possible user LED states with their respective meaning are shown in the following table.

<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Activity</th>
      <th scope="col">LED state</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Normal operation</td>
      <td>Solid Green</td>
    </tr>
    <tr>
      <td>Critical error</td>
      <td>Red / Yellow flash</td>
    </tr>
    <tr>
      <td>Firmware update</td>
      <td>Red quick flash</td>
    </tr>
    <tr>
      <td>Loading configuration</td>
      <td>Green quick flash</td>
    </tr>
    <tr>
      <td>Waiting for User confirmation</td>
      <td>Green / Yellow quick flash</td>
    </tr>
    <tr>
      <td>User confirmation acknowledge</td>
      <td>Solid Yellow</td>
    </tr>
    <tr>
      <td>Boot</td>
      <td>Solid Red</td>
    </tr>
  </tbody>
</table>
