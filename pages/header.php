<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <!-- control the width of website same as site responsive-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JISULEE</title>
    <!-- reset.css, style.css and flickity-->
    <link rel="shortcut icon" type="image/ico" href="img/favicon.ico" />
    <link rel="stylesheet" type=text/css href="css/reset.css">
	<link rel="stylesheet" type=text/css href="css/style.css">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <link href="//cdn.rawgit.com/noelboss/featherlight/1.7.12/release/featherlight.min.css" type="text/css" rel="stylesheet" />
    <style>
        .featherlight-content {
            height: 50%;
            width: 50%;
        }
    </style>
    <!-- icon link -->
    <script src="https://use.fontawesome.com/1679034438.js"></script>
</head>

<body>
<?php
    if($_GET['no'] == 1) {
        echo '';
    } else {

?>









<nav class="menu-bg ham-menu">
        <div id="menuToggle">
            <input type="checkbox" />

            <span class="ham-bar"></span>
            <span class="ham-bar"></span>
            <span class="ham-bar"></span>

            <ul id="menu" class="meun-list">
                <li class="menu-logo-img">
                    <img src="img/menu-fellow-logo.png" alt="fellow-logo">
                </li>
                <a href="#intro">
                    <li>

                        Intro
                    </li>
                </a>
                <a href="#class">
                    <li class="menu-list">
                        Classes
                    </li>
                </a>
                <a href="#media">
                    <li>

                        Media

                    </li>
                </a>
            </ul>
        </div>
    </nav>







    <nav class=" menu-bg desktop-menu menu-container">
        <div class="meun-list menu">
            <div class="top-logo">
                <a href="index.php"><img src="img/j-w.png"></a>
                </div>
            <!-- <div> -->
            <ul class="menu-list">
                <li class="menu-hover"><a href="work.php">Work</a></li>
                <li class="menu-hover"><a href="web-project.php">Dev. Work</a>
                <!-- <div class="menu-bar-hover" style="display:none"></div></li> -->
                <li class="menu-hover"><a href="about-me.php">My Story</a>
            </ul>
            <div class="contact-container">
                <a href="#" data-featherlight="popup.php?no=1 .main" data-featherlight-iframe-height="800px" data-featherlight-iframe-width="800px">Contact</a>
            </div>
</div>
        <!-- </div> -->
    </nav>

    
<?php 
    }
?>