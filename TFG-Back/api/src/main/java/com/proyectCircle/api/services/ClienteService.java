package com.proyectCircle.api.services;

import java.util.List;


import com.proyectCircle.api.models.ClienteModel;
import com.proyectCircle.api.models.PedidoModel;
import com.proyectCircle.api.models.ValoracionModel;
import com.proyectCircle.api.repositories.ClienteRepository;
import com.proyectCircle.api.repositories.PedidoRepository;
import com.proyectCircle.api.repositories.ValoracionRepository;

import java.util.Collections;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ValoracionRepository valoracionRepository;

    public List<ClienteModel> getClientes(){
        return clienteRepository.findAll();
    }
        
    public ClienteModel getClienteById(long id){
        return clienteRepository.findById(id).orElse(null);
    }
    public List<ClienteModel> guardarClientes(List<ClienteModel> cliente){

       

        return clienteRepository.saveAll(cliente);
    }

    public List<ClienteModel> getClientesByNombre(String nombre){
        return clienteRepository.findAllByNombreContaining(nombre);
    }

    public ClienteModel guardarCliente(ClienteModel cliente){
        // if (cliente.getValoracion()!=null) {
        //      ValoracionModel valoracion= new ValoracionModel();
        //      valoracion.setCliente(cliente); 
        //     valoracion.set
        // }

        return clienteRepository.save(cliente);
    }

    public ClienteModel getClienteDePedido(long id){

       PedidoModel pedidoExistente= pedidoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id pedido not found"));
        
       return clienteRepository.findById(pedidoExistente.getCliente().getId()).orElseThrow(()-> new IllegalStateException("Cliente not found"));
    }
    public  List<PedidoModel> getPedidosDeCliente(long id){

        return  clienteRepository.getById(id).getPedido();
    }

    public List<ValoracionModel> getValoracionesDeCliente(Long id){

        
        return  clienteRepository.getById(id).getValoracion();
    }

    public ClienteModel getClienteDeValoracion(Long id){
        ValoracionModel valoracionExistente= valoracionRepository.findById(id).orElseThrow(()-> new IllegalStateException("id Valoracion not found"));
        return clienteRepository.findById(valoracionExistente.getCliente().getId()).orElseThrow(()-> new IllegalStateException("Cliente not found"));
    }



 public ClienteModel actualizarCliente(ClienteModel cliente){
        
        ClienteModel clienteExistente=clienteRepository.findById(cliente.getId()).orElseThrow(()-> new IllegalStateException("id not found"));
        clienteExistente.setFirstName(cliente.getFirstName());
        clienteExistente.setLastName(cliente.getLastName());
        clienteExistente.setBirthdDate(cliente.getBirthdDate());
        clienteExistente.setDireccion(cliente.getDireccion());
        clienteExistente.setEmail(cliente.getEmail());
        clienteExistente.setGender(cliente.getGender());
        clienteExistente.setTelefoneN(cliente.getTelefoneN());
        clienteExistente.setUsername(cliente.getUsername());
        // clienteExistente.setPedido(cliente.getPedido());
        // clienteExistente.setValoracion(cliente.getValoracion());
        return clienteRepository.save(clienteExistente);
    }

    public List<PedidoModel> postPedidoEnCliente(Long id, Long id2){

        if(id!=null&&id2!=null){
            ClienteModel cliente=  clienteRepository.findById(id2).orElseThrow(()-> new IllegalStateException("id cliente not found"));       
            PedidoModel pedido= pedidoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id pedido not found"));
            List<PedidoModel> pedidos= cliente.getPedido();
            pedidos.add(pedido);
            cliente.setPedido(pedidos);
            clienteRepository.save(cliente);
            pedidoRepository.save(pedido);

            return pedidos;
        }else{
            return Collections.emptyList();
        }

    }
    public List<ValoracionModel> postValoracionEnCliente(Long id, Long id2){

        if(id!=null&&id2!=null){
            ClienteModel cliente=  clienteRepository.findById(id2).orElseThrow(()-> new IllegalStateException("id cliente not found"));       
            ValoracionModel valoracion= valoracionRepository.findById(id).orElseThrow(()-> new IllegalStateException("id valoracion not found"));
            List<ValoracionModel> valoracions= cliente.getValoracion();
            valoracions.add(valoracion);
            cliente.setValoracion(valoracions);
            clienteRepository.save(cliente);
            valoracionRepository.save(valoracion);

            return valoracions;
        }else{
            return Collections.emptyList();
        }

    }

}
