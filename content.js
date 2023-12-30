// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
        // Select and fill a field
        document.querySelector('[name="01___title"]').value = 'Software Developer';
        // Select and fill a radio button
        document.querySelector('input[name="18orolder"]').checked = true;
      }
    }
  );