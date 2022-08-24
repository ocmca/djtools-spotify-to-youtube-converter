import cookieParser from 'cookie-parser'
import express from 'express'
import hbs from 'express-handlebars'
import logger from 'morgan'
import path from 'path'
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

const __dirname = path.resolve('.')

app.engine('hbs', hbs.engine ({extname: 'hbs',defaultLayout: 'layout', layoutsDir:__dirname + '/views'}))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

export default app

