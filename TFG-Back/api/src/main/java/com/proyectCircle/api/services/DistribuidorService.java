package com.proyectCircle.api.services;

import java.util.List;
import java.util.Set;

import com.proyectCircle.api.models.DistribuidorModel;
import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.repositories.DistribuidorRepository;
import com.proyectCircle.api.repositories.ProductoRepository;
import java.util.Collections;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DistribuidorService {
    
    @Autowired
    private DistribuidorRepository distribuidorRepository;

    @Autowired
    private ProductoRepository productoRepository;

    public List<DistribuidorModel> getDistribuidors(){
        return distribuidorRepository.findAll();
    }
        
    public DistribuidorModel getDistribuidorById(long id){
        return distribuidorRepository.findById(id).orElse(null);
    }
    public List<DistribuidorModel> guardarDistribuidors(List<DistribuidorModel> distribuidor){

        return distribuidorRepository.saveAll(distribuidor);
    }

    public List<DistribuidorModel> getDistribuidorsByNombre(String nombre){
        return distribuidorRepository.findAllByNombreContaining(nombre);
    }

    public DistribuidorModel guardarDistribuidor(DistribuidorModel distribuidor){

        return distribuidorRepository.save(distribuidor);
    }

    // public Optional<DistribuidorModel> getDistribuidorDeProducto(long id){

    // //     ProductoModel productoExistente=productoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id not found"));
    // //     DistribuidorModel distribuidorModel= distribuidorRepository.findById(productoExistente.getDistribuidor())
    // //    return distribuidorRepository.findById(productoExistente.getDistribuidor().);
    // }
    public  Set<ProductoModel> getProductosDeDistribuidor(long id){

        return  distribuidorRepository.getById(id).getProducto();
    }
 public DistribuidorModel actualizarDistribuidor(DistribuidorModel distribuidor){
        
        DistribuidorModel distribuidorExistente=distribuidorRepository.findById(distribuidor.getId()).orElseThrow(()-> new IllegalStateException("id not found"));
        distribuidorExistente.setNombre(distribuidor.getNombre());
        return distribuidorRepository.save(distribuidorExistente);
    }

    public Set<ProductoModel> postProductoEnDistribuidor(Long id, Long id2){

        if(id!=null&&id2!=null){
            DistribuidorModel distribuidor=  distribuidorRepository.findById(id2).orElseThrow(()-> new IllegalStateException("id distribuidor not found"));       
            ProductoModel producto= productoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id producto not found"));
            Set<ProductoModel> productos= distribuidor.getProducto();
            productos.add(producto);
            distribuidor.setProducto(productos);
            distribuidorRepository.save(distribuidor);

            return productos;
        }else{
            return Collections.emptySet();
        }
       
           
       
       
       

    }

}
