# Testcafe Multisite Example

A TestCafe project showing how to write tests flexibly that can be run against multiple sites.

Please see the related blog article for this project at:
https://antony.fyi/testcafe-writing-flexible-tests-that-can-be-run-against-multiple-sites/

## TestCafe example tests:

Very basic single site test:
```javascript
npx testcafe -e -q chrome tests/simpleSingleSite.js
```

Refactored version of single site test:
```javascript
npx testcafe -e -q chrome tests/refactoredSingleSite.js
```

Still a single site test, but preparing for multi-site:
```javascript
npx testcafe -e -q chrome tests/multiSite1.js
```

More preparing for multi-site test:
```javascript
npx testcafe -e -q chrome tests/multiSite2.js
```

Hard-coded multi-site test:
```javascript
npx testcafe -e -q chrome tests/multiSite3.js
```

Flexible multi-site test (defaults to US site)
```javascript
npx testcafe -e -q chrome tests/multiSite4.js
```

Flexible multi-site test - run on FR site only
```javascript
npx testcafe -e -q chrome tests/multiSite4.js --site '**/*FR*'
```

Configurable tests - run tests containing "OFF" for all sites:
```javascript
npx testcafe -e -q chrome tests/multiSite4.js --test-grep 'OFF' --site '**/*'
```

Configurable tests - run tests on all non-US sites:
```javascript
npx testcafe -e -q chrome tests/multiSite4.js --site '**/*' '!**/*US*'
```

