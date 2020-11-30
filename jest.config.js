/* eslint-disable no-undef */
const filExtensions =
  '\\.(css|scss|sass|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'

const config = {
  moduleNameMapper: {
    [filExtensions]: 'identity-obj-proxy',
  },

  setupFiles: ['<rootDir>/src/tests/setup.ts'],

  /**
   * Watch
   */
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  /**
   * NYC coverage
   * see https://jestjs.io/docs/en/configuration#coveragedirectory-string
   */
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    /**
     * Exclude style declaration files
     */
    '!src/**/*.{scss,css,scss}.d.ts',
    /**
     * Exclude storybook files
     */
    '!src/**/*/*.stories.{ts,tsx,js,jsx}',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
}

module.exports = config
