export default {
  files: ['src/test/unit/**/*.test.ts'],
  watchMode: {
    ignoredChanges: ['dist/**/*', 'tsconfig.tsbuildinfo']
  },
  typescript: {
    // "extensions": [
    //   "ts",
    // ],
    "rewritePaths": {
      "src/": "dist/"
    },
    compile: "tsc",
  },
  timeout: '1m',
  nodeArguments: ['--import=tsx'],
}
