package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="categoria")
public class CategoriaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @Column(name = "Nombre")
    private String nombre;
}
