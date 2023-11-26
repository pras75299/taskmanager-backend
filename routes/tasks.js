const express = require("express");
const router = express.Router();
const { getAllTasks } = require("../controller/tasks");

router.get("/", getAllTasks);

module.exports = router;
