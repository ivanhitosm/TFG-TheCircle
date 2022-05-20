package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.TagModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface TagRepository extends JpaRepository<TagModel, Long> {

    TagModel findByNombre(String nombre);

    List<TagModel> findAllByNombreContaining(String nombre);

   


    
}
