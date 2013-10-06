$(document).ready(function() {

    $('a[href^=#]:not([href=#])').click(function() {
            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
               var targetOffset = $target.offset().top;
               $('html,body').animate({scrollTop: targetOffset}, 500);
               return false;
            }
    });

});