# Singpath UI


## Install

Download the lastest package from the [release page], extract it, and serve it.
E.g. using Python SimpleHTTPServer:

```shell
wget https://github.com/singpath/singpath/releases/download/v0.4.2/singpath.zip
unzip singpath.zip
cd singpath
python -m SimpleHTTPServer 8000
```


## Building from source

To build a minified bundles of the singpath apps and its dependencies:
```shell
git clone https://github.com/singpath/singpath.git
cd singpath
npm install
npm run build
```

The bundle will be available in `dist/`. To serve it:
```shell
npm run serve-build
```


## Firebase Access

Edit `window.SINGPATH.firebaseId` in `index.html` to point to the correct
Firebase DB id. By default, the build version points to "singpath"
(our production DB).

To set the Firebase DB security rules and seed it, install
[singpath/firebase-rules] \(require npm 3):
```shell
npm install -g @singpath/rules
```

Then:
```shell
singpath-rules init-db -f some-firebase-id
```

To update the rules:
```shell
npm upgrade -u @singpath/rules
singpath-rules upload-rules -f some-firebase-id
```

## Read more

- [Development](./CONTRIBUTING.md);
- [Release](./RELEASE.md).


[release page]: https://github.com/singpath/singpath/releases
[singpath/firebase-rules]: https://github.com/singpath/singpath-rules
