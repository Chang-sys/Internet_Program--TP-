<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Session</title>
</head>
<body>
    <h1>
        <center>
            <?php 
                session_start();
                // store session data
                $_SESSION["username"] = "nikita"; 
                $_SESSION["email"] = "nikita@example.com";
                //retrieve session data
                echo $_SESSION["username"];
                echo "<br>";
                echo $_SESSION["email"];
            ?>
        </center>
    </h1>
</body>
</html>