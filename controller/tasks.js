const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).send({
    count: tasks.length,
    data: tasks,
  });
};

const createTasks = async (req, res) => {
  const newTask = {
    name: req.body.name,
    completed: req.body.completed,
  };
  const task = await Task.create(newTask);
  res.status(201).send(task);
};

const getTask = async (req, res) => {
  const { id } = req.params;

  const singleTask = await Task.findById(id);

  res.status(202).send(singleTask);
};

const updateTask = (req, res) => {
  res.send("update task on file");
};

const deleteTask = (req, res) => {
  res.send("delete task from the file");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
