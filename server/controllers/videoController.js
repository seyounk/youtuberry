const GeminiAPI = require('../utils/geminiAPI');

exports.analyzeVideo = async (req, res) => {
  const { videoId } = req.query;
  try {
    const response = await GeminiAPI.analyzeVideo(videoId);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
