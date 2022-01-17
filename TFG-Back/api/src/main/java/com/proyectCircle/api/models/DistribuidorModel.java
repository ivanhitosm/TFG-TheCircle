package com.proyectCircle.api.models;
import javax.persistence.*;

@Entity
@Table(name="distribuidor")
public class DistribuidorModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
