const Task = require('../models/TaskModel');

// Get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Add new task
const addTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
};

// Update task
const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
};

// Delete task
const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task removed' });
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
