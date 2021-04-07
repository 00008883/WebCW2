# HR Application
## About

This application is developed for HR team, by using this app, applicants may leave their information to company, and all applicants list will be displayed in "Applicants" section. Moreover, HR team can take applicants to team by using "Employee" button in each "Applicant Information" section. 


## Links
Link to [Github](https://github.com/00008883/WebCW2)
Link to [Glitch](https://hr-application.glitch.me/)

If not working try this:
https://github.com/00008883/WebCW2.git

https://hr-application.glitch.me/


## Features

- Form Validation (_Validates only correct inputs for name, email, option in apply form_)
- Applicant can be easily moved to empoyee list
- Applicant and Employee can be easily deleted from list by using __Delete__ button
- User can upload their __Resume__ 
- In __Applicants Information__ user's file can be found by their path


## Installation

HR Application requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

```sh
cd hr-application
npm i
node app.js
```

If it doesn't work install all dependencies manually.

```sh
cd hr-application
npm i express
npm i pug
npm i multer
```


## Dependencies

HR Application has 3 dependencies

| Dependencies | Version |
| ------ | ------ |
| Express | 4.17.1 |
| Multer | 1.4.2 |
| Pug | 3.0.2 |


## Application Instructions

### How it works?
After installation, go to [localhost:8000](http://localhost:8000/)
Click to __Apply__ and check the form 
After filling the form and uploading file it should redirect to _'/applicants/apply?success=1'_, which means that, new applicant was added to the list of applicants.
In __Applicants__ page you should see new applicant. 
By clicking to the name of applicant it will redirect to __"Applicant Information"__ page.
In that page company may take applicant into the team by clicking __"Employee"__ button on the bottom of applicant's information.
Applicant will be removed to __"Employee"__ page, where will be collected with other Employees.
__"Delete"__ button in both Applicants and Employees page will delete the information about selected applicant/employee.


## License

**This project was created to fulfill Web Technology module’s requirements and does not represent an actual company or service © 00008883 2021**