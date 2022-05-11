package com.proyectCircle.api.Dto;


import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageDto {
    private Long id;

	private String name;

	private String type;

	private MultipartFile image;

   
}

