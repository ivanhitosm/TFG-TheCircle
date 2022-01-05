package com.proyectCircle.api.models;

import javax.persistence.*;

public class PedidoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

   
}
