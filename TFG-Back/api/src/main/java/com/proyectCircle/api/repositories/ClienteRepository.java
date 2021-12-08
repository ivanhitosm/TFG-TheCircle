package com.proyectCircle.api.repositories;

import com.proyectCircle.api.models.ClienteModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import antlr.collections.List;

@Repository
public interface ClienteRepository extends CrudRepository<ClienteModel,Long>{
    public abstract List<ClienteModel> findByZip(Integer zip);
    public abstract List<ClienteModel> findByFirstName(String firstName);
    
}
