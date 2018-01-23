function mail() {
  var $form = $("#contact-form");
  var $send = $form.find(".submit-btn");
  $send.on("click", function(e) {
    e.preventDefault();

    var $name = $form.find('[name="name"]').val().trim();
    var $email = $form.find('[name="email"]').val().trim();
    var $message = $form.find('[name="message"]').val().trim();
    if ($name.length > 3 && $email.length > 3 && $message.length > 3 && $email.indexOf('@') > 0) {
      $.ajax({
        method: "POST",
        url: "pages/mail.php",
        data: { name: $name, email: $email, message: $message }
      }).done(function(msg) {
        $form.hide();
        $('.thank-you').show();
      });
    } else {
      $('.please-fill-form').show();
    }
  });
  return false;
}
