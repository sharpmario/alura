<%@page import="java.io.IOException"%>
<%@page import="br.com.alura.gerenciador.servlet.Empresa"%>
<%@ page import="java.util.Set"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Empresas Cadastradas</title>
</head>
<body>

<ul>
	<% 
		Set<Empresa> empresas = (Set<Empresa>) request.getAttribute("empresas");
		for(Empresa e: empresas){
	%>
	<li><%=e.getNome() %></li>
	<%
		}
	%>
</ul>

</body>
</html>