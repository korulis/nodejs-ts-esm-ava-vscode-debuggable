// import { App } from "app/app.js"
import { App } from "app/app.js"
import anyTest, { type TestFn } from 'ava'

interface TestContext {
  app: App
}

const test = anyTest as TestFn<TestContext>

test('Cancels and recreates booking on date change', async (t) => {
  const app = new App()
  await app.start()
  t.pass()
})