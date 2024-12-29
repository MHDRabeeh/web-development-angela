import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hellow this is from server side");
});
app.post("/register", (req, res) => {
  console.log(req.body, "this is the body value");

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`server is running on ${port} successfully`);
});
