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
    @JoinColumn(name = "id_valoracionCliente", foreignKey = @ForeignKey(name = "id_valoracionCliente"))
    private ClienteModel cliente;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_valoracionPedido", foreignKey = @ForeignKey(name = "id_valoracionPedido"))
    private ProductoModel producto;

    @Column(name = "Texto")
    private String texto;
    @Column(name = "Rating")
    private Integer rating;
}
