package com.proyectCircle.api.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.proyectCircle.api.models.ProductoModel;

public interface ProductoRepository extends JpaRepository<ProductoModel, Long> {

    ProductoModel findByNombre(String nombre);

    ProductoModel findAllByNombre(String nombre);


    @Query(nativeQuery = true, value="SELECT * FROM producto p WHERE p.visible =1")
    Page<ProductoModel> findAllVisible(PageRequest pageRequestpage);

    
}
