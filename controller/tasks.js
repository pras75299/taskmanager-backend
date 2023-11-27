const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).send({
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error });
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
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const singleTask = await Task.findById(id);

    res.status(202).send(singleTask);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = (req, res) => {
  res.send("update task on file");
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.send({ message: "book is not found" });
    }
    return res.status(200).send({ message: "Task has been deleted" });
  } catch (error) {}
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
