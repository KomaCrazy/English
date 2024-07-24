const { Sequelize, Model, DataTypes } = require('sequelize');
const { IsValid } = require('./valid');

class ORM {

	constructor (){
		this.sequelize = this.connectDB();
	}

	connectDB() {
		return new Sequelize({
  			dialect: 'sqlite',
  			storage: './database.sqlite'
		});
	}

	createTable(prams){
		if (IsValid(prams.table)){
			const types = {
				"string":DataTypes.STRING,
				"char":DataTypes.CHAR,
				"text":DataTypes.TEXT,
				"number":DataTypes.NUMBER,
				"int":DataTypes.INTEGER,
				"float":DataTypes.FLOAT,
				"time":DataTypes.TIME,
				"date":DataTypes.DATE
			}
			const prams_info = {};
			Object.keys(prams.field).forEach(key => {
				prams_info[key] = types[prams.field[key]]				
			})

			class DynamicModel extends Model {}
			DynamicModel.init(prams_info, 
				{
					sequelize: this.sequelize,
					modelName: prams.table ,
					timestamps: false,
				}
			);

			this.sequelize.sync()
				.then(() => {
					console.log(`Table ${prams.table} created successfully.`);
				})
				.catch(err => {
					console.error('Error creating table:', err);
				});

			return DynamicModel;
		}		
	}
}

module.exports = ORM;
