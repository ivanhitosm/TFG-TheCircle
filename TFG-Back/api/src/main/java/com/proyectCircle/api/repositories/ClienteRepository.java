package com.proyectCircle.api.repositories;

import com.proyectCircle.api.models.ClienteModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<ClienteModel,Long>{
    
}
