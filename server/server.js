// dependencies
import express from "express";
import devBundle from "./devBundle";
import path from "path";

// files
import template from "./../template";

// variables
let port = process.env.PORT || 3000;

const app = express();
devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd();
app.use("./dist", express.static(path.join(CURRENT_WORKING_DIR)));

app.get("/", (req, res) => {
  res.status(200).send(template);
});

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", port);
});
