package com.proyectCircle.api.models;

import java.sql.Date;
import java.util.Set;

import javax.persistence.*;
@Entity
@Table(name="pedido")
public class PedidoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(name = "Date")
    private Date date;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pedidoCliente", foreignKey = @ForeignKey(name = "id_pedidoCliente"))
    private ClienteModel cliente;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_direccionPedido", foreignKey = @ForeignKey(name = "id_direccionPedido"))
    private DireccionModel direccion;
 
    @ManyToMany
    @JoinTable(
    name = "pedido_producto", 
    joinColumns = @JoinColumn(name = "pedido_id"), 
    inverseJoinColumns = @JoinColumn(name = "producto_id"))
    private Set<ProductoModel> pedido;
}

