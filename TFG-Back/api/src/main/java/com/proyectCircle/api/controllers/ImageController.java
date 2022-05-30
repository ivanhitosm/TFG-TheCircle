package com.proyectCircle.api.controllers;


import com.proyectCircle.api.exception.ImageUploadResponse;
import com.proyectCircle.api.exception.ResourceNotFoundException;
import com.proyectCircle.api.models.ImageModel;
import com.proyectCircle.api.repositories.ImageRepository;
import com.proyectCircle.api.repositories.ProductoRepository;
import com.proyectCircle.api.services.ImageUtility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import lombok.Builder;

import java.io.IOException;
import java.util.Optional;
@Builder
@RestController
@CrossOrigin() // open for all ports
public class ImageController {

    @Autowired
    ImageRepository imageRepository;
    @Autowired
    ProductoRepository productoRepository;


    @PostMapping("/productos/{productoId}/images")
    public ResponseEntity<ImageModel> createImage(
        @PathVariable(value = "productoId") Long productoId,
        @RequestParam("image") MultipartFile file            
        ){
              
        ImageModel imageRequest= new ImageModel();
        ImageModel image = productoRepository.findById(productoId).map(producto ->  {
                imageRequest.setProducto(producto);
                imageRequest.setName(file.getOriginalFilename());
                imageRequest.setType(file.getContentType());
                try {imageRequest.setImage(ImageUtility.compressImage(file.getBytes()));
                } catch (IOException e) {e.printStackTrace();}
        return imageRepository.save(imageRequest);
      }).orElseThrow(() -> new ResourceNotFoundException("Not found Producto with id = " + productoId));
  
      return new ResponseEntity<>(image, HttpStatus.CREATED);
    }

    @PostMapping("/upload/image/{id}")
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file ,@PathVariable("id") Long id)
            throws IOException {

        imageRepository.save(ImageModel.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
              
                .image(ImageUtility.compressImage(file.getBytes())).build());
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("Image uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{name}"})
    public ImageModel getImageDetails(@PathVariable("name") String name)  {

        final Optional<ImageModel> dbImage = imageRepository.findByName(name);
        if (dbImage.isPresent()) {
                return ImageModel.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();    
        }else{
                return null;
        }
        
    }

    @GetMapping(path = {"/get/image/{name}"})
    public ResponseEntity<byte[]> getImage(@PathVariable("name") String name)  {

        final Optional<ImageModel> dbImage = imageRepository.findByName(name);
        if (dbImage.isPresent()) {
        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
        }else{
                return null;
        }
    }
    @GetMapping(path = {"/get/imageProducto/{id}"})
    public ResponseEntity<byte[]> getImageProducto(@PathVariable("id") Long id)  {

        final Optional<ImageModel> dbImage = imageRepository.findByProductoId(id);
        if (dbImage.isPresent()) {
        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
        }else{
                return null;
        }
    }
}