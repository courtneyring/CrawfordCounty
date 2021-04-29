<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $url = $_POST['url'];
   // $from = 'hello@crawfordcountyhistoricalsociety.com';
    $to = '"Crawford County Historical Society" <museumcchs97@gmail.com>';
    //$to = "ce.ring@comcast.net";
    $subject = 'New Message from CrawfordCountyHistoricalSociety.com';
    
    $message = "From: $name\n E-Mail: $email\n Message:\n $message";
    $headers = 'From: "Crawford County Historical Society" <cchsgrayling@gmail.com>' . "\r\n" . 'Reply-to:' . $email;

        
    if ($_POST['submit']) {
        if (mail ($to, $subject, $message, $headers)) {
            header("Location: $url");
            //echo '<p class="success">Your message has been sent successfully!</p>';
            //echo '<script>alert();</script>';

       
        } else {
            echo "Error. Please go back and try again.";
          
        }
    }

?>


