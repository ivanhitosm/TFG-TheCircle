package com.proyectCircle.api.models;

import java.sql.Date;
import java.util.List;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="cliente")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteModel {
   


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_direccionCliente", foreignKey = @ForeignKey(name = "id_direccionCliente", value =ConstraintMode.CONSTRAINT))
    private List<DireccionModel> direcciones;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_pedidoCliente", foreignKey = @ForeignKey(name = "id_pedidoCliente" ,value =ConstraintMode.CONSTRAINT))
    private List<PedidoModel> pedido;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "id_valoracionCliente", foreignKey = @ForeignKey(name = "id_valoracionCliente" ,value =ConstraintMode.CONSTRAINT))
    private List<ValoracionModel> valoracion;
  
  
    

    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "gender")
    private String gender;
    @Column(name = "username")
    private String username;
    @Column(name = "telefoneN")
    private Integer telefoneN;
    @Column(name = "birthdDate")
    private Date birthdDate;



    
}
