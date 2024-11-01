package edu.desarrolloweb.ejercicios.Ejercicio1.entidades;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Materia {
	private int identificador;
	private String nombre;
	private String horario;
	private int creditos;
}
