package com.proyectCircle.api.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.proyectCircle.api.models.ProductoModel;

public interface ProductoRepository extends JpaRepository<ProductoModel, Long> {

    ProductoModel findByNombre(String nombre);

    ProductoModel findAllByNombre(String nombre);
}
