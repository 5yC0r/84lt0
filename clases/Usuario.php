<?php 
	include('../clases/Conexion.php');

	class Usuario{
		//Atributos
		private $codUsuario;
		private $nomreUsuario;
		private $apellidosUsurio;

		private $con;

		public function __construct(){
			$this->con = new Conexion();
		}

		public function set($atributo, $contenido){
            $this->$atributo = $contenido;
        }

        public function get($atributo){
            return $this->$atributo;
        }

        public function listar(){
        	$sql = "SELECT * FROM usuario";
        	$resultado = $this->con->consultaRetorno($sql);
        	return $resultado;
        }
	}
 ?>