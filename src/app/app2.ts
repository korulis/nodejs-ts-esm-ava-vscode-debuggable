export class App2 {

  constructor() {
    console.log('App2 created')
  }

  print(): void {
    console.log('Starting server 2...')
  }

  async stop(): Promise<void> {
    console.log('Stopping server 2...')
  }
}
