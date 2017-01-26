-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-01-2017 a las 06:42:10
-- Versión del servidor: 10.0.17-MariaDB
-- Versión de PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `encuesta`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

CREATE TABLE `pregunta` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(6) DEFAULT NULL,
  `respuestaPregunta` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`) VALUES
(16, 'p2', 'a'),
(17, 'p3', 'a'),
(18, 'p1', 'b'),
(19, 'p3', 'b'),
(20, 'p3', 'd'),
(21, 'p3', 'c'),
(22, 'p3', 'g'),
(23, 'p5', 'a'),
(24, 'p3', 'i'),
(25, 'p4', 'c'),
(26, 'p6', 'b'),
(27, 'p7', 'b'),
(28, 'p8', 'a'),
(29, 'p8-1', 'b'),
(30, 'p8-1', 'a'),
(31, 'p9', 'b'),
(32, 'p10', 'b'),
(33, 'p10', 'd'),
(34, 'p10', 'f'),
(35, 'p11', 'a'),
(36, 'p12', 'a'),
(37, 'p12-4', 'b'),
(38, 'p13', 'a'),
(39, 'p16', 'a');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntart`
--

CREATE TABLE `preguntart` (
  `codPregunta` int(11) NOT NULL,
  `numeroPregunta` varchar(6) NOT NULL,
  `respuestaPregunta` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntart`
--

INSERT INTO `preguntart` (`codPregunta`, `numeroPregunta`, `respuestaPregunta`) VALUES
(1, 'p14', '25.3'),
(2, 'p15', '1253.2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  ADD PRIMARY KEY (`codPregunta`);

--
-- Indices de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  ADD PRIMARY KEY (`codPregunta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pregunta`
--
ALTER TABLE `pregunta`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT de la tabla `preguntart`
--
ALTER TABLE `preguntart`
  MODIFY `codPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
