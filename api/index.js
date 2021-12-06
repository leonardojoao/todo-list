const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const todos = require('./routes/todos');

app.use('/api/todos', todos);

try {
  mongoose.connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true,
  });

  console.log('MongoDB connected');
} catch (error) {
  console.log(error);
}

app.listen(3000, () => console.log('Server active on port 3000'));
