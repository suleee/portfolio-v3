$(function () {
  $('.aloha_hover').hide();
  $('.aloha').hover(
    function () {
      $(this).find(".aloha_hover").show();
    },
    function () {
      $(this).find(".aloha_hover").hide();
});


  // $('.hover_text02').hide();
  // $('.img02').hover(
  //   function() {
  //   $('.hover02').show();
  // },
  //  function() {
  //   $('.hover_text02').hide();
  // });


  // $('.hover_text03').hide();
  // $('.img03').hover(
  //   function() {
  //   $('.hover03').show();
  // },
  //  function() {
  //   $('.hover_text03').hide();
  // });


  // $('.hover_text04').hide();
  // $('.img04').hover(
  //   function() {
  //   $('.hover04').show();
  // },
  //  function() {
  //   $('.hover_text04').hide();
  // });


  //   $('.hover_text05').hide();
  // $('.img05').hover(
  //   function() {
  //   $('.hover05').show();
  // },
  //  function() {
  //   $('.hover_text05').hide();
  // });

  //     $('.hover_text06').hide();
  // $('.img06').hover(
  //   function() {
  //   $('.hover06').show();
  // },
  //  function() {
  //   $('.hover_text06').hide();
  // });

  //     $('.hover_text07').hide();
  // $('.img07').hover(
  //   function() {
  //   $('.hover07').show();
  // },
  //  function() {
  //   $('.hover_text07').hide();
  // });


  $("#submit").click(function() {
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
  }, function(data) {
  $("#returnmessage").append(data); // Append returned message to message paragraph.
  if (data == "Your Query has been received, We will contact you soon.") {
  $("#form")[0].reset(); // To reset form fields on success.
  }
  });
  }

  });



});