const { Sequelize, Model, DataTypes } = require('sequelize');
const { IsValid } = require('./valid');

const Types = {
	"string": DataTypes.STRING,
	"char": DataTypes.CHAR,
	"text": DataTypes.TEXT,
	"number": DataTypes.NUMBER,
	"int": DataTypes.INTEGER,
	"float": DataTypes.FLOAT,
	"time": DataTypes.TIME,
	"date": DataTypes.DATE
};

class DynamicModel extends Model {}

const World = {
	th: DataTypes.STRING,
	en: DataTypes.STRING
};

class ORM {

	constructor() {
		this.sequelize = this.connectDB();
		this.models = {};
	}

	connectDB() {
		return new Sequelize({
  			dialect: 'sqlite',
  			storage: './database.sqlite'
		});
	}

	defineModel(table, field) {
		if (!this.models[table]) { // Check if model already exists
			this.models[table] = this.sequelize.define(table, field, {
				freezeTableName: true,
				timestamps: false,
			});
		}
		return this.models[table];
	}

	async createTable(prams) {
		if (IsValid(prams.table)) {
			const prams_field = {};
			Object.keys(prams.field).forEach(key => {
				prams_field[key] = Types[prams.field[key]];
			});
			this.defineModel(prams.table, prams_field);

			try {
				await this.sequelize.sync();
				console.log(`Table ${prams.table} created successfully.`);
			} catch (err) {
				console.error('Error creating table:', err);
			}
		}
	}

	async addWord(prams) {
		const { table, field, data } = prams;
		const prams_field = {};
		Object.keys(field).forEach(key => {
			prams_field[key] = Types[field[key]];
		});
		const Model = this.defineModel("word_"+table, prams_field);
		try {
			const user = await Model.create(data);
			console.log('User added successfully:', user.toJSON());
		} catch (err) {
			console.error('Error adding user:', err);
		}
	}

	async getData(prams) {
		const { table } = prams;
		const Model = this.defineModel("word_" + table, World)
			const users = await Model.findAll();
			return users;
		}
	
}

module.exports = ORM;
