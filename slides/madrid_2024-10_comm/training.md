---
layout: slides
---


[comment]: <> (For a new horizontal slide use: \n----\n)
[comment]: <> (For a new vertical slide use: \n|||n)
[comment]: <> (To write slide notes uses \nNote:)


## BeoLiving Intelligence
<!-- .slide: data-background-image="./res/shape.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

##### by Khimo and Bang & Olufsen


<br/>
<small>Technical training</small>
<br/>
<small>Montevideo, 2024-10</small>

----
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Technical training: Exercise 1

<p> Build a quick setup with all the resources of the home getting the UI automatically </p>

----
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### Unboxing | First steps

1. Connect to the network
1. Find on the network
2. Get access (Password reset)
3. Firmware upgrade

---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### User button

- **Function 2**: Set _admin_ username's password to _"admin"_ (valid for the following) 5 minutes. Check the [*Setup interface*](06-web_interface_usage#setup-interface) section for further information.
- **Function 3**: Set network settings to fixed IP (192.168.1.10).
- **Function 4**: Set network settings to use DHCP.
- **Function 5**: Erase all configuration and settings.

---

### 1 | Find on Network
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

- Using the BeoLiving App:

- On a network with a single BLI, from iOS, Android, MacOS, Linux: http://bli.local

Once we have the host, from any web browser (preferably CHROME) we enter: https://HOST/

|||

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

#### 1 | Find on Network: Using the BeoLiving App:
     1. Install the APP
     2. Log in to the device
     3. Request access
     4. Access
     5. Go to "Settings -> Device -> More info -> [HOST]"

---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

### 2 | Password reset / Login

- Use USER BUTTON function 2 to RESET admin password 

|||

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xxjk1Tv4PM4?si=Y7gq-jEYym9Ae7HF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

|||
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
Press and keep pressed the button until the LED blinks twice in red, release the button, the LED will be flashing rapidly, tap on the button to confirm.

Now go into the browser and use user **admin** and password **admin**, this password will be valid for 5 minutes after the user button procedure.

Now define the password as  **khimo**.

-----

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 3 | Define Home structure, Areas and Zones

- Go to "Admin -> Zones".
- Press "Add Area" and then the "+" to add the zone.
- Use your team name for the area, and choose a name and picture.

Each team will have its own area and zone with the name of their team, they can choose a photo that represents them for the room.

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

### 4. Add systems:

- Go to "Admin -> Systems"
- Press the "+" symbol in your zone and add "Philips Hue CLIP" driver

Philips hue address: 


---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->


#### 5.1. Mozart (B&O Control Link]

- Go to "Admin -> Resources"
- Go to "Control Link"
- Press "Show discovered resources"
- Add your product into your zone

   **NOTE:** Products can be assigned by SN or by IP.
---

#### 5.1 BIS | Link to BeoCloud
- Go to "Systems -> B&O ControlLink"
- Add the "Beo cloud accessPIN"

<small> This PIN is availabe in the B&O App in Settings -> Integrations </small>


---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### 5.2. Philips HUE 

- Go to ["Resources" -> the team's zone -> Philips HUE]
- Go to "Load resources from connected systems" and import the resources into your zone

 Everyone must import the lights in their zone.

---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### 5.3. Halo

   This step should only be performed by the first team of the BLI. Using the same idea as in step 5.1 the team must define the Halo in their room.

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 6. We explore the interfaces and explore what we have learned:
- BeoLiving App
- Halo
- TV

---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 7. Store maintenance:

We discuss how to keep the store running when the serial numbers change all the time.

----
<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Technical training: Exercise 2

<p> Halo Playlist </p>

---

<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
- Go to "Interfaces -> Halo"
- Add one fancy button
- Create a macro with this button usin AI

"Play the beatles when the third button of the second page is pressed"

----
<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Technical training: Exercise 3

<p> Halo Volume </p>

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

## Technical training: Exercise 3

- Go to "Interfaces -> Halo"
- Add one volume behaviour button
- Play with it!

---

<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

##### Technical training: Khimo remote tunnel and remote specialists
<div style="width: 80vw; height: 80vh;  margin: 0 -5vw; padding: 0 -10vw">

<iframe style="width: 100%; height:100%;" src="http://bli.local/admin/#Setup" title="BLI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="unsafe-url" allow="cross-origin; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; cookies" allowfullscreen></iframe>


</div>

---


<!-- .slide: data-background-image="./res/end.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

# Thanks!

