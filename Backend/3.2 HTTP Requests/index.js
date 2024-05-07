import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<H1>Home</H1>");
});

app.get("/about", (req, res) => {
  res.send(`<H1>About</H1>
  <p>This is about me</p>
  `);
});

app.get("/contact", (req, res) => {
  res.send("<H1>Contact</H1>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
