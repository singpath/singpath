# Singpath UI

## install

```shell
git clone https://github.com/singpath/singpath.git
cd singpath
npm install
```

Edit `src/index.html` and `src/index.html` to point to the correct Firebase DB id.
By default, the source versionpoints to "singpath-play", the build version to
singpath (our production DB).


## Run Dev server

```shell
npm start
```

## Building app bundle

To build a minified bundles of the singpath apps and its dependencies:
```shell
npm run build
```

To serve it:
```shell
npm run serve-build
```


## TODO

- add README;
- add tests;
- add command to load rules;
- extract shared services and components to its own package to share it with
class mentors.
