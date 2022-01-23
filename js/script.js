$(document).ready(() =>
{
    $(window).scroll(function ()
    {
        $(".navbar").toggleClass("scroll", $(this).scrollTop() > 200);
        $(".go-up").toggleClass("active", $(this).scrollTop() > 400);
    })
    $(".go-up").click(function ()
    {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    })


    $(".close-list").click(function () 
    {
        $(".navbar-collapse").animate({ "right": "-100%" }, 500);
        $(".navbar-collapse").removeClass("show");
    })
    $(".navbar-click").click(function () 
    {
        $(".navbar-collapse").animate({ "right": "0%" }, 500);
    })
    $(".nav-item").click(function () 
    {
        $(this).toggleClass("open-list").siblings().removeClass("open-list");
    })

    $('.project .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    })
    $('.team .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    })
    $('.blug .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    })
    $('.brand .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
    })
    
})