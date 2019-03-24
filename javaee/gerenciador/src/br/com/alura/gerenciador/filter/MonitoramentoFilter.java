package br.com.alura.gerenciador.filter;

import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;

//@WebFilter(urlPatterns= "/entrada")
public class MonitoramentoFilter implements Filter{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		long antes = System.currentTimeMillis();
		String acao = request.getParameter("acao");
		chain.doFilter(request, response);
		long depois= System.currentTimeMillis();
		Logger.getLogger("Monitoramento").info(String.format(">>> Tempo da ação %s: %dms",acao,(depois-antes)));
	}

}
