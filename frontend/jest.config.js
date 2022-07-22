module.exports = {
    moduleNameMapper: {
      "\\.(css|sass)$": "identity-obj-proxy",
    },
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": [
        "<rootDir>/src/setupTests.js"
      ]
    
};
  