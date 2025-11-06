const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Server is alive and running 24/7 on Cyclic!");
});

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
