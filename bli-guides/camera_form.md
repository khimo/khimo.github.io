---
title: Camera Form
layout: pagetoc
---

## Introduction

Add camera information to help others configure their own cameras.


 <form class="gform pure-form pure-form-stacked" method="POST" data-email="sofiboselli10@gmail.com"
  action="https://script.google.com/macros/s/AKfycbykdtwGm3gnEDh7gvvYAHVj0v7LZNszqnwlXuceSZgjw0JFvHvDSXOyZw3ZwmIXfST9cg/exec">
    <!-- change the form action to your script url -->

<div class="form-elements">
  <fieldset class="pure-group">
    <label for="name">Name: </label>
    <input id="name" name="name" placeholder="Name" />
  </fieldset>

  <fieldset class="pure-group">
    <label for="camera">Camera: </label>
    <textarea id="message" name="message" rows="10"
    placeholder="Tell us what's on your mind..."></textarea>
  </fieldset>

  <fieldset class="pure-group">
    <label for="config"> Config:</label>
    <input id="config" name="config"
    placeholder="Brand and Model"/>
  </fieldset>

  <fieldset class="pure-group">
    <label for="message">Message: </label>
    <textarea id="message" name="message" rows="10"
    placeholder="Tell us what's on your mind..."></textarea>
  </fieldset>

  <fieldset class="pure-group honeypot-field">
    <label for="honeypot">To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot.</label>
    <input id="honeypot" type="text" name="honeypot" value="" />
  </fieldset>

  <button class="button-success pure-button button-xlarge">
    <i class="fa fa-paper-plane"></i>&nbsp;Send</button>
</div>

<!-- Customise the Thankyou Message People See when they submit the form: -->
<div class="thankyou_message" style="display:none;">
  <h2><em>Thanks</em> for contacting us!
    We will get back to you soon!</h2>
</div>

 </form>

  <!-- Submit the Form to Google Using "AJAX" -->
  <script data-cfasync="false" src="form-submission-handler.js"></script>
<!-- END -->
