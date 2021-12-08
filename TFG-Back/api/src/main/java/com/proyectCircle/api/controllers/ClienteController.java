package com.proyectCircle.api.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import antlr.collections.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @GetMapping()
    public List<ClienteModel> obenerClientes() {
        return clienteService.obtenerClientes();
    }
    
    @PostMapping()
    public ClienteModel guardarCliente(@RequestBody ClienteModel cliente){
        return this.clienteService.guardarCliente(cliente);
    }

    @GetMapping("/{id}")
    public Optional<ClienteModel> obtenerClientePorId(@PathVariable("id") Long id){
        return this.clienteService.obtenerPorId(id)
    }

    @GetMapping("/query")
    public List<ClienteModel> obtenerClientePorZip(@RequestParam("zip") Integer zip){
        return this.clienteService.obtenerPorZip(zip);
    }

    @DeleteMapping(path ="/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.clienteService.eliminarCliente(id);
        if (ok) {
            return "Se elimino el Ciente con el id: "+id;
        } else {
            return "No se elimino el Cliente con el id: "+id;
        }
    }
}
