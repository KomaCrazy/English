const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');

app.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
})

app.use('/',indexRoutes)
app.use('/admin',adminRoutes)

app.get

app.listen(port, () => {
	console.log(`Server running at <http://localhost>:${port}/`);
});