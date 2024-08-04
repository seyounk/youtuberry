const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  summary: String,
});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;
