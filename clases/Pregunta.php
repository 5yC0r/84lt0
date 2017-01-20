<?php 

	class Pregunta(){
		//Atributos
		private $idPregunta;
		private $idRespuesta;

		public function __construct(){

		}

		//Metodos

		public function set($atributo, $contenido){
            $this->$atributo = $contenido;
        }

        public function get($atributo){
            return $this->$atributo;
        }
	}

?>