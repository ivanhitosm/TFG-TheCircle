package com.proyectCircle.api.repositories;

import java.util.Optional;


import com.proyectCircle.api.models.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);

    Optional<ImageModel> findByProductoId(Long id);
  
   
    @Modifying 
    @Query(nativeQuery = true, value="DELETE FROM image  WHERE image.id= :id")
    void deleteById(@Param("id")Long id);

}

