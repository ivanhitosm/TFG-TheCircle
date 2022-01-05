package com.proyectCircle.api.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ConstraintMode;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="cliente")
public class ClienteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false)
    private Long id;

    @OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH },fetch = FetchType.LAZY)
    @JoinColumn(name = "uId", foreignKey = @ForeignKey(name = "uId", value =ConstraintMode.CONSTRAINT))
    private List<DireccionesModel> direcciones;
 
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

    public ClienteModel(Long id, List<DireccionesModel> direcciones, String firstName, String lastName, String email,
            String gender, String username, Integer telefoneN, Date birthdDate) {
        this.id = id;
        this.direcciones = direcciones;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.username = username;
        this.telefoneN = telefoneN;
        this.birthdDate = birthdDate;
    }

    public String getFirstName() {
        return firstName;
    }
    public Date getBirthdDate() {
        return birthdDate;
    }
    public void setBirthdDate(Date birthdDate) {
        this.birthdDate = birthdDate;
    }
    public Integer getTelefoneN() {
        return telefoneN;
    }
    public void setTelefoneN(Integer telefoneN) {
        this.telefoneN = telefoneN;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    
}
