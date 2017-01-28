<?php 
	include('../clases/Conexion.php');

	class Alumno{
		//Atributos
		private $dniAlumno;
		private $nombres;
		private $apellidos;
		private $fechaNacimiento;
		private $estadoCivil;
		private $regionProcedencia;
		private $sexo;
		private $direccion;
		private $anioEgreso;
		private $telefono;
		private $correoElectronico;

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

        public function crear(){
        	$sql = "INSERT INTO alumno (dniAlumno,nombres,apellidos,fechaNacimiento,estadoCivil,regionProcedencia,sexo,direccion,anioEgreso,telefono,correoElectronico) VALUES ('{$this->dniAlumno}','{$this->nombres}','{$this->apellidos}','{$this->fechaNacimiento}','{$this->estadoCivil}','{$this->regionProcedencia}','{$this->sexo}','{$this->direccion}','{$this->anioEgreso}','{$this->telefono}'),'{$this->correoElectronico}')";
        	$this->con->consultaSimple($sql);
        	return true;
        }

        public function listar(){
        	$sql = "SELECT * FROM alumno";
        	$resultado = $this->con->consultaRetorno($sql);
        	return $resultado;
        }
	}
 ?>