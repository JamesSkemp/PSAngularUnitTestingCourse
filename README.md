# Pluralsight's Unit Testing in Angular Course
This course is up to date.

To get started, clone the repo or download it

```bash
npm install
npm test
```

`ng test --no-watch --code-coverage` will generate a new coverage folder with a test coverage report.

angular.json can also be updated with the following to create reports every time you test. See [Find out how much code you're testing](https://angular.io/guide/testing-code-coverage) for more information.

```json
"test": {
  "options": {
    "codeCoverage": true
  }
}
```
