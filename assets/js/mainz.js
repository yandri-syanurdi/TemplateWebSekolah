$(document).ready(function(){
    // alert("test");
    
    $("#slider-hero").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 1,
        dots: false,
        margin: 0,
        // navText: [
        //     "<i class='fa fa-angle-left'><i>",
        //     "<i class='fas fa-angle-right'><i>",
        // ],
        
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        navContainer: "#slider-hero-nav",
        
    });
    
    
    $("#tenaga-pendidik-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        // color: '#fff',
        // navText: [
        //     "<i class='fa fa-angle-left'><i>",
        //     "<i class='fas fa-angle-right'><i>",
        // ],
        
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        // navContainer: "#slider-hero-nav",
        navContainer: "#slider-tools-1",
        
    });
    
    $("#alumni-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 2,
        dots: false,
        margin: 20,
        // color: '#fff',
        // navText: [
        //     "<i class='fa fa-angle-left'><i>",
        //     "<i class='fas fa-angle-right'><i>",
        // ],
        
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        // navContainer: "#slider-hero-nav",
        navContainer: "#slider-tools-2",
        
    });
    
    $("#galeri-slider").owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        // ready: false,
        dots: false,
        margin: 20,
        // color: '#fff',
        // navText: [
        //     "<i class='fa fa-angle-left'><i>",
        //     "<i class='fas fa-angle-right'><i>",
        // ],
        
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        // navContainer: "#slider-hero-nav",
        navContainer: "#slider-tools-3",
        
    });
    
    
});
