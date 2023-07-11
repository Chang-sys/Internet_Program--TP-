<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Array</title>
</head>
<body>
    <h1>
        <center>
            <?php 
                $age=array("Peter"=>35, "Ben"=>"37", "Joe"=>"43");

                foreach($age as $x => $val){
                    echo "$x = $val<br>";
                }
                echo "<p>MultidArray<p>";
                $multiDArray = array(
                    "A" => array(0 => "red", 2 => "blue", 3 => "green"), "B" => array(1 => "orange", 2 => "black"),
                    "C" => array(0 => "white", 4 => "purple", 8 => "grey") 
                );
                echo $multiDArray["A"][3]; // Outputs green
                echo "<br>";
                echo $multiDArray["C"][8]; // Outputs grey
            ?>
        </center>
    </h1>
</body>
</html>