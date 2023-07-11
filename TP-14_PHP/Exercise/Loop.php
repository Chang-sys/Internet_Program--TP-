<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Loops</title>
</head>
<body>
    <h3>
        <center>
                <?php 
                    $i=1;
                    echo "Use While-loop<p>";
                    while ($i<=5){
                        echo "Hello While $i times"."</br>";
                        $i++;
                    }
                    echo "<p>Use Do-while-loop<p>";
                    $j=0;
                    do{
                        $j++;
                        echo "php do...while loop $j times"."</br>";
                    }while ($j<=5);
                    echo "<p>Use For-loop<p>";
                    for($i=1; $i<=5; $i++){
                        echo "php for loop print $i times"."</br>";
                    }

                    $salary[]=2000;
                    $salary[]=3000;
                    $salary[]=6000;
                    echo "<p>Use Foreach-loop<p>";
                    foreach($salary as $value){
                        echo "Salary: $value<br>";
                    }
                ?>
        </center>
    </h3>
</body>
</html>