const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ myVideo: "./video/vid.mp4" });
});

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});