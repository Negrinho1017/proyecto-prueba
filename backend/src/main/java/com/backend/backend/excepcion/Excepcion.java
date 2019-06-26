package com.backend.backend.excepcion;

public class Excepcion extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public Excepcion(String message) {
		super(message);
	}
}
