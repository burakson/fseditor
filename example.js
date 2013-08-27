$(function() {
  $(window).on('scroll', function() {
    $(this).scrollTop() >= 122 ? $('.bar').addClass('stick') : $('.bar').removeClass('stick');
  });
});