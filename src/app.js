const express = require('express')
const app = express()

const routes = require('./routes')
const passport = require('passport')

app.use(require('morgan')('dev'))
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'tudo tranquilo', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

module.exports = app
