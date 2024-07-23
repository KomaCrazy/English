const { Sequelize, Model, DataTypes } = require('sequelize');

class ORM {

	constructor() {
		this.sequelize = this.connectDB();
		this.Models = this.defineModel();
	}

	connectDB() {
		return new Sequelize({
  			dialect: 'sqlite',
  			storage: './database.sqlite'
		});
	}

	defineModel() {
		class Models extends Model {}
		const prams = {
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING
		};

		Models.init(prams, { sequelize: this.sequelize, modelName: 'user' });

		return Models;
	}


	createTable() {
		this.sequelize.sync()
			.then(() => {
				console.log('Table created successfully.');
			})
			.catch(err => {
				console.error('Error creating table:', err);
			});
	}

	addUser(name, email, password) {
		this.Models.create({ name, email, password })
			.then(user => {
				console.log('User added successfully:', user.toJSON());
			})
			.catch(err => {
				console.error('Error adding user:', err);
			});
	}

	getUsers() {
		this.Models.findAll()
			.then(users => {
				console.log('Users retrieved successfully:');
				users.forEach(user => console.log(user.toJSON()));
			})
			.catch(err => {
				console.error('Error retrieving users:', err);
			});
	}
}

module.exports = ORM;
