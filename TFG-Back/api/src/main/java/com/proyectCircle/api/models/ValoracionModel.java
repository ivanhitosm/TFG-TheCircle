package com.proyectCircle.api.models;

import javax.persistence.*;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="valoracion")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ValoracionModel {
   
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
    
}
