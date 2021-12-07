FROM maven:3.8.4-jdk-11

WORKDIR /api
COPY . .
RUN mvnw.cmd clean install

CMD mvnw.cmd spring-boot:run