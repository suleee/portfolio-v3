<!-- head -->
<?php include( './pages/header.php' );?>

<div class="main">
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
            <input type="button" class="submit-btn" value="Send!" />
        </p>
    </form>    
</div>

<script src="js/popup.js"></script>
<?php include( './pages/footer.php' ); ?>