const express = require("express");
const reqfilter= require("./middaleware")
const app = express();


//app.use(reqfilter);

app.get("/",reqfilter, (req, resp) => {
  resp.send("hello india");
});
app.get("/user",reqfilter, (req, resp) => {
  resp.send("hello mahesh");
});
app.get("/", (req, resp) => {
  resp.send("hello india");
});
app.listen(5100);
