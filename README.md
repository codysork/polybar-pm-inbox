# polybar-pm-inbox
A polybar script that displays your inbox

## Add to your modules.ini

1. Make sure to include the filepath for this script on the ```exec``` line.

```
[module/pm-inbox]
type = custom/script
exec = /path/to/polybar-pm.js 2>/dev/null
click-left = /path/to/your/browser https://protonmail.com/login
interval = 3600
```
