// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.message === "clicked_browser_action") {
        // Select and fill a field
        // document.querySelector('[name="01___title"]').value = 'Software Developer';
        document.querySelector('[id="input-3"]').value = "Jason";
        document.querySelector('[id="input-2"]').click();
        document.querySelector('[data-value="bc33aa3152ec42d4995f4791a106ed09"]').click();
        document.getElementById("input-4").value = "Gates";
        document.getElementById("input-5").value = "5402 FM 1488, 334";
        document.getElementById("input-6").value = "Magnolia";
        document.getElementById("input-8").value = "77354";
        document.getElementById("input-12").value = "(281) 799 5626";
        // Select and fill a radio button
        // document.querySelector('input[name="18orolder"]').checked = true;
      }
    }
  );