//#################################################################################
// ### LOADING SCREEN
//#################################################################################
async function startbuttonClicked() {
	document.getElementById("loading_screen").style.opacity = "0";
	document.getElementById("loading_screen_video").style.opacity = "0";
	document.getElementById("loading_screen").style.zIndex = "-1";

	document.getElementById("content_screen").style.opacity = "1";
	document.getElementById("content_screen").style.height = "100%";
	document.getElementById("content_screen").style.zIndex = "1";

	document.getElementById("product_screen").style.opacity = "0";
	document.getElementById("product_screen").style.height = "100%";
	document.getElementById("product_screen").style.zIndex = "-1";

	//document.getElementById("loading-screen-img").style.display = "none";
}


//#################################################################################
// ### PRODUCTS
//#################################################################################
async function product1buttonClicked() {
	console.log('product1buttonClicked pressed');

	document.getElementById("content_screen").style.opacity = "0";
	document.getElementById("content_screen").style.height = "100%";
	document.getElementById("content_screen").style.zIndex = "-1";

	document.getElementById("product_screen").style.opacity = "1";
	document.getElementById("product_screen").style.height = "100%";
	document.getElementById("product_screen").style.zIndex = "1";


}





