const express = require('express');
const app = express();
const ORM = require('../services/orm');
const { IsValid,SomeTinghLost } = require('../services/valid');



app.get('/', (req, res) => {
  res.send('Admin');
});

app.get('/create', (req, res) => {
	res.send('Admin Create');

	const orm = new ORM();

	if (IsValid(req.query.tables)){
		let table = {
			table:req.query.tables,
			field:{
				th:"string",
				en:"string",
			}
		}	
		orm.createTable(table);
	}
});

app.get('/add', (req, res) => {

	if (IsValid(req.query.tables)){

		const val = req.query
		const orm = new ORM();

		if (IsValid(val.en) && IsValid(val.th)){
			let prams = {
				table:val.tables,
				en:val.en,
				en:val.th,
			}
			orm.addWord(prams);
		}else{
			SomeTinghLost(val)
		}
	}
	
	res.send('Admin add');
});

app.get('/table', (req, res) => {
	let orm = new ORM();
	console.log(orm.getUsers());
	res.send('Admin add');
});



module.exports = app;