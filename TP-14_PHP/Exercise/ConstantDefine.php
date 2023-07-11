<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <center>
        <?php 
            define("EMAIL", "chang@example.com"); // Valid constant name
            echo EMAIL; // Displays "me@example.com"

            define("myCon", true);
            if (myCon) { } // Evaluates to true

            define("ONECONSTANT", "some value"); // Invalid constant name
            define("CONSTANT", "Hello world.");
            echo "<p>";
            echo CONSTANT; // outputs "Hello world."
        ?>
        </center>
    </h1>
</body>
</html>