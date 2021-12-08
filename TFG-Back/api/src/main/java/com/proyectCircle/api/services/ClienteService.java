package com.proyectCircle.api.services;

import java.util.ArrayList;
import java.util.Optional;

import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.repositories.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import antlr.collections.List;

@Service
public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;

    public ArrayList<ClienteModel> obtenerClientes(){
        return(ArrayList<ClienteModel>) clienteRepository.findAll();
    }

    public ClienteModel guardarCliente(ClienteModel cliente){
        return clienteRepository.save(cliente);
    }

    public Optional<ClienteModel> obtenerPorId(long id){
        return clienteRepository.findById(id);
    }

    public List<ClienteModel> obtenerPorZip(Integer zip){
        return clienteRepository.findByZip(zip);
    }

    public boolean eliminarCliente(long id){
        try {
            clienteRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            //TODO: handle exception
            retun false;
        }
    }

}
