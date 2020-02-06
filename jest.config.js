// https://jestjs.io/docs/en/configuration
module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "vue"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testURL: "http://localhost/"
}
