let data_bytes = 0;

const performanceObserver = new PerformanceObserver(async (list) => {
  const entries = list.getEntries();
  for (const entry of entries) {
    // Calculate the amount of data transferred for the entry
    const bytes = entry.transferSize || entry.encodedBodySize || 0;

    data_bytes += bytes;
    // Do something with the data usage
    console.log("Data usage:", data_bytes);
    // chrome.runtime.sendMessage({ data: data_bytes }, function(response) {
    //   console.log("Response:", response);
    // });
    chrome.storage.local.set({ data_used: data_bytes });
  }
});

// Start observing the performance entry types we're interested in
performanceObserver.observe({
  entryTypes: ["navigation", "resource"],
});
