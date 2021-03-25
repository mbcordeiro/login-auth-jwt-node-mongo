const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hey it's working !!`);
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));