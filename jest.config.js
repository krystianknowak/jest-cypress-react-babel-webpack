const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom', // add browser objects to testing envirionment
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ], // because of this, your components are trated like node_modules in tests, doing same thing that webpack config
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // return string for the path that was acces
    '\\.css$': require.resolve('./test/style-mock.js'), // anything that ends with css(regex)
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['@emotion/jest/serializer'], // serialize css={{}} to regular class'es
  collectCoverageFrom: ['**/src/**/*.js'], // include files with this patterns to code coverage report, we want to exclude our tests helper
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 29,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}
