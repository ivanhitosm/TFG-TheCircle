package com.proyectCircle.api.models;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="valoracion")
public class ValoracionModel {
    public ValoracionModel(){
        super();
     }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;

    
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_valoracionCliente", foreignKey = @ForeignKey(name = "id_valoracionCliente"))
    private ClienteModel cliente;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_valoracionPedido", foreignKey = @ForeignKey(name = "id_valoracionPedido"))
    @JsonIgnore
    private ProductoModel producto;

    @Column(name = "Texto")
    private String texto;
    @Column(name = "Rating")
    private Integer rating;


    public ValoracionModel(long id, ClienteModel cliente, ProductoModel producto, String texto, Integer rating) {
        this.id = id;
        this.cliente = cliente;
        this.producto = producto;
        this.texto = texto;
        this.rating = rating;
    }
    
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ClienteModel getCliente() {
        return this.cliente;
    }

    public void setCliente(ClienteModel cliente) {
        this.cliente = cliente;
    }

    public ProductoModel getProducto() {
        return this.producto;
    }

    public void setProducto(ProductoModel producto) {
        this.producto = producto;
    }

    public String getTexto() {
        return this.texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public Integer getRating() {
        return this.rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    
}
