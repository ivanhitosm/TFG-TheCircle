package com.proyectCircle.api.controllers;


import java.util.List;
import java.util.Optional;


import com.proyectCircle.api.models.MarcaModel;
import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.services.MarcaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MarcaController {

    @Autowired
    MarcaService marcaService;
   
    
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addMarca")
    public MarcaModel addMarca(@RequestBody MarcaModel marca) {
      return marcaService.guardarMarca(marca);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addListaMarcas")
    public List<MarcaModel> addMarcas(@RequestBody List<MarcaModel> marca) {
      return marcaService.guardarMarcas(marca);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/Marcas")
    public List<MarcaModel> todosMarcas() {
      return marcaService.getMarcas();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/MarcaId/{id}")
    public MarcaModel marcasId(@PathVariable long id) {
      return marcaService.getMarcaById(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/MarcaNombre/{nombre}")
    public List<MarcaModel> marcaNombre(@PathVariable String nombre) {
      return marcaService.getMarcasByNombre(nombre);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/MarcaDeProducto/{id}")
        public Optional<MarcaModel> marcasdeProducto(@PathVariable long id){
            return marcaService.getMarcaDeProducto(id);
        }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/ProductosDeMarca/{id}")
        public List<ProductoModel> productosDeMarca(@PathVariable long id){
            return marcaService.getProductosDeMarca(id);
        }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addProducto/{id}/Marca/{id2}")
    public  List<ProductoModel> guardarProductosEnMarcas(@PathVariable("id") Long id,@PathVariable("id2") Long id2){
        return marcaService.postProductoEnMarca(id,id2);
    }

}
