const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log("-123123")
  res.send('Hello World!');
});

module.exports = app;