package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="distribuidor")
public class DistribuidorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;


    @ManyToMany
    @JoinTable(
    name = "producto_distribuidor", 
    joinColumns = @JoinColumn(name = "distribuidor_id"), 
    inverseJoinColumns = @JoinColumn(name = "producto_id"))
    private Set<ProductoModel> distribuidor;
}
