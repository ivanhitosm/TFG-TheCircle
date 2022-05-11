package com.proyectCircle.api.Dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductoSimpleDto {
    private String nombre;
    private String descripcionCorta;
    private String descripcionLarga;
    private Float precio;
    private Integer cantidad;
    private Boolean visible;
    
}
