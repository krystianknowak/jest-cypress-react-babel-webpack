const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'), // root dir where jest is looking for tests is one up
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname),
  ], // because of this, your components are trated like node_modules in tests, doing same thing that webpack config
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // return string for the path that was acces
    '\\.css$': require.resolve('./style-mock.js'), // anything that ends with css(regex)
  },
  collectCoverageFrom: ['**/src/**/*.js'], // include files with this patterns to code coverage report, we want to exclude our tests helper
}
