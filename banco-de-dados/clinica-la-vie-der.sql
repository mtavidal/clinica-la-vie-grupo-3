-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clinica
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema clinica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clinica` DEFAULT CHARACTER SET utf8 ;
USE `clinica` ;

-- -----------------------------------------------------
-- Table `clinica`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` CHAR(60) NOT NULL,
  `apresentacao` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clinica`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `clinica`.`atendimentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATETIME NOT NULL,
  `observacao` TEXT NOT NULL,
  `psicologos_id` INT NOT NULL,
  `pacientes_id` INT NOT NULL,
  PRIMARY KEY (`id`, `psicologos_id`, `pacientes_id`),
  INDEX `fk_psicologos_id` (`psicologos_id` ASC) VISIBLE,
  INDEX `fk_pacientes_id` (`pacientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_psicologo_id`
    FOREIGN KEY (`psicologos_id`)
    REFERENCES `clinica`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_paciente_id`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `clinica`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
