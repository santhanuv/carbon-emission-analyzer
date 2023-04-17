chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];

  // Inject the content script into the active tab
  chrome.scripting.executeScript({
    target: { tabId: activeTab.id },
    files: ["content.js"],
  });
});

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log(request.data);
//   if (request.data) {
//     // Pass the data to the React component using a global variable or a state management library like Redux or MobX.
//     // For example, you could use Redux to dispatch an action with the data:
//     console.log(request.data.data);
//     setTotalBytes(request.data);

//     setValue(estimatedCO2);
//   }
// });
