const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./webSocket');
const app = express();
const server = http.Server(app);

setupWebSocket(server);

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

server.listen(3333);
