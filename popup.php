<!-- head -->
<?php include( './pages/header.php' );?>

<div class="main">
    <!-- <script src="../js/popup.js"></script> -->

    <form method="post" id="contact-form">
        <div>Contact Me</div>
        
        <div>
            <p>Name</p> 
            <input type="text" name="name">
        </div>
        <div>
            <p>Email</p> <input type="text" name="email">
        </div>
        <div>
            <p>Message</p> <textarea name="message"></textarea>
        </div>
        <div>
            <button class="submit-btn">Send!</button>
        </div>
        <div class="please-fill-form" style="display:none">Please fill form</div>
    </form> 
    <!-- <div class="thank-you">Thank you!</div>    -->
        <div class="thank-you" id="email-thankyou">
        <div class="thankyou-logo"> <img src="img/thankyou-logo.png" alt="fellow-logo"></div>
        <h2>Thank you!</h2>
        <div class="bar"></div>
        <p class="thank-you-p">Your email is <span>successfully submited.</span></p>
    </div> 

</div>


<?php include( './pages/footer.php' ); ?>