console.log("in background.js");
browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab);
  const tabUrl = tab.url ?? tab.pendingUrl;
  console.log("tabURL", tabUrl);
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("youtube.com/results")
  ) {
    console.log("in if statement");
    try {
      await browser.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["css/global.css"],
      });
    } catch (err) {
      console.error(`Could not insert css file due to ${err}`);
    }
  }
});
