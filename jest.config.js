module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['<rootDir>/lib/**/*.{js,ts}'],
  coverageReporters: ['lcov', 'html'],
  bail: true,
  verbose: true
};
