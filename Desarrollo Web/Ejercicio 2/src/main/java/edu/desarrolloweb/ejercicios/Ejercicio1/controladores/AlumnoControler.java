package edu.desarrolloweb.ejercicios.Ejercicio1.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.desarrolloweb.ejercicios.Ejercicio1.entidades.Alumno;
import edu.desarrolloweb.ejercicios.Ejercicio1.servicios.ServicioAlumnos;

@RestController
public class AlumnoControler {
	@Autowired
	private ServicioAlumnos service;

	@GetMapping("/alumnos")
	public List<Alumno> getAlumnos(){
		return service.getAlumnos();
	}
	@PostMapping("/alumnos")
	public void insertAlumno(@RequestBody Alumno alumno) {
		service.insertAlumno(alumno);
	}
	
}
