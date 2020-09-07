const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tiktokSchema = new Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

const Videos = mongoose.model("tiktokVideos", tiktokSchema);
module.exports = Videos;
