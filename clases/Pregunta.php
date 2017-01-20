<?php 
	
	include('../clases/Conexion.php');

	class Pregunta{
		//Atributos
		private $idPregunta;
		private $idRespuesta;

		private $con;

		//Metodos
		public function __construct(){
			$this->con = new Conexion();
		}
		
		public function set($atributo, $contenido){
            $this->$atributo = $contenido;
        }

        public function get($atributo){
            return $this->$atributo;
        }

        public function crear(){
        	$sql = "INSERT INTO pregunta (idPregunta, idRespuesta) VALUES ('{$this->idPregunta}','{$this->idRespuesta}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }

	}

?>