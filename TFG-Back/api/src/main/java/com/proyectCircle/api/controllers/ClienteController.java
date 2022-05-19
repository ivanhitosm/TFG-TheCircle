package com.proyectCircle.api.controllers;


import java.util.List;

import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.models.PedidoModel;
import com.proyectCircle.api.services.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {

    @Autowired
    ClienteService clienteService;
   
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addCliente")
    public ClienteModel addCliente(@RequestBody ClienteModel cliente) {
      return clienteService.guardarCliente(cliente);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addListaClientes")
    public List<ClienteModel> addClientes(@RequestBody List<ClienteModel> cliente) {
      return clienteService.guardarClientes(cliente);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updateCliente")
    public ClienteModel updateCliente(@RequestBody ClienteModel producto) {
      return clienteService.actualizarCliente(producto);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Clientes")
    public List<ClienteModel> todosClientes() {
      return clienteService.getClientes();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ClienteId/{id}")
    public ClienteModel clientesId(@PathVariable long id) {
      return clienteService.getClienteById(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ClienteNombre/{nombre}")
    public List<ClienteModel> clienteNombre(@PathVariable String nombre) {
      return clienteService.getClientesByNombre(nombre);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ClienteDePedido/{id}")
        public ClienteModel clientesdePedido(@PathVariable long id){
            return clienteService.getClienteDePedido(id);
        }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/PedidosDeCliente/{id}")
        public List<PedidoModel> productosDeCliente(@PathVariable long id){
            return clienteService.getPedidosDeCliente(id);
        }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addPedido/{id}/Cliente/{id2}")
    public  List<PedidoModel> guardarPedidosEnClientes(@PathVariable("id") Long id,@PathVariable("id2") Long id2){
        return clienteService.postPedidoEnCliente(id,id2);
    }

}
