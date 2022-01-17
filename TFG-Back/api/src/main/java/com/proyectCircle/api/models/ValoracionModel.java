package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="valoracion")
public class ValoracionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
