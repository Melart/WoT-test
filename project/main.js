$(document).ready(function () {
    $('.tag').click(function(e) {
        e.preventDefault();
        $('.tag').removeClass('active-tag');
        $(this).toggleClass('active-tag');
        var content = $(this).text();
        $('.tag-label').text(content);
        $('.tag-list').toggleClass('hidden');
    })
    $('.tag-label').click(function(e) {
        e.preventDefault();
        $('.tag-list').toggleClass('hidden');
    })
    $('.question__link').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('visible').next().slideToggle();
    })
})






