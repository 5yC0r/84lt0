<?php 

	include('../clases/Pregunta.php');

    class ControladorPregunta {
        
        private $pregunta;
        
        public function __construct() {
            $this->pregunta = new Pregunta();
        }
        
        public function crear($idPregunta, $idRespuesta){
        	$this->pregunta->set("idPregunta",$idPregunta);
        	$this->pregunta->set("idRespuesta",$idRespuesta);

            $resultado = $this->pregunta->crear();
            return $resultado;
        }
    }
?>