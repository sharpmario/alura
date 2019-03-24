<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<c:url value="/entrada" var="postAction"/>
	<c:import url="head.jsp"></c:import>

	<form action="${postAction}" method="post">
		<input type="hidden" value="NovaEmpresa" name="acao"/>
		Nome: <input type="text" name="nome"/>
		Data Abertura: <input type="text" name="data"/>
		<input type="submit"/>
	</form>

</body>
</html>