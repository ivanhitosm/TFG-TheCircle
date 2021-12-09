package com.proyectCircle.api.repositories;

import java.util.List;

import com.proyectCircle.api.models.ClienteModel;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ClienteRepository 
    extends PagingAndSortingRepository<ClienteModel,Long> {

    public abstract List<ClienteModel> findByZip(Integer zip);
    
}
