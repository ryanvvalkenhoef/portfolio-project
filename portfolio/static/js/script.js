$(document).ready(function() {
    $('nav ul li a').click(function(e) {
  
      $('nav ul li.active').removeClass('active');
  
      var $parent = $(this).parent();
      $parent.addClass('active');
      $parent.click();
      window.location.href = link.attr("href");
      e.preventDefault();
    });
  });

  $(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

$(document).ready(function() {
  $( "#guide-button" ).click(function( event ) {
      $('body,html')
      .animate({
          scrollTop: $(document).height() - $(window).height()
      }, {
          duration: 30000,
          easing: "linear"
      });
  });
 });
