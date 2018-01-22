<!-- head -->
<?php include( './pages/header.php' );?>

<div class="main">
    <!-- <script src="../js/popup.js"></script> -->

    <form method="post" id="contact-form">
        <p>
            Name: <input type="text" name="name">
        </p>
        <p>
            Email: <input type="text" name="email">
        </p>
        <p>
            Message: <textarea name="message"></textarea>
        </p>
        <p>
            <button class="submit-btn">Send!</button>
        </p>
    </form> 
    <!-- <div class="thank-you">Thank you!</div>    -->
        <div class="thank-you" id="email-thankyou">
        <div class="thankyou-logo"> <img src="img/thankyou-logo.jpg" alt="fellow-logo"></div>
        <h2>Thank you!</h2>
        <div class="bar"></div>
        <p>Your email is <span>successfully submited.</span></p>
    </div> 

</div>


<?php include( './pages/footer.php' ); ?>