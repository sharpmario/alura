package br.com.alura.gerenciador.filter;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Usuario;

//@WebFilter(urlPatterns="/entrada")
public class AutorizacaoFilter implements Filter {

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;
		
		String nomeAcao = request.getParameter("acao");
		Usuario usuario = (Usuario) req.getSession().getAttribute("usuarioLogado"); 
		boolean usuarioLogado = usuario != null;
		
		if(usuarioLogado)
			Logger.global.info(String.format(">>> Tentando logar: %s",usuario.getLogin()));
		
		boolean acaoProtegida = !(nomeAcao.equals("LoginForm") || nomeAcao.equals("Login"));
		
		if(!usuarioLogado && acaoProtegida) {
			resp.sendRedirect("entrada?acao=LoginForm");
			return;
		}
		
		chain.doFilter(request, response);
	}

	
}
