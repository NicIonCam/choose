module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
      ],
      moduleNameMapper: {
          '\\.(css|scss|sass)$': 'identity-obj-proxy',
          '^react-plotly.js$': '<rootDir>/mock.js'
      },
      transformIgnorePatterns: [
          'node_modules/'
      ],
    //   testRegex: 'src/.*\\.(js|jsx)$',
      moduleDirectories: ['node_modules'],
      snapshotSerializers: ["enzyme-to-json/serializer"],
  };