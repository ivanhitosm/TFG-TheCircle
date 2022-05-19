package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.PedidoModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface PedidoRepository extends JpaRepository<PedidoModel, Long> {

    PedidoModel findByNombre(String nombre);

    List<PedidoModel> findAllByNombreContaining(String nombre);

   


    
}
