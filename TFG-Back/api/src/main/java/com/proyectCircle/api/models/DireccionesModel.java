package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name = "direcciones")
public class DireccionesModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "uId", foreignKey = @ForeignKey(name = "uId"))
    private ClienteModel cliente;

    public DireccionesModel(Long id, ClienteModel cliente, String direccion, String ciudad, String poblacion,
            Integer numero, Integer piso) {
        this.id = id;
        this.cliente = cliente;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.poblacion = poblacion;
        this.numero = numero;
        this.piso = piso;
    }

    @Column(name = "Dirección")
    private String direccion;
    @Column(name = "Ciudad")
    private String ciudad;
    @Column(name = "Población")
    private String poblacion;
    @Column(name = "Numero")
    private Integer numero;
    @Column(name = "Piso")
    private Integer piso;

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

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