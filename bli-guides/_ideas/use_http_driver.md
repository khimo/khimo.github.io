---
title: Communicate with BeoLiving Intelligence via HTTP
description: This guide provides a comprehensive overview of the Custom HTTP driver in BeoLiving Intelligence, enabling you to control smart devices not natively supported by the system. Learn how to configure the driver, send various HTTP requests (GET, POST, PUT, DELETE), and integrate external systems with your BeoLiving Intelligence setup for enhanced control and customization.
keywords: BeoLiving Intelligence, HTTP, Custom HTTP driver, smart devices, integration, GET, POST, PUT, DELETE, automation, customization, external systems
layout: pagetoc
---

The BeoLiving Intelligence has a great many supported products and devices, but if the resource you desire to control is currently not supported, you may still be able to control it via the Custom HTTP driver, and receive commands on your integrated products via a simple POST HTTP request.

It is common that _smart devices_ have an HTTP protocol for communication from external devices, you can send GET, POST, PUT and DELETE from the BLI by adding the Custom HTTP system.

This system has three parameters:
- Base url : Base URL of destination for each HTTP Request. If you have many resources with the same base and a different endpoint, this can be configured for each resource. The URL of the request will be the concatenation of Base url + resource endpoint.
- Headers (OPTIONAL): You can specify the Headers for each HTTP request made by the driver as JSON Object.
 > Eg: {"Header1": "valueX", "Header2": "valueY"}. If this field is left empty the next headers are used by default: {"Accept": "*/*", "Content-Length": "${Length}","Host": "${Host URL}"}.
- Poll url (OPTIONAL) : This field is just to set the driver as Online or Offline: If this field is not empty, the driver makes a GET HTTP Request to the Poll url every 60 seconds and the state depends on if the returned status code is 2XX Success or not. If this field is left empty, the driver state is determined by the last returned status code of a request made. In this case the driver state will be equal to Online if the returned status code is 2XX Success and Offline if not.

### Tips

- Test out firing Macros with commands on your HTTP resources, while looking at the BLI's Log (Tools-->Log) where you will be able to see what you are sending out and to what address.

### Examples
Here you can find examples related to use cases our clients presented.

#### Volume control with XML

**Q:** A client presented the case of a system whose volume could be set by sending a POST to the address "BASE_URL/volume" with the following XML content:

<?xml version="1.0" ?>
<volume>40</volume>

In this case, setting the volume to 40. How can I send this XML in the BLI?

**A:** This is all set in the resource address of a resource that you must configure to set the volume to 40, this is the only action that the resource will be able to perform, and the address should be:

"/volume;<volume>40</volume>"

#### Projector Control

**Q:** In an exchange in the [BeoWorld forum](https://forum.beoworld.org/forums/p/36777/325400.aspx#325400) a user recommended contacting Epson Projectors through cURL commands such as:

curl -vo- -u EPSONMOBILE: "http://__PROJECTOR_IP_ADDRESS__/cgi-bin/directsend?KEY=3B&_=1570092769531" -H "Accept: */*" -H "Referer: http://__IP_ADDRESS__/cgi-bin/webconf" -H "X-Requested-With: XMLHttpRequest"

How is this translated to a BLI command?

**A:** The whole command should be set as follows

 - Base URL: http://__PROJECTOR_IP_ADDRESS__/cgi-bin
 - Headers: {"Accept": "*/*", "Referer": "http://__IP_ADDRESS__/cgi-bin/webconf","X-Requested-With": "XMLHttpRequest"}

 - Resource address: /directsend?KEY=3B&_=1570092769531;

It's recommended that you define this last part of the URL in the endpoint of the resource address, as it might change when sending other commands to the projector.

Dont hesitate to send us any fun example you might have setup using the Custom HTTP Driver to [support+feedback@khimo.com](support+feedback@khimo.com)
