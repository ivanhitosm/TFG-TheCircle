package com.proyectCircle.api.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import com.proyectCircle.api.models.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);

    Optional<ImageModel> findByProductoId(Long id);
  
    @Transactional
    void deleteByProductoId(long productoId);

}

