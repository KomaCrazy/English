const express = require('express');
const app = express();
const ORM = require('../services/db_conn');
const ORM_X = require('../services/orm');




app.get('/', (req, res) => {
  res.send('Admin');
});

app.get('/create', (req, res) => {
  res.send('Admin Create');

	let orm = new ORM_X();
	// let orm = new ORM();
	orm.createTable();
	// orm.createTable();




});

app.get('/add', (req, res) => {
	let orm = new ORM();
	orm.addUser('John Doe', 'john.doe@example.com', 'password123');
	res.send('Admin add');
});

app.get('/table', (req, res) => {
	let orm = new ORM();
	console.log(orm.getUsers());

	// console.log(orm.addUser())
	// orm.addUser('John Doe', 'john.doe@example.com', 'password123');
	// console.log(db_c.box())
	res.send('Admin add');
});



module.exports = app;