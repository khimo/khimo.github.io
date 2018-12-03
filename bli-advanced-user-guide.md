---
title: BeoLiving Intelligence Advanced User Guide
layout: pagetoc
---

## Introduction

This guide provides:
- A description of all the elements you will find inside a _BeoLiving Intelligence_ box.
- How to find and access _BeoLiving Intelligence_ within the network.
- An overview of different sections of its web interface in _ESSENTIAL_ mode.
- How to upgrade your _BeoLiving Intelligence_ to _PRO_ mode.

Most of the _BeoLiving Intelligence_ configuration and usage in _ESSENTIAL_ mode is done through the _BeoLiving App_. This Smart Device application lets
 you customize your installation and control all devices on it. _BeoLiving Intelligence_ also provides a web interface, which out of the box 
provides Network settings and User access control management. After upgrading your controller to _BeoLiving Intelligence PRO_, the web interface 
becomes the most important tool for installation, configuration and programming. 


**{#admin-sign-in}An installer can access the _BLI_ setup interface with the _admin_ user, which has an unknown password by default. The Setup button function 2 (check [Button Functions](#button-functions))  can be used for setting the _admin_ password to _"admin"_ for 5 minutes, and the _BLI_ will request a password update as soon as the web interface is accessed.**


{% for adv_guid in site.bli_advanced_user_guide %}
	<div class="adv_guide">
		<h1><a href="{{ adv_guide.url }}">{{ adv_guide.title }}</a></h1>
		{{ adv_guide.content }}
	</div>
{% endfor %}

