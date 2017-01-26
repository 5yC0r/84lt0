<?php 
	include('../clases/Usuario.php');

	class ControladorUsuario{

		private $usuario;
		
		public function __construct(){
			$this->usuario = new Usuario();
		}

        public function listar(){
            $resultado = $this->usuario->listar();
            return $resultado;
        }
	}
?>