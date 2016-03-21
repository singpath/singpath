#!/usr/bin/env node
'use strict';

const fs = require('fs');
const sh = require('child_process');
const yaml = require('js-yaml');

const travisFile = './.travis.yml';
const travisInit = `
language: node_js
node_js:
- '4.2'
script:
- npm run lint
- npm run test
before_deploy:
- 'npm run build'
`.trimLeft();
const travis = sh.spawnSync('which', ['travis']);

if (travis.status !== 0) {
  console.error('Travis is not install.');
  console.error('Run "gem install travis".');
  process.exit(1);
}

console.log(`Initiating "${travisFile}"...`);
fs.writeFileSync(travisFile, travisInit);

console.log(`setting up release...
Please provide you github credentials (they won't hit Travis server);
The file to upload is dist/singpath.zip;
Deploy should occure from singpath/singpath;
The API key should be encrypted.
`);
const release = sh.spawnSync('travis', ['setup', 'releases', '-r', 'singpath/singpath'], {
  stdio: [0, 1, 2]
});

if (release.status !== 0) {
  console.error('Failed setup github release.');
  process.exit(2);
}

const travisConfig = yaml.safeLoad(fs.readFileSync(travisFile, 'utf8'));

travisConfig.deploy = {
  provider: 'releases',
  skip_cleanup: true,
  on: {
    repo: 'singpath/singpath',
    tags: true
  },
  file: 'dist/singpath.zip',
  api_key: travisConfig.deploy.api_key
};

fs.writeFileSync(travisFile, yaml.safeDump(travisConfig).replace(/\'on\':/, 'on:'));
console.log('Travis release setup.');
