package br.com.itsmemario.jms.consumer;

import java.util.Scanner;

import javax.jms.Connection;
import javax.jms.ConnectionFactory;
import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageConsumer;
import javax.jms.MessageListener;
import javax.jms.Session;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class JmsConsumer {
	public static void main(String[] args) throws Exception {
		
		InitialContext context = new InitialContext();
		ConnectionFactory factory = (ConnectionFactory) context.lookup("ConnectionFactory");
		Connection con = factory.createConnection();
		System.out.println("Creating connection...");
		con.start();
		
		Session session = con.createSession(false, Session.AUTO_ACKNOWLEDGE);
		
		Destination destination = (Destination) context.lookup("financeiro");
		MessageConsumer consumer = session.createConsumer(destination);
		consumer.setMessageListener( msg -> System.out.println(msg) );

		//Message msg =consumer.receive();
		//System.out.println("Msg: "+msg);
		new Scanner(System.in).nextLine();
		
		session.close();
	}
}
