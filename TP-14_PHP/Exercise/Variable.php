<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operators in PHP</title>
</head>
<body>
    <h1><center>
        <?php 
            echo "Ex1<p>";
            $var = 1;     // Assign the integer 1 to $var
            echo "<p>";
            echo $var++;  // Print 1, $var is now equal to 2
            echo "<p>";
            echo ++$var;  // Print 3, $var is now equal to 3
            echo "<p>";
            echo --$var;  // Print 2, $var is now equal to 2
            echo "<p>";
            echo $var--;  // Print 2, $var is now equal to 1
            echo "<p>";

            echo "Ex2</p>";
            $var = "value"; // $var now contains the string "value" 
            echo "<p>";
            $var = 1;       // $var now contains the integer value 1
            echo "<p>";
            $var += 3;     //$var now contains the integer 4
            echo $var;
        ?>
    </center></h1>
</body>
</html>