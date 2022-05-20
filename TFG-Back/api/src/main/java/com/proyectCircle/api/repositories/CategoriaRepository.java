package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.CategoriaModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface CategoriaRepository extends JpaRepository<CategoriaModel, Long> {

    CategoriaModel findByNombre(String nombre);

    List<CategoriaModel> findAllByNombreContaining(String nombre);

   


    
}
