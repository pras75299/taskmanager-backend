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
    const { id: taskID } = req.params;

    const singleTask = await Task.findById({ _id: taskID });

    res.status(202).send(singleTask);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res) => {
  try {
    if (!req.body.name && !req.body.completed) {
      return res.status(400).send({ message: "Send all the correct values" });
    } else {
      const { id: taskID } = req.params;
      const taskupdate = await Task.findByIdAndUpdate(
        { _id: taskID },
        req.body
      );
      return res.status(200).send({ message: "Task is updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndDelete({ _id: taskID });
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
