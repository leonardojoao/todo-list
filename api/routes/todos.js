const express = require('express');

const router = express.Router();

const todosController = require('../controllers/todos');

router.post('/new', todosController.createTodo);
router.get('/list', todosController.listTodo);
router.get('/list/:id', todosController.getTodo);

module.exports = router;
