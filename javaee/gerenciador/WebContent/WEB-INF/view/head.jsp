<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div style="float: right;">
	Bem-vindo <strong>${usuarioLogado.login}</strong>|
	<a href="<c:url value="/entrada?acao=Logout" />"> Logout</a>
</div>
<br>