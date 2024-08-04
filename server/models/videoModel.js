const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    url: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    timestamps: {
        type: [Number] // 사용자가 관심 있는 부분의 타임스탬프 배열
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
