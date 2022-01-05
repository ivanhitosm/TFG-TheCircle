package com.proyectCircle.api.models;

import javax.persistence.*;

public class CodDescuentoModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;


    private Integer descuestoEur;

    private Integer descuentoPorc;
}
