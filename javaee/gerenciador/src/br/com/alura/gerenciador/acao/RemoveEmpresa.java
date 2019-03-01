package br.com.alura.gerenciador.acao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Banco;

public class RemoveEmpresa implements Acao {

	@Override
	public void executa(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Integer id = Integer.parseInt(request.getParameter("id"));
		boolean removeu = new Banco().removeEmpresa(id);
		
		if(removeu) {
			response.sendRedirect("entrada?acao=ListaEmpresas");
		}else {
			response.getWriter().println("Empresa não encontrada");
		}

	}

}
