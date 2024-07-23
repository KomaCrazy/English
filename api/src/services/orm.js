const { Sequelize, Model, DataTypes } = require('sequelize');

class ORM {

	constructor (){
		console.log("ORM !")

		this.sequelize = this.connectDB();
	}

	connectDB() {
		return new Sequelize({
  			dialect: 'sqlite',
  			storage: './database.sqlite'
		});
	}

	createTable(pram){
		class Models extends Model {}
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
	}


}

module.exports = ORM;
