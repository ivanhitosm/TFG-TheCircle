package com.proyectCircle.api.repositories;


import java.util.List;


import com.proyectCircle.api.models.DistribuidorModel;

import org.springframework.data.jpa.repository.JpaRepository;



public interface DistribuidorRepository extends JpaRepository<DistribuidorModel, Long> {

    DistribuidorModel findByNombre(String nombre);

    List<DistribuidorModel> findAllByNombreContaining(String nombre);

   


    
}
