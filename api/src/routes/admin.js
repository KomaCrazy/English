const express = require('express');
const app = express();
const ORM = require('../services/orm');
// const ORM = require('../services/db_conn');

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
			const newWord = {
				table: val.tables,
				field: {
					th: "string",
					en: "string",
				},
				data: {
					th: val.th,
					en: val.en
				}
			};
	
			orm.createTable({
				table: newWord.table,
				field: newWord.field
			});
			orm.addWord(newWord);
		}else{
			SomeTinghLost(val)
		}
	}
	
	res.send('Admin add');
});

app.get('/table', async (req, res) => {
	let orm = new ORM();
	let prams = {
		table:req.query.tables,
		field:{
			th:"string",
			en:"string",
		}
	}
	let data = await orm.getData(prams);
	console.log(data)
	res.send(data);
});




module.exports = app;