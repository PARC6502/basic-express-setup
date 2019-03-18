require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors")

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

/* example middle ware that logs request information */
app.use((req, _res, next) => {
  let requestLog = `${req.ip} requested path '${req.path}' at ${new Date(
    Date.now()
  )}`;
  console.log(requestLog);
  next();
});

/* By default all routes are accessible for all domains now */
app.use(cors())

/* ROUTING */
app.get("/", (req, res) => {
  res.send("hello");
});
