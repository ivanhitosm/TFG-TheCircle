package com.proyectCircle.api.controllers;

import java.util.ArrayList;

import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(path="/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @GetMapping()
    public ArrayList<ClienteModel> obenerClientes() {
        return clienteService.obtenerClientes();
    }
    
    @PostMapping()
    public ClienteModel guardarCliente(@RequestBody ClienteModel cliente){
        return this.clienteService.guardarCliente(cliente);
    }
}
