package br.com.alura.gerenciador.acao;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Empresa;

public class ListaEmpresas implements Acao{
	
	public void executa(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter out = resp.getWriter();
		Banco banco = new Banco();
		Set<Empresa> empresas = banco.getEmpresas();
		
		RequestDispatcher dispatcher = req.getRequestDispatcher("/listaEmpresas.jsp");
		req.setAttribute("empresas", empresas);
		dispatcher.forward(req, resp);
	}

}
