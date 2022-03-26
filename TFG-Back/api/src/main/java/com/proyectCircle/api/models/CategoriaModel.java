package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="categoria")
public class CategoriaModel {
    
    public CategoriaModel(){
        super();
     }

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

    public CategoriaModel(long id, Set<ProductoModel> producto, Set<DescuentoModel> descuento, String nombre) {
        this.id = id;
        this.producto = producto;
        this.descuento = descuento;
        this.nombre = nombre;
    }

    public long getId() {
        return this.id;
    }
    public void setId(long id) {
        this.id = id;
    }
    
    public Set<ProductoModel> getProducto() {
        return this.producto;
    }
    public void setProducto(Set<ProductoModel> producto) {
        this.producto = producto;
    }
    
    public String getNombre() {
        return this.nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
