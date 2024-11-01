package edu.desarrolloweb.ejercicios.Ejercicio1.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.desarrolloweb.ejercicios.Ejercicio1.entidades.Alumno;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Integer>{
	Alumno getByNombre(String nombre);
}
