if ($(window).width() < 991.98) {
    $('body > div').removeClass('container');
} else {
    $('body > div').addClass('container');
};

// Home
$('body').prepend('<div class="container">' + '<div class="position-relative">');
$('body').append('</div>' + '</div>');