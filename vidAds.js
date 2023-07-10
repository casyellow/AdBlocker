if (window.location.href.includes("youtube.com")) {
	console.log("Checking for ads...");
	//time = Math.trunc(document.getElementsByTagName('video')[0].currentTime);
	var func = setInterval(function () {
		if (document.getElementsByClassName("video-ads")[0].innerHTML !== "") {
			var banner = false;
			for (var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
				document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
				banner = true;
			}
			//if (banner === true)
				//console.log("Skippable ad detected in video at " + time + " seconds.");
			if (banner === false) {
				//console.log("Unskippable ad detected in video at " + time + " seconds.");
				document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
				document.getElementsByClassName("ytp-ad-skip-button")[0].click();
			}
		}
		//else // Uncaught TypeError: Cannot read properties of undefined (reading 'currentTime')
			//time = Math.trunc(document.getElementsByTagName('html-main-video')[0].currentTime);
	}, 500);
}
