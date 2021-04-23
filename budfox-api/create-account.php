<?
    include 'connector.php';
    include 'send.php';
    class Create_Account extends Connector {
        public function create(){
            if(isset($_POST['subscribe'])){
                $email = $_POST['email_address'];
                $number = $_POST['phone_number'];
                $password = $_POST['password'];
                $status = 'Not Verified';
                $check = $this->conn->prepare("SELECT FROM users where email_address = ?");
                $check->bind_param('s',$email);
                $check->execute();
                $check->store_result();
                $result = $check->num_rows();
                if($result>0){
                    $insert_email = $this->conn->prepare("INSERT INTO users(email_address,phone_number,pass,verification_status) VALUES(?,?,?,?)");
                    $insert_email->bind_param("sss",$email,$number,$password,$status);
                    $insert_email->execute();
                    if($insert_email){
                        $send_verify = new Send_Message();
                        $send = $send_verify->send();
                        $send->subject = 'Account Verification';
                        $send->name = 'BUDFOX CAPITAL';
                        $send->to = $email;
                        $send->message = 'Follow this link to verify your account'.'\n';
                        $send->message.= '<a href="https://www.budfoxcapitalscom/verify/?um="'.urlencode($email).'">Verify</a>';
                        if($send){
                            echo "Successful! Please check your mail to verify your account";
                        }else{
                            echo "An error occured, please try again";
                        }
                        
                    }
                }else{
                    echo 'Account already exist';
                }
            }
        }
    }
    $create = new Create_Account();
    // $create_a = $create->create();
?>