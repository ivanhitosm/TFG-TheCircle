package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="descuento")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DescuentoModel {
    
  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;


    @ManyToMany
    @JoinTable(
    name = "descuento_marca", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "marca_id"))
    @JsonIgnore
    private Set<MarcaModel> marca;

    @ManyToMany
    @JoinTable(
    name = "descuento_tag", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "tag_id"))
    @JsonIgnore
    private Set<TagModel> tag;

    @ManyToMany
    @JoinTable(
    name = "descuento_categoria", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    @JsonIgnore
    private Set<CategoriaModel> categoria;

    private Integer descuestoEur;

  
   
}
