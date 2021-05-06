<?php
	require('func.php');
	
	$fname = $city = $email = $phone = $message = "";
	
	if(isset($_POST["phone"]) && isset($_POST["email"]) && isset($_POST["message"]) && isset($_POST["name"]) && isset($_POST["city"])){
		$fname = ucfirst(t($_POST['name']));
		$city = ucfirst(t($_POST['city']));
		$email = t($_POST['mail']);
		$phone = t($_POST['phone']);
		$message = ucfirst(t($_POST['message']));
		
		$msg = " Name: ".$fname."\n City: ".$city."\n E-mail: ".$email."\n Phone: ".$phone."\n message: ".$message.".";
		
		$to = "ngo@eride.org.in";
		$subject = "website - contact us";
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
		$headers .= "X-Priority: 3\r\n";
		$headers .= "From:".$email;
		
		if (mail($to, $subject, $msg, $headers)) {
			echo '<script>alert("Mail successfull!");</script>';
		} else {
			echo '<script>alert("Something went wrong, please try again later.");</script>';
		}
		echo '<script>location.href="http://www.eride.org.in/contact";</script>';
	}else{
		echo '<script>location.href="http://www.eride.org.in/contact";</script>';
	}
?>