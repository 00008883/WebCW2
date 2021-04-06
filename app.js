const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/applicants/apply', (req, res) => {
	res.render('apply', {showMessage: !!req.query.success})
})


app.listen(8000, ()=> console.log('Application is running on 8000 port ............'))