package br.com.alura.loja;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.filter.LoggingFilter;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.thoughtworks.xstream.XStream;

import br.com.alura.loja.modelo.Carrinho;

public class ClienteTest {
	
	HttpServer server  = null;
	private Client client;
	private WebTarget target;
	
	@Before
	public void setup() {
        server = Servidor.inicializaServidor();
        ClientConfig config = new ClientConfig();
        config.register(new LoggingFilter());
        this.client = ClientBuilder.newClient(config);
		this.target = client.target("http://localhost:8080");
	}
	
	@After
	public void after() {
		server.stop();
	}
	
	@Test
	public void testaQueBuscarUmCarrinhoTrazOCarrinhoEsperado() {
		
		Carrinho carrinho = target.path("/carrinhos/1").request().get(Carrinho.class);
		Assert.assertEquals(carrinho.getRua(), "Rua Vergueiro 3185, 8 andar");
		
	}
	
	@Test
	public void testaPost() {
		Client client = ClientBuilder.newClient();
		WebTarget target = client.target("http://localhost:8080");
		Carrinho c = new Carrinho();
		c.setCidade("Juazeiro do Norte");
		c.setRua("Rua tal");
		
		Entity<Carrinho> entity = Entity.entity(c, MediaType.APPLICATION_XML);
		Response response = target.path("/carrinhos").request().post(entity);
		
		Assert.assertEquals(201, response.getStatus());
		String location = response.getHeaderString("Location");
		Carrinho carrinho= client.target(location).request().get(Carrinho.class);
		Assert.assertTrue(carrinho.getRua().equals("Rua tal"));
	}

}
