<?php
	require('func.php');
	
	$email = "";

	if(isset($_POST["email"])){
	
		$msg = " E-mail: ".$email.".";
			
		$to = "ngo@eride.org.in";
		$subject = "website - subscription";
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
		$headers .= "X-Priority: 3\r\n";
		$headers .= "From:".$email;
		
		if (mail($to, $subject, $msg, $headers)) {
			echo '<script>alert("Subscription successfull!");</script>';
		} else {
			echo '<script>alert("Something went wrong, please try again later.");</script>';
		}
		echo '<script>location.href="http://www.eride.org.in";</script>';
	}else{
		echo '<script>location.href="http://www.eride.org.in";</script>';
	}
?>