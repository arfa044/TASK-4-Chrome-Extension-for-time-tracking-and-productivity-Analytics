let startTime = null;
let activeTabHostname = null;

chrome.tabs.onActivated.addListener(async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tabs.length) return;

  const url = tabs[0].url;
  if (url && url.startsWith('http')) {
    try {
      const hostname = new URL(url).hostname;

      if (activeTabHostname !== hostname) {
        if (activeTabHostname && startTime) {
          const timeSpent = Date.now() - startTime;
          console.log(`Time spent on ${activeTabHostname}: ${timeSpent / 1000} seconds`);
        }

        activeTabHostname = hostname;
        startTime = Date.now();
        console.log(`Switched to ${hostname}`);
      }
    } catch (err) {
      console.error('Error parsing URL:', err);
    }
  } else {
    console.log('Invalid or non-HTTP URL:', url);
  }
});
