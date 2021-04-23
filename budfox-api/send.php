<?php

class Send_Message{  
    
    public function send($name,$email,$subject,$message,$to){

            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $headers .= 'From:  ' . $name . ' <' . $email .'> ' . " \r\n" . 
                    'Reply-To: '.  $email . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

            mail($to, $subject, $message, $headers);
        
    }
}
?>

