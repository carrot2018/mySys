<?php
    include("public.php");
    $db = getConnect("anitoys");
    $sql = "select * from details";
    $result = mysqli_query($db,$sql);
    $row = mysqli_fetch_array($result);
    while($row = mysqli_fetch_array($result)){
		$arr[] = $row;
	}
	$json = json_encode($arr);
	echo $json;
?>