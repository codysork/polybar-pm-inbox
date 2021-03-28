# polybar-pm-inbox
A polybar module that displays the number of emails in your Protonmail inbox.

## Requirements

- [protonmail-api](https://github.com/justinkalland/protonmail-api) for node.js
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome)

## Setup
### Font
For any bars you will be adding this module to, make sure you include Font Awesome as a font.
```
[bar/example]

font-0 = "Font Awesome 5 Free:style=Solid:size=10;1"
```

### Add to your modules.ini

1. Make sure to include the filepath for this script on the ```exec``` line, leaving ```2>/dev/null```.
2. Also add the path to your preferred Internet browser on the ```click-left``` line.

```
[module/pm-inbox]
type = custom/script
exec = /path/to/polybar-pm.js 2>/dev/null
click-left = /path/to/your/browser https://protonmail.com/login
interval = 3600
```
