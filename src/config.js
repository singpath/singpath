System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  depCache: {
    "app.js": [
      "angular",
      "./singpath/index"
    ],
    "github:angular/bower-angular@1.5.0.js": [
      "github:angular/bower-angular@1.5.0/angular"
    ],
    "singpath/index.js": [
      "./module",
      "./services/index",
      "./components/index",
      "./singpath.css!"
    ],
    "singpath/services/index.js": [
      "./datastore",
      "./routes"
    ],
    "singpath/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "../shared/index"
    ],
    "singpath/components/index.js": [
      "./levels/levels",
      "./paths/paths",
      "./problems/problems",
      "./profile/profile",
      "./singpath/singpath",
      "./temp/temp"
    ],
    "singpath/services/routes.js": [
      "../module"
    ],
    "github:firebase/firebase-bower@2.4.1.js": [
      "github:firebase/firebase-bower@2.4.1/firebase"
    ],
    "github:firebase/angularfire@1.1.4.js": [
      "github:firebase/angularfire@1.1.4/index.js"
    ],
    "singpath/services/datastore.js": [
      "babel-runtime/core-js/object/keys",
      "angular",
      "../module"
    ],
    "github:chieffancypants/angular-loading-bar@0.8.0.js": [
      "github:chieffancypants/angular-loading-bar@0.8.0/build/loading-bar"
    ],
    "github:angular/bower-angular-animate@1.5.0.js": [
      "github:angular/bower-angular-animate@1.5.0/angular-animate"
    ],
    "github:angular/bower-angular-messages@1.5.0.js": [
      "github:angular/bower-angular-messages@1.5.0/angular-messages"
    ],
    "github:angular/bower-angular-route@1.5.0.js": [
      "github:angular/bower-angular-route@1.5.0/angular-route"
    ],
    "shared/index.js": [
      "./module",
      "./filters",
      "./services/index",
      "./components/index",
      "./shared.css!"
    ],
    "singpath/components/levels/levels.js": [
      "../../module",
      "./levels-view-list.html!text",
      "./levels-view-new.html!text"
    ],
    "singpath/components/paths/paths.js": [
      "../../module",
      "./paths-view-list.html!text",
      "./paths-view-new.html!text"
    ],
    "singpath/components/problems/problems.js": [
      "angular",
      "../../module",
      "./problems-view-list.html!text",
      "./problems-view-list-edit.html!text",
      "./problems-view-play.html!text",
      "./problems.css!"
    ],
    "singpath/components/profile/profile.js": [
      "../../module",
      "./profile-view.html!text"
    ],
    "singpath/components/singpath/singpath.js": [
      "../../module",
      "./singpath-view.html!text",
      "./singpath.css!"
    ],
    "singpath/components/temp/temp.js": [
      "../../module",
      "./temp.html!text",
      "./temp1.html!text"
    ],
    "github:firebase/angularfire@1.1.4/index.js": [
      "./dist/angularfire"
    ],
    "shared/services/index.js": [
      "./countries",
      "./crypto",
      "./datastore",
      "./firebase",
      "./routes",
      "./icons/icons"
    ],
    "shared/components/index.js": [
      "./ace/ace.js",
      "./alert/alert.js",
      "./navbar/navbar.js",
      "./sign/sign.js"
    ],
    "shared/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "angular-material"
    ],
    "npm:babel-runtime@5.8.35/core-js/object/keys.js": [
      "core-js/library/fn/object/keys"
    ],
    "shared/filters.js": [
      "babel-runtime/core-js/object/keys",
      "./module"
    ],
    "github:angular/bower-angular-animate@1.5.0/angular-animate.js": [
      "angular"
    ],
    "github:angular/bower-angular-messages@1.5.0/angular-messages.js": [
      "angular"
    ],
    "github:angular/bower-angular-route@1.5.0/angular-route.js": [
      "angular"
    ],
    "github:chieffancypants/angular-loading-bar@0.8.0/build/loading-bar.js": [
      "angular",
      "./loading-bar.css!"
    ],
    "shared/services/countries.js": [
      "../module"
    ],
    "shared/services/crypto.js": [
      "cryptojs",
      "cryptojs/md5",
      "cryptojs/pbkdf2",
      "cryptojs/sha256",
      "../module"
    ],
    "shared/services/datastore.js": [
      "angular",
      "../module"
    ],
    "shared/services/firebase.js": [
      "babel-runtime/core-js/object/keys",
      "angular",
      "firebase",
      "../module"
    ],
    "shared/services/routes.js": [
      "babel-runtime/core-js/object/keys",
      "../module"
    ],
    "github:angular/bower-material@1.0.6.js": [
      "github:angular/bower-material@1.0.6/angular-material"
    ],
    "npm:core-js@1.2.6/library/fn/object/keys.js": [
      "../../modules/es6.object.keys",
      "../../modules/$.core"
    ],
    "shared/services/icons/icons.js": [
      "../../module",
      "./svgdefs.svg!text",
      "./icons-python.svg!text",
      "./icons-angularjs.svg!text",
      "./icons-javascript.svg!text",
      "./icons-java.svg!text"
    ],
    "shared/components/alert/alert.js": [
      "../../module",
      "./alert-view-toaster.html!text",
      "./alert.css!text"
    ],
    "shared/components/ace/ace.js": [
      "angular",
      "../../module",
      "ace",
      "ace/mode-html.js",
      "ace/mode-java.js",
      "ace/mode-javascript.js",
      "ace/mode-python.js",
      "ace/theme-twilight.js",
      "./ace.css!"
    ],
    "shared/components/navbar/navbar.js": [
      "angular",
      "../../module",
      "./navbar-view.html!text",
      "./navbar.css!"
    ],
    "shared/components/sign/sign.js": [
      "babel-runtime/core-js/object/keys",
      "../../module",
      "./sign-view.html!text"
    ],
    "github:sytelus/cryptojs@3.1.2.js": [
      "github:sytelus/cryptojs@3.1.2/core"
    ],
    "github:sytelus/cryptojs@3.1.2/md5.js": [
      "cryptojs"
    ],
    "github:sytelus/cryptojs@3.1.2/pbkdf2.js": [
      "cryptojs/sha1",
      "cryptojs/hmac"
    ],
    "github:sytelus/cryptojs@3.1.2/sha256.js": [
      "cryptojs"
    ],
    "github:ajaxorg/ace-builds@1.2.3.js": [
      "github:ajaxorg/ace-builds@1.2.3/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-html.js": [
      "ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-java.js": [
      "ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-javascript.js": [
      "ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-python.js": [
      "ace"
    ],
    "npm:core-js@1.2.6/library/modules/es6.object.keys.js": [
      "./$.to-object",
      "./$.object-sap"
    ],
    "github:angular/bower-material@1.0.6/angular-material.js": [
      "./angular-material.css!",
      "angular",
      "angular-animate",
      "angular-aria"
    ],
    "github:ajaxorg/ace-builds@1.2.3/theme-twilight.js": [
      "ace"
    ],
    "github:sytelus/cryptojs@3.1.2/sha1.js": [
      "cryptojs"
    ],
    "github:sytelus/cryptojs@3.1.2/hmac.js": [
      "cryptojs"
    ],
    "npm:core-js@1.2.6/library/modules/$.to-object.js": [
      "./$.defined"
    ],
    "npm:core-js@1.2.6/library/modules/$.object-sap.js": [
      "./$.export",
      "./$.core",
      "./$.fails"
    ],
    "github:angular/bower-angular-aria@1.5.0.js": [
      "github:angular/bower-angular-aria@1.5.0/angular-aria"
    ],
    "npm:core-js@1.2.6/library/modules/$.export.js": [
      "./$.global",
      "./$.core",
      "./$.ctx"
    ],
    "github:angular/bower-angular-aria@1.5.0/angular-aria.js": [
      "angular"
    ],
    "npm:core-js@1.2.6/library/modules/$.ctx.js": [
      "./$.a-function"
    ]
  },

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-animate": "github:angular/bower-angular-animate@1.5.0",
    "angular-loading-bar": "github:chieffancypants/angular-loading-bar@0.8.0",
    "angular-material": "github:angular/bower-material@1.0.6",
    "angular-messages": "github:angular/bower-angular-messages@1.5.0",
    "angular-route": "github:angular/bower-angular-route@1.5.0",
    "angularfire": "github:firebase/angularfire@1.1.4",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "clean-css": "npm:clean-css@3.4.10",
    "core-js": "npm:core-js@1.2.6",
    "cryptojs": "github:sytelus/cryptojs@3.1.2",
    "css": "github:systemjs/plugin-css@0.1.20",
    "firebase": "github:firebase/firebase-bower@2.4.1",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:angular/bower-angular-animate@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-aria@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-messages@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-angular-route@1.5.0": {
      "angular": "github:angular/bower-angular@1.5.0"
    },
    "github:angular/bower-material@1.0.6": {
      "angular": "github:angular/bower-angular@1.5.0",
      "angular-animate": "github:angular/bower-angular-animate@1.5.0",
      "angular-aria": "github:angular/bower-angular-aria@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:chieffancypants/angular-loading-bar@0.8.0": {
      "angular": "github:angular/bower-angular@1.5.0",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
