package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="atributo")
public class AtributoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToMany(mappedBy = "variacion")
    Set<VariacionModel> variacion;
}
