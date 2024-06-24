export default {
  preset: 'ts-jest',
  transform: {
    '^.+//ts$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testRegex: '.*\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  modulePaths: ['<rootDir>']
}
