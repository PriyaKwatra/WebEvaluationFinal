import express from 'express'
import path from 'path'
import session from 'express-session'

import api from './route/api'

const app = express();
app.set("view options", { layout: false });


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'evaluation1frontend')))
app.use('/api', api)

app.listen(2001, () => console.log("server satrted at local host"))