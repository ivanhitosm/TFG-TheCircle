package com.proyectCircle.api.models;



import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "direccion")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DireccionModel {
  

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_direccionCliente", foreignKey = @ForeignKey(name = "id_direccionCliente"))
    private ClienteModel cliente; 

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_direccionPedido", foreignKey = @ForeignKey(name = "id_direccionPedido", value =ConstraintMode.CONSTRAINT))
    private List<PedidoModel> pedidos;

  
    @Column(name = "Ciudad")
    private String ciudad;
    @Column(name = "Población")
    private String poblacion;
    @Column(name = "Numero")
    private Integer numero;
    @Column(name = "Piso")
    private Integer piso;

}