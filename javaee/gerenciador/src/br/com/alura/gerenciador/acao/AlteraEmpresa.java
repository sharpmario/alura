package br.com.alura.gerenciador.acao;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Empresa;

public class AlteraEmpresa implements Acao {

	@Override
	public void executa(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Banco banco = new Banco();

    	Integer id = Integer.parseInt(request.getParameter("id"));
    	Empresa empresa = banco.getEmpresa(id);
    	
    	String nome = request.getParameter("nome");
		Date dataAbertura;
		try {
			dataAbertura = new SimpleDateFormat("dd/MM/yyyy").parse(request.getParameter("data"));
		} catch (ParseException e) {
			throw new ServletException(e);
		}
		
		empresa.setNome(nome);
		empresa.setDataAbertura(dataAbertura);
		response.sendRedirect("entrada?acao=ListaEmpresas");

	}

}
