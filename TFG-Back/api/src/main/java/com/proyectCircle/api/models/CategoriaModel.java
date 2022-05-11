package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="categoria")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CategoriaModel {
    
 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    
    @ManyToMany
    @JoinTable(name = "producto_categoria", joinColumns = @JoinColumn(name = "categoria_id"), inverseJoinColumns = @JoinColumn(name = "producto_id"))
    @JsonIgnore
    private Set<ProductoModel> producto;

    @ManyToMany(mappedBy = "categoria")
    private Set<DescuentoModel> descuento;

    @Column(name = "Nombre")
    private String nombre;


}
