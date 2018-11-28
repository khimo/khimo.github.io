amBXDriver
=================

This driver allows to create resources that represents “spaces” which can run any Light-Scene in a “slot”.   


Resources
---------

The supported resource type is:

 + **\_amBX\_space**: Represents an available “space”.


Resource address format
-----------------------

The resource address represents the space number. It consists of an integer from 0 to 31.  

Resource State
--------------

 + **\_amBX\_space**
   - **LEVEL**: An integer form 0 to 100. This argument is mapped to amBX\_brightness. 
   - **\_SLOT**: An integer form 0 to 24. This argument is mapped to amBX\_slot.


Resource actions
----------------

 + **\_SET**: Sets the brightness for the space. 
 + **\_SELECT\_SLOT**: Sets the active Light-Scene for the space to be the one present in the slot passed as the command argument. 


