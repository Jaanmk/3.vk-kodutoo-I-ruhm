<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Kodukas</title>
    <link rel="stylesheet" href="css.css">
    <script src="jquery-2.2.4.js" type="text/javascript"></script>
    <script src="script2.js" type="text/javascript"></script>
    <script src="//cdn.jsdelivr.net/jquery.color-animation/1/mainfile"></script>
</head>
<body>

    <div class="input" id="sisestus"></div>
    <div class="content" id="main"></div>
    <button onclick="$('#main').animate({color: '#E4D8B8'})">run</button>
    <button onclick="$('#main').animate({color: '#2A2F4C'})">revert</button>

</body>
</html>
