module.exports = {
  preset: "ts-jest",
  verbose: false,
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [1100, 1226, 2418, 2345, 2339, 2769, 2322, 7053, 2740, 2739],
      },
    },
  },
  testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/__fixtures__/"],
  modulePathIgnorePatterns: ["/__mocks__/", "/dist/"],
  testEnvironment: "node",
};
