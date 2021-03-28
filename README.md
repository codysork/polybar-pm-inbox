# polybar-pm-inbox
A polybar module that displays the number of emails in your Protonmail inbox.

## Add to your modules.ini

1. Make sure to include the filepath for this script on the ```exec``` line, leaving ```2>/dev/null```.
2. Also add the path to your preffered Internet browser on the ```click-left``` line.

```
[module/pm-inbox]
type = custom/script
exec = /path/to/polybar-pm.js 2>/dev/null
click-left = /path/to/your/browser https://protonmail.com/login
interval = 3600
```
