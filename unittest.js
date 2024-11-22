export default {
  files: ['dist/test/unit/**/*.test.js'],
  watchMode: {
    ignoredChanges: ['dist/**/*', 'tsconfig.tsbuildinfo']
  },
  timeout: '1m',
  nodeArguments: ['--import=tsx', "--loader=./dist/app/alias.js"],
}
