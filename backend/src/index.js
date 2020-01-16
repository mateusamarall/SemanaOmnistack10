const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const app = express();

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose
	.connect(
		'mongodb+srv://omnistack:omnistack@cluster0-nflfv.mongodb.net/week10?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
