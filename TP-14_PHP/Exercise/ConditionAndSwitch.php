<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Decision Making</title>
</head>
<body>
    <h1><center>
        <?php
            echo "If else statement<p>";
            $date=date("m-d");
            if ($date=="01-10") {
                echo "Wishing you a very Happy Birthday on $date";
            }else{
                //nothing
                echo "Nothing<p>";
            }

            echo "Elseif statement<p>";
            if ($date=="01-10") {
                echo "Wishing you a very Happy Birthday";
            }elseif($date=="08-15"){
                echo "Happy Independence Day on $date";
            }else{
                //nothing
                echo "Nothing<p>";
            }

            echo "Switch statement<p>";
            $myFavColor='red';
            switch ($myFavColor)
            {
            case 'pink':
                echo 'My favorite car color is pink!';
                break;
            case 'red':
                echo 'My favorite car color is red!';
                break;
            case 'orange':
                echo 'My favorite car color is orange!';
                break;
            default:
            }
            echo '<p>My favorite car color is not pink, red, or orange!';
        ?>
        </center>
    </h1>
</body>
</html>