const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth/auth");
const authDashboard = require("./routes/auth/authDashboard");

const app = express();
const PORT = process.env.PORT || 4050;
dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db  ")
);

app.use(express.json(), cors());

app.get("/", (req, res) => {
  res.send(`Hey it's working !!`);
});

app.use("/api/users", authRoute);
app.use("/api/dashboard", authDashboard);

app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));