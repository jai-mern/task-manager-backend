const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

router.route('/').get(getTasks).post(addTask);
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
