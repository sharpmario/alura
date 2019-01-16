package br.com.alura.gerenciador.servlet;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Classe que simuba um banco de dados
 * @author mario
 *
 */
public class Banco {

	private static Set<Empresa> empresas = new HashSet<>();
	
	static{
		empresas.add(Empresa.of("Google"));
		empresas.add(Empresa.of("Facebook"));
		empresas.add(Empresa.of("Intel"));
	}
	
	public void adiciona(Empresa empresa) {
		Banco.empresas.add(empresa);
	}

	public Set<Empresa> getEmpresas() {
		return Banco.empresas;
	}
		

}

