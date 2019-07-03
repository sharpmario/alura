package xml;

import java.io.IOException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

public class Main {

	public static void main(String[] args) throws Exception {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		factory.setValidating(true);
		factory.setNamespaceAware(true);
		factory.setAttribute("http://java.sun.com/xml/jaxp/properties/schemaLanguage", "http://www.w3.org/2001/XMLSchema");
		
		DocumentBuilder builder = factory.newDocumentBuilder();
		Document xml = builder.parse("src/main/resources/venda.xml");
		
		Element venda = xml.getDocumentElement();
		System.out.println(venda.getAttribute("moeda"));
		
		NodeList produtos =xml.getElementsByTagName("produto");
		
		for (int i = 0; i < produtos.getLength(); i++) {
			
			Element produto =  (Element) produtos.item(i);
			
			Produto p = new Produto(Long.parseLong(produto.getElementsByTagName("id").item(0).getTextContent()), 
					produto.getElementsByTagName("nome").item(0).getTextContent());
			
			System.out.println(p);
			
			
		}
			

	}

}
