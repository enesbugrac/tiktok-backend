const Videos = require("./dbModel.js");
const data = require("./data.js");
const express = require("express");
const mongoose = require("mongoose");

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "*");
  next();
});
//DB config
const connection_url =
  "mongodb+srv://enesbugrac:enesbugrac@cluster0.2y5hv.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//api endpoints

app.get("/", (req, res) => res.status(200).send("25"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
  Videos.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("sea");
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log("listening on localhost" + port));
