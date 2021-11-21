module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    '\\.(css|less|scss)$': '<rootDir>jest.cssTransform.js',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx',
    '!<rootDir>/src/components/**/index.tsx',
  ],
};
