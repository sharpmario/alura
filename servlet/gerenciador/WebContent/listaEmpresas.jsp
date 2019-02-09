<%@ page import="java.io.IOException"%>
<%@ page import="br.com.alura.gerenciador.servlet.Empresa"%>
<%@ page import="java.util.Set"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Empresas Cadastradas</title>
</head>
<body>

<ul>
	<c:forEach items="${empresas}" var="empresa">
		<li>${empresa.nome} - <fmt:formatDate value="${empresa.dataAbertura}" pattern="dd/MM/yyyy"/>
		<a href="/gerenciador/mostraEmpresa?id=${empresa.id }">Editar</a>
		<a href="/gerenciador/removeEmpresa?id=${empresa.id }" onclick="return confirm('Deseja remover?')">Remover</a>
		</li>
	</c:forEach>
</ul>


</body>
</html>