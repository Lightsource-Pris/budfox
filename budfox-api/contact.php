<?php
include ('send.php');
class Contact extends Send_Message{
    public function contact_us(){
        if(isset($_POST['contact'])){
            
            $name = $_POST['name'];
            $email = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];
            $to = 'info@budfoxcapitals.com';

            $newsend = new Send_Message();
            $newsend->send($name,$email,$subject,$message,$to);          
        }
        
    }
}

    $new_contact = new Contact();
    $contact = $new_contact->contact_us();
?>

