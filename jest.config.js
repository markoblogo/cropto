const runIntegration = process.env.RUN_INTEGRATION_TESTS === '1';

export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  modulePathIgnorePatterns: [
    '<rootDir>/.cache/',
    '<rootDir>/node_modules/.cache/',
    '<rootDir>/.bun/',
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@shared/(.*)$': '<rootDir>/shared/$1',
    '^@/(.*)$': '<rootDir>/client/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testMatch: runIntegration
    ? ['**/tests/marketDashboard.test.ts']
    : ['**/tests/**/*.test.ts'],
  testPathIgnorePatterns: runIntegration ? [] : ['/tests/marketDashboard.test.ts$'],
  collectCoverageFrom: [
    'server/**/*.ts',
    '!server/**/*.d.ts',
  ],
  haste: {
    retainAllFiles: false,
    forceNodeFilesystemAPI: true,
  },
};
