import cors from 'cors'
import express, {Application, Request, Response} from 'express'
import http, {Server} from 'http'
import socketio, {Socket} from 'socket.io'

import routesPublic from './routes/public'

class App{
    public app: Application
    public server: Server
    constructor(){
        this.app = express()
        this.server = http.createServer(this.app)
        this.middleware()
        this.routes()
        this.socket()
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.get('/api', (req: Request, res: Response)=> {
            return res.json({api: 'online'})
        })
        this.app.use(routesPublic)
    }

    socket(){
        const io =  new socketio.Server(this.server)
        io.on('connection', (socket:Socket) => {
            console.log(socket.id)
        })
    }
}

export default new App().server