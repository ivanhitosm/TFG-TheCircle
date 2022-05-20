package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.DescuentoModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface DescuentoRepository extends JpaRepository<DescuentoModel, Long> {

    DescuentoModel findByNombre(String nombre);

    List<DescuentoModel> findAllByNombreContaining(String nombre);

   


    
}
