package com.proyectCircle.api.controllers;

import java.util.List;

import com.proyectCircle.api.models.ProductoModel;
import com.proyectCircle.api.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductoController {

  @Autowired
  private ProductoService service;
  

  @PostMapping("/addProducto")
  public ProductoModel addProducto(@RequestBody ProductoModel producto) {
    return service.guardarProducto(producto);
  }

  @PostMapping("/addListaProductos")
  public List<ProductoModel> addProductos(@RequestBody List<ProductoModel> producto) {
    return service.guardarProductos(producto);
  }

  @GetMapping("/Productos")
  public List<ProductoModel> todosProductos() {
    return service.getProductos();
  }

  @GetMapping("/ProductoId/{id}")
  public ProductoModel productosId(@PathVariable long id) {
    return service.getProductoById(id);
  }

  @GetMapping("/ProductoNombre/{nombre}")
  public ProductoModel productosId(@PathVariable String nombre) {
    return service.getProductosByNombre(nombre);
  }

  @PutMapping("/updateProducto")
  public ProductoModel updateProducto(@RequestBody ProductoModel producto) {
    return service.actualizarProducto(producto);
  }

  @DeleteMapping("/delete/{id}")
  public String deleteProducto(@PathVariable long id) {
    return service.deleteProducto(id);
  }

  @GetMapping("/Productos/pagina/")
    public Page<ProductoModel> findProductsWithPaginationAndSorting(
            @RequestParam(value="offset", defaultValue = "0") Integer offset,
            @RequestParam(value="pageSize",defaultValue = "10") Integer pageSize,
            @RequestParam(value="field",defaultValue = "id") String field)  {
     return service.findProductsWithPaginationAndSorting(offset,pageSize,field);
  }

}
