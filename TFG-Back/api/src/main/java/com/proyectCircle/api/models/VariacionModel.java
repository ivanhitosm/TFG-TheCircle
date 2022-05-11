package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="variacion")

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VariacionModel {
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_variacionPedido", foreignKey = @ForeignKey(name = "producto_Id"))
    @JsonIgnore
    private ProductoModel producto;

    @ManyToMany
    @JoinTable(
    name = "variacion_atributo", 
    joinColumns = @JoinColumn(name = "variacion_id"), 
    inverseJoinColumns = @JoinColumn(name = "atributo_id"))
    @JsonIgnore
    Set<AtributoModel> atributo;

    private String nombre;

   
}
