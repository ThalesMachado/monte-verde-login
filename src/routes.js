const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  res.send('Hello World!')
})

router.route('/test').get((req, res) => {
  res.send('Inhaí')
})

module.exports = router
