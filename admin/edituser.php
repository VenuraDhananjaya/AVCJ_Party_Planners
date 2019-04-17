<!DOCTYPE html>
<html>
<head>
	<title>AVCJ Party</title>
	<script type="text/javascript" src="../assets/js/script.js"></script>
	<link href= "../assets/css/style2.css" rel="stylesheet" type= "text/css">
</head>
<body>

<form action="edituser.php" method="POST">
		<button  type="submit" name='logout' style="float: right; background-color: red;">Logout</button></a>
	</form>
<form action="mainad.php">
        <button  type="submit"style="float: right; margin-left: 30%; background-color: white;">Admin Main Page</button></a> <br>
    </form>

<?php
session_start(); 
   
if(!isset($_SESSION['admin'])){
    header('location: ../login.php');
}
if (isset($_POST['logout'])){
    session_destroy();
    header('location: ../login.php');
}


include('../config/dbcon.php');

?>


<form action="edituser.php" method="post">
	<p style="font-size:20px; display: inline">Enter User ID to Delete: </p>
	<input type="number" name="id"><br>

	<button type="submit" name="udelete" style="margin-left: 200px; background-color: red;">Delete User</button><br>
	<br><br>
	<button type="submit" name= "view" style="background-color: blue">Veiw Users</button>
					
	<br>
</form>


<?php
	if(isset($_POST['udelete'])){
		$id=$_POST['id'];
		$sql= "DELETE FROM users WHERE id='$id'";
		$run=mysqli_query($db,$sql);

		if(!$run){
			echo "<script>alert(\"Error\")</script>";
		}
		else{
			echo "<script>alert(\"Succesfull\")</script>";
		}

	}
?>
<?php
	
	if(isset($_POST['view'])){	
	$query = "SELECT id,username,nic FROM users WHERE username != 'Admin' AND username != 'ucsc2'; ";
	$result = mysqli_query($db, $query);

	$qq = mysqli_num_rows($result);

	if ($qq > 0 ){
		echo "<table id='table1'>
				<tr>
					<th>User ID</th>
					<th>Name</th>
					<th>NIC</th>
				</tr>";
		while ($row = mysqli_fetch_assoc($result)){
			$id=$row['id'];
			$name=$row['username'];
			$nic=$row['nic'];

			echo "<tr>
					<td>".$id."</td>
					<td>".$name."</td>
					<td>".$nic."</td>
				</tr>";
		}
		echo "</table>";
	}
	else{
		echo "<h3>There are no users</h3>";
	}

		mysqli_close($db);
	}
?>

</body>
</html>