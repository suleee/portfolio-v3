$(document).ready(function() {
  var $form = $("#contact-form");
  var $name = $form.find('[name="name"]');
  var $email = $form.find('[name="email"]');
  var $message = $form.find('[name="message"]');
  var $send = $form.find(".submit-btn");
  $send.on("click", function() {
    $.ajax({
      method: "POST",
      url: "mail.php",
      data: { name: $name, email: $email, message: $message }
    }).done(function(msg) {
      alert("Data Saved: " + msg);
    });
  });
});
