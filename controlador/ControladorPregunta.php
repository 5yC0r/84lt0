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

        public function crearpt($idPregunta, $respuestaTipeada){
            $this->pregunta->set("idPregunta",$idPregunta);
            $this->pregunta->set("respuestaTipeada",$respuestaTipeada);

            $resultado = $this->pregunta->crearpt();
            return $resultado;
        }
    }
?>