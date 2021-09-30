---
title: Send email using secure SMTP
layout: pagetoc
notice: DoNotEdit, created automatically from the driver metadata, must be updated on the driver itself
---
# Secure SMTP | Send emails from the BLI

Setup your account secure smtp, add your contacts addresses as resources and send emails directly from any macro.


## GMAIL SMTP

In order to use it with a GMAIL account you should enable the SMTP service in GMAIL settings and define a password for this access. 
To do this “2 step verification” in Google Account->Security must be turned on. When this is the case, the option to create an app password should be visible, one must be created for a “custom device”. 
This is the password that should be inserted in “User Password” when configuring the system. 
After that use the following connection settings in the BeoLiving Intelligence:
- Host: smtp.gmail.com
- Port: 465
- Account username: you@gmail.com 
- Account password: [the special password that you created for this use]

# Change log
## v0.1 | Initial release
