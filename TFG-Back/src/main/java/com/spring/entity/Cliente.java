package com.spring.entity;


import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;


@Entity
@Setter
@Getter
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String address;
    @Column
    private String city;
    @Column
    private String State;
    @Column
    private Integer zip;
    @Column
    private Float area;
    @Column
    private String type;
    @Column
    private String email;
    @Column
    private String status;
    @Column
    private String username;

    
    public Integer getId() {
        return id;
    }

    public String getfirstName() {
        return firstName;
    }
   
}

