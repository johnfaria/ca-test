import { createServer } from 'node:http'

import HTTPServer from './http.adapter'

import {
    createApp,
    eventHandler,
    toNodeListener,
    createRouter,
    readBody,
} from 'h3'

type Request = { body?: any; params?: any; query?: any; headers?: any }

export default class HTTPServerH3 implements HTTPServer {
    constructor (
        public app = createApp(),
        public router = createRouter(),
        public server = createServer(toNodeListener(app))
    ) {}

    addRoute (path: string, method: string, handle: (req: Request) => any) {
        if (method === 'GET') {
            this.router.get(
                path,
                eventHandler(async event => {
                    return handle({ body: await readBody(event) })
                })
            )
        }

        if (method === 'POST') {
            this.router.post(
                path,
                eventHandler(async event => {
                    return handle({ body: await readBody(event) })
                })
            )
        }
    }

    listen (port: number = 3000): void {
        this.app.use(this.router)
        this.server.listen(port)
        console.info('HTTPServer: Server listen on port', port)
    }
}
