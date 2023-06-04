export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testMatch: [
        "<rootDir>/src/**/*.(spec|test).(js|jsx|ts|tsx)"
    ],
    automock: false,
    preset: 'ts-jest',
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@hooks/(.*)$": "<rootDir>/src/hooks/$1"
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    collectCoverage: true,

};