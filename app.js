const express = require("express");
require("dotenv").config();
const cors = require("cors");
const tasks = require("./routes/tasks");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/tasks", tasks);

app.listen(PORT, (req, res) => {
  console.log(`Everything is working fine ${PORT}`);
});
