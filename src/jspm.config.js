SystemJS.config({
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  packages: {
    "singpath": {
      "main": "index.js"
    }
  },
  map: {
    "babel": "npm:babel-core@5.8.35"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "angular": "github:angular/bower-angular@1.5.1",
    "angular-animate": "github:angular/bower-angular-animate@1.5.1",
    "angular-loading-bar": "github:chieffancypants/angular-loading-bar@0.8.0",
    "angular-material": "github:angular/bower-material@1.0.6",
    "angular-messages": "github:angular/bower-angular-messages@1.5.1",
    "angular-route": "github:angular/bower-angular-route@1.5.1",
    "angularfire": "github:firebase/angularfire@1.1.4",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "clean-css": "npm:clean-css@3.4.10",
    "core-js": "npm:core-js@1.2.6",
    "cryptojs": "github:sytelus/cryptojs@3.1.2",
    "css": "github:systemjs/plugin-css@0.1.20",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "firebase": "github:firebase/firebase-bower@2.4.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "singpath-core": "github:singpath/singpath-core@0.3.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.7",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "github:angular/bower-angular-animate@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-angular-aria@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-angular-messages@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-angular-route@1.5.1": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1"
      }
    },
    "github:angular/bower-material@1.0.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1",
        "angular-animate": "github:angular/bower-angular-animate@1.5.1",
        "angular-aria": "github:angular/bower-angular-aria@1.5.1",
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "github:chieffancypants/angular-loading-bar@0.8.0": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1",
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "github:firebase/angularfire@1.1.4": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.1",
        "firebase": "github:firebase/firebase-bower@2.4.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:clean-css@3.4.10": {
      "map": {
        "commander": "npm:commander@2.8.1",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:commander@2.8.1": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:stream-http@2.2.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});
