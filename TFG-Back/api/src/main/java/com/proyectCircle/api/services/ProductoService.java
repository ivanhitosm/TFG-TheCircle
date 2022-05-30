package com.proyectCircle.api.services;


import java.util.List;

import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.repositories.ImageRepository;
import com.proyectCircle.api.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ImageRepository imageRepository;

    public ProductoModel guardarProducto(ProductoModel producto){
        
       
        return productoRepository.save(producto);
    }
    public List<ProductoModel> guardarProductos(List<ProductoModel> producto){

        return productoRepository.saveAll(producto);
    }

    public List<ProductoModel> getProductos(){
        return productoRepository.findAll();
    }
    
    public ProductoModel getProductoById(long id){
        return productoRepository.findById(id).orElse(null);
    }
    public List<ProductoModel> getProductosByNombre(String nombre){
        return productoRepository.findAllByNombreContaining(nombre);
    }

    public String deleteProducto (long id){
        productoRepository.deleteById(id);
        return "Producto Eliminado!! "+id;
    }
    public ProductoModel actualizarProducto(ProductoModel producto){
        
        ProductoModel productoExistente=productoRepository.findById(producto.getId()).orElseThrow(()-> new IllegalStateException("id not found"));
        productoExistente.setNombre(producto.getNombre());
        productoExistente.setDescripcionLarga(producto.getDescripcionLarga());
        productoExistente.setDescripcionCorta(producto.getDescripcionCorta());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setCantidad(producto.getCantidad());
        productoExistente.setVisible(producto.getVisible());
        productoExistente.setImagen(producto.getImagen());
        
        return productoRepository.save(productoExistente);
    }

    public List<ProductoModel> findAllProducts() {
        return productoRepository.findAll();
    }


    public List<ProductoModel> findProductsWithSorting(String field){
        return  productoRepository.findAll(Sort.by(Sort.Direction.ASC,field));
    }


    public Page<ProductoModel> findProductsWithPagination(int offset,int pageSize){
        return productoRepository.findAll(PageRequest.of(offset, pageSize));
    }

    public Page<ProductoModel> findProductsWithPaginationAndSortingVisible(int offset,int pageSize,String field){
         return productoRepository.findAllVisible(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
       
        //return productoRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
    }
    public Page<ProductoModel> findProductsWithPaginationAndSorting(int offset,int pageSize,String field){
       // return productoRepository.findAllVisible(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
      
       return productoRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
   }
    public  void deleteImagenDeProducto(long id) {
        ProductoModel producto = productoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id Producto not found"));
        if(producto.getImagen()!=null){
            Long imagen= producto.getImagen().getId();
            imageRepository.deleteById(imagen);           
        }
       
       
    }
}
