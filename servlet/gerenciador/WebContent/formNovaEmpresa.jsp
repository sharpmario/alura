<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<c:url value="/novaEmpresa" var="postAction"/>

	<form action="${postAction}" method="post">
		Nome: <input type="text" name="nome"/>
		Data Abertura: <input type="text" name="data"/>
		<input type="submit"/>
	</form>

</body>
</html>