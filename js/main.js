$(function() {

    var fixed = document.getElementById('fixed'), overflow;

    $(window).on('load resize', function() {

    overflow = fixed.scrollHeight-$('#fixed').height();
    });

    fixed.on('touchmove', function() {

    if (overflow) return true;
    else return false;
    });
});
