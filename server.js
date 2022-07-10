require("dotenv").config();
const express = require("express");
const sportRoutes = require("./src/sport/routes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/sports", sportRoutes);

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
