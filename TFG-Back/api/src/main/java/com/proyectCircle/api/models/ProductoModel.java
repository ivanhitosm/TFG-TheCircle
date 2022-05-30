package com.proyectCircle.api.models;


import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "producto")
@Data
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ProductoModel {

   

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToMany(mappedBy = "producto")
    @JsonIgnore
    private Set<PedidoModel> pedido;

    @ManyToMany(mappedBy = "producto")
    private Set<DistribuidorModel> distribuidor;

    @ManyToMany(mappedBy = "producto")
    private Set<TagModel> tag;

    @ManyToMany(mappedBy = "producto")
    private Set<CategoriaModel> categoria;

    

    @ManyToOne( cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_marcaProducto", foreignKey = @ForeignKey(name = "id_marcaProducto"))
    private MarcaModel marca;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_valoracionPedido", foreignKey = @ForeignKey(name = "id_valoracionPedido" ,value =ConstraintMode.CONSTRAINT))
    private List<ValoracionModel> valoracion;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_variacionPedido", foreignKey = @ForeignKey(name = "id_variacionPedido" ,value =ConstraintMode.CONSTRAINT))
    private List<VariacionModel> variacion;

    @OneToOne(
		mappedBy="producto",
        cascade = CascadeType.ALL,
		orphanRemoval = true,
		fetch = FetchType.LAZY)
	private ImageModel imagen;

    
    private String nombre;
    private String descripcionCorta;
    private String descripcionLarga;
    private Float precio;
    private Integer cantidad;
    private Boolean visible;

    

}
