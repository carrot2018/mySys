<?php
    include("public.php");
    $bid = $_POST["bid"];
    $db = getConnect("anitoys");
    $sql = "select * from details where bid='$bid'";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result);
    //     $arr[] = $row;
    // }
    $json = json_encode($row);
    echo $json;
?>