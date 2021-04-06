const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const multer = require('multer')

const ApplicantsRepos = require('./routes/applicants-repo')
let applicantsRepos = new ApplicantsRepos();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/applicants/apply', (req, res) => {
	res.render('apply', {showMessage: !!req.query.success})
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'database/files')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
var upload = multer({ storage: storage })


app.post('/applicants/apply', upload.single('file'), (req, res) => {
	const applicant = {
		name: req.body.Name,
		email: req.body.Email,
        jobtype: req.body.options,
        file: req.file.path,
	}

	applicantsRepos.add(applicant, (err) => {
		if (err) {
			res.redirect('/applicants/apply?failure=1')
		} else {
			res.redirect('/applicants/apply?success=1')
		}
	});

    
})

app.get('/applicants', (req, res) => {
	let applicants = applicantsRepos.getAllUnarchived()
	res.render('applicants', {applicants: applicants})
})

app.get('/applicants/:abcd', (req, res) => {
	const id = parseInt(req.params.abcd)

	const applicant = applicantsRepos.getById(id)

	res.render('applicant', {applicant: applicant})
})

app.get('/applicants/:id/delete', (req, res) =>{
    const id = parseInt(req.params.id)

    applicantsRepos.delete(id, (err) => {
		if (err) {
			res.redirect('/applicants?failure=1')
		} else {
			res.redirect('/applicants?success=1')
		}
	})
})


app.get('/applicants/:id/employee', (req, res) => {
	const id = parseInt(req.params.id)

	applicantsRepos.archive(id, (err) => {
		if (err) {
			res.redirect('/employees?failure=1')
		} else {
			res.redirect('/employees?success=1')
		}
	})

})

app.get('/employees', (req, res) => {
	let employedApplicants = [];

	employedApplicants = applicantsRepos.getAllArchived()

	res.render('employees', {applicants: employedApplicants})
})


app.get('/api/v1/applicants', (req, res) => {
	let applicants = applicantsRepos.getAllUnarchived()
	res.json(applicants)
})


app.listen(8000, ()=> console.log('Application is running on 8000 port ............'))