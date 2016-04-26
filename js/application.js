$(document).ready(function(){
    // hide .navbar first
    $(".sticky-navbar").hide();
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('.sticky-navbar').fadeIn();
            } else {
                $('.sticky-navbar').fadeOut();
            }
        });
    });
});