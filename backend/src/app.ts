import express, { Application, json, urlencoded } from 'express'
import morgan from 'morgan'
import path from 'path'
import routes from './routes'

const app :Application = express()

app.set('port', process.env.PORT || 3666)

app.use(morgan('dev'))
//app.use(urlencoded({extended: false}))
//app.use(json())

app.use(routes)

app.use(express.static(path.join(__dirname, '../public')))

export default app