<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Information</title>
</head>

<body>
    <h1>
        <center>
            YAY! You have successfully submitted the form<br /> <br />
            Welcome <?php echo $_POST["emp_name"]; ?>!<br /><br />
            Your email address is <?php echo $_POST["emp_email"]; ?> and your phone number is <?php echo $_POST["emp_number"]; ?>
        </center>
    </h1>
</body>

</html>