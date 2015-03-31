document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var currentTab = tabs[0];
		currentUrl = currentTab.url;
		console.log("current open tab URL: " + currentUrl);
		jQuery('#qrcodeCanvas').qrcode({
			text	: currentUrl
		});
	});
});

