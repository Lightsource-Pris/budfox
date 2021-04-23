<?php
include 'connector.php';
class Verify extends Connector{
    public function verify_user(){
        if(!isset($_GET['um'])){
            echo "<script>location.href='../'</script>";
        }else{
            $user_email = $_GET['um'];
            $status = 'Verified';
            $insert_email = $this->conn->prepare("UPDATE users Set verification_status=? WHERE email_address=?");
            $insert_email->bind_param("ss",$status,$user_email);
            $insert_email->execute();
            if($insert_email){
                echo "<script>alert('Verification Succesful! Download the app to start using our services')</script>";
                echo "<script>location.href='../'</script>";
            }else{
                echo "<script>alert('Verification failed, please try again')</script>";
                echo "<script>location.href='../'</script>";
            }
        }
    }
}
$verify = new Verify();
$verify->verify_user();
?>