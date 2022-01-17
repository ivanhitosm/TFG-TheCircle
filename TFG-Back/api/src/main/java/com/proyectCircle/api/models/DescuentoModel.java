package com.proyectCircle.api.models;
import javax.persistence.*;

@Entity
@Table(name="descuento")
public class DescuentoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
