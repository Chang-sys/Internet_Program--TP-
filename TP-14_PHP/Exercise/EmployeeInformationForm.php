<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Information Form</title>
</head>

<body>
    <h1>
        <center> 
            <form action="EmployeeInformation.php" method="post">
                Name: <input type="text" name="emp_name" id="emp_name" placeholder="Enter name">
                <br />
                Number: <input name="emp_number" id="emp_number" placeholder="Enter phone number">
                <br />
                Email: <input type="email" name="emp_email" id="emp_email" placeholder="Enter email">
                <br />
                <input type="submit" name="SubmitBtn" id="SubmitBtn" value="Submit">
            </form>
        </center>
    </h1>
</body>
<?php
if (isset($_POST["SubmitBtn"])) {

    $emp_name = trim($_POST["emp_name"]);
    $emp_number = trim($_POST["emp_number"]);
    $emp_email = trim($_POST["emp_email"]);

    if ($emp_name == "") {
        $errorMsg = 'error: You must enter a name!';
        $code = "1";
    } elseif ($emp_number == "") {
        $errorMsg = 'error: You must enter numbers!';
        $code = "2";
    }
    // Check if the number field is numeric
    elseif (is_numeric(trim($emp_number)) == false) {
        $errorMsg = 'error: Please enter numberic value!';
        $code = "2";
    } elseif (!preg_match("/^\d+$/", $emp_number)) {
        $errorMsg = 'error: Please enter a numeric value for the number field!';
        $code = "2";
    } elseif (strlen($emp_number) < 10) {
        $errorMsg = 'error: Number should be 10 digits, Try again!';
        $code = "2";
    }
    // Check if the email is empty
    elseif (empty($emp_email) == true) {
        $errorMsg = 'error: You must enter your email!';
        $code = "3";
    }
    // check vaild email address
    elseif (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z-]+\.)+[a-zA-Z]{2, 6}$/i", $emp_email)) {
        $errorMsg = 'error: You enter an invalid email, Try again!';
        $code = "3";
    } else {
        echo "Success";
    }
}
?>

</html>