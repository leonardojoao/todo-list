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

module.exports = { createTodo };
