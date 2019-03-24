package br.com.alura.gerenciador.acao;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Empresa;

public class ListaEmpresas implements Acao{
	
	public String executa(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Banco banco = new Banco();
		Set<Empresa> empresas = banco.getEmpresas();
		req.setAttribute("empresas", empresas);
		
		return "forward:listaEmpresas.jsp";
	}

}
