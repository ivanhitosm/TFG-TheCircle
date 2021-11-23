# Spring Boot [Rest API] - SQL Database using Docker

CRUD Operations using Spring Boot and MYSQL Database using docker-compose.

Docker is required to be install on the machine.

## Installation
1) Clone the Repo & run the following commands.

```bash
docker-compose up
```

## Output

Open in Browser

Access all the endpoints using Swagger UI.

```
http://localhost:8084/swagger-ui.html
```
Access phpMyAdmin.

```
http://localhost:8082/
```
## Configuration

### application.properties

```c
spring.jpa.show-sql = true
server.port=8084
spring.application.name=property-service

# MYSQL Config
spring.jpa.hibernate.ddl-auto=create-drop
spring.datasource.url=jdbc:mysql://mysql-db:3306/property?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=spring
spring.datasource.driver-class-name =com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.naming.implicit-strategy=org.hibernate.boot.model.naming.ImplicitNamingStrategyLegacyJpaImpl
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
spring.datasource.initialization-mode=never
```
