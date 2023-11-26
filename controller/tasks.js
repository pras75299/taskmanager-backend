const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTasks = (req, res) => {
  res.send("create task");
};

const getTask = (req, res) => {
  res.send("get single task from the file");
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
