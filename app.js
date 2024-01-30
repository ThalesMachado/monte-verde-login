const express = require('express')
const app = express()

const routes = require('./src/routes')

const passport = require('passport')

const port = process.env.PORT || 3000;

app.use(require('morgan')('dev'))
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'tudo tranquilo', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})