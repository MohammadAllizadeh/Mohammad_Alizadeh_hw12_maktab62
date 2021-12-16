const express = require("express");
const path = require("path");
const app = express();
const shoes = require("./data/shoes.json");
const port = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");
app.set("view", "view");
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/contact.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/about.html"));
});
app.get("/shopping", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/shopping.html"));
});
app.get("/shopping/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/shopping.html"));
});

app.get("/shoes/:id", function (req, res) {
  let targetShoes = shoes.find((el) => el.id === req.params.id);
  if (!targetShoes) return res.status(404).send({ error: "Not found." });
  res.send(targetShoes);
});
app.get("/shoes", function (req, res) {
  res.send(shoes);
});
app.get("/404", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/404.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
