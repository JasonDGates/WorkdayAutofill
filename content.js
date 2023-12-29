// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
        // Modify this section to fill fields on the website
        document.getElementById('exampleField').value = 'Your Value';
      }
    }
  );