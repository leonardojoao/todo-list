const express = require('express');

const router = express.Router();

const todosController = require('../controllers/todos');

router.post('', todosController.createTodo);
router.get('', todosController.listTodo);
router.get('/:id', todosController.getTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
