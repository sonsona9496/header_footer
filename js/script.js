(function(){
    let timerId = null;
    function startSetInterval() {
    timerId = setInterval(function(){
        $( ".scrollitem:first" ).slideUp();
        setTimeout(function() {
        $( ".scrollitem:first" ).fadeIn().appendTo( ".scrollgroup" )
        }, 500);
    }, 2000);
    }
    startSetInterval();

    $('.scrollitem').mouseover(function(){
    clearInterval(timerId);
    }).mouseout(function(){
    startSetInterval();
    });
    
})();
$(document).ready(function(){
    $('.owl-ads').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.owl-news').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
})
