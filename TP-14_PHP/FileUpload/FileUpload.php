<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP File Upload</title>
</head> 
<body>
    <h1>
        <center>
            <form action="" method="post" enctype="multipart/form-data" name="form1">
                <input type="file" name="resume" id="resume">
                <br />
                <input type="submit" name="SubmitBtn" id="SubmitBtn" value="Upload Resume">
            </form>
        </center>
    </h1>
</body>
<?php 
    if(isset($_POST["SubmitBtn"])){
        $fileName = $_FILES["resume"]["name"];
        $fileSize = $_FILES["resume"]["size"] / 1024;
        $fileType = $_FILES["resume"]["type"];
        $fileTmpName = $_FILES["resume"]["tmp_name"];
        
        if($fileType == "application/msword"){
            if($fileSize <= 200){

                //New file name
                $random = rand(1111, 9999);
                $newFileName = $random . $fileName;

                //File upload path
                $uploadPath = 'testupload/' . $newFileName;

                //function for upload file
                if (move_uploaded_file($fileTmpName, $uploadPath)){
                    echo "Successful<p>";
                    echo "<p>File Name: " . $newFileName;
                    echo "<p>File Size: " . $fileSize . " kb";
                    echo "<p>File Type: " . $fileType;
                }
            }else{
                echo "Maximum upload size limit is 200 kb";
            }
        }else{
            echo "You can ony upload a word doc file.";
        }
    }
?>

</html>