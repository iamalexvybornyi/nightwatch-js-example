# Nightwatch JS example for Sperasoft
Example of the Nightwatch JS framework usage for Sperasoft

## Install required dependencies
```sh
npm install
```

## Run all tests with default parameters
```sh
npm test
```

## Run all tests for the specified environment
```sh
npm test -- --env non-default
```

## Run test suites by using a tag
```sh
npm test -- --tag search
```

## Run test suites by using a few tags
```sh
npm test -- --tag search --tag login
```

## Run tests from the specified file
```sh
npm test -- --test tests/LoginTest.js
```

## Run a single test
```sh
npm test -- --test tests/LoginTest.js --testcase "Login with existing account"
```
