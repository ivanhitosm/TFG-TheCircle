package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.AtributoModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface AtributoRepository extends JpaRepository<AtributoModel, Long> {

    AtributoModel findByNombre(String nombre);

    List<AtributoModel> findAllByNombreContaining(String nombre);

   


    
}
