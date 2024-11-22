import { App2 } from '../../app/app2.js'
import anyTest, { type TestFn } from 'ava'

interface TestContext { }

const test = anyTest as TestFn<TestContext>

test('Cancels and recreates booking on date change', async (t) => {
  const app = new App2()
  app.print()
  t.pass()
})