import ejs from 'ejs'
import  express, {Request, Response, NextFunction} from 'express'
import { resolve } from 'path'


const app = express()

app.use(express.static(resolve(__dirname, '..', '..', 'public')))
app.set('views', resolve(__dirname, '..', '..', 'public'))
app.engine('html', ejs.renderFile)
app.set('views engine', 'html')
app.get('/', async(req: Request, res: Response) => {
    return res.render('index.html')
})


app.use(function(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    res.render('404.html')
})


export default app