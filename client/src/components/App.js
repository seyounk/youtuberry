import React, { useEffect, useState } from 'react';
import VideoSummary from './VideoSummary';

const App = () => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request) => {
      setVideoInfo(request);
    });
  }, []);

  return (
    <div>
      <h1>YouTuBerry</h1>
      {videoInfo && (
        <VideoSummary videoId={videoInfo.videoId} title={videoInfo.title} />
      )}
    </div>
  );
};

export default App;
