package com.proyectCircle.api.Dto;




import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductoDto {

    private String nombre;
    private String descripcionCorta;
    private String descripcionLarga;
    private Float precio;
    private Integer cantidad;
    private Boolean visible;
    private ImageDto image;

}
