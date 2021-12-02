package com.spring.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.spring.entity.Cliente;
import com.spring.service.ClienteService;

@RestController
public class ClienteController {
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping("/cliente")
	public List<Cliente> retriveAllClientes() {
		return clienteService.retriveAllClientes();
	}
	
	@PostMapping("/cliente")
	public ResponseEntity<Object> addCliente(@RequestBody Cliente cliente) {
	     return clienteService.addCliente(cliente);
	  }
	
	@GetMapping("/pliente/{id}")
	public Optional<Cliente> getClienteById(@PathVariable Integer id) {
		return clienteService.getClienteById(id);
	}
	
	@DeleteMapping("/cliente/{id}")
	public void deleteClienteById(@PathVariable Integer id) {
		clienteService.deleteClienteById(id);
		
	}
	@PatchMapping("/cliente")
	public ResponseEntity<Object> updateCliente(@RequestBody Cliente cliente) {
	     return clienteService.updateCliente(cliente);
	  }

	@GetMapping("/Cliente/{firstName}/{pagSize}/{pagNumber}")
	public Optional<Cliente> getClienteByfirstName(@PathVariable String firstName) {
		return clienteService.getClienteByfirstName(firstName);
	}
	
}
