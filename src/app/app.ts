export class App {

  constructor() {
    console.log('App created')
  }

  async start(): Promise<void> {
    console.log('Starting server 1...')
  }

  async stop(): Promise<void> {
    console.log('Stopping server 1...')
  }
}
