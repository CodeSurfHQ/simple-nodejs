import { server } from './server'

const init = async () => {
  await server.start()
  console.info('The Hapi server running on %s', server.info.uri)
}

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
});

init()
