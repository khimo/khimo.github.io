cat <<EOF
# INSTRUCTIONS: Lua macro code help

$(cat /home/fede/repos/bli/BeoLivingIntelligence/hagw/www/admin/app/components/macros/lua-code-help.md)
---
# INSTRUCTIONS: Example tutorial 1

$(cat howto-radio-spoken-notification.md)

# INSTRUCTIONS: Example tutorial 2

$(cat howto-automatic-join-or-play-avrenderer-networklink.md)

---
# INSTRUCTIONS: A macro to which you must create a tutorial:
$(cat $1)

EOF
