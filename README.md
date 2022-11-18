# A tdd blog in node

instructions: https://github.com/theneubeck/tdd-blog-instructions


This repo uses nvm and depends on node 17

```
# some commands

npm install
npm tests

npx mocha tests/basic-test.js
npx mocha tests/basic-test.js -g 'should say 200'
```

To force only one test running:

```
it.only("should say 200 ok", () => { /* test code */ })
```

dont forget to remove it later

Libs used:

* https://github.com/visionmedia/supertest
* https://github.com/mochajs/mocha

if mocking out third parties: https://github.com/nock/nock
