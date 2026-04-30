<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shubham | Portfolio</title>
     <link href="output.css" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet">
     <link rel="stylesheet" href="style.css">
     <link rel="icon" type="image/png" href="src/logo-white.png">
     
</head>
<body class="selection:bg-[#F28347] selection:text-white ">
   <!-- navbar.php -->
<nav id="navbar" class="fixed top-0 left-0 w-full bg-transparent z-50 ">
<div id="nav-overlay"
     class="absolute top-0 right-0 h-full w-0 bg-white z-0 pointer-events-none transition-all duration-500 ease-in-out">
</div>  
<div class="relative z-50 w-full flex items-center justify-between py-4 px-2 md:px-10">
        
        <!-- Logo -->
        <div>
           <a href="index.php"> <img id="logo" src="src/logo-1.png" alt="Portfolio Logo" class="h-10 md:h-14 "></a>
        </div>

        <!-- Hamburger Button -->
        <div class="md:hidden">
            <button id="menu-btn" class="text-white text-3xl focus:outline-none ">
                ☰
            </button>
        </div>

        <!-- Menu -->
        <ul id="menu" class="hidden md:flex flex-col md:flex-row absolute md:static top-20 left-0 w-full md:w-auto bg-[#F28347] z-50 md:bg-transparent font-michroma text-xl md:text-2xl text-white space-y-6 md:space-y-0 md:space-x-10 p-6 md:p-0 ">
            <li><a href="#hero" class="nav-link ">Home</a></li>
            <li><a href="#about" class="nav-link  ">About</a></li>
            <li><a href="#skill" class="nav-link ">Skill</a></li>
            <li><a href="#work" class="nav-link  ">My Work</a></li>
            <a class="mx-4 hidden md:block">|</a>
            <li><a href="#connect" class="nav-link  ">Connect</a></li>
        </ul>
    </div>
</nav>



<!-- Script -->
<script src="script.js"></script>
