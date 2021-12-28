package com.proyectCircle.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.repositories.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.*;




@Service
public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;



    public List<ClienteModel> obtenerClientes(){
        return  clienteRepository.findAll();
    }

    public ClienteModel guardarCliente(ClienteModel cliente){
        return clienteRepository.save(cliente);
    }

    public Optional<ClienteModel> obtenerPorId(long id){
        return clienteRepository.findById(id);
    }

    public List<ClienteModel> obtenerPorUsername(Integer username){
        return clienteRepository.findByUsername(username);
    }

    public boolean eliminarCliente(long id){
        try {
            clienteRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

    public List<ClienteModel> getClientesPag(Integer pageNo, Integer pageSize, String sortBy)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<ClienteModel> pagedResult = clienteRepository.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<>();
        }
    }

    public static String getfirstName() {
        return null;
    }
 
    public static Object getUsername() {
        return null;
    }

    public List<ClienteModel> obtenerPortelefoneN(Integer telefoneN) {
        return clienteRepository.findBytelefoneN(telefoneN);
    }

}
