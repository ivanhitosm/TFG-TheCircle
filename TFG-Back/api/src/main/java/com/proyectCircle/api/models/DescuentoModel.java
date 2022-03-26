package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="descuento")
public class DescuentoModel {
    
    public DescuentoModel(){
        super();
     }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;


    @ManyToMany
    @JoinTable(
    name = "descuento_marca", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "marca_id"))
    private Set<MarcaModel> marca;

    @ManyToMany
    @JoinTable(
    name = "descuento_tag", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<TagModel> tag;

    @ManyToMany
    @JoinTable(
    name = "descuento_categoria", 
    joinColumns = @JoinColumn(name = "descuento_id"), 
    inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private Set<CategoriaModel> categoria;

    private Integer descuestoEur;

    private Integer descuentoPorc;

    public Integer getDescuestoEur() {
        return descuestoEur;
    }

    public Integer getDescuentoPorc() {
        return descuentoPorc;
    }

    public void setDescuentoPorc(Integer descuentoPorc) {
        this.descuentoPorc = descuentoPorc;
    }

    public void setDescuestoEur(Integer descuestoEur) {
        this.descuestoEur = descuestoEur;
    }
}
