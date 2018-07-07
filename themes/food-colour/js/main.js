jQuery(document).ready(function($) {

    /**
     * Hide and show exhibition description
     */
    $('.exhibition-description').css('opacity', '1');

    $('.close-btn').on('click', function() {
        $('.exhibition-description').css('opacity', '0');
        $('.exhibition-description').delay(1000).hide(0);
    });   

    $('.exhibition-icon-active').on('click', function(event) {
        event.preventDefault();
        $('.exhibition-description').show(0);
        $('.exhibition-description').css('opacity', '1');
    });

    /**
     * Toggle exhibition menu
     */
    $('.exhibition-nav-toggle').on('click', function() {
        if ($('.exhibition-nav').css('opacity') === '0') {
            $('.exhibition-nav').css('opacity', '1');
            $('.exhibition-nav').css('visibility', 'visible');
        } else {
            $('.exhibition-nav').css('opacity', '0');

            setTimeout(
                function() 
                {
                    $('.exhibition-nav').css('visibility', 'hidden');
                }, 500);
            $('.exhibition-description').css('opacity', '0');
            $('.exhibition-description').delay(1000).hide(0);  
        }        
<<<<<<< HEAD
    }); 

    /**
     * Nav-Menu toggle
     */
    $('.menu-toggle').on('click', function(){
        $('.main-navigation ul').toggle( function(){
            $('.main-navigation ul').css({
                
            });
            $('.site-header').css({
                'height': '400px',
                'align-items': 'baseline',
            });
            $('.menu-main-menu-container').css({
                'position': 'absolute',
                'top': '50px',
                'left' : '0px',
            });
            $('#primary-menu').css({
                'align-items': 'center',
                'display': 'grid',
                'grid-template-columns': '100%',
                'grid-template-rows': '1fr 1fr 1fr',
                'height': '340px',
            });
        });
    });

    /**
     * Set height of exhibition nav icons
     */

    setExhibitionNav();

    function setExhibitionNav() {
        var iconHeight = $('.exhibition-nav').height()/$('.exhibition-icon-img').length;
        $('.exhibition-icon-img').css('height', iconHeight);
        $('.exhibition-icon').css('height', iconHeight);
        $('.exhibition-nav').css('width', iconHeight);
    }

    $(window).resize(function(){
        setExhibitionNav();
    });
=======
    });   
>>>>>>> c1454ece6b050d091bad0af26c2316bd0946f912
});