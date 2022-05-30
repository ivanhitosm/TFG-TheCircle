package com.proyectCircle.api.repositories;


import java.util.List;

import com.proyectCircle.api.Dto.MarcaDto;
import com.proyectCircle.api.models.MarcaModel;


import org.springframework.data.jpa.repository.JpaRepository;



public interface MarcaRepository extends JpaRepository<MarcaModel, Long> {

    MarcaModel findByNombre(String nombre);

    List<MarcaModel> findAllByNombreContaining(String nombre);

    MarcaModel save(MarcaDto marca);

   


    
}
