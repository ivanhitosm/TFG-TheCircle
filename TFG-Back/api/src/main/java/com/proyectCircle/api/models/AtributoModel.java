package com.proyectCircle.api.models;

import java.util.Set;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="atributo")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AtributoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;

    @ManyToMany(mappedBy = "atributo")
    Set<VariacionModel> variacion;
}
