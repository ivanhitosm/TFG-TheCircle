package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="marca")
public class MarcaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_marcaProducto", foreignKey = @ForeignKey(name = "id_marcaProducto"))
    private ProductoModel producto;

    @ManyToMany(mappedBy = "marca")
    private Set<DescuentoModel> descuento;

    @Column(name = "Nombre")
    private String nombre;
}
