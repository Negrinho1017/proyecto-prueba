package com.backend.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class Controlador {
	@CrossOrigin
	@RequestMapping(value = "/operacion", method = RequestMethod.GET)
	@ResponseBody
	public int hacerOperacion(@RequestParam int a, @RequestParam int b,@RequestParam int tipoOperacion) {
		return Calculadora.hacerOperacion(a, b, tipoOperacion);
	}
}
