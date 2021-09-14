import * as Hapi from '@hapi/hapi'
import { helloName } from './module/hello'

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

server.route({
  method: 'GET',
  path: '/',
  handler: request => {
    return helloName(request.query.name)
  }
})

export { server } 