function mail() {
  var $form = $("#contact-form");
  var $send = $form.find(".submit-btn");
  $send.on("click", function(e) {
    e.preventDefault();

    var $name = $form.find('[name="name"]').val();
    var $email = $form.find('[name="email"]').val();
    var $message = $form.find('[name="message"]').val();
    $.ajax({
      method: "POST",
      url: "pages/mail.php",
      data: { name: $name, email: $email, message: $message }
    }).done(function(msg) {
      $form.hide();
      $('.thank-you').show();
    });
  });
  return false;
}
