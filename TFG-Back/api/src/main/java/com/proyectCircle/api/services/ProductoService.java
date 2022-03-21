package com.proyectCircle.api.services;


import java.util.List;

import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository repository;

    public ProductoModel guardarProducto(ProductoModel producto){

        return repository.save(producto);
    }
    public List<ProductoModel> guardarProductos(List<ProductoModel> producto){

        return repository.saveAll(producto);
    }

    public List<ProductoModel> getProductos(){
        return repository.findAll();
    }
    
    public ProductoModel getProductoById(long id){
        return repository.findById(id).orElse(null);
    }
    public ProductoModel getProductosByNombre(String nombre){
        return repository.findAllByNombre(nombre);
    }

    public String deleteProducto (long id){
        repository.deleteById(id);
        return "Producto Eliminado!! "+id;
    }
    public ProductoModel actualizarProducto(ProductoModel producto){
        
        ProductoModel productoExistente=repository.findById(producto.getId()).orElseThrow(()-> new IllegalStateException("id not found"));
        productoExistente.setNombre(producto.getNombre());
        productoExistente.setDescripcion(producto.getDescripcion());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setCantidad(producto.getCantidad());
        productoExistente.setVisible(producto.getVisible());
        
        return repository.save(productoExistente);
    }

    public List<ProductoModel> findAllProducts() {
        return repository.findAll();
    }


    public List<ProductoModel> findProductsWithSorting(String field){
        return  repository.findAll(Sort.by(Sort.Direction.ASC,field));
    }


    public Page<ProductoModel> findProductsWithPagination(int offset,int pageSize){
        return repository.findAll(PageRequest.of(offset, pageSize));
    }

    public Page<ProductoModel> findProductsWithPaginationAndSorting(int offset,int pageSize,String field){
         return repository.findAllVisible(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
       
        //return repository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(field)));
    }
}
