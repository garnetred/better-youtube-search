console.log('in background.js')
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab)
  const tabUrl = tab.url ?? tab.pendingUrl;
  console.log('tabURL', tabUrl)
  if (
    changeInfo.status === 'complete' &&
    tabUrl &&
    (tabUrl.includes('youtube.com/results'))
  ) {
    console.log('in if statement')
    browser.scripting.insertCSS({
      target: { tabId: tabId },
      files: ['css/global.css'],
    });
  }
});
