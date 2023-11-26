const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
