package com.proyectCircle.api.services;

import java.util.List;
import java.util.Optional;

import com.proyectCircle.api.models.MarcaModel;
import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.repositories.MarcaRepository;
import com.proyectCircle.api.repositories.ProductoRepository;
import java.util.Collections;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarcaService {
    
    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private ProductoRepository productoRepository;

    public List<MarcaModel> getMarcas(){
        return marcaRepository.findAll();
    }
        
    public MarcaModel getMarcaById(long id){
        return marcaRepository.findById(id).orElse(null);
    }
    public List<MarcaModel> guardarMarcas(List<MarcaModel> marca){

        return marcaRepository.saveAll(marca);
    }

    public List<MarcaModel> getMarcasByNombre(String nombre){
        return marcaRepository.findAllByNombreContaining(nombre);
    }

    public MarcaModel guardarMarca(MarcaModel marca){

        return marcaRepository.save(marca);
    }

    public Optional<MarcaModel> getMarcaDeProducto(long id){

        ProductoModel productoExistente=productoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id not found"));
        
       return marcaRepository.findById(productoExistente.getMarca().getId());
    }
    public  List<ProductoModel> getProductosDeMarca(long id){

        return  marcaRepository.getById(id).getProducto();
    }
 public MarcaModel actualizarMarca(MarcaModel marca){
        
        MarcaModel marcaExistente=marcaRepository.findById(marca.getId()).orElseThrow(()-> new IllegalStateException("id not found"));
        marcaExistente.setNombre(marca.getNombre());
        return marcaRepository.save(marcaExistente);
    }

    public List<ProductoModel> postProductoEnMarca(Long id, Long id2){

        if(id!=null&&id2!=null){
            MarcaModel marca=  marcaRepository.findById(id2).orElseThrow(()-> new IllegalStateException("id marca not found"));       
            ProductoModel producto= productoRepository.findById(id).orElseThrow(()-> new IllegalStateException("id producto not found"));
            List<ProductoModel> productos= marca.getProducto();
            productos.add(producto);
            marca.setProducto(productos);
            marcaRepository.save(marca);

            return productos;
        }else{
            return Collections.emptyList();
        }
    }

    public String deleteMarca(long id) {
        marcaRepository.deleteById(id);
        return "Marca Eliminado!! "+id;
    }

}
