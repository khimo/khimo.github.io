---
title: Integrate Essential BLI with Siri Shortcuts
description: This guide explains how to control your BeoLiving Intelligence (BLI) system, whether in Essential or Pro mode, using Siri Shortcuts while connected to the same local network. Learn to send HTTP commands to your BLI to trigger macros or button presses, adding voice control functionality to your smart home. Includes a step-by-step configuration guide with screenshots and a video demonstration.
keywords: BeoLiving Intelligence, Siri Shortcuts, Essential mode, Pro mode, local network, HTTP commands, automation, voice control, integration, configuration, video guide, MACRO, BUTTON
layout: pagetoc
---

<div class="row justify-content-center">
  <div class="col-sm-8">

  <p><strong>This configuration process is the ONLY way to integrate an Essential BLI with Siri Shortcuts and allows you to control the BLI only when connected to the same network. PRO BLIs can integrate directly through Khimo and it is not recommended that you configure them following this manual, but the <a href="./conf-scenes-as-shortcuts">Configure PRO BLI Scenes as Siri Shortcuts</a> manual.</strong></p>

  <p>Siri shortcuts allow you to execute routines or fire commands on your BeoLiving Intelligence with just a tap or by asking Siri.</p>

  <p>Siri Shortcuts can be configured to send an HTTP command that fires a Macro you have previously set up or presses a button, to your BeoLiving Intelligence, <strong>either on Essential or on Pro Mode</strong>.</p>

  <p>This <strong>can only be done while connected to the same network</strong> that your BLI is connected to. Also take into account that running Siri Shortcuts requires iOS 12 or later on iPhone, iPod touch, HomePod or Apple Watch Series 3 or later, and iOS 12 or iPadOS or later on iPad.</p>

  <p><strong>The video exemplifies the configuration process.</strong></p>

  <p>You can find another great use example of this functionality in our <a href="https://khimo.github.io/bli-guides/ideas/hey-siri-play-bbc-in-b-and-o">"Hey Siri, Play BBC on My B&O"</a> tutorial.</p>

  </div>
  <div class="col-sm-4">

  	<div class="embed-responsive" style="padding-bottom: 179%;">
  	  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/jn2jql_Z_uo?autoplay=1&loop=1"  frameborder="0" height="570" allow="autoplay; encrypted-media" allowfullscreen muted></iframe>
  	</div>
  </div>
</div>


<div class="row justify-content-center">
  <div class="col-sm-8">

<h4 id="step-by-step"><a class="anchorjs-link " href="#step-by-step" aria-label="Anchor link for: step by step" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>Step by step</h4>

<ol>
  <li>
    <p>You can go to the Shortcuts settings to change the name, this is important as it will what you will tell Siri to do.</p>
  </li>
  <li>
  <p>Add a Text action. In this action, enter your BLI's credentials in the format: <em>user:password</em>. Make sure to use a regular user; <b>admin is not allowed</b>. You can create a regular user from your BLI admin panel.</p>
  </li>
  <li>
    <p>Add a Base64 Encode action after the Text action which contains the credentials, and a line should connect the two. Selecte Encode, and None in Line Breaks.</p>
  </li>
  <li>
    <p>Add a URL action. In this action, add the BLIs url address, this can be <em>http://bli.local/</em> or <em>http://&lt;your BLIs IP&gt;/</em> followed by <em>/a/exe/&lt;AREA OF RESOURCE&gt;/&lt;ZONE OF RESOURCE&gt;/&lt;TYPE OF RESOURCE&gt;/&lt;NAME OF RESOURCE&gt;/&lt;ACTION TO PERFORM&gt;</em></p>

    <blockquote>
      <p>E.g: http://110.220.11.22/a/exe/Main/LivingRoom/BUTTON/myButton/PRESS</p>
    </blockquote>

    <p> If there is a space in (E.g. "Area Name"), the space needs to be replaced with %20 in the address (E.g. "Area%20Name").  </p>
  </li>
  <li>
    <p>After the URL action, add a Get Contents of URL action. This action contains a few entries which require configuring.
Change the Method to POST and add the following 3 headers:</p>
    <ul>
      <li>Content-Type: text/plain</li>
      <li>Accept: application/json</li>
      <li>Authorization: Basic
<p>In the Authorization header, after the word Basic, insert a link to the Base64 Encode action (check out the screenshot). A space is required between the word Basic and the Base64 Encode action. eg: Basic Base64 Encode</p></li>
    </ul>

    <p>No Request Body is needed.</p>
  </li>
</ol>

<p>After this press the play button, a successful response should show a blank page in the quick view under the final step.</p>


<p><strong>Remember to record your spoken message and enable the shortcut under <em>Settings --> Siri & Search</em>. The shortcut might NOT WORK via voice command if this is not done!</strong></p>

<p><strong>You can then run any shortcut that you have by asking Siri on your iPhone, iPad, iPod touch, Apple Watch or HomePod, by saying Hey Siri, run and then the name of the shortcut.</strong></p>

  </div>
  <div class="col-sm-4">
    <div class="text-center">
      <img src="/bli-guides/pictures/shortcuts.PNG" style="height: 100%; width: 100%; object-fit: contain; padding-top: 60px;" alt="Shortcuts screenshot"/>
    </div>

  </div>
</div>
