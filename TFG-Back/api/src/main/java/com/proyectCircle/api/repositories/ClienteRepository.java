package com.proyectCircle.api.repositories;


import java.util.List;

import com.proyectCircle.api.models.MarcaModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface ClienteRepository extends JpaRepository<MarcaModel, Long> {

    ClienteModel findByNombre(String nombre);

    List<ClienteModel> findAllByNombreContaining(String nombre);


    
}
