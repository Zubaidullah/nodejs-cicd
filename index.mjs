import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("From the index.mjs file");
});

app.get("/about", (req, res) => {
  res.send("making some changes to the about page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
