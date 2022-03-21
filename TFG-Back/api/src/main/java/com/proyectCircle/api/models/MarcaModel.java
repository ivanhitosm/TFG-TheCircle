package com.proyectCircle.api.models;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="marca")
public class MarcaModel {
    public MarcaModel(){
        super();
     }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_marcaProducto", foreignKey = @ForeignKey(name = "id_marcaProducto" ,value =ConstraintMode.CONSTRAINT))
    @JsonIgnore
    private List<ProductoModel> producto;

    @ManyToMany(mappedBy = "marca")
    private Set<DescuentoModel> descuento;

    @Column(name = "Nombre")
    private String nombre;

    public MarcaModel(long id, List<ProductoModel> producto, Set<DescuentoModel> descuento, String nombre) {
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
    public List<ProductoModel> getProducto() {
        return this.producto;
    }

    public void setProducto(List<ProductoModel> producto) {
        this.producto = producto;
    }

    public Set<DescuentoModel> getDescuento() {
        return this.descuento;
    }

    public void setDescuento(Set<DescuentoModel> descuento) {
        this.descuento = descuento;
    }


    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
    
}
