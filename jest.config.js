module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // return string for the path that was acces
    '\\.css$': require.resolve('./test/style-mock.js'), // anything that ends with css(regex)
  },
  snapshotSerializers: ['@emotion/jest/serializer'], // serialize css={{}} to regular class'es
}
