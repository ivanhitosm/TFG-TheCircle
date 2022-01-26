package com.proyectCircle.api.controllers;

import java.util.List;
import java.util.Optional;



import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;
    
   

    // @GetMapping()
    // public List<ClienteModel> obtenerClientes() {
    // return clienteService.obtenerClientes();
    // }
    @GetMapping()
    public ResponseEntity<List<ClienteModel>> getClientesPag(
            @RequestParam(defaultValue = "0") Integer pageNo,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(defaultValue = "id") String sortBy) {
        List<ClienteModel> list = clienteService.getClientesPag(pageNo, pageSize, sortBy);

        return new ResponseEntity<>(list, new HttpHeaders(), HttpStatus.OK);
    }

    // @RequestMapping(path = "/saveForLater", method = RequestMethod.POST)
    // public ClienteModel guardarCliente(@RequestBody ClienteModel cliente) {
    //     private ClienteModel cliente;
    //     this.cliente = cliente;
    //     return this.clienteService.guardarCliente(cliente);
    // }
   
   

    @GetMapping(path = "/{id}")
    public Optional<ClienteModel> obtenerClientePorId(@PathVariable("id") Long id) {
        return this.clienteService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public List<ClienteModel> obtenerClientePortelefoneN(@RequestParam("telefoneN") Integer telefoneN) {
        return this.clienteService.obtenerPortelefoneN(telefoneN);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id) {
        boolean ok = this.clienteService.eliminarCliente(id);
        if (ok) {
            return "Se elimino el Ciente con el id: " + id;
        } else {
            return "No se elimino el Cliente con el id: " + id;
        }
    }

}
