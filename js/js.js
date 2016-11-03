$(document).ready(function(){
	var hitEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'; //for getting the correct event
	//for sticky nav
    $(window).load(function(){
      $("#nav").sticky({ topSpacing: 0 });
    });
    //animates back to top
    $(function() {
        var header = $(".backtotop");
        var $height = $('header').height();

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= $height) {
                header.removeClass('hideit').addClass("showit");
            } else {
                header.removeClass("showit").addClass('hideit');
            }
        });
    });
    //for loader
    setTimeout(function(){
        $('.loadimg').removeClass('fadeInCustom');
        $('.loadimg').addClass('fadeOutCustom');
    }, 3000);
    setTimeout(function(){
        $('.container').removeClass('loading');
        $('.loader').addClass('animated fadeOutCustom');
    }, 3600);
    setTimeout(function(){
        $('.loader').removeClass('animated fadeOutCustom');
        $('.loader').addClass('hidethis');
    }, 3800);
    //animations on page load
    setTimeout(function(){
        $('.logo').removeClass('preanimate');
        $('.logo').addClass('animated fadeInCustom');
    }, 3810);
    setTimeout(function(){
        $('.wave.top').removeClass('preanimate');
        $('.wave.top').addClass('animated fadeInDownCustom');
    }, 4100);
    setTimeout(function(){
        $('h1.maintext').removeClass('preanimate');
        $('h1.maintext').addClass('animated fadeInCustom');
    }, 4150);
    setTimeout(function(){
        $('.mainbutton').removeClass('preanimate');
        $('.mainbutton').addClass('animated fadeInDownCustom');
    }, 4650);           
    setTimeout(function(){
        //ropes
        $('.headcontain .bordertop').removeClass('preanimate');
        $('.headcontain .bordertop').addClass('animated slideInLeft');
        $('.headcontain .borderright').removeClass('preanimate');
        $('.headcontain .borderright').addClass('animated slideInDown');
        $('.headcontain .borderleft').removeClass('preanimate');
        $('.headcontain .borderleft').addClass('animated slideInUp');
        $('.headcontain .borderbottom').removeClass('preanimate');
        $('.headcontain .borderbottom').addClass('animated slideInRight');
        //anchor
        $('.buttonmove').removeClass('preanimate');
        $('.buttonmove').addClass('animated fadeInUp');        
    }, 4950); 
    setTimeout(function(){
        //anchor
        $('.buttonmove').removeClass('preanimate');
        $('.buttonmove').addClass('animated fadeInUp');
    }, 5200);
    //menu - brunch
    $('.brunch .menubutton').on(hitEvent, function(){
        $('.container').addClass('menuhide');
        setTimeout(function(){
            $('.menumodal.brunch').show();
        }, 100); 
        setTimeout(function(){
            $('.menumodal.brunch').addClass('opac');
        }, 150);                
    });
    //menu - dinner
    $('.dinner .menubutton').on(hitEvent, function(){
        $('.container').addClass('menuhide');
        setTimeout(function(){
            $('.menumodal.dinner').show();
        }, 100); 
        setTimeout(function(){
            $('.menumodal.dinner').addClass('opac');
        }, 150);                
    }); 
    //menu - drinks
    $('.drink .menubutton').on(hitEvent, function(){
        $('.container').addClass('menuhide');
        setTimeout(function(){
            $('.menumodal.drink').show();
        }, 100); 
        setTimeout(function(){
            $('.menumodal.drink').addClass('opac');
        }, 150);                
    });        
    //closes mobile nav on escape key hit 
    $(document).keyup(function(e) {     
        if(e.keyCode== 27) {
            $('.menuclose').click();
        } 
    });
    $('.menuclose').on(hitEvent, function(){
        $('.container').removeClass('menuhide');
        setTimeout(function(){
            $('.menumodal').removeClass('opac');
        }, 1);
        setTimeout(function(){
            $('.menumodal').hide();
        }, 300); 
    });
    //initialise owl
    $(".owl-carousel").owlCarousel({
        //Every last feature you could ever want in a slider is below
        //Most important owl features
        items : 4,
        itemsCustom : false,
        //first number is px breakpoint second number is number of slides
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,3],
        itemsTabletSmall: false,
        itemsMobile : [479,2],
        singleItem : false,
        itemsScaleUp : false,
        //Basic Speeds
        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1100,
        //Autoplay
        autoPlay : true,
        stopOnHover : false,
        // Navigation
        navigation : false,
        navigationText : ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        rewindNav : true,
        scrollPerPage : false,
        //Pagination
        pagination : false,
        paginationNumbers: false,
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window,
        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme",
        //Lazy load
        lazyLoad : true,
        lazyFollow : true,
        lazyEffect : "fade",
        //Auto height
        autoHeight : false,
        //Mouse Events
        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,
        //Transitions
        transitionStyle : false,    
        // Other
        addClassActive : false,
        //Callbacks
        beforeUpdate : false,
        afterUpdate : false,
        beforeInit: false, 
        afterInit: false, 
        beforeMove: false, 
        afterMove: false,
        afterAction: false,
        startDragging : false,
        afterLazyLoad : false
    });
});

jQuery(document).ready(function ($) {

    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() === 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 55
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});
// makes the active class work
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        $('.slide.useit').each(function(i) {
            if ($(this).position().top <= windscroll + 60) {
                $('nav li.addit.active').removeClass('active');
                $('nav li.addit').eq(i).addClass('active');
            }
        });
    } else {
        $('nav li.addit.active').removeClass('active');
        $('nav li.addit:first').addClass('active');
    }
}).scroll();