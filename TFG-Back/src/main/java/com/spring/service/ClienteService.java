package com.spring.service;


import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.spring.entity.Cliente;
import com.spring.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public List<Cliente> retriveAllClientes() {
		return clienteRepository.findAll();
	}
	
	public ResponseEntity<Object> addCliente(Cliente cliente) {
	     Cliente savedPliente = clienteRepository.save(cliente);
	     URI location =  ServletUriComponentsBuilder
	     .fromCurrentRequest()
	     .path("/{id}")
	     .buildAndExpand(savedPliente.getId()).toUri();
	     return ResponseEntity.created(location).build();
	  }
	
	public Optional<Cliente> getClienteById(Integer id) {
		
		return clienteRepository.findById(id);
	}
	
	public Optional<Cliente> getClienteByfirstName(String firstName) {
		
		return clienteRepository.findAll(firstName);
	}
	
	public String deleteClienteById(Integer id) {
		clienteRepository.deleteById(id);
		return "Successfully Deleted pliente with ID:- " + id;
	}
	
	public ResponseEntity<Object> updateCliente(Cliente pliente) {
	     Cliente savedPliente = clienteRepository.save(pliente);
	     URI location =  ServletUriComponentsBuilder
	     .fromCurrentRequest()
	     .path("/{id}")
	     .buildAndExpand(savedPliente.getId()).toUri();
	     return ResponseEntity.created(location).build();
	  }
}
