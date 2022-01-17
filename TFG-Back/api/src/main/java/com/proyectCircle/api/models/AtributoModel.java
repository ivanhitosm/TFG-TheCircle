package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="atributo")
public class AtributoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
