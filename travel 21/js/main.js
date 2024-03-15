const { json } = require("react-router-dom")

(function ($) {
    "use strict"
$(".testimonial-carousel").owlCarousel({
autoplay:true,
smartSpeed:1000,
center:true,
marging:24,
dots:true,
loop:true,
nav:false,
responsive:{
    0:{
        items:1
    },
    768:{
       items:2
    }
}
});
})(jQuery);


