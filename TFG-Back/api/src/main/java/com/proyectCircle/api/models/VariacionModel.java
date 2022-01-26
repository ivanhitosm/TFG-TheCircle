package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="variacion")
public class VariacionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_Id", foreignKey = @ForeignKey(name = "producto_Id"))
    private ProductoModel producto;

    @ManyToMany
    @JoinTable(
    name = "variacion_atributo", 
    joinColumns = @JoinColumn(name = "variacion_id"), 
    inverseJoinColumns = @JoinColumn(name = "atributo_id"))
    Set<AtributoModel> variacion;
}
