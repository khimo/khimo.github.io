Twitter
===============================

This driver supports communication with Twitter Stream and Public API,
allowing to post Twitter status messages, fire events and reply a message 
when the desired word is found in tweets of the Twitter Social Network.

Connecting to the system
--------------------------------

Connection to the Twitter Stream and Public API is done via a REST connection. The 
only thing needed for establish a connection with the APIs is the *PIN CODE*. The 
steps to get the *PIN CODE* are:

 1. Click the link and login with your Twitter account.
 2. Copy the PIN code in BeoLiving Intelligence Connection setting
 3. Press Apply.
 4. Connection Process Finished.

Resources
--------------------------------

The supported resource types are:

+ **\_TRACK_FILTER**: Search for Tweets containing specific words.

+ **\_TWEET**: Post a status message on Twitter.

Events
---------------
 + *_TRACK_FILTER*:
   - *_MATCH*: Fired when the resource address is matched on the Twitter Stream.

Commands
--------------
  + *_TRACK_FILTER*:
    - **\_REPLY**: Used for reply to a Tweet. The command fields are:
      - *_Message*: Message string to reply.
      - *_User*: The user to reply.
      - *_Id*: id of the tweet of _User to reply. 
  + *_TWEET*
    - **\_SEND\_STATUS**: Used for Tweet. The command field is:
      - *_Message*: Message string to Tweet.

Usage of resources:
--------------------------
+ *_TRACK_FILTER*: 
  - Add *_TRACK_FILTER* resources with the words to search in their respective addresses. The driver 
will search for tweets that contain any resource address of the system. The address value of the 
resource corresponds to the **phrase** definition of the [Track Filter](https://dev.twitter.com/streaming/overview/request-parameters#track). 
Each phrase must be between 1 and 60 bytes inclusive and should not contain commas. When the driver 
matches a resource address in the tweet stream, it fires an event *_MATCH* type specifying the text 
of the Tweet, the respective Tweet id and the User related.
  -  *\_MATCH* as Event Macro:
To fire a Macro when a *\_MATCH* Event is fired its necessary that the Event contains the next fields:
     - *\_User*: Equal to "*$user*"
     - *\_Id*: Equal to "*$id*"
Not doing the below steps on the *\_MATCH* Event will not fire Macros.
  -  Usage of *_REPLY* command: 
To configure BeoLiving Intelligence for reply to an specific status message of any User, its necessary to: 
     1. Create a \_TRACK_FILTER resource with the message to answer in the resource address.
     2. Create a Macro with a *\_MATCH* Event with the next fields:
          - *\_User*: Equal to "*$user*"
          - *\_Id*: Equal to "*$id*"
     3. In the same Macro create a *\_REPLY* Command with the next fields:
          - *\_Message*: The Message to respond.
          - *\_User*: Equal to "*$user*"
          - *\_Id*: Equal to "*$id*" 

+ *_TWEET*: Add a *"_TWEET"* resource to be able to post status messages on Twitter. The address in 
this resource has no meaning. 


**NOTES**: 
------------------------

+ Its **MANDATORY** to have the BeoLiving Intelligence time synchronised from the Internet for the usage of Twitter Driver.
+ After add/erase/modify resources, to apply the changes in the
search its necessary to click in the *Force Resource Synchronization* in
the Connection Settings of BeoLiving Intelligence Twitter Driver. Also, when a
match is fired, the driver checks if has been any modification in the
resources and if its so, upgrades the search parameters.
