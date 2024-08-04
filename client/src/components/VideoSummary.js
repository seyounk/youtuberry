import React from 'react';

const VideoSummary = ({ videoId, title }) => {
  const [summary, setSummary] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://localhost:3000/analyze?videoId=${videoId}`)
      .then(response => response.json())
      .then(data => setSummary(data))
      .catch(error => console.error('Error fetching summary:', error));
  }, [videoId]);

  return (
    <div>
      <h2>{title}</h2>
      {summary ? (
        <div>
          <h3>Summary:</h3>
          <p>{summary.text}</p>
        </div>
      ) : (
        <p>Loading summary...</p>
      )}
    </div>
  );
};

export default VideoSummary;
