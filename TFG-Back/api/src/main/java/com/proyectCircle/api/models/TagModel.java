package com.proyectCircle.api.models;
import java.util.Set;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="tag")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TagModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToMany
    @JoinTable(
    name = "producto_tag", 
    joinColumns = @JoinColumn(name = "tag_id"), 
    inverseJoinColumns = @JoinColumn(name = "producto_id"))
    private Set<ProductoModel> producto;

    @ManyToMany(mappedBy = "tag")
    private Set<DescuentoModel> descuento;

    @Column(name = "Nombre")
    private String nombre;
}
