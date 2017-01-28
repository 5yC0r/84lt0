-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2017 a las 08:56:35
-- Versión del servidor: 10.0.17-MariaDB
-- Versión de PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encuestaunt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `dniAlumno` int(8) NOT NULL,
  `nombres` varchar(20) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `estadoCivil` varchar(7) DEFAULT NULL,
  `regionProcedencia` varchar(6) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `anioEgreso` int(4) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `correoElectronico` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`dniAlumno`, `nombres`, `apellidos`, `fechaNacimiento`, `estadoCivil`, `regionProcedencia`, `sexo`, `direccion`, `anioEgreso`, `telefono`, `correoElectronico`) VALUES
(12345678, 'panfilo', 'alberto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(72540879, 'jesus', 'vela', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `idcuenta` int(11) NOT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(8) DEFAULT NULL,
  `respuestaPregunta` varchar(3) DEFAULT NULL,
  `dniAlumno` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`, `dniAlumno`) VALUES
(25, 'p1', 'c', 72540879),
(26, 'p3', 'c', 72540879),
(27, 'p3', 'e', 72540879),
(28, 'p3', 'h', 72540879),
(29, 'p3', 'g', 72540879),
(30, 'p2', 'e', 72540879),
(31, 'p1', 'b', 12345678),
(32, 'p3', 'b', 12345678),
(33, 'p9', 'b', 12345678),
(34, 'p8', 'b', 12345678),
(35, 'p10', 'd', 12345678),
(36, 'p10', 'e', 12345678),
(37, 'p11', 'a', 12345678);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntart`
--

CREATE TABLE `preguntart` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(8) DEFAULT NULL,
  `respuestaPregunta` varchar(10) DEFAULT NULL,
  `dniAlumno` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `preguntart`
--

INSERT INTO `preguntart` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`, `dniAlumno`) VALUES
(1, 'p15', '1250.3', 72540879),
(2, 'p14', '8', 12345678);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`dniAlumno`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`idcuenta`);

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`codPregunta`),
  ADD KEY `fk_pregunta_alumno_idx` (`dniAlumno`);

--
-- Indices de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  ADD PRIMARY KEY (`codPregunta`),
  ADD KEY `fk_encuestart_alumno1_idx` (`dniAlumno`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  MODIFY `idcuenta` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD CONSTRAINT `fk_pregunta_alumno` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno` (`dniAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `preguntart`
--
ALTER TABLE `preguntart`
  ADD CONSTRAINT `fk_encuestart_alumno1` FOREIGN KEY (`dniAlumno`) REFERENCES `alumno` (`dniAlumno`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
