import { Server } from 'node:http'

export default interface HTTPServer {
    server: Server
    listen(): void
}
