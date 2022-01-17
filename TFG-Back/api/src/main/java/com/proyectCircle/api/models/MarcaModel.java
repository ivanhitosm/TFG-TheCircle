package com.proyectCircle.api.models;
import javax.persistence.*;

@Entity
@Table(name="marca")
public class MarcaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;
}
