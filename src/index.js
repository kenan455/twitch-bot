class App{
    constructor(){
        this.express = require('express')
        this.app = this.express()
        this.middleware()
        this.routes()
    }

    middleware(){
        this.app.use(require('cors'))
        this.app.use(this.express.json())
    }

    routes() {
        this.app.get('/', (req, res)=> {
            return res.json({api: 'online'})
        })
    }
}

module.exports = new App().app