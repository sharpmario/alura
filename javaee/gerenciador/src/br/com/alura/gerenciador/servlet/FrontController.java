package br.com.alura.gerenciador.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import br.com.alura.gerenciador.acao.Acao;

@WebServlet("/entrada")
public class FrontController extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String nomeAcao = req.getParameter("acao");
		String jsp = null;
		
		try {
			Acao acao = (Acao) Class.forName("br.com.alura.gerenciador.acao."+nomeAcao).newInstance();
			jsp = acao.executa(req, resp);
		} catch (InstantiationException | IllegalAccessException | ClassNotFoundException e) {
			resp.sendError(404);
			e.printStackTrace();
			return;
		}

		String[] array = jsp.split(":");
		switch(array[0]){
		case "forward":
			RequestDispatcher dispatcher = req.getRequestDispatcher("WEB-INF/view/"+array[1]);
			dispatcher.forward(req, resp);
			break;
		case "redirect":
			resp.sendRedirect(array[1]);
			break;
		}
	}

}
