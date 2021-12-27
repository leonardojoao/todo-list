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

const getTodo = (async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findById(id);

    res.json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
});

const updateTodoStatus = (async (req, res) => {
  try {
    const { id } = req.params;
    const { check } = req.body;

    const result = await Todos.findByIdAndUpdate(id, { check }, { new: true });

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

const deleteTodo = (async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.findByIdAndDelete(id);

    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  createTodo,
  listTodo,
  getTodo,
  updateTodoStatus,
  deleteTodo,
};
