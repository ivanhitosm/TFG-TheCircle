package com.proyectCircle.api.models;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="marca")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MarcaModel {
   

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "id_marcaProducto", foreignKey = @ForeignKey(name = "id_marcaProducto" ,value =ConstraintMode.CONSTRAINT))
    @JsonIgnore
    private List<ProductoModel> producto;

    @ManyToMany(mappedBy = "marca")
    @JsonIgnore
    private Set<DescuentoModel> descuento;

    @Column(name = "nombre")
    private String nombre;

}
