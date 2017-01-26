<?php 

	include('../clases/Pregunta.php');

    class ControladorPregunta {
        
        private $pregunta;
        
        public function __construct() {
            $this->pregunta = new Pregunta();
        }
        
        public function crear($numeroPregunta, $respuestaPregunta){
        	$this->pregunta->set("numeroPregunta",$numeroPregunta);
        	$this->pregunta->set("respuestaPregunta",$respuestaPregunta);

            $resultado = $this->pregunta->crear();
            return $resultado;
        }

        public function crearpt($numeroPregunta, $respuestaTipeada){
            $this->pregunta->set("numeroPregunta",$numeroPregunta);
            $this->pregunta->set("respuestaTipeada",$respuestaTipeada);

            $resultado = $this->pregunta->crearpt();
            return $resultado;
        }

        public function listar(){
            $resultado = $this->pregunta->listar();
            return $resultado;
        }

        public function listarpt(){
            $resultado = $this->pregunta->listarpt();
            return $resultado;
        }
    }
?>