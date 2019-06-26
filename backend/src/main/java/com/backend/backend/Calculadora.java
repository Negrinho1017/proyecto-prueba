package com.backend.backend;

import com.backend.backend.excepcion.Excepcion;

public class Calculadora {
	public static int hacerOperacion(int a, int b, int tipoOperacion) {
		switch(tipoOperacion) {
		case 1:
			return a+b;
		case 2:
			return a-b;
		case 3:
			return a*b;
		case 4:
			return a/b;
		default:
			throw new Excepcion("Valor no permitido");
		}
	}
}
