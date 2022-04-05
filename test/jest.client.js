module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom', // add browser objects to testing envirionment
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'], // serialize css={{}} to regular class'es
  coverageThreshold: {
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
