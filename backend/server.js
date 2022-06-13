let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

const todoRoute = require('./routes/todo.routes')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
console.log('Database successfully connected!')
},
error => {
	console.log('Could not connect to database : ' + error)
}
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());
app.use('/todos', todoRoute)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
	console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
	res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
	console.error(err.message);
	if (!err.statusCode)
		err.statusCode = 500;
	res.status(err.statusCode).send(err.message);
});
