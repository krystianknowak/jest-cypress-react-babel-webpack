module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_tests__/**/*.js'], // run this config for tests that match this pattern
}
