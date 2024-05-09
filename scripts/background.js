chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("youtube.com/results")
  ) {
    try {
      await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["css/global.css"],
      });
    } catch (err) {
      console.error(`Could not insert css file due to ${err}`);
    }
  }
});
