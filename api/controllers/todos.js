const Todos = require('../models/todos');

const createTodo = (async (req, res) => {
  const newTodo = new Todos({
    text: req.body.text,
  });

  try {
    const result = await newTodo.save();

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

const listTodo = (async (req, res) => {
  try {
    const todos = await Todos.find();

    res.json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = { createTodo, listTodo };
