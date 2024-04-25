const path = require("path");

const express = require("express");

const blogRoutes = require("./routes/link");
const db = require("./data/database");

const app = express();

// Activate EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies
app.use("/dist", express.static("dist")); // Serve static files (e.g. CSS files)

app.use(blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

db.connectToDatabase().then(function () {
  app.listen(3005);
});
