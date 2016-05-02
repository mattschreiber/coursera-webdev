// Function to close navbartoggle menu when it loses focus
// This doesn't seem to work write when used on desktop browser with screen width less then 768.  
// The behaviour is sporadic, but clicking on Sushi (or whatever is bottom link) doesn't do anything.  The other links usuall work.

$(function () {
	 $("#navbarToggle").blur(function(event) {
	 	var screenWidth = window.innerWidth;
	 	if (screenWidth < 768) {
	 		$("#collapsable-nav").collapse("hide");
	 		console.log("hello");
	 	}
	 });
});

//This seems to work better, but it doesn't take me to the exact location of the element specified in the href
// $(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
// 		var _opened = $("#collapsable-nav").hasClass("navbar-collapse collapse in");
//         if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//             $("#collapsable-nav").collapse("hide");
//         }
//     });
// });