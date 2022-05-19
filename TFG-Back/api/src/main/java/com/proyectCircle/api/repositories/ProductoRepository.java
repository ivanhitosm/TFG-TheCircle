package com.proyectCircle.api.repositories;


import java.util.List;

import com.proyectCircle.api.models.ProductoModel;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ProductoRepository extends JpaRepository<ProductoModel, Long> {

    
    ProductoModel findByNombre(String nombre);

    @Query(nativeQuery = true, value="SELECT * FROM producto p WHERE p.visible =1 and p.nombre= ?1")
    List<ProductoModel> findAllByNombreContaining(String nombre);


    @Query(nativeQuery = true, value="SELECT * FROM producto p WHERE p.visible =1")
    Page<ProductoModel> findAllVisible(PageRequest pageRequestpage);

    
}
