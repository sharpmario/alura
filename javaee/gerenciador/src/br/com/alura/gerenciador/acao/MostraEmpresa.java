package br.com.alura.gerenciador.acao;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Empresa;

public class MostraEmpresa implements Acao {

	@Override
	public void executa(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Integer id = Integer.parseInt(req.getParameter("id"));
		Empresa empresa = new Banco().getEmpresa(id);
		
		req.setAttribute("empresa", empresa);
		RequestDispatcher rd = req.getRequestDispatcher("/formAlteraEmpresa.jsp");
		rd.forward(req, resp);

	}

}
