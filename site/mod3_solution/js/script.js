// Function to close navbartoggle menu when it loses focus
// This doesn't seem to work write when used on desktop browser with screen width less then 768.  
// The behaviour is sporadic, but clicking on Sushi (or whatever is bottom link) doesn't do anything.  The other links usuall work.

$(function () {

  var timeoutId = null;

  // Need to intercept clicking on any of the <a> of the dropdown menu
  // to prevent default behavior
  $("#collapsable-nav a").click(function (event) {

    // Here, we prevent default behavior of jumping straight to the #ID
    event.preventDefault();

    // Cancel the execution of what we have in onblur
    clearTimeout(timeoutId);

    // Collapse the menu with animation (as before)
    $("#collapsable-nav").collapse("hide");

    // Figure out hash tag id; place it on the URL (without triggering jumping to it)
    var hashId = $(this).attr('href');
    history.pushState(null, null, hashId);

    // Pixel offset (approximate) for when the menu collapses (makes the jump offset less)
    var collapsedMenuOffset = 130;

    // Figure out where to jump on the page based on the hash and collapsed menu offset
    var targetOffset = $(hashId).offset().top - collapsedMenuOffset;

    // Use jQuery's animate to scroll there
    $("body").animate({scrollTop: targetOffset}, "fast");

  });


  $("#navbarToggle").blur(function(event) {
    timeoutId = setTimeout(function () {
      var screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        $("#collapsable-nav").collapse("hide");
      }
    }, 100);
  });

});
