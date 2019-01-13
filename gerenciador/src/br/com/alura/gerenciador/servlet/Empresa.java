package br.com.alura.gerenciador.servlet;

public class Empresa {
	
	private Integer id;
	private String nome;
	
	public static Empresa of(String nome) {
		Empresa e = new Empresa();
		e.setNome(nome);
		return e;
	}
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	
	
}
