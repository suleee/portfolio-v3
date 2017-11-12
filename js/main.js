$(function () {
  $('.aloha_hover').hide();
  $('.aloha').hover(
    function () {
      $(this).find(".aloha_hover").show();
    },
    function () {
      $(this).find(".aloha_hover").hide();
    });



  $('.expandContent').click(function () {
    $('.showMe').toggle();
    $('.ep-btn').hide();
    $('.ep-btn02').show();
  });

  $('.ep-btn02').click(function () {
    $('.showMe').hide();
    $('.ep-btn02').hide();
    $('.ep-btn').show();
  });



  $("#submit").click(function () {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var contact = $("#contact").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name.trim() == '' || email.trim() == '' || contact.trim() == '') {
      alert("Please Fill Required Fields");
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      $.post("contact_form.php", {
        name1: name,
        email1: email,
        message1: message,
        contact1: contact
      }, function (data) {
        $("#returnmessage").append(data); // Append returned message to message paragraph.
        if (data == "Your Query has been received, We will contact you soon.") {
          $("#form")[0].reset(); // To reset form fields on success.
        }
      });
    }

  });



});