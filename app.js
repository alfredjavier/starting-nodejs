// import
const express = require("express");
const app = express();
const port = 3000;

// static File link public directory
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// set view ejs
app.set("views", "./views");
app.set("view engine", "ejs");

// display views index.ejs directory files
app.get("", (req, res) => {
  res.render("index", { Text: "This is EJS" });
});
// display views about.ejs directory files
app.get("/about", (req, res) => {
  res.render("about", { Text: "About page" });
});

// listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
