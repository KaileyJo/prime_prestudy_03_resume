$(document).ready(function() {
  $('button').on('click', function() {
    $(this).fadeOut(1000);
    $(this).closest('body').find('.body').fadeIn(1000).removeClass('body');
  });
});
