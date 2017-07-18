Portfolio = {

    fadeTitle : function() {
        $('.main-header').fadeIn(1000);
        $('#title-nav-list').fadeIn(2500);
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 750) {
                $('#sticky-nav').fadeIn(500);
            } else {
                $('#sticky-nav').fadeOut(500);
            }
        });
    },

    addExpImageHover : function() {
        $('.experience-img').each(function() {
            $(this).hover(
                function() { 
                $(this).stop().animate({"opacity": 1});
                $("div."+($(this).attr('class').split(/\s+/)[1])).stop().animate({"opacity": 1});
            }, function() {
                $(this).stop().animate({"opacity": 0.3});
                $("div."+($(this).attr('class').split(/\s+/)[1])).stop().animate({"opacity": 0.3});

            });
        });
        $('.explanation').each(function() {
            $(this).hover(
                function() { 
                $(this).stop().animate({"opacity": 1});
                $("img."+($(this).attr('class').split(/\s+/)[1])).stop().animate({"opacity": 1});
            }, function() {
                $(this).stop().animate({"opacity": 0.3});
                $("img."+($(this).attr('class').split(/\s+/)[1])).stop().animate({"opacity": 0.3});

            });
        });
    },

    smoothScroll : function(){
        $('a[href*="#"]')
        .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
        });
    }

};
$(document).ready(function() {
    Portfolio.fadeTitle();
    Portfolio.addExpImageHover();
    Portfolio.smoothScroll();
});

