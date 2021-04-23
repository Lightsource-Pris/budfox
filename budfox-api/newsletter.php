<?

    include ('connector.php');
    class Newsletter extends Connector {
        public function get__insert_email(){
            if(isset($_POST['subscribe'])){
                $email = $_POST['email_address'];
                $insert_email = $this->conn->prepare("INSERT INTO subscribers VALUES(?)");
                $insert_email->bind_param("s",$email);
                $insert_email->execute();
            }
        }
    }

    $news = new Newsletter();
    $subscribe = $news->get_insert_email();
?>