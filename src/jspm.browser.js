SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "singpath/": "singpath/"
  },
  depCache: {
    "app.js": [
      "angular",
      "./singpath/index.js"
    ],
    "github:ajaxorg/ace-builds@1.2.3/ace.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-html.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-java.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-javascript.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/mode-python.js": [
      "ace/ace"
    ],
    "github:ajaxorg/ace-builds@1.2.3/theme-twilight.js": [
      "ace/ace"
    ],
    "github:angular/bower-angular-animate@1.5.1/angular-animate.js": [
      "angular"
    ],
    "github:angular/bower-angular-aria@1.5.1/angular-aria.js": [
      "angular"
    ],
    "github:angular/bower-angular-messages@1.5.1/angular-messages.js": [
      "angular"
    ],
    "github:angular/bower-angular-route@1.5.1/angular-route.js": [
      "angular"
    ],
    "github:angular/bower-material@1.0.6/angular-material.js": [
      "./angular-material.css!",
      "angular",
      "angular-animate",
      "angular-aria"
    ],
    "github:chieffancypants/angular-loading-bar@0.8.0/build/loading-bar.js": [
      "angular",
      "./loading-bar.css!"
    ],
    "github:firebase/angularfire@1.1.4/dist/angularfire.js": [
      "firebase",
      "angular"
    ],
    "github:singpath/singpath-core@0.3.0/components/ace/ace.js": [
      "angular",
      "../../module.js",
      "ace",
      "ace/mode-html.js",
      "ace/mode-java.js",
      "ace/mode-javascript.js",
      "ace/mode-python.js",
      "ace/theme-twilight.js",
      "./ace.css!"
    ],
    "github:singpath/singpath-core@0.3.0/components/alert/alert.js": [
      "../../module.js",
      "./alert-view-toaster.html!text",
      "./alert.css!text"
    ],
    "github:singpath/singpath-core@0.3.0/components/index.js": [
      "./ace/ace.js",
      "./alert/alert.js",
      "./navbar/navbar.js",
      "./sign/sign.js"
    ],
    "github:singpath/singpath-core@0.3.0/components/navbar/navbar.js": [
      "angular",
      "../../module.js",
      "./navbar-view.html!text",
      "./navbar.css!"
    ],
    "github:singpath/singpath-core@0.3.0/components/sign/sign.js": [
      "../../module.js",
      "./sign-view.html!text"
    ],
    "github:singpath/singpath-core@0.3.0/filters.js": [
      "./module.js"
    ],
    "github:singpath/singpath-core@0.3.0/index.js": [
      "./module.js",
      "./filters.js",
      "./services/index.js",
      "./components/index.js",
      "./shared.css!"
    ],
    "github:singpath/singpath-core@0.3.0/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "angular-material"
    ],
    "github:singpath/singpath-core@0.3.0/services/countries.js": [
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/crypto.js": [
      "cryptojs",
      "cryptojs/md5.js",
      "cryptojs/pbkdf2.js",
      "cryptojs/sha256.js",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/datastore.js": [
      "angular",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/firebase.js": [
      "angular",
      "firebase",
      "../module.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/icons/icons.js": [
      "../../module.js",
      "./svgdefs.svg!text",
      "./icons-python.svg!text",
      "./icons-angularjs.svg!text",
      "./icons-javascript.svg!text",
      "./icons-java.svg!text"
    ],
    "github:singpath/singpath-core@0.3.0/services/index.js": [
      "./countries.js",
      "./crypto.js",
      "./datastore.js",
      "./firebase.js",
      "./routes.js",
      "./icons/icons.js"
    ],
    "github:singpath/singpath-core@0.3.0/services/routes.js": [
      "../module.js"
    ],
    "github:sytelus/cryptojs@3.1.2/hmac.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/md5.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/pbkdf2.js": [
      "cryptojs/sha1.js",
      "cryptojs/hmac.js"
    ],
    "github:sytelus/cryptojs@3.1.2/sha1.js": [
      "cryptojs/core.js"
    ],
    "github:sytelus/cryptojs@3.1.2/sha256.js": [
      "cryptojs/core.js"
    ],
    "singpath/components/index.js": [
      "./levels/levels.js",
      "./paths/paths.js",
      "./problems/problems.js",
      "./profile/profile.js",
      "./singpath/singpath.js",
      "./temp/temp.js"
    ],
    "singpath/components/levels/levels.js": [
      "../../module.js",
      "./levels-view-list.html!text",
      "./levels-view-new.html!text"
    ],
    "singpath/components/paths/paths.js": [
      "../../module.js",
      "./paths-view-list.html!text",
      "./paths-view-new.html!text"
    ],
    "singpath/components/problems/problems.js": [
      "angular",
      "../../module.js",
      "./problems-view-list.html!text",
      "./problems-view-list-edit.html!text",
      "./problems-view-play.html!text",
      "./problems.css!"
    ],
    "singpath/components/profile/profile.js": [
      "../../module.js",
      "./profile-view.html!text"
    ],
    "singpath/components/singpath/singpath.js": [
      "../../module.js",
      "./singpath-view.html!text",
      "./singpath.css!"
    ],
    "singpath/components/temp/temp.js": [
      "../../module.js",
      "./temp.html!text",
      "./temp1.html!text"
    ],
    "singpath/index.js": [
      "./module.js",
      "./services/index.js",
      "./components/index.js"
    ],
    "singpath/module.js": [
      "angular",
      "firebase",
      "angularfire",
      "angular-material",
      "angular-loading-bar",
      "angular-animate",
      "angular-messages",
      "angular-route",
      "singpath-core"
    ],
    "singpath/services/datastore.js": [
      "angular",
      "../module.js"
    ],
    "singpath/services/index.js": [
      "./datastore.js",
      "./routes.js"
    ],
    "singpath/services/routes.js": [
      "../module.js"
    ]
  }
});
