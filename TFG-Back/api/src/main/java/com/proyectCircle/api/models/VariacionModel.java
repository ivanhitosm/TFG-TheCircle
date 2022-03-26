package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="variacion")
public class VariacionModel {
    public VariacionModel(){
        super();
     }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_variacionPedido", foreignKey = @ForeignKey(name = "producto_Id"))
    @JsonIgnore
    private ProductoModel producto;

    @ManyToMany
    @JoinTable(
    name = "variacion_atributo", 
    joinColumns = @JoinColumn(name = "variacion_id"), 
    inverseJoinColumns = @JoinColumn(name = "atributo_id"))
    
    Set<AtributoModel> atributo;

    private String nombre;

    public VariacionModel(long id, ProductoModel producto, Set<AtributoModel> atributo, String nombre) {
        this.id = id;
        this.producto = producto;
        this.atributo = atributo;
        this.nombre = nombre;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ProductoModel getProducto() {
        return this.producto;
    }

    public void setProducto(ProductoModel producto) {
        this.producto = producto;
    }

  
    public Set<AtributoModel> getAtributo() {
        return this.atributo;
    }

    public void setAtributo(Set<AtributoModel> atributo) {
        this.atributo = atributo;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
