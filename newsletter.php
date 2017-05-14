<?php
    $email = $_POST['email'];
    $url = $_POST['url'];
   // $from = 'hello@crawfordcountyhistoricalsociety.com';
    $to = '"Crawford County Historical Society" <museumcchs97@gmail.com>';
    //$to = "ce.ring@comcast.net";
    $subject = 'New Request for CCHS Newsletters';
    
    $message = "Email Address: $email";
    $headers = 'From: "Crawford County Historical Society" <hello@crawfordcountyhistoricalsociety.com>' . "\r\n" . 'Reply-to:' . $email;
        
    if ($_POST['submit']) {
        if (mail ($to, $subject, $message, $headers)) {
            
            header("Location: $url");

       
        } else {
            echo "Error. Please go back and try again.";
          
        }
    }

?>

