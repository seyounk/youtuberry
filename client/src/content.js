document.addEventListener('yt-page-data-updated', function () {
    const videoId = window.location.search.split('v=')[1];
    const title = document.title;
    chrome.runtime.sendMessage({ videoId, title });
  });
  