package br.com.alura.gerenciador.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;


/**
 * Classe que simuba um banco de dados
 * @author mario
 *
 */
public class Banco {

	private static Set<Empresa> empresas = new HashSet<>();
	private static Map<String, Usuario> usuarios = new HashMap<>();
	private static Integer chaveSequencial = 1;
	
	static{
		empresas.add(Empresa.of(chaveSequencial++, "Google"));
		empresas.add(Empresa.of(chaveSequencial++, "Facebook"));
		empresas.add(Empresa.of(chaveSequencial++, "Intel"));
		
		usuarios.put("admin",new Usuario("admin","admin"));
		usuarios.put("user",new Usuario("user","user"));
	}
	
	public void adiciona(Empresa empresa) {
		empresa.setId(chaveSequencial++);
		Banco.empresas.add(empresa);
	}

	public Set<Empresa> getEmpresas() {
		return Banco.empresas;
	}

	public boolean removeEmpresa(Integer id) {
		return empresas.remove(Empresa.of(id, ""));
	}

	public Empresa getEmpresa(Integer id) {
		return empresas.stream()
				.filter(e -> Empresa.of(id).equals(e) )
				.findFirst().get();
	}

	public Usuario existeUsuario(String login, String senha) {
		Usuario u = usuarios.get(login);
		if(u != null){
			if(u.getSenha().equals(senha))
				return u;
		}
		return null;
	}

}

