package br.com.alura.gerenciador.acao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Usuario;

public class Login implements Acao {

	@Override
	public String executa(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String login = req.getParameter("login");
		String senha = req.getParameter("senha");
		
		Usuario user = new Banco().existeUsuario(login, senha);
		System.out.printf("Logando %s%n", login);
		
		return user!=null? "redirect:entrada?acao=ListaEmpresas":"redirect:entrada?acao=LoginForm";
		
		
		
	}

}
