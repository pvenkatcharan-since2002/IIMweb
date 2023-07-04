<html>
<body>

<?php 
    $ename = $_POST["name"];
    $mail = $_POST["mail"];
    $sub = $_POST["subject"];
    $msg = $_POST["message"];
    // database details
    $host = "localhost";
    $username = "u184583477_sys1";
    $password = "PLMzaq01.";
    $dbname = "u184583477_sys";// your database details

    // creating a connection
    $con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    $sql = "INSERT INTO message (name, email, subject, message) VALUES ('ename', '$mail', '$sub', '$msg')";
    // send query to the database to add values and confirm if successful
    $rs = mysqli_query($con, $sql);
    if($rs)
    {
        echo "<meta http-equiv = 'refresh' content = '3; url = /index.html' />";
    }
  
    // close connection
    mysqli_close($con);
    

    ?>

</body>
</html>

