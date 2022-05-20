package com.proyectCircle.api.controllers;

import java.util.List;

import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin() // open for all ports
public class ProductoController {

  @Autowired
  private ProductoService service;

  
  
  @CrossOrigin(origins = "http://localhost:4200")
  @PostMapping("/addProducto")
  public ProductoModel addProducto(@RequestBody ProductoModel producto) {
    return service.guardarProducto(producto);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @PostMapping("/addListaProductos")
  public List<ProductoModel> addProductos(@RequestBody List<ProductoModel> producto) {
    return service.guardarProductos(producto);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/Productos")
  public List<ProductoModel> todosProductos() {
    return service.getProductos();
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/ProductoId/{id}")
  public ProductoModel productosId(@PathVariable long id) {
    return service.getProductoById(id);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/ProductoNombre/{nombre}")
  public List<ProductoModel> productosId(@PathVariable String nombre) {
    return service.getProductosByNombre(nombre);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @PutMapping("/updateProducto")
  public ProductoModel updateProducto(@RequestBody ProductoModel producto) {
    return service.actualizarProducto(producto);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @DeleteMapping("/delete/{id}")
  public String deleteProducto(@PathVariable long id) {
    return service.deleteProducto(id);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/Productos/pagina/")
    public Page<ProductoModel> findProductsWithPaginationAndSortingVisible(
            @RequestParam(value="offset", defaultValue = "0") Integer offset,
            @RequestParam(value="pageSize",defaultValue = "10") Integer pageSize,
            @RequestParam(value="field",defaultValue = "id") String field)  {
     return service.findProductsWithPaginationAndSortingVisible(offset,pageSize,field);
  }
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/Productos/paginaAll/")
    public Page<ProductoModel> findProductsWithPaginationAndSorting(
            @RequestParam(value="offset", defaultValue = "0") Integer offset,
            @RequestParam(value="pageSize",defaultValue = "10") Integer pageSize,
            @RequestParam(value="field",defaultValue = "id") String field)  {
     return service.findProductsWithPaginationAndSorting(offset,pageSize,field);
  }

}
