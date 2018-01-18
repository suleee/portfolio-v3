$(document).ready(function() {

  //menu hover
  $(".menu-hover").hover(function() {
    $(this)
      .find(".menu-bar-hover")
      .show();
  });
  $(".menu-hover").mouseleave(function() {
    $(this)
      .find(".menu-bar-hover")
      .hide();
  });

  function close_accordion_section() {
    $(".accordion .accordion-section-title").removeClass("active");
    $(".accordion .accordion-section-content")
      .slideUp(300)
      .removeClass("open");
  }

  $(".accordion-section-title").click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr("href");

    if ($(e.target).is(".active")) {
      close_accordion_section();
      $(this)
        .text("View More")
        .addClass(".arrow-icon");
    } else {
      close_accordion_section();
      $(this).text("Reduce Content");

      // Add active class to section title
      $(this).addClass("active");

      // Open up the hidden content panel
      $(".accordion " + currentAttrValue)
        .slideDown(300)
        .addClass("open");
    }

    e.preventDefault();

  });

  $(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 150;
    if (yOffset > breakpoint){
      $("nav").addClass('active');
    }else{
      $("nav").removeClass('active');
    }  
  });




// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});







});



