console.log("JavaScript is connected.");

window.onload = function() {
	// Create if statement to interact with media queries
	screenWidth = document.documentElement.clientWidth;
	if (screenWidth >= 900) {
		console.log("Your screen width is: " + screenWidth + ".");
		document.getElementById("meet-plus").onclick = function() {moveMeet();};
		document.getElementById("meet-minus").onclick = function () {moveBackMeet();};
		document.getElementById("boot-plus").onclick = function() {moveBoot();};
		document.getElementById("boot-minus").onclick = function () {moveBackBoot();};
		document.getElementById("clark-plus").onclick = function() {moveClark();};
		document.getElementById("clark-minus").onclick = function () {moveBackClark();};
		document.getElementById("hack-plus").onclick = function() {moveHack();};
		document.getElementById("hack-minus").onclick = function () {moveBackHack();};
		document.getElementById("contact-plus").onclick = function() {moveContact();};
		document.getElementById("contact-minus").onclick = function () {moveBackContact();};
	} else if (screenWidth <= 899) {
		console.log("You are on a smaller screen. The width is " + screenWidth);
		document.getElementById("meet-plus").onclick = function() {moveSmallMeet();};
		document.getElementById("meet-minus").onclick = function() {moveBackSmallMeet();};
		document.getElementById("boot-plus").onclick = function() {moveSmallBoot();};
		document.getElementById("boot-minus").onclick = function() {moveBackSmallBoot();};	
		document.getElementById("clark-plus").onclick = function() {moveSmallClark();};
		document.getElementById("clark-minus").onclick = function() {moveBackSmallClark();};
		document.getElementById("hack-plus").onclick = function() {moveSmallHack();};
		document.getElementById("hack-minus").onclick = function() {moveBackSmallHack();};
		document.getElementById("contact-plus").onclick = function() {moveSmallContact();};
		document.getElementById("contact-minus").onclick = function() {moveBackSmallContact();};						
	}


	// Begin reveal JS for large Meet Section
	function moveMeet() {
		document.getElementById("post1").style.margin = "5%";
		document.getElementById("post1").style.float = "left";
		document.getElementById("meet-info").style.margin = "5%";
		document.getElementById("meet-info").style.float = "right";
		document.getElementById("meet-info").style.visibility = "initial";
		document.getElementById("meet-plus").style.visibility = "hidden";
		document.getElementById("meet-minus").style.visibility = "initial";
	}
	function moveBackMeet() {
		document.getElementById("meet-info").style.visibility = "hidden";
		document.getElementById("post1").style.margin = "0 auto";
		document.getElementById("post1").style.float = "";
		document.getElementById("meet-plus").style.visibility = "initial";
		document.getElementById("meet-minus").style.visibility = "hidden";
	}

	// Begin reveal JS for large Boot Camp Section
	function moveBoot() {
		document.getElementById("post2").style.margin = "5%";
		document.getElementById("post2").style.float = "right";
		document.getElementById("boot-info").style.margin = "5%";
		document.getElementById("boot-info").style.float = "left";
		document.getElementById("boot-info").style.visibility = "initial";
		document.getElementById("boot-plus").style.visibility = "hidden";
		document.getElementById("boot-minus").style.visibility = "initial";
	}
	function moveBackBoot() {
		document.getElementById("boot-info").style.visibility = "hidden";
		document.getElementById("post2").style.margin = "0 auto";
		document.getElementById("post2").style.float = "";
		document.getElementById("boot-plus").style.visibility = "initial";
		document.getElementById("boot-minus").style.visibility = "hidden";
	}

	// Begin reveal JS for large Clark Section
	function moveClark() {
		document.getElementById("post3").style.margin = "5%";
		document.getElementById("post3").style.float = "left";
		document.getElementById("clark-info").style.margin = "5%";
		document.getElementById("clark-info").style.float = "right";
		document.getElementById("clark-info").style.visibility = "initial";
		document.getElementById("clark-plus").style.visibility = "hidden";
		document.getElementById("clark-minus").style.visibility = "initial";
	}
	function moveBackClark() {
		document.getElementById("clark-info").style.visibility = "hidden";
		document.getElementById("post3").style.margin = "0 auto";
		document.getElementById("post3").style.float = "";
		document.getElementById("clark-plus").style.visibility = "initial";
		document.getElementById("clark-minus").style.visibility = "hidden";
	}

	// Begin reveal JS for large Hack Section
	function moveHack() {
		document.getElementById("post4").style.margin = "5%";
		document.getElementById("post4").style.float = "right";
		document.getElementById("hack-info").style.margin = "5%";
		document.getElementById("hack-info").style.float = "left";
		document.getElementById("hack-info").style.visibility = "initial";
		document.getElementById("hack-plus").style.visibility = "hidden";
		document.getElementById("hack-minus").style.visibility = "initial";
	}
	function moveBackHack() {
		document.getElementById("hack-info").style.visibility = "hidden";
		document.getElementById("post4").style.margin = "0 auto";
		document.getElementById("post4").style.float = "";
		document.getElementById("hack-plus").style.visibility = "initial";
		document.getElementById("hack-minus").style.visibility = "hidden";
	}

	// Begin reveal JS for large Contact Section
	function moveContact() {
		document.getElementById("post5").style.margin = "5%";
		document.getElementById("post5").style.float = "left";
		document.getElementById("contact-info").style.margin = "5%";
		document.getElementById("contact-info").style.float = "right";
		document.getElementById("contact-info").style.visibility = "initial";
		document.getElementById("contact-plus").style.visibility = "hidden";
		document.getElementById("contact-minus").style.visibility = "initial";
	}
	function moveBackContact() {
		document.getElementById("contact-info").style.visibility = "hidden";
		document.getElementById("post5").style.margin = "0 auto";
		document.getElementById("post5").style.float = "";
		document.getElementById("contact-plus").style.visibility = "initial";
		document.getElementById("contact-minus").style.visibility = "hidden";
	}

	// Begin reveal JS for small Meet Section
	function moveSmallMeet() {
		document.getElementById("post1").style.margin = "0 auto";
		document.getElementById("meet-plus").style.visibility = "hidden";
		document.getElementById("meet-minus").style.visibility = "initial";
		document.getElementById("meet-info").style.visibility = "initial";
	}
	function moveBackSmallMeet() {
		document.getElementById("meet-plus").style.visibility = "initial";
		document.getElementById("meet-minus").style.visibility = "hidden";
		document.getElementById("meet-info").style.visibility = "hidden";
	}

	// Begin reveal JS for small Boot Section
	function moveSmallBoot() {
		document.getElementById("post2").style.margin = "0 auto";
		document.getElementById("boot-plus").style.visibility = "hidden";
		document.getElementById("boot-minus").style.visibility = "initial";
		document.getElementById("boot-info").style.visibility = "initial";
	}
	function moveBackSmallBoot() {
		document.getElementById("boot-plus").style.visibility = "initial";
		document.getElementById("boot-minus").style.visibility = "hidden";
		document.getElementById("boot-info").style.visibility = "hidden";
	}

	// Begin reveal JS for small Boot Section
	function moveSmallClark() {
		document.getElementById("post3").style.margin = "0 auto";
		document.getElementById("clark-plus").style.visibility = "hidden";
		document.getElementById("clark-minus").style.visibility = "initial";
		document.getElementById("clark-info").style.visibility = "initial";
	}
	function moveBackSmallClark() {
		document.getElementById("clark-plus").style.visibility = "initial";
		document.getElementById("clark-minus").style.visibility = "hidden";
		document.getElementById("clark-info").style.visibility = "hidden";
	}

	// Begin reveal JS for small Hack Section
	function moveSmallHack() {
		document.getElementById("post4").style.margin = "0 auto";
		document.getElementById("hack-plus").style.visibility = "hidden";
		document.getElementById("hack-minus").style.visibility = "initial";
		document.getElementById("hack-info").style.visibility = "initial";
	}
	function moveBackSmallHack() {
		document.getElementById("hack-plus").style.visibility = "initial";
		document.getElementById("hack-minus").style.visibility = "hidden";
		document.getElementById("hack-info").style.visibility = "hidden";
	}

	// Begin reveal JS for small Hack Section
	function moveSmallContact() {
		document.getElementById("post5").style.margin = "0 auto";
		document.getElementById("contact-plus").style.visibility = "hidden";
		document.getElementById("contact-minus").style.visibility = "initial";
		document.getElementById("contact-info").style.visibility = "initial";
	}
	function moveBackSmallContact() {
		document.getElementById("contact-plus").style.visibility = "initial";
		document.getElementById("contact-minus").style.visibility = "hidden";
		document.getElementById("contact-info").style.visibility = "hidden";
	}	
};