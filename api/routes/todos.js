const express = require('express');
const cors = require('cors');

const router = express.Router();

const todosController = require('../controllers/todos');

router.use(cors());

router.post('', todosController.createTodo);
router.get('', todosController.listTodo);
router.get('/:id', todosController.getTodo);
router.patch('/:id', todosController.updateTodoStatus);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
