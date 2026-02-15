import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("From the index.mjs file");
});

app.get("/hello", (req, res) => {
  res.send("Hello from the /hello route in index.mjs file");
  res.end();
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
