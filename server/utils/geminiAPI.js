const axios = require('axios');
// require('dotenv').config({ path: '../../.env' }); // 환경변수를 불러오기 위해 dotenv를 설정

// Gemini API로 동영상 분석 요청 보내기
async function analyzeVideo(videoUrl) {
    try {
        const response = await axios.post(`${process.env.GEMINI_API_URL}/analyze`, {
            videoUrl: videoUrl,
            apiKey: process.env.GEMINI_API_KEY,
        });
        return response.data;
    } catch (error) {
        console.error('Error analyzing video:', error);
        throw new Error('Failed to analyze video');
    }
}

module.exports = {
    analyzeVideo,
};
