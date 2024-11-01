package edu.desarrolloweb.ejercicios.Ejercicio1.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.desarrolloweb.ejercicios.Ejercicio1.entidades.Alumno;
import edu.desarrolloweb.ejercicios.Ejercicio1.respository.AlumnoRepository;

@Service
public class ServicioAlumnos {
	@Autowired
	private AlumnoRepository repositorio;

	public void insertAlumnos(List<Alumno> alumnos) {
		repositorio.saveAll(alumnos);
	}
	public void insertAlumno(Alumno alumno) {
		repositorio.save(alumno);
	}

	public void updateAlumno(Alumno alumno) {
		Alumno a = repositorio.findById(alumno.getIdentificador()).orElse(null);
		if(a!=null) {
			a.setEdad(alumno.getEdad());
			a.setMatricula(alumno.getMatricula());
			a.setNombre(alumno.getNombre());
		}
		repositorio.save(a);
	}

	public List<Alumno> getAlumnos() {
		return repositorio.findAll();
	}

	public Alumno getAlumno(String nombre) {
		Alumno a = repositorio.getByNombre(nombre);
		return a;
	}
}
