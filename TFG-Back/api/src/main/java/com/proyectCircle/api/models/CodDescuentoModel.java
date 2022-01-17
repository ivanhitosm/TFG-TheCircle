package com.proyectCircle.api.models;

import javax.persistence.*;

@Entity
@Table(name="codigo_descuento")
public class CodDescuentoModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private long id;


    private Integer descuestoEur;

    private Integer descuentoPorc;

    public Integer getDescuestoEur() {
        return descuestoEur;
    }

    public Integer getDescuentoPorc() {
        return descuentoPorc;
    }

    public void setDescuentoPorc(Integer descuentoPorc) {
        this.descuentoPorc = descuentoPorc;
    }

    public void setDescuestoEur(Integer descuestoEur) {
        this.descuestoEur = descuestoEur;
    }
}
