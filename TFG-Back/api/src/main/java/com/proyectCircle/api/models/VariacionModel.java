package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="cliente")
public class VariacionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
