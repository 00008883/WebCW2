const fs = require('fs')

class ApplicantsRepos {
	
	constructor() {
		this.applicants = []
		this.path = './database/applicants.json'

		fs.readFile(this.path, (err, data) => {
			if(err) {
				console.error('Cannot read applicant from (database/applicants.json)')
			} else {
				this.applicants = JSON.parse(data);
			}
		})
	}


	add(applicant, callback) {
		applicant.id = this.generateId()
		this.applicants.push(applicant)
		this.updateFile(callback)
	}

	generateId() {
		return Math.floor(Math.random() * Math.floor(9999999999))
	}


	getAllUnarchived(){
		return this.applicants.filter(applicant => !applicant.archived)
	}

	getById(id) {
		return this.applicants.filter(applicant => applicant.id === id)[0]
	}

	delete(id, callback) {
		const index = this.applicants.findIndex((e) => e.id == id)

		this.applicants.splice(index, 1)

		this.updateFile(callback)
	}

	archive(id, callback) {
		const index = this.applicants.findIndex((e) => e.id == id)

		this.applicants[index].archived = true

		this.updateFile(callback)
	}

	getAllArchived(){
		return this.applicants.filter(applicant => applicant.archived === true)
	}

	updateFile(callback) {
		fs.writeFile(this.path, JSON.stringify(this.applicants), callback)
	}
}

module.exports = ApplicantsRepos
