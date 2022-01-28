package com.proyectCircle.api.models;


import java.util.List;
import java.util.Set;

import javax.persistence.*;



@Entity
@Table(name = "producto")
public class ProductoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToMany(mappedBy = "pedido")
    Set<PedidoModel> pedido;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_Id", foreignKey = @ForeignKey(name = "producto_Id" ,value =ConstraintMode.CONSTRAINT))
    private List<ValoracionModel> valoracion;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_Id", foreignKey = @ForeignKey(name = "producto_Id" ,value =ConstraintMode.CONSTRAINT))
    private List<VariacionModel> variacion;
    

    private String nombre;
    private String descripcion;
    private Integer precio;
    private Integer cantidad;
    private Boolean visible;

    public ProductoModel(Long id, String nombre, String descripcion, Integer precio, Integer cantidad,
            Boolean visible) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.visible = visible;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getPrecio() {
        return this.precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getCantidad() {
        return this.cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Boolean getVisible() {
        return this.visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

}