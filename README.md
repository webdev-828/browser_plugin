# Browser Plugin

Supported browsers:

* chrome
* safari
* firefox
* opera
* msedge

## Development

* `npm install`
* `./node_modules/.bin/gulp watch --browser chrome --env development` - watch + LiveReload
* `./node_modules/.bin/gulp build --browser chrome --env development` - build once
* etc

UPD: see Makefile for short commands

Chrome / Firefox / Opera works well with LiveReload, MS Edge / Safari requires manual reload. 

## Release

* `./node_modules/.bin/gulp dist --browser chrome --env staging`
* `./node_modules/.bin/gulp dist --browser chrome --env production`
* etc

NOTE: Safari extension must be signed in browser, so it's distributed as file

### MS EDGE

https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/packaging/using-manifoldjs-to-package-extensions

* `cd dist`
* `../node_modules/.bin/manifoldjs -l debug -p edgeextension -f edgeextension -m ../build/production/msedge/manifest.json`
* `../node_modules/.bin/manifoldjs -l debug -p edgeextension -f edgeextension -m ../build/staging/msedge/manifest.json`

### Safari Native

Use this command to sync built files with XCode application:

* rsync -avr --delete build/development/safari_native/{fonts,icons,images,scripts} ../myplugin-safari/MyPlugin\ Extension/

UPD: this rsync command executed automatically