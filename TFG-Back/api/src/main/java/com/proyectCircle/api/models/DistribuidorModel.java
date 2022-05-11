package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="distribuidor")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DistribuidorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    private String nombre;


    @ManyToMany
    @JoinTable(
    name = "producto_distribuidor", 
    joinColumns = @JoinColumn(name = "distribuidor_id"), 
    inverseJoinColumns = @JoinColumn(name = "producto_id"))
    @JsonIgnore
    private Set<ProductoModel> producto;
}
