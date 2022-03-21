package com.proyectCircle.api.models;


import java.util.List;
import java.util.Set;

import javax.persistence.*;




@Entity
@Table(name = "producto")
public class ProductoModel {

    public ProductoModel(){
        super();
     }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToMany(mappedBy = "producto")
    private Set<PedidoModel> pedido;

    @ManyToMany(mappedBy = "producto")
    private Set<DistribuidorModel> distribuidor;

    @ManyToMany(mappedBy = "producto")
    private Set<TagModel> tag;

    @ManyToMany(mappedBy = "producto")
    private Set<CategoriaModel> categoria;

    

    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "id_marcaProducto", foreignKey = @ForeignKey(name = "id_marcaProducto"))
    private MarcaModel marca;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_valoracionPedido", foreignKey = @ForeignKey(name = "id_valoracionPedido" ,value =ConstraintMode.CONSTRAINT))
    private List<ValoracionModel> valoracion;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_variacionPedido", foreignKey = @ForeignKey(name = "id_variacionPedido" ,value =ConstraintMode.CONSTRAINT))
    private List<VariacionModel> variacion;
    
    private String nombre;
    private String descripcion;
    private Integer precio;
    private Integer cantidad;
    private Boolean visible;

    public ProductoModel( String nombre, String descripcion, Integer precio, Integer cantidad,Boolean visible,MarcaModel marca,Set<CategoriaModel> categoria
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.visible = visible;
        this.marca = marca;
        this.categoria = categoria;
    }
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getPrecio() {
        return this.precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

    public Integer getCantidad() {
        return this.cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Boolean getVisible() {
        return this.visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

    public Long getId() {
        return this.id;
    }
    
    public MarcaModel getMarca(){
        return this.marca;
    }
    public void setMarca(MarcaModel marca){
        this.marca=marca;
    }
    public List<ValoracionModel> getValoracion(){
        return this.valoracion;
    }
    public void setValoracion(List<ValoracionModel> valoracion){
        this.valoracion=valoracion;
    }
    public List<VariacionModel> getVariacion(){
        return this.variacion;
    }
    public void setVariacion(List<VariacionModel> variacion){
        this.variacion=variacion;
    }


    // public Set<PedidoModel> getPedido() {
    //     return this.pedido;
    // }
    // public void setPedido(Set<PedidoModel> pedido) {
    //     this.pedido = pedido;
    // }
    
    public Set<DistribuidorModel> getDistribuidor() {
        return this.distribuidor;
    }
    public void setDistribuidor(Set<DistribuidorModel> distribuidor) {
        this.distribuidor = distribuidor;
    }
  
    public Set<TagModel> getTag() {
        return this.tag;
    }
    public void setTag(Set<TagModel> tag) {
        this.tag = tag;
    }
   
    public Set<CategoriaModel> getCategoria() {
        return this.categoria;
    }
    public void setCategoria(Set<CategoriaModel> categoria) {
        this.categoria = categoria;
    }

}
