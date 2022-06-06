$(window).scroll(function(){
    if ($(window).scrollTop() >= 145) {
       $('#page-nav').addClass('fixed-header');
    }
    else {
       $('#page-nav').removeClass('fixed-header');
    }
});

/* scrollTop() >= 240
   Should be equal the the height of the header
 */
