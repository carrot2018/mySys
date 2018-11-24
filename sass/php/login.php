<?php
    include("public.php");
    $uname = $_POST["uname"];
    $upwd = $_POST["upwd"];
    $db = getConnect("anitoys");
    $sql = "select * from user where uname='$uname'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result);
    if($row){
        if($row["upwd"] == $upwd){
            // echo "<script>localStorage.setItem('name',$uname);</script>"
            echo 1;
        }else{
            echo 0;
        }
    }else{
        echo 2;
    }
    
?>


   