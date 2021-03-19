// main
$('body').prepend('<div class="container"><div id="pad">' + '</div></div>');
$('header').appendTo(('#pad'));
$('main').appendTo(('#pad'));
$('footer').appendTo(('#pad'));
// styles
$('body').addClass('py-5');
$('#pad').addClass('position-relative p-5 rounded-3 bg-dark shadow');
$('header').addClass('navbar navbar-expand-lg mb-5 navbar-dark user-select-none');
$('.navbar-brand h1').addClass('mb-0 fs-5');
$('main').addClass('min-vh-100');
$('footer').addClass('border-top border-2 border-secondary user-select-none');

// window resize
if ($(window).width() < 991.98) {
    $('body').removeClass('py-5');
    $('body > div').removeClass('container');
    $('#pad').removeClass('p-5 rounded-3');
    $('header').addClass('fixed-top bg-dark');
    $('main').addClass('mt-5 pt-5');
    $('#img').removeClass('w-75');
} else {
    $('body').addClass('py-5');
    $('body > div').addClass('container');
    $('#pad').addClass('p-5 rounded-3');
    $('header').removeClass('fixed-top bg-dark');
    $('main').removeClass('mt-5 pt-5');
    $('#img').addClass('w-75');
};
$(window).resize(function () {
    if ($(window).width() < 991.98) {
        $('body').removeClass('py-5');
        $('body > div').removeClass('container');
        $('#pad').removeClass('p-5 rounded-3');
        $('header').addClass('fixed-top bg-dark');
        $('main').addClass('mt-5 pt-5');
        $('#img').removeClass('w-75');
    } else {
        $('body').addClass('py-5');
        $('body > div').addClass('container');
        $('#pad').addClass('p-5 rounded-3');
        $('header').removeClass('fixed-top bg-dark');
        $('main').removeClass('mt-5 pt-5');
        $('#img').addClass('w-75');
    };
});