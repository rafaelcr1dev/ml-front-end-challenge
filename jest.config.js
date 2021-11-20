module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    '\\.(css|less|scss)$': '<rootDir>jest.cssTransform.js',
  },
  testEnvironment: 'jsdom',
};
