# Release

The release package are upload by Travis each time a tag is pushed to
[singpath/singpath].


## Pushing new release

Bump the `package.json` version number, commit it, create a new tag and push
the change and the new tag. You can use `npm version major|minor|patch`; e.g.
assume you cloned the classmentor with upstream pointing to
[singpath/singpath]\:
```
git clone git@github.com:your-username/singpath.git
cd singpath
git remote add upstream git@github.com:singpath/singpath.git
```

To publish the tag:
```
git checkout master
git pull upstream master
export NEW_VERSION=$(npm version patch)
git push upstream master $NEW_VERSION
```

## Travis configuration

Travis uses encrypted Github API token to upload the package.

To reset it, delete the the oauth token named "automatic releases for singpath/singpath"
on your [Github setting page](https://github.com/settings/tokens).

Then run:
```
npm run travis-setup
```

[singpath/singpath]: https://github.com/singpath/singpath
