const express = require('express')
const app = express()


const passport = require('passport')

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'tudo tranquilo', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})