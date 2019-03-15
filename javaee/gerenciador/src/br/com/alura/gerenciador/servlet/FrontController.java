package br.com.alura.gerenciador.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.acao.AlteraEmpresa;
import br.com.alura.gerenciador.acao.ListaEmpresas;
import br.com.alura.gerenciador.acao.MostraEmpresa;
import br.com.alura.gerenciador.acao.NovaEmpresa;
import br.com.alura.gerenciador.acao.RemoveEmpresa;

@WebServlet("/entrada")
public class FrontController extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String param = req.getParameter("acao");
		String jsp = null;
		
		if(param.equals("ListaEmpresas")) {
			jsp = new ListaEmpresas().executa(req,resp);
		}else if(param.equals("RemoveEmpresa")) {
			new RemoveEmpresa().executa(req, resp);
		}else if(param.equals("MostraEmpresa")) {
			new MostraEmpresa().executa(req, resp);
		}else if(param.equals("AlteraEmpresa")) {
			new AlteraEmpresa().executa(req, resp);
		}else if(param.equals("NovaEmpresa")) {
			new NovaEmpresa().executa(req, resp);
		}

		String[] array = jsp.split(":");
		switch(array[0]){
		case "forward":
			RequestDispatcher dispatcher = req.getRequestDispatcher(array[1]);
			dispatcher.forward(req, resp);
			break;
		case "redirect":
			resp.sendRedirect(array[1]);
			break;
		}
	}

}
