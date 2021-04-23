<?php
// Connection to database

class Connector
{
	public function __construct()
	{
		$this->db_host = "localhost";
		$this->db_username = "root";
		$this->db_password = "";
		$this->db_name = "budfox";
	}

	public function connect()
	{
		$this->conn = mysqli_connect($this->db_host, $this->db_username, $this->db_password, $this->db_name) or die("Connection Failed!");
		return $this->conn;
	}

	public function __destruct()
	{
		mysqli_close($this->conn);
	}
}
