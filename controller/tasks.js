const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).send({
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const newTask = {
      name: req.body.name,
      completed: req.body.completed,
    };
    const task = await Task.create(newTask);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const singleTask = await Task.findById(id);

    res.status(202).send(singleTask);
  } catch (error) {
    res.status(500).send({ message: error });
  }
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
