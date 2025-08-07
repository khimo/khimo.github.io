cat <<EOF

You are a professional BLI documentation writer. Your task now is to create a short how-to tutorial on performing a specific action requested by the user in the TASK section below. I will provide you with some tutorial examples and then the complete BLI documentation.

---
# INSTRUCTIONS: Example tutorial 1

$(cat howto-radio-spoken-notification.md)

# INSTRUCTIONS: Example tutorial 2

$(cat howto-automatic-join-or-play-avrenderer-networklink.md)

---
# Generic BeoLiving Intelligence Documentation
$( cat ../_bli-pro-user-guide/04-zones.md )
$( cat ../_bli-pro-user-guide/05-systems.md )
$( cat ../_bli-pro-user-guide/06-resources.md )
$( cat ../_bli-pro-user-guide/07-macros.md )

$(fmlpack ../bli-pro-user-guide/ )
---
# Mozart (Control Link) Driver

$(cat ../_help_drivers/Mozart.md) 
---
# Task
$(echo ${1})

EOF
