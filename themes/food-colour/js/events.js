(function($) {
    // initial event load
    eventsOnClick($('.event-container').first().attr('event-title'), $('.event-container').first().attr('event-google'), $('.event-container').first().attr('event-facebook'), $('.event-container').first().attr('event-organization'), $('.event-container').first().attr('event-branch'), $('.event-container').first().attr('event-address'), $('.event-container').first().attr('event-number'));
    
    // onclick change
    $('.event-container').on('click', function() {
       eventsOnClick(this.getAttribute('event-title'), this.getAttribute('event-google'), this.getAttribute('event-facebook'), this.getAttribute('event-organization'), this.getAttribute('event-branch'), this.getAttribute('event-address'), this.getAttribute('event-number'));
    });

<<<<<<< HEAD
    function eventsOnClick(title, google, facebook, organization, branch, address,) {
=======
    function eventsOnClick(title, google, facebook, organization, branch, address, number) {
>>>>>>> aa5d404ad517b14d946de18ce7460eb7f17beac7
        $('.event-main-container').html(
            '<h2>' + title + '</h2>' +
            '<h3 class="branch-text">' + branch + '</h3>' +
            '<hr>' +
            '<p class="organization-text">' + organization + '</p>' +
<<<<<<< HEAD
            '<p>' + address + '</p>'
            
=======
            '<p>' + address + '</p>' + 
            '<p>' + number + '</p>'
>>>>>>> aa5d404ad517b14d946de18ce7460eb7f17beac7
        );

        if (google) {
            $('.event-main-container').append('<a target="_blank" href="' + google + '" class="google-cal">Add to Google calendar</a>');
        }

        if (facebook) {
            $('.event-main-container').append('<a target="_blank" href="' + facebook + '" class="facebook-event">Facebook event</a>');
        }
    }
})(jQuery);