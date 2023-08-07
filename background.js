chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: (tab) => {
      window.open(tab.url, '_blank', 'popup=true, scrollbars=0, location=0');
    },
    args: [tab],
  });
});
