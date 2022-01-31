package com.proyectCircle.api.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.proyectCircle.api.models.TutorialModel;

public interface TutorialRepository extends JpaRepository<TutorialModel, Long> {
  Page<TutorialModel> findByPublished(boolean published, Pageable pageable);

  Page<TutorialModel> findByTitleContaining(String title, Pageable pageable);
  
  List<TutorialModel> findByTitleContaining(String title, Sort sort);
}
