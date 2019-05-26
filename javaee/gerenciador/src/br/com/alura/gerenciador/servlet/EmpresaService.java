package br.com.alura.gerenciador.servlet;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import br.com.alura.gerenciador.model.Banco;
import br.com.alura.gerenciador.model.Empresa;


@WebServlet("/empresas")
public class EmpresaService extends HttpServlet {

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Set<Empresa> empresas = new Banco().getEmpresas();

		response.setContentType("application/json");
		response.getWriter().print(new Gson().toJson(empresas));
	}

}
