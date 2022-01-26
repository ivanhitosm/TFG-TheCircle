package com.proyectCircle.api.models;



import java.util.List;

import javax.persistence.*;


@Entity
@Table(name = "direccion")
public class DireccionModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_Id", foreignKey = @ForeignKey(name = "cliente_Id"))
    private ClienteModel cliente; 

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "direccion_Id", foreignKey = @ForeignKey(name = "direccion_Id", value =ConstraintMode.CONSTRAINT))
    private List<PedidoModel> pedidos;


    public DireccionModel(Long id, ClienteModel cliente, List<PedidoModel> pedidos, String ciudad, String poblacion,
            Integer numero, Integer piso) {
        this.id = id;
        this.cliente = cliente;
        this.pedidos = pedidos;
        this.ciudad = ciudad;
        this.poblacion = poblacion;
        this.numero = numero;
        this.piso = piso;
    }

  
    @Column(name = "Ciudad")
    private String ciudad;
    @Column(name = "Población")
    private String poblacion;
    @Column(name = "Numero")
    private Integer numero;
    @Column(name = "Piso")
    private Integer piso;


    public String getCiudad() {
        return this.ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getPoblacion() {
        return this.poblacion;
    }

    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }

    public Integer getNumero() {
        return this.numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Integer getPiso() {
        return this.piso;
    }

    public void setPiso(Integer piso) {
        this.piso = piso;
    }

}