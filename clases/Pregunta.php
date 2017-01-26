<?php 
	
	include('../clases/Conexion.php');

	class Pregunta{
		//Atributos
		private $numeroPregunta;
		private $respuestaPregunta;

		private $respuestaTipeada;
 
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
        	$sql = "INSERT INTO pregunta (numeroPregunta, respuestaPregunta) VALUES ('{$this->numeroPregunta}','{$this->respuestaPregunta}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }

        public function crearpt(){
        	$sql = "INSERT INTO preguntart (numeroPregunta, respuestaPregunta) VALUES ('{$this->numeroPregunta}','{$this->respuestaTipeada}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }
        public function listar(){
            $sql = "SELECT * FROM pregunta";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
        public function listarpt(){
            $sql = "SELECT * FROM preguntart";
            $resultado = $this->con->consultaRetorno($sql);
            return $resultado;
        }
	}

?>