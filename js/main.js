$(document).ready(function() {
  $(".aloha_hover").hide();
  $(".aloha").hover(
    function() {
      $(this)
        .find(".aloha_hover")
        .show();
    },
    function() {
      $(this)
        .find(".aloha_hover")
        .hide();
    },
    function() {
      $(this)
        .find(".aloha_hover")
        .hide();
    }
  );

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

    $("#submit").click(function() {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var contact = $("#contact").val();
      $("#returnmessage").empty(); // To empty previous error/success message.
      // Checking for blank fields.
      if (name.trim() == "" || email.trim() == "" || contact.trim() == "") {
        alert("Please Fill Required Fields");
      } else {
        // Returns successful data submission message when the entered information is stored in database.
        $.post(
          "contact_form.php",
          {
            name1: name,
            email1: email,
            message1: message,
            contact1: contact
          },
          function(data) {
            $("#returnmessage").append(data); // Append returned message to message paragraph.
            if (
              data == "Your Query has been received, We will contact you soon."
            ) {
              $("#form")[0].reset(); // To reset form fields on success.
            }
          }
        );
      }
    });
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





    $(".message")
      .delay(200)
      .fadeIn(500);
  }),
    $(function() {
      var e = $("#nav-toggle");
      (menu = $("nav ul")),
        (menuHeight = menu.height()),
        (header = $("header#top")),
        $(e).on("click", function(e) {
          e.preventDefault(),
            menu.slideToggle(250),
            this.classList.toggle("active"),
            $("#top").hasClass("visable")
              ? console.log("Problem")
              : header.toggleClass("visable");
        }),
        $(window).resize(function() {
          var e = $(window).width();
          e > 320 && menu.is(":hidden") && menu.removeAttr("style");
        });
    }),
    $(window).scroll(function() {
      $(this).scrollTop() >= 200
        ? $("header#top").addClass("visable")
        : $(this).scrollTop() <= 700 && $("header#top").removeClass("visable");
    }),
    $(".flipUp").textrotator({
      animation: "flipUp",
      separator: ",",
      speed: 3500
    });
  var project = $("#projects article"),
    viewProject = $("span");
  project.hover(function() {
    project.addClass("dim"),
      $(this).removeClass("dim"),
      $(this).hover(function() {
        viewProject.toggleClass("slide");
      });
  }),
    project.mouseleave(function() {
      project.removeClass("dim"), viewProject.removeClass("slide");
    }),
    $("#cbp-fwslider").cbpFWSlider(),
    $(function() {
      $("article").readingTime({ readingTimeTarget: $(this).find(".eta") });
   
});
