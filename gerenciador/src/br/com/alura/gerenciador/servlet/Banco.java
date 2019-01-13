package br.com.alura.gerenciador.servlet;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe que simuba um banco de dados
 * @author mario
 *
 */
public class Banco {

	private static List<Empresa> empresas = new ArrayList<>();
	
	static{
		empresas.add(Empresa.of("Google"));
		empresas.add(Empresa.of("Facebook"));
		empresas.add(Empresa.of("Intel"));
	}
	
	public void adiciona(Empresa empresa) {
		Banco.empresas.add(empresa);
	}

	public List<Empresa> getEmpresas() {
		return Banco.empresas;
	}
		

}

