package com.proyectCircle.api.repositories;

import java.util.List;

import com.proyectCircle.api.models.ClienteModel;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClienteRepository 
    extends JpaRepository<ClienteModel,Long> {


    Page<ClienteModel> findByfirstNameContaining(String firstName, Pageable pagingSort);
    List<ClienteModel> findByUsername(Integer username);
    List<ClienteModel> findAll(Sort by);
    Page<ClienteModel> findAll(Pageable pagingSort);
	List<ClienteModel> findBytelefoneN(Integer telefoneN);
}
