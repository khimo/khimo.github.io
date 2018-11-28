Custom HTTP
===============

Due to the common usage in Home Automation devices with a HTTP based REST interface, the Custom HTTP driver is intended to facilitate the integration with these equipments.

Connection
----------

The Connection Settings has the next parameters:

- **Base url** : Base URL of destination for each HTTP Request. For each resource that has an endpoint specified, the URL of the request is the concatenation of `Base url + endpoint`.
- **Headers** *(OPTIONAL)* : Specify the Headers for each HTTP request made by the driver as *JSON Object*. Eg: `{"Header1": "valueX", "Header2": "valueY"}`. If this field is left empty the next headers are used by default: `{"Accept": "*/*", "Content-Length": "${Length}","Host": "${Host URL}"}`. 
- **Poll url** *(OPTIONAL)* : If this field is not empty, the driver makes a GET HTTP Request to the *Poll url* every 60 seconds. The driver state depends if the returned status code is `2XX Success` or not. On the other hand, if this field is left empty, the driver state is determined by the last returned status code of a request made. In this case the driver state will be equal to Online if the returned status code is `2XX Success` and Offline if not.

Resources
---------

The driver presents 4 (\__CUSTOM_) resource types. Each one corresponds with a type of HTTP request:

- **GET**
- **PUT**
- **POST**
- **DELETE**

Each resource is composed by:

-   Name of the resource.
-   HTTP request type.
-   Address

#### Resource Address Format

The resource address has the next format `ENDPOINT;PAYLOAD`, which `ENDPOINT` will be used as the endpoint url (concatenated next to the *Base url* value) and `PAYLOAD` the payload data of the HTTP request. Both the `ENDPOINT` and `PAYLOAD` are *OPTIONAL*. If only `PAYLOAD` is specified, the usage of `;` is **MANDATORY**. Usage of ";" (semi-colon) on `ENDPOINT` must be encoded as `%3B`. 

Also, an **EMPTY** resource address is valid. 

##### Resource address examples

-  `/subpath;key=value`
-  `subpath1/subpath2;{"json": "example"}`
-  `subpath`
-  `;data1=value1&data2=value2`

Event and Command
-------------------

The only *COMMAND* for each request is the **_SEND** command which executes the HTTP request.

The only *EVENT* for each request is the **_RESPONSE** event which represents the response status code obtained from the HTTP request executed.
