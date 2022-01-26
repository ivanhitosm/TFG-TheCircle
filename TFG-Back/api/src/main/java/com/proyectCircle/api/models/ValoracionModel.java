package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="valoracion")
public class ValoracionModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_Id", foreignKey = @ForeignKey(name = "cliente_Id"))
    private ClienteModel cliente;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_Id", foreignKey = @ForeignKey(name = "producto_Id"))
    private ProductoModel producto;

    @Column(name = "Texto")
    private String texto;
    @Column(name = "Rating")
    private Integer rating;
}
