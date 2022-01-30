package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="categoria")
public class CategoriaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToMany
    @JoinTable(
    name = "producto_categoria", 
    joinColumns = @JoinColumn(name = "categoria_id"), 
    inverseJoinColumns = @JoinColumn(name = "producto_id"))
    private Set<ProductoModel> categoria;

    @ManyToMany(mappedBy = "categoria")
    private Set<DescuentoModel> descuento;

    @Column(name = "Nombre")
    private String nombre;
}
