---
title: Camera Form
layout: pagetoc
---

## Introduction

Add camera information to help others configure their own cameras.


<form class="contact1-form validate-form">
	<span class="contact1-form-title">
		Get in touch
	</span>

<div class="wrap-input1 validate-input" data-validate = "Name is required">
	<input class="input1" type="text" name="name" placeholder="Name">
	<span class="shadow-input1"></span>
</div>

<div class="wrap-input1 validate-input">
	<input class="input1" type="text" name="camera" placeholder="camera">
	<span class="shadow-input1"></span>
</div>

<div class="wrap-input1 validate-input">
	<input class="input1" type="text" name="config" placeholder="Config">
	<span class="shadow-input1"></span>
</div>

<div class="wrap-input1 validate-input">
	<textarea class="input1" name="message" placeholder="Message"></textarea>
	<span class="shadow-input1"></span>
</div>

<div class="container-contact1-form-btn">
	<button class="contact1-form-btn">
		<span>
			Submit
			<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
		</span>
	</button>
</div>
</form>

<script>
	$('.contact1-form').on('submit',function(e){
    //optional validation code here

    e.preventDefault();
  
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbykdtwGm3gnEDh7gvvYAHVj0v7LZNszqnwlXuceSZgjw0JFvHvDSXOyZw3ZwmIXfST9cg/exec",
        method: "POST",
        dataType: "json",
        data: $(".contact1-form").serialize(),
        success: function(response) {
            
            if(response.result == "success") {
                $('.contact1-form')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {
            
            alert("Something went wrong. Please try again.")
        }
    })
});
</script>
