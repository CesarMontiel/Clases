package edu.desarrolloweb.ejercicios.Ejercicio1.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "alumnos", schema = "desarrolloweb2024")
@AllArgsConstructor
@NoArgsConstructor
public class Alumno {
	@Id
	@Column(name = "id")
	private int identificador;
	@Column(name = "nombre")
	private String nombre;
	@Column(name = "edad")
	private int edad;
	@Column(name = "sexo")
	private String sexo;
	@Column(name = "matricula")
	private String matricula;
}
