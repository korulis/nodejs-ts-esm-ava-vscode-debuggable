import { App } from "app/app.js"
import { App2 } from "./app2.js"

const signals = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15,
}

// process.on('unhandledRejection', error => logger.error(error))

const app2 = new App2()
app2.print()
const app = new App()
app.start()

for (const [signal, code] of Object.entries(signals)) {
  process.on(signal, async () => {
    await app.stop()
    await app2.stop()
    process.exit(128 + code)
  })
}
